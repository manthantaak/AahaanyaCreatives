"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Heart, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AddToCartButton from "@/components/AddToCartButton"

const femaleProducts = [
  {
    id: 1,
    name: "Rose Gold Diamond Earrings",
    price: 1299,
    originalPrice: 1599,
    image: "/placeholder.svg?height=400&width=400",
    category: "earrings",
    rating: 4.9,
    reviews: 124,
    isNew: true,
  },
  {
    id: 2,
    name: "Pearl Necklace Set",
    price: 899,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    category: "necklaces",
    rating: 4.8,
    reviews: 89,
    isNew: false,
  },
  {
    id: 3,
    name: "Delicate Gold Bracelet",
    price: 699,
    originalPrice: 899,
    image: "/placeholder.svg?height=400&width=400",
    category: "bracelets",
    rating: 4.7,
    reviews: 156,
    isNew: false,
  },
  {
    id: 4,
    name: "Floral Design Ring",
    price: 1899,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    category: "rings",
    rating: 4.9,
    reviews: 203,
    isNew: true,
  },
  {
    id: 5,
    name: "Butterfly Pendant",
    price: 549,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    category: "necklaces",
    rating: 4.6,
    reviews: 87,
    isNew: true,
  },
  {
    id: 6,
    name: "Elegant Anklet",
    price: 399,
    originalPrice: 499,
    image: "/placeholder.svg?height=400&width=400",
    category: "anklets",
    rating: 4.5,
    reviews: 234,
    isNew: false,
  },
]

export default function FemaleCollectionPage() {
  const [filteredProducts, setFilteredProducts] = useState(femaleProducts)
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["all", "rings", "necklaces", "earrings", "bracelets", "anklets"]

  const handleFilter = () => {
    let filtered = femaleProducts

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
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
          <h1 className="heading-responsive font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Female Collection
          </h1>
          <p className="text-responsive text-gray-600">Elegant and beautiful jewelry designed for women</p>
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
                  placeholder="Search products..."
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
                        {category.charAt(0).toUpperCase() + category.slice(1)}
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
                <Slider value={priceRange} onValueChange={setPriceRange} max={2000} step={50} className="mt-2" />
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
                Showing {filteredProducts.length} of {femaleProducts.length} products
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
