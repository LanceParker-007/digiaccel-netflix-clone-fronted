import { useState } from 'react'
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Inter, Playfair_Display, Roboto_Mono } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

function ProductCard({ title, description, price, rating, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          alt={`${title} image`}
          className="object-cover w-full h-48 transition-transform duration-300 ease-in-out hover:scale-110"
          src={image}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      </div>
      <div className="p-4">
        <h3 className={`text-lg font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors duration-300 ${playfair.className}`}>
          {title}
        </h3>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill={i < rating ? "currentColor" : "none"}
              />
            ))}
            <span className={`ml-1 text-xs font-medium text-gray-600 ${inter.className}`}>{rating.toFixed(1)}</span>
          </div>
          <span className={`text-lg font-bold text-gray-900 ${robotoMono.className}`}>${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const product = {
    title: "Awesome Product 1",
    description: "This is a comprehensive description of the awesome product. It's designed to meet all your needs and exceed your expectations. Crafted with premium materials and cutting-edge technology, this product offers unparalleled performance and durability. Whether you're a professional or an enthusiast, you'll appreciate its versatility and ease of use. It comes in a sleek, modern design that not only looks great but also enhances functionality. With its energy-efficient operation, it's not just good for you, but also for the environment. Plus, it's backed by our outstanding customer service and warranty, ensuring your satisfaction for years to come.",
    price: 99.99,
    rating: 4.5,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400&text=Image+2",
      "/placeholder.svg?height=400&width=400&text=Image+3",
      "/placeholder.svg?height=400&width=400&text=Image+4",
    ]
  }

  const relatedProducts = [
    {
      title: "Related Item 1",
      description: "A brief description of the related item.",
      price: 79.99,
      rating: 4.2,
      image: "/placeholder.svg?height=200&width=200&text=Related+1"
    },
    {
      title: "Related Item 2",
      description: "Another related item that might interest you.",
      price: 89.99,
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=200&text=Related+2"
    },
    {
      title: "Related Item 3",
      description: "Yet another great product you might like.",
      price: 69.99,
      rating: 4.1,
      image: "/placeholder.svg?height=200&width=200&text=Related+3"
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className={`inline-flex items-center ${inter.className} text-blue-600 hover:text-blue-800 mb-6`}>
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="relative">
            <img
              src={product.images[currentImageIndex]}
              alt={`${product.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-auto rounded-lg"
            />
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} - Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className={`${playfair.className} text-3xl font-bold text-gray-900 mb-4`}>{product.title}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < product.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill={i < product.rating ? "currentColor" : "none"}
              />
            ))}
            <span className={`ml-2 text-sm font-medium text-gray-600 ${inter.className}`}>{product.rating.toFixed(1)} out of 5</span>
          </div>
          <p className={`${inter.className} text-gray-600 mb-6`}>{product.description}</p>
          <div className={`${robotoMono.className} text-3xl font-bold text-gray-900 mb-6`}>${product.price.toFixed(2)}</div>
          <Button className={`w-full md:w-auto ${inter.className} bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300`}>
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div>
        <h2 className={`${playfair.className} text-2xl font-bold text-gray-900 mb-6`}>Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}