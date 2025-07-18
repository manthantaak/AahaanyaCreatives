"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingCart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import Image from "next/image"
import { Suspense } from "react"

// 3D Ring Model Component
function RingModel() {
  return (
    <group>
      <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.3, 16, 100]} />
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.1} />
      </mesh>
    </group>
  )
}

const product = {
  id: 1,
  name: "Diamond Solitaire Ring",
  price: 2499,
  originalPrice: 2999,
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  rating: 4.9,
  reviews: 124,
  description:
    "A timeless classic featuring a brilliant cut diamond set in 18k white gold. This elegant solitaire ring showcases the natural beauty of the diamond with a simple yet sophisticated design.",
  features: [
    "1.5 carat brilliant cut diamond",
    "18k white gold band",
    "Certified conflict-free diamond",
    "Lifetime warranty included",
    "Free resizing within 30 days",
  ],
  specifications: {
    Metal: "18k White Gold",
    Stone: "Diamond",
    "Carat Weight": "1.5ct",
    Cut: "Brilliant",
    Clarity: "VS1",
    Color: "F",
  },
  inStock: true,
  category: "rings",
  isNew: true,
}

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("7")
  const [view3D, setView3D] = useState(false)

  const sizes = ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images & 3D View */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {view3D ? (
                <div className="w-full h-full">
                  <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={null}>
                      <RingModel />
                      <Environment preset="studio" />
                    </Suspense>
                    <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1} />
                  </Canvas>
                </div>
              ) : (
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              )}

              {/* View Toggle */}
              <div className="absolute top-4 right-4">
                <Button
                  onClick={() => setView3D(!view3D)}
                  variant="secondary"
                  size="sm"
                  className="bg-white/90 hover:bg-white"
                >
                  {view3D ? "Photo View" : "3D View"}
                </Button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImage(index)
                    setView3D(false)
                  }}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index && !view3D ? "border-yellow-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              {product.isNew && <Badge className="mb-2 bg-yellow-500 text-black">New Arrival</Badge>}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">Save ${product.originalPrice - product.price}</Badge>
                )}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Ring Size</label>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 text-sm border rounded-md transition-colors ${
                      selectedSize === size
                        ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Quantity</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-3">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ${product.price * quantity}
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="flex items-center justify-center bg-transparent">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" className="flex items-center justify-center bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Product Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Truck className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-600">On orders over $500</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Lifetime Warranty</p>
                <p className="text-xs text-gray-600">Craftsmanship guarantee</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm font-medium">30-Day Returns</p>
                <p className="text-xs text-gray-600">Hassle-free returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  <p className="text-gray-600 leading-relaxed">
                    Each piece is carefully crafted by our master jewelers using traditional techniques combined with
                    modern precision. This ring represents the perfect balance of classic elegance and contemporary
                    style, making it an ideal choice for engagements, anniversaries, or as a special gift.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-900">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  <div className="space-y-6">
                    {/* Sample Reviews */}
                    <div className="border-b border-gray-100 pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400 mr-2">★★★★★</div>
                        <span className="font-medium">Sarah M.</span>
                        <span className="text-gray-500 ml-2">• 2 weeks ago</span>
                      </div>
                      <p className="text-gray-600">
                        Absolutely stunning ring! The quality is exceptional and it looks even better in person. The 3D
                        view on the website really helped me make the decision.
                      </p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400 mr-2">★★★★★</div>
                        <span className="font-medium">Michael R.</span>
                        <span className="text-gray-500 ml-2">• 1 month ago</span>
                      </div>
                      <p className="text-gray-600">
                        Perfect engagement ring! My fiancée loves it and the customer service was outstanding. Fast
                        shipping and beautiful packaging.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
