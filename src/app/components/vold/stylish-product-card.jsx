import { Star, ShoppingCart } from "lucide-react";
// import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
        <div className="relative overflow-hidden">
          <img
            alt="Product image"
            className="object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-110"
            src="/placeholder.svg?height=256&width=192"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </div>
        <div className="p-4">
          <h3
            className={`text-2xl font-bold text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors duration-300 ${playfair.className}`}
          >
            Awesome Product
          </h3>
          <p
            className={`text-sm text-gray-600 mb-4 leading-relaxed ${inter.className}`}
          >
            `This is a brief description of the awesome product. It's designed
            to meet all your needs and exceed your expectations.`
          </p>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill={i < 4 ? "currentColor" : "none"}
                />
              ))}
              <span
                className={`ml-2 text-sm font-medium text-gray-600 ${inter.className}`}
              >
                4.0
              </span>
            </div>
            <span
              className={`text-2xl font-bold text-gray-900 ${robotoMono.className}`}
            >
              $99.99
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
    </div>
  );
}
