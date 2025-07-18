"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: 1,
    name: "Female Collection",
    description: "Elegant jewelry designed for women",
    image: "/placeholder.svg?height=300&width=400",
    href: "/collections/female",
    itemCount: 45,
  },
  {
    id: 2,
    name: "Male Collection",
    description: "Sophisticated jewelry for men",
    image: "/placeholder.svg?height=300&width=400",
    href: "/collections/male",
    itemCount: 28,
  },
  {
    id: 3,
    name: "Rings",
    description: "Beautiful rings for every occasion",
    image: "/placeholder.svg?height=300&width=400",
    href: "/categories/rings",
    itemCount: 32,
  },
  {
    id: 4,
    name: "Necklaces",
    description: "Stunning necklaces and pendants",
    image: "/placeholder.svg?height=300&width=400",
    href: "/categories/necklaces",
    itemCount: 28,
  },
  {
    id: 5,
    name: "Earrings",
    description: "Elegant earrings for all styles",
    image: "/placeholder.svg?height=300&width=400",
    href: "/categories/earrings",
    itemCount: 24,
  },
  {
    id: 6,
    name: "Bracelets",
    description: "Beautiful bracelets and bangles",
    image: "/placeholder.svg?height=300&width=400",
    href: "/categories/bracelets",
    itemCount: 18,
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Our Collections
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated jewelry collections, each piece crafted with precision and passion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-lg transition-all duration-300 border-pink-100 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                      {category.itemCount} items
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link href={category.href}>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                      Explore Collection
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
