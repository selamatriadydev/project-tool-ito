'use client'
 
import Link from 'next/link'
import { useState } from 'react'
 
export default function HoverPrefetchLink({ href,className, children }) {
  const [active, setActive] = useState(false)
 
  return (
    <Link className={`${className}`}
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    >
      {children}
    </Link>
  )
}