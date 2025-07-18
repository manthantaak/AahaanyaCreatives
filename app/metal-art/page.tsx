"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Heart, Filter, Palette } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AddToCartButton from "@/components/AddToCartButton"

const metalArtProducts = [
  {
    id: 13,
    name: "Abstract Metal Wall Art",
    price: 3499,
    originalPrice: 3999,
    image: "/placeholder.svg?height=400&width=400",
    category: "wall-art",
    rating: 4.9,
    reviews: 124,
    isNew: true,
    material: "Steel",
  },
  {
    id: 14,
    name: "Copper Tree Sculpture",
    price: 2299,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    category: "sculptures",
    rating: 4.8,
    reviews: 89,
    isNew: false,
    material: "Copper",
  },
  {
    id: 15,
    name: "Brass Decorative Bowl",
    price: 1299,
    originalPrice: 1599,
    image: "/placeholder.svg?height=400&width=400",
    category: "home-decor",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    material: "Brass",
  },
  {
    id: 16,
    name: "Iron Garden Sculpture",
    price: 4999,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    category: "garden-art",
    rating: 4.9,
    reviews: 203,
    isNew: true,
    material: "Iron",
  },
  {
    id: 17,
    name: "Aluminum Modern Art Piece",
    price: 1899,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    category: "modern-art",
    rating: 4.6,
    reviews: 87,
    isNew: true,
    material: "Aluminum",
  },
  {
    id: 18,
    name: "Bronze Figurine",
    price: 2799,
    originalPrice: 3199,
    image: "/placeholder.svg?height=400&width=400",
    category: "figurines",
    rating: 4.5,
    reviews: 234,
    isNew: false,
    material: "Bronze",
  },
]

export default function MetalArtPage() {
  const [filteredProducts, setFilteredProducts] = useState(metalArtProducts)
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedMaterial, setSelectedMaterial] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["all", "wall-art", "sculptures", "home-decor", "garden-art", "modern-art", "figurines"]
  const materials = ["all", "Steel", "Copper", "Brass", "Iron", "Aluminum", "Bronze"]

  const handleFilter = () => {
    let filtered = metalArtProducts

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    if (selectedMaterial !== "all") {
      filtered = filtered.filter((product) => product.material === selectedMaterial)
    }

    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    if (searchQuery) {
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
    }

    setFilteredProducts(filtered)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="container-responsive py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Palette className="h-8 w-8 text-pink-600 mr-3" />
            <h1 className="heading-responsive font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Metal Art Collection
            </h1>
          </div>
          <p className="text-responsive text-gray-600">Handcrafted metal art pieces that transform spaces</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6 border-pink-100 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 mr-2 text-pink-600" />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Search</label>
                <Input
                  placeholder="Search art pieces..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-pink-200 focus:border-pink-500"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-pink-200 focus:border-pink-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Material Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Material</label>
                <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                  <SelectTrigger className="border-pink-200 focus:border-pink-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map((material) => (
                      <SelectItem key={material} value={material}>
                        {material.charAt(0).toUpperCase() + material.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                </label>
                <Slider value={priceRange} onValueChange={setPriceRange} max={5000} step={100} className="mt-2" />
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="border-pink-200 focus:border-pink-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleFilter}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
              >
                Apply Filters
              </Button>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {metalArtProducts.length} art pieces
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 border-pink-100 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      {product.isNew && (
                        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          NEW
                        </div>
                      )}
                      <div className="absolute top-4 right-4 z-10">
                        <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </Link>
                    </div>
                    <div className="p-4">
                      <Link href={`/products/${product.id}`}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-pink-600 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 mb-2">Material: {product.material}</p>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <AddToCartButton product={product} className="w-full" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
