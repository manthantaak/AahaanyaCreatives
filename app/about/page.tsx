import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Heart, Shield, Users } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Heart,
    title: "Passion for Craftsmanship",
    description: "Every piece is handcrafted with love and attention to detail by our master jewelers.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We use only the finest materials and provide lifetime warranties on all our jewelry.",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    description: "Our designs have been recognized internationally for their innovation and beauty.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We provide exceptional service and support.",
  },
]

const team = [
  {
    name: "Sarah Mitchell",
    role: "Master Jeweler & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 20 years of experience, Sarah founded Luxe Jewelry to bring exceptional craftsmanship to discerning customers.",
  },
  {
    name: "Michael Chen",
    role: "Head Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Michael's innovative designs blend traditional techniques with contemporary aesthetics.",
  },
  {
    name: "Emma Rodriguez",
    role: "Gemologist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Emma ensures every gemstone meets our exacting standards for quality and beauty.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            For over three decades, Luxe Jewelry has been creating extraordinary pieces that celebrate life's most
            precious moments. Our commitment to excellence and artistry has made us a trusted name in fine jewelry.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Luxe Jewelry, we believe that jewelry is more than just an accessory—it's a way to express your
                unique story and celebrate life's special moments. Our mission is to create exceptional pieces that
                combine timeless elegance with contemporary design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every piece in our collection is carefully crafted using traditional techniques passed down through
                generations, combined with modern innovation to create jewelry that will be treasured for a lifetime.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Jewelry craftsmanship"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from design to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The talented artisans and designers behind every Luxe Jewelry piece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Jewelry workshop"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Heritage</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded in 1985 by master jeweler Sarah Mitchell, Luxe Jewelry began as a small workshop with a simple
                vision: to create beautiful, meaningful jewelry that would be cherished for generations.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Today, we continue that tradition with the same dedication to quality and craftsmanship that has defined
                us from the beginning. Each piece tells a story, and we're honored to be part of yours.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">35+</div>
                  <div className="text-sm text-gray-400">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">10K+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">500+</div>
                  <div className="text-sm text-gray-400">Unique Designs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
