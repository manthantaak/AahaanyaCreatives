import { Suspense } from "react"
import HeroSection from "@/components/HeroSection"
import FeaturedProducts from "@/components/FeaturedProducts"
import CategorySection from "@/components/CategorySection"
import NewsletterSection from "@/components/NewsletterSection"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <CategorySection />
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <FeaturedProducts />
      </Suspense>
      <NewsletterSection />
    </main>
  )
}
