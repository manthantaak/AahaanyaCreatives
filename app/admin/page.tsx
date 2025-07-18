"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  TrendingUp,
  AlertTriangle,
  Eye,
  ArrowUpRight,
  Clock,
  CheckCircle,
  BarChart3,
} from "lucide-react"

const dashboardStats = {
  totalSales: 8542300, // ₹85,42,300
  totalOrders: 1247,
  totalUsers: 3456,
  totalProducts: 89,
  monthlySales: 1598400, // ₹15,98,400
  monthlyOrders: 234,
  lowStockItems: 5,
  pendingOrders: 12,
}

const recentOrders = [
  { id: "#ORD-001", customer: "Priya Sharma", amount: 24990, status: "pending", date: "2024-01-15", items: 2 },
  { id: "#ORD-002", customer: "Rahul Gupta", amount: 8990, status: "shipped", date: "2024-01-15", items: 1 },
  { id: "#ORD-003", customer: "Anita Singh", amount: 12990, status: "delivered", date: "2024-01-14", items: 1 },
  { id: "#ORD-004", customer: "Vikram Patel", amount: 18990, status: "processing", date: "2024-01-14", items: 3 },
  { id: "#ORD-005", customer: "Meera Joshi", amount: 32990, status: "shipped", date: "2024-01-13", items: 2 },
]

const topProducts = [
  { name: "Diamond Solitaire Ring", sales: 45, revenue: 1124550 },
  { name: "Pearl Drop Earrings", sales: 32, revenue: 287680 },
  { name: "Gold Chain Necklace", sales: 28, revenue: 363720 },
  { name: "Tennis Bracelet", sales: 18, revenue: 341820 },
]

export default function AdminDashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "shipped":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-3 w-3" />
      case "processing":
        return <Package className="h-3 w-3" />
      case "shipped":
        return <TrendingUp className="h-3 w-3" />
      case "delivered":
        return <CheckCircle className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{formatIndianCurrency(dashboardStats.totalSales)}</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+12.5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
            <div className="p-2 bg-blue-100 rounded-lg">
              <ShoppingBag className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{dashboardStats.totalOrders}</div>
            <div className="flex items-center text-sm text-blue-600 mt-1">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+{dashboardStats.monthlyOrders} this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Customers</CardTitle>
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-4 w-4 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{dashboardStats.totalUsers}</div>
            <div className="flex items-center text-sm text-purple-600 mt-1">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+8.2% growth</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Products</CardTitle>
            <div className="p-2 bg-orange-100 rounded-lg">
              <Package className="h-4 w-4 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{dashboardStats.totalProducts}</div>
            <div className="flex items-center text-sm text-orange-600 mt-1">
              <span>{dashboardStats.lowStockItems} low stock items</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      {(dashboardStats.lowStockItems > 0 || dashboardStats.pendingOrders > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboardStats.lowStockItems > 0 && (
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-800">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Low Stock Alert
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 mb-3">
                  {dashboardStats.lowStockItems} products are running low on stock and need restocking.
                </p>
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  View Products
                </Button>
              </CardContent>
            </Card>
          )}

          {dashboardStats.pendingOrders > 0 && (
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Clock className="h-5 w-5 mr-2" />
                  Pending Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-3">
                  {dashboardStats.pendingOrders} orders are pending and require your attention.
                </p>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Orders
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Orders</CardTitle>
            <Button variant="outline" size="sm" className="border-pink-200 hover:bg-pink-50 bg-transparent">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border border-pink-100 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <Badge className={`${getStatusColor(order.status)} flex items-center gap-1`}>
                        {getStatusIcon(order.status)}
                        <span className="capitalize">{order.status}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm text-gray-500">
                        {order.items} items • {order.date}
                      </p>
                      <p className="font-semibold text-gray-900">{formatIndianCurrency(order.amount)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Top Selling Products</CardTitle>
            <Button variant="outline" size="sm" className="border-pink-200 hover:bg-pink-50 bg-transparent">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Report
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between p-4 border border-pink-100 rounded-lg bg-white/50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-pink-600">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.sales} units sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{formatIndianCurrency(product.revenue)}</p>
                    <p className="text-sm text-green-600">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-pink-100 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white h-12">
              Add Product
            </Button>
            <Button variant="outline" className="border-pink-200 hover:bg-pink-50 h-12 bg-transparent">
              Process Orders
            </Button>
            <Button variant="outline" className="border-pink-200 hover:bg-pink-50 h-12 bg-transparent">
              View Analytics
            </Button>
            <Button variant="outline" className="border-pink-200 hover:bg-pink-50 h-12 bg-transparent">
              Manage Inventory
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
