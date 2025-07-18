import { NextResponse } from "next/server"

// Mock product data - In a real app, this would come from MongoDB
const products = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: 2499,
    originalPrice: 2999,
    image: "/placeholder.svg?height=400&width=400",
    category: "rings",
    rating: 4.9,
    reviews: 124,
    isNew: true,
    description: "A timeless classic featuring a brilliant cut diamond set in 18k white gold.",
    inStock: true,
    stock: 12,
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    price: 899,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    category: "earrings",
    rating: 4.8,
    reviews: 89,
    isNew: false,
    description: "Elegant pearl drop earrings perfect for any occasion.",
    inStock: true,
    stock: 8,
  },
  {
    id: 3,
    name: "Gold Chain Necklace",
    price: 1299,
    originalPrice: 1599,
    image: "/placeholder.svg?height=400&width=400",
    category: "necklaces",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    description: "18k gold chain necklace with delicate craftsmanship.",
    inStock: true,
    stock: 15,
  },
  {
    id: 4,
    name: "Tennis Bracelet",
    price: 1899,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    category: "bracelets",
    rating: 4.9,
    reviews: 203,
    isNew: true,
    description: "Stunning tennis bracelet with brilliant diamonds.",
    inStock: true,
    stock: 6,
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, price, category, description } = body
    if (!name || !price || !category || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, save to MongoDB
    const newProduct = {
      id: products.length + 1,
      ...body,
      rating: 0,
      reviews: 0,
      isNew: true,
      inStock: true,
    }

    products.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
