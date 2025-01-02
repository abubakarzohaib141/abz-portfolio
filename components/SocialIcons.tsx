import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import {LinkedinIcon, GithubIcon, FacebookIcon} from "lucide-react"
const SocialIcons = () => {
  return (
    <div>
                <div>
                    <Link href={"https://www.github.com/abubakarzohaib141"} target='_blank'>
                   <Button variant={"outline"} className='rounded-full  bg-black text-white'>
                    <GithubIcon />
                   </Button>
                   </Link>
                  
                   <Link href={"https://www.linkedin.com/in/abubakar-software-wala"} target='_blank'>
                   <Button variant={"outline"} className='rounded-full  bg-blue-400 text-white'>
                    <LinkedinIcon />
                   </Button>
                   </Link>
                  
                   <Link href={"https://www.facebook.com/profile.php?id=100095211904951"} target='_blank'>
                   <Button variant={"outline"} className='rounded-full ml-4 bg-blue-500 text-white'>
                    <FacebookIcon />
                   </Button>
                   </Link>
                </div>
    </div>
  )
}

export default SocialIcons