"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <Mail className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Be the first to know about new collections, exclusive offers, and jewelry care tips
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white text-black"
            />
            <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold">
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="text-green-400 text-lg">✓ Thank you for subscribing!</div>
        )}
      </div>
    </section>
  )
}
