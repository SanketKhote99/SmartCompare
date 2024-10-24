export const phones = {
  "1": {
    name: "iPhone 15 Pro",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=60",
    price: "$999",
    discount: "10% off",
    rating: 4.8,
    reviews: 1250,
    description: "The iPhone 15 Pro features a groundbreaking design with titanium edges, the powerful A17 Pro chip, and an advanced camera system.",
    specs: {
      display: "6.1-inch Super Retina XDR OLED",
      processor: "A17 Pro chip",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      battery: "3,274 mAh",
      storage: "128GB, 256GB, 512GB, 1TB",
      os: "iOS 17"
    },
    pros: [
      "Titanium design",
      "Powerful A17 Pro chip",
      "Advanced camera system",
      "Action button customization"
    ],
    cons: [
      "Premium price point",
      "Limited battery life",
      "No charger in box"
    ],
    priceHistory: [
      { date: "2023-09", price: 999 },
      { date: "2023-10", price: 999 },
      { date: "2023-11", price: 949 },
      { date: "2023-12", price: 899 },
      { date: "2024-01", price: 949 },
      { date: "2024-02", price: 899 }
    ],
    retailers: [
      { name: "Apple", price: 999, link: "#" },
      { name: "Amazon", price: 949, link: "#" },
      { name: "Best Buy", price: 959, link: "#" }
    ]
  },
  "2": {
    name: "Samsung S24 Ultra",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=60",
    price: "$1199",
    discount: "Free Galaxy Buds",
    rating: 4.7,
    reviews: 890,
    description: "The Samsung Galaxy S24 Ultra sets new standards with its AI capabilities, titanium build, and advanced camera system with 200MP main sensor.",
    specs: {
      display: "6.8-inch QHD+ Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP Main + 12MP Ultra Wide + 50MP Telephoto + 10MP Telephoto",
      battery: "5,000 mAh",
      storage: "256GB, 512GB, 1TB",
      os: "Android 14 with One UI 6.1"
    },
    pros: [
      "AI features",
      "S Pen functionality",
      "Excellent camera system",
      "Large battery"
    ],
    cons: [
      "High price",
      "Large size may not suit everyone",
      "Heavy device"
    ],
    priceHistory: [
      { date: "2023-09", price: 1299 },
      { date: "2023-10", price: 1299 },
      { date: "2023-11", price: 1249 },
      { date: "2023-12", price: 1199 },
      { date: "2024-01", price: 1199 },
      { date: "2024-02", price: 1199 }
    ],
    retailers: [
      { name: "Samsung", price: 1199, link: "#" },
      { name: "Amazon", price: 1149, link: "#" },
      { name: "Best Buy", price: 1179, link: "#" }
    ]
  },
  "3": {
    name: "Google Pixel 8",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60",
    price: "$699",
    discount: "15% off",
    rating: 4.6,
    reviews: 650,
    description: "The Google Pixel 8 combines powerful AI features with an excellent camera system and clean Android experience.",
    specs: {
      display: "6.2-inch OLED",
      processor: "Google Tensor G3",
      camera: "50MP Main + 12MP Ultra Wide",
      battery: "4,575 mAh",
      storage: "128GB, 256GB",
      os: "Android 14"
    },
    pros: [
      "Excellent camera",
      "Clean Android experience",
      "AI features",
      "Regular updates"
    ],
    cons: [
      "Average battery life",
      "Limited storage options",
      "Slower charging"
    ],
    priceHistory: [
      { date: "2023-09", price: 699 },
      { date: "2023-10", price: 699 },
      { date: "2023-11", price: 649 },
      { date: "2023-12", price: 599 },
      { date: "2024-01", price: 649 },
      { date: "2024-02", price: 599 }
    ],
    retailers: [
      { name: "Google", price: 699, link: "#" },
      { name: "Amazon", price: 649, link: "#" },
      { name: "Best Buy", price: 659, link: "#" }
    ]
  }
} as const;