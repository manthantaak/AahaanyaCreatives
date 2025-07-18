"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Trash2, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const initialWishlistItems = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 2499,
    originalPrice: 2999,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    addedDate: "2024-01-10",
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    price: 899,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    addedDate: "2024-01-08",
  },
  {
    id: 3,
    name: "Emerald Engagement Ring",
    price: 3299,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    addedDate: "2024-01-05",
  },
]

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems)

  const removeFromWishlist = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  const moveToCart = (id: number) => {
    // In a real app, this would add to cart and optionally remove from wishlist
    console.log(`Moving item ${id} to cart`)
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Save items you love to your wishlist</p>
          <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-black">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
          <p className="text-gray-600">
            {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} saved for later
          </p>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/80 hover:bg-white text-red-600"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Link href={`/products/${item.id}`}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <Link href={`/products/${item.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-yellow-600 transition-colors">
                      {item.name}
                    </h3>
                  </Link>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xl font-bold text-gray-900">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 mb-4">Added on {new Date(item.addedDate).toLocaleDateString()}</p>

                  <div className="space-y-2">
                    <Button
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
                      disabled={!item.inStock}
                      onClick={() => moveToCart(item.id)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Heart className="h-4 w-4 mr-2 fill-current text-red-500" />
                      Remove from Wishlist
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Wishlist Actions */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Share Your Wishlist</h2>
            <p className="text-gray-600 mb-4">Let others know what you're hoping for by sharing your wishlist</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share Wishlist
              </Button>
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700 text-black">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
