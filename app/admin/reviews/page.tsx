"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Trash2, Flag, User } from "lucide-react"

const reviewsData = [
  {
    id: 1,
    productId: 1,
    productName: "Diamond Solitaire Ring",
    userId: 1,
    userName: "Sarah Johnson",
    rating: 5,
    title: "Absolutely stunning!",
    comment: "This ring exceeded my expectations. The quality is exceptional and it looks even better in person.",
    date: "2024-01-15",
    status: "approved",
    helpful: 12,
    reported: false,
  },
  {
    id: 2,
    productId: 2,
    productName: "Pearl Drop Earrings",
    userId: 2,
    userName: "Michael Brown",
    rating: 4,
    title: "Beautiful earrings",
    comment: "Love these earrings! They're elegant and well-made. Only minor issue is they're a bit heavy.",
    date: "2024-01-12",
    status: "approved",
    helpful: 8,
    reported: false,
  },
  {
    id: 3,
    productId: 1,
    productName: "Diamond Solitaire Ring",
    userId: 3,
    userName: "Anonymous User",
    rating: 1,
    title: "Disappointing quality",
    comment: "The ring looked nothing like the photos. Very disappointed with the purchase.",
    date: "2024-01-10",
    status: "pending",
    helpful: 2,
    reported: true,
  },
]

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState(reviewsData)
  const [statusFilter, setStatusFilter] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")

  const updateReviewStatus = (reviewId: number, newStatus: string) => {
    setReviews(reviews.map((review) => (review.id === reviewId ? { ...review, status: newStatus } : review)))
  }

  const deleteReview = (reviewId: number) => {
    setReviews(reviews.filter((review) => review.id !== reviewId))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={`h-4 w-4 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  const filteredReviews = reviews.filter((review) => {
    const statusMatch = statusFilter === "all" || review.status === statusFilter
    const ratingMatch = ratingFilter === "all" || review.rating.toString() === ratingFilter
    return statusMatch && ratingMatch
  })

  const averageRating =
    reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0

  const pendingReviews = reviews.filter((review) => review.status === "pending").length
  const reportedReviews = reviews.filter((review) => review.reported).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Review Management</h1>
        <p className="text-gray-600">Moderate and manage customer reviews</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-gray-900">{reviews.length}</div>
            <p className="text-sm text-gray-600">Total Reviews</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-yellow-600">{averageRating.toFixed(1)}</div>
            <p className="text-sm text-gray-600">Average Rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-orange-600">{pendingReviews}</div>
            <p className="text-sm text-gray-600">Pending Reviews</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">{reportedReviews}</div>
            <p className="text-sm text-gray-600">Reported Reviews</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-600 flex items-center">
              Showing {filteredReviews.length} of {reviews.length} reviews
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <Card key={review.id} className={review.reported ? "border-red-200 bg-red-50" : ""}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{review.userName}</h4>
                      {review.reported && (
                        <Badge className="bg-red-100 text-red-800">
                          <Flag className="h-3 w-3 mr-1" />
                          Reported
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Product: <span className="font-medium">{review.productName}</span>
                    </p>
                  </div>
                </div>
                <Badge className={getStatusColor(review.status)}>{review.status}</Badge>
              </div>

              <div className="mb-4">
                <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
                <p className="text-gray-700">{review.comment}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{review.helpful} people found this helpful</span>
                </div>
                <div className="flex space-x-2">
                  {review.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => updateReviewStatus(review.id, "approved")}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700 bg-transparent"
                        onClick={() => updateReviewStatus(review.id, "rejected")}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                  {review.status === "approved" && (
                    <Button size="sm" variant="outline" onClick={() => updateReviewStatus(review.id, "pending")}>
                      Mark as Pending
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700 bg-transparent"
                    onClick={() => deleteReview(review.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Reviews Found</h3>
            <p className="text-gray-600">No reviews match your current filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
