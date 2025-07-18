import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-responsive py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">Aahaanya Creatives</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Crafting exquisite jewelry pieces and metal art that celebrate life's precious moments since 1985.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/female"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base"
                >
                  Female Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/male"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base"
                >
                  Male Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/metal-art"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base"
                >
                  Metal Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/sizing"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-gray-400 hover:text-pink-400 transition-colors text-sm sm:text-base">
                  Jewelry Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">info@aahanyacreatives.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-pink-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm sm:text-base">123 Creative St, NYC 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Aahaanya Creatives. All rights reserved. |
            <Link href="/privacy" className="hover:text-pink-400 transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-pink-400 transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
