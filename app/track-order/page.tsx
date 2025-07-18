"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Package, Truck, CheckCircle, MapPin, Clock } from "lucide-react"

const orderStatuses = [
  {
    status: "Order Placed",
    date: "2024-01-15 10:30 AM",
    description: "Your order has been received and is being processed",
    completed: true,
    icon: Package,
  },
  {
    status: "Processing",
    date: "2024-01-15 2:15 PM",
    description: "Your order is being prepared for shipment",
    completed: true,
    icon: Package,
  },
  {
    status: "Shipped",
    date: "2024-01-16 9:00 AM",
    description: "Your order has been shipped and is on its way",
    completed: true,
    icon: Truck,
  },
  {
    status: "Out for Delivery",
    date: "2024-01-18 8:30 AM",
    description: "Your order is out for delivery",
    completed: false,
    icon: Truck,
  },
  {
    status: "Delivered",
    date: "Expected by 2024-01-18 6:00 PM",
    description: "Your order will be delivered",
    completed: false,
    icon: CheckCircle,
  },
]

const sampleOrder = {
  id: "ORD-001",
  trackingNumber: "TRK123456789",
  estimatedDelivery: "2024-01-18",
  shippingAddress: "123 Main Street, New York, NY 10001",
  items: [
    {
      name: "Diamond Solitaire Ring",
      quantity: 1,
      price: 2499,
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  total: 2499,
  carrier: "FedEx",
}

export default function TrackOrderPage() {
  const [trackingInput, setTrackingInput] = useState("")
  const [orderData, setOrderData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrackOrder = async () => {
    if (!trackingInput.trim()) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demo, show sample order data
    setOrderData(sampleOrder)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-lg text-gray-600">Enter your order ID or tracking number to see the latest updates</p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter Order ID (e.g., ORD-001) or Tracking Number"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button
                onClick={handleTrackOrder}
                disabled={isLoading || !trackingInput.trim()}
                className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-8"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                    Tracking...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Track Order
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Order Details */}
        {orderData && (
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Order Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Order ID:</span>
                        <span className="font-medium">{orderData.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tracking Number:</span>
                        <span className="font-medium">{orderData.trackingNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Carrier:</span>
                        <span className="font-medium">{orderData.carrier}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Estimated Delivery:</span>
                        <span className="font-medium">
                          {new Date(orderData.estimatedDelivery).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Shipping Address</h3>
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                      <p className="text-sm text-gray-600">{orderData.shippingAddress}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item: any, index: number) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">${item.price}</p>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span>${orderData.total}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Order Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {orderStatuses.map((status, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          status.completed
                            ? "bg-green-100 text-green-600"
                            : index === orderStatuses.findIndex((s) => !s.completed)
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <status.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-sm font-medium ${status.completed ? "text-gray-900" : "text-gray-500"}`}>
                            {status.status}
                          </h3>
                          <Badge
                            className={
                              status.completed
                                ? "bg-green-100 text-green-800"
                                : index === orderStatuses.findIndex((s) => !s.completed)
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-500"
                            }
                          >
                            {status.completed ? "Completed" : "Pending"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{status.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{status.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Help Section */}
        <Card className="mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about your order or need assistance, we're here to help.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline">Contact Support</Button>
              <Button variant="outline">View FAQ</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
