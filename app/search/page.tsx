"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const allProducts = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 2499,
    image: "/placeholder.svg?height=300&width=300",
    category: "rings",
    tags: ["diamond", "engagement", "solitaire", "white gold"],
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    price: 899,
    image: "/placeholder.svg?height=300&width=300",
    category: "earrings",
    tags: ["pearl", "drop", "elegant", "formal"],
  },
  {
    id: 3,
    name: "Gold Chain Necklace",
    price: 1299,
    image: "/placeholder.svg?height=300&width=300",
    category: "necklaces",
    tags: ["gold", "chain", "classic", "everyday"],
  },
  {
    id: 4,
    name: "Tennis Bracelet",
    price: 1899,
    image: "/placeholder.svg?height=300&width=300",
    category: "bracelets",
    tags: ["diamond", "tennis", "bracelet", "luxury"],
  },
  {
    id: 5,
    name: "Emerald Engagement Ring",
    price: 3299,
    image: "/placeholder.svg?height=300&width=300",
    category: "rings",
    tags: ["emerald", "engagement", "vintage", "unique"],
  },
]

const popularSearches = [
  "engagement rings",
  "diamond earrings",
  "gold necklace",
  "wedding bands",
  "pearl jewelry",
  "vintage rings",
  "tennis bracelet",
  "custom design",
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState(allProducts)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(allProducts)
      return
    }

    setIsSearching(true)
    const timer = setTimeout(() => {
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      setSearchResults(filtered)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  const handlePopularSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Search Jewelry</h1>
          <p className="text-lg text-gray-600 mb-6">Find the perfect piece for any occasion</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for rings, necklaces, earrings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
              {isSearching && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-600"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        {searchQuery === "" && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handlePopularSearch(search)}
                  className="hover:bg-yellow-50 hover:border-yellow-300"
                >
                  {search}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
              <span className="text-gray-500 font-normal ml-2">({searchResults.length} items)</span>
            </h2>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="absolute top-4 right-4 z-10">
                      <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <div className="p-4">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-yellow-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-gray-900">${product.price}</span>
                      <Badge className="bg-yellow-100 text-yellow-800 capitalize">{product.category}</Badge>
                    </div>
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any products matching "{searchQuery}". Try different keywords or browse our categories.
            </p>
            <div className="space-x-4">
              <Button onClick={() => setSearchQuery("")} variant="outline">
                Clear Search
              </Button>
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-black">
                <Link href="/products">Browse All Products</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
