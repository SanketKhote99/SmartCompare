"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Star, Check, X } from "lucide-react";
import { phones } from "@/lib/data";

export function PhoneDetails({ id }: { id: string }) {
  const phone = phones[id as keyof typeof phones];

  if (!phone) {
    return (
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container flex items-center justify-center py-32">
          <h1 className="text-2xl font-bold">Phone not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Image */}
          <div>
            <div className="aspect-square overflow-hidden rounded-xl">
              <img
                src={phone.image}
                alt={phone.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">{phone.name}</h1>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 font-semibold">{phone.rating}</span>
                </div>
                <span className="text-gray-500">({phone.reviews} reviews)</span>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  {phone.discount}
                </Badge>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              {phone.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Available from</h3>
              {phone.retailers.map((retailer) => (
                <Card key={retailer.name} className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{retailer.name}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-xl font-bold">
                        ${retailer.price}
                      </span>
                      <Button asChild>
                        <a
                          href={retailer.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Deal
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="specs" className="mt-12">
          <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
            <TabsTrigger value="specs">Specs</TabsTrigger>
            <TabsTrigger value="pros-cons">Pros & Cons</TabsTrigger>
            <TabsTrigger value="price-history">Price History</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="mt-6">
            <Card className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(phone.specs).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <h4 className="font-medium capitalize text-gray-500">
                      {key}
                    </h4>
                    <p className="font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="pros-cons" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  Pros
                </h3>
                <ul className="space-y-3">
                  {phone.pros.map((pro) => (
                    <li key={pro} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-4">
                  Cons
                </h3>
                <ul className="space-y-3">
                  {phone.cons.map((con) => (
                    <li key={con} className="flex items-center">
                      <X className="h-5 w-5 text-red-500 mr-2" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="price-history" className="mt-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Price History</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[...phone.priceHistory]}>
                    {" "}
                    // Create a mutable copy
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#3b82f6"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <p className="text-gray-500">Reviews coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
