/* eslint-disable @next/next/no-img-element */
import { Star, ShoppingCart } from "lucide-react";
// import { Button } from "@/components/ui/button"
import { Inter, Playfair_Display, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

function ProductCard({ title, description, price, rating, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          alt={`${title} image`}
          className="object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-110"
          src={image}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      </div>
      <div className="p-4">
        <h3
          className={`text-xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors duration-300 ${playfair.className}`}
        >
          {title}
        </h3>
        <p
          className={`text-sm text-gray-600 mb-4 leading-relaxed ${inter.className}`}
        >
          {description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill={i < rating ? "currentColor" : "none"}
              />
            ))}
            <span
              className={`ml-2 text-sm font-medium text-gray-600 ${inter.className}`}
            >
              {rating.toFixed(1)}
            </span>
          </div>
          <span
            className={`text-xl font-bold text-gray-900 ${robotoMono.className}`}
          >
            ${price.toFixed(2)}
          </span>
        </div>
        <button
          className={`w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 ${inter.className}`}
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const products = [
    {
      title: "Awesome Product 1",
      description:
        "This is a brief description of the awesome product. It's designed to meet all your needs.",
      price: 99.99,
      rating: 4.5,
      image: "/placeholder.svg?height=256&width=192",
    },
    {
      title: "Fantastic Item 2",
      description:
        "An amazing item that will exceed your expectations. Perfect for everyday use.",
      price: 79.99,
      rating: 4.2,
      image: "/placeholder.svg?height=256&width=192",
    },
    {
      title: "Super Gadget 3",
      description:
        "The latest tech gadget that simplifies your life. A must-have for tech enthusiasts.",
      price: 149.99,
      rating: 4.8,
      image: "/placeholder.svg?height=256&width=192",
    },
    {
      title: "Eco-Friendly Product 4",
      description:
        "An environmentally conscious product that doesn't compromise on quality or performance.",
      price: 59.99,
      rating: 4.0,
      image: "/placeholder.svg?height=256&width=192",
    },
    {
      title: "Luxury Item 5",
      description:
        "Indulge in this high-end product. The epitome of style and functionality combined.",
      price: 199.99,
      rating: 4.7,
      image: "/placeholder.svg?height=256&width=192",
    },
    {
      title: "Budget-Friendly 6",
      description:
        "Great value for money. This product offers excellent features at an affordable price.",
      price: 39.99,
      rating: 3.9,
      image: "/placeholder.svg?height=256&width=192",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2
        className={`text-3xl font-bold text-gray-900 mb-6 ${playfair.className}`}
      >
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
