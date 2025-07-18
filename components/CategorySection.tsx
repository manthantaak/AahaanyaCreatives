import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    id: 1,
    name: "Rings",
    image: "/placeholder.svg?height=300&width=300",
    count: 45,
    href: "/products?category=rings",
  },
  {
    id: 2,
    name: "Necklaces",
    image: "/placeholder.svg?height=300&width=300",
    count: 32,
    href: "/products?category=necklaces",
  },
  {
    id: 3,
    name: "Earrings",
    image: "/placeholder.svg?height=300&width=300",
    count: 28,
    href: "/products?category=earrings",
  },
  {
    id: 4,
    name: "Bracelets",
    image: "/placeholder.svg?height=300&width=300",
    count: 19,
    href: "/products?category=bracelets",
  },
]

export default function CategorySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-pink-50 to-white">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="heading-responsive font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Shop by Category
          </h2>
          <p className="text-responsive text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of fine jewelry, each piece crafted with precision and passion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-pink-100 hover:border-pink-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={300}
                      height={300}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent group-hover:from-pink-900/30 transition-colors" />
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{category.count} items</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
