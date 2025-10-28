'use client'
 
import { useLinkStatus } from 'next/link'
 
export default function LinkLoadingIndicator() {
  const { pending } = useLinkStatus()
  return (
    <span aria-hidden className={`link-hint ${pending ? 'is-pending' : ''}`} />
  )
}