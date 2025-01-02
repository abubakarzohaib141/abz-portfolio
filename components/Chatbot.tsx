"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, newMessage],
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      <Button
        onClick={toggleChat}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-700 hover:bg-blue-800"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        ) : (
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-0 right-0 w-full sm:w-96 h-[calc(100vh-4rem)] sm:h-[500px] bg-white rounded-t-lg sm:rounded-lg shadow-xl border border-gray-200 overflow-hidden"
          style={{
            maxHeight: "90vh", // Prevent full-screen overflow on mobile
          }}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-3 sm:p-4 bg-blue-700 text-white font-bold flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm sm:text-base">Chat with Assistant</span>
              </div>
              <Button
                onClick={toggleChat}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-blue-600"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm sm:text-base ${
                      message.role === "user"
                        ? "bg-blue-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-100">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 sm:p-4 border-t border-gray-200 bg-white"
            >
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 text-sm sm:text-base"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-700 hover:bg-blue-800 px-3 sm:px-4"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotButton;
