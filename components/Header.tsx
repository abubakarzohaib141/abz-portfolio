'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300">
              Abu Bakar
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/">About</NavLink>
              <NavLink href="/">Skills</NavLink>
              <NavLink href="/">Projects</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="default" className="bg-blue-700 hover:bg-blue-800 text-white transition-colors duration-300">
              Hire Me
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/skills" onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
            <div className="pt-4">
              <Button variant="default" className="w-full bg-blue-700 hover:bg-blue-800 text-white transition-colors duration-300">
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-gray-800 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
  >
    {children}
  </Link>
)

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link 
    href={href} 
    onClick={onClick}
    className="text-gray-800 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
  >
    {children}
  </Link>
)

export default Header

