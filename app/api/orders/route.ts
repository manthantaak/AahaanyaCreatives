import { NextResponse } from "next/server"

// Mock orders data
const orders = [
  {
    id: "ORD-001",
    userId: 2,
    customerName: "Sarah Johnson",
    customerEmail: "sarah@example.com",
    items: [
      {
        productId: 1,
        name: "Diamond Solitaire Ring",
        price: 2499,
        quantity: 1,
        size: "7",
      },
    ],
    subtotal: 2499,
    tax: 199.92,
    shipping: 0,
    total: 2698.92,
    status: "pending",
    paymentStatus: "paid",
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
    },
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
]

export async function GET() {
  try {
    return NextResponse.json(orders)
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const newOrder = {
      id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
      ...body,
      status: "pending",
      paymentStatus: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    orders.push(newOrder)

    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
