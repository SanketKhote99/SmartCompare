import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

const trendingPhones = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=60",
    price: "$999",
    discount: "10% off"
  },
  {
    id: 2,
    name: "Samsung S24 Ultra",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=60",
    price: "$1199",
    discount: "Free Galaxy Buds"
  },
  {
    id: 3,
    name: "Google Pixel 8",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60",
    price: "$699",
    discount: "15% off"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="container px-4 py-32 md:py-40">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Find Your Perfect Phone at the Best Price
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Compare smartphones across multiple platforms with AI-powered insights. Get the best deals and make informed decisions.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  <Link href="/compare">
                    Compare Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/deals">View Deals</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  alt="Smartphone comparison"
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&auto=format&fit=crop&q=60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose SmartCompare?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get comprehensive comparisons, real-time price tracking, and AI-powered recommendations
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">AI-Powered Insights</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Get personalized recommendations based on your preferences and usage patterns</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Detailed Comparisons</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Compare specs, features, and prices across multiple devices side by side</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <svg
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Price Tracking</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Track prices across multiple retailers and get alerts for the best deals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Phones Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trending Phones</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out the most popular smartphones right now
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {trendingPhones.map((phone) => (
              <Card key={phone.id} className="overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    alt={phone.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    src={phone.image}
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                    {phone.discount}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{phone.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">Starting at {phone.price}</p>
                  <Button asChild className="w-full mt-4">
                    <Link href={`/phones/${phone.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}