"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X } from "lucide-react";
import { phones } from "@/lib/data";
import { ComparisonTable } from "@/components/comparison-table";

export function ComparePhones() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPhones, setSelectedPhones] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const filteredPhones = Object.entries(phones).filter(([_, phone]) =>
    phone.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePhoneSelect = (id: string) => {
    if (selectedPhones.includes(id)) {
      setSelectedPhones(selectedPhones.filter((phoneId) => phoneId !== id));
    } else if (selectedPhones.length < 3) {
      setSelectedPhones([...selectedPhones, id]);
    }
  };

  const handleCompare = () => {
    if (selectedPhones.length >= 2) {
      setShowComparison(true);
    }
  };

  const handleReset = () => {
    setSelectedPhones([]);
    setShowComparison(false);
  };

  if (showComparison) {
    return (
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Phone Comparison</h1>
            <Button onClick={handleReset} variant="outline">
              <X className="mr-2 h-4 w-4" /> Reset Comparison
            </Button>
          </div>
          <ComparisonTable phoneIds={selectedPhones} />
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container py-8">
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Compare Phones</h1>
            <p className="text-gray-500">
              Select 2 or 3 phones to compare their features side by side
            </p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search phones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium">
                {selectedPhones.length} of 3 selected
              </span>
              {selectedPhones.length >= 2 && (
                <Button onClick={handleCompare}>Compare Now</Button>
              )}
            </div>
            {selectedPhones.length > 0 && (
              <Button variant="ghost" onClick={handleReset}>
                Clear Selection
              </Button>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPhones.map(([id, phone]) => (
              <Card
                key={id}
                className={`relative p-4 transition-shadow hover:shadow-lg ${
                  selectedPhones.includes(id)
                    ? "ring-2 ring-primary"
                    : "ring-1 ring-gray-200"
                }`}
              >
                <div className="absolute right-4 top-4 z-10">
                  <Checkbox
                    checked={selectedPhones.includes(id)}
                    onCheckedChange={() => handlePhoneSelect(id)}
                    disabled={
                      selectedPhones.length >= 3 && !selectedPhones.includes(id)
                    }
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{phone.name}</h2>
                <p className="text-2xl font-bold text-blue-600">{phone.price}</p>
                <p className="text-sm text-gray-500 mt-2">{phone.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}