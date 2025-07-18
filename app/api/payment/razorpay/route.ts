import { NextResponse } from "next/server"

// Mock Razorpay integration
export async function POST(request: Request) {
  try {
    const { amount, currency = "USD" } = await request.json()

    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 })
    }

    // In a real app, you would integrate with Razorpay API
    const mockOrder = {
      id: `order_${Date.now()}`,
      amount: amount * 100, // Razorpay expects amount in smallest currency unit
      currency,
      status: "created",
      created_at: Math.floor(Date.now() / 1000),
    }

    return NextResponse.json({
      orderId: mockOrder.id,
      amount: mockOrder.amount,
      currency: mockOrder.currency,
      key: process.env.RAZORPAY_KEY_ID || "rzp_test_key",
    })
  } catch (error) {
    console.error("Payment creation error:", error)
    return NextResponse.json({ error: "Failed to create payment order" }, { status: 500 })
  }
}
