export const products = [
  {
    id: "catfish",
    name: "Fresh Farm Catfish",
    description: "Premium, healthy, and organic catfish bred in optimal conditions. Available in bulk and retail.",
    fullDescription: "Our catfish are raised in standard conditions, ensuring optimum growth, high nutrient value, and safe consumption. We process strictly upon request, providing both live and smoke-dried options based on your preference.",
    image: "/image.png",
    priceNote: "Contact for price based on weight/quantity"
  },
  {
    id: "palm-oil",
    name: "Pure Natural Palm Oil",
    description: "100% pure, unadulterated palm oil rich in vitamins. No artificial colors or preservatives.",
    fullDescription: "Sourced directly from our palm plantations, our palm oil is processed using hygienic, traditional methods to retain its natural flavor, rich texture, and nutritional value. Available in liters and drums.",
    image: "/palm-oil-595x430-1.jpg",
    priceNote: "Contact for price per Liter / Drum"
  },
  {
    id: "maize",
    name: "Premium Quality Maize",
    description: "High-yield, properly dried maize grains. Perfect for consumption or animal feed production.",
    fullDescription: "Our maize is harvested at peak maturity and carefully dried to maintain the perfect moisture level. It is rich in energy and safe for prolonged storage. Suitable for commercial buyers, caterers, and feed producers.",
    image: "/maize.jpeg",
    priceNote: "Contact for wholesale pricing"
  },
  {
    id: "sheep-rearing",
    name: "Sheep Rearing & Livestock",
    description: "Healthy, grass-fed sheep reared under premium conditions. Ideal for breeding, meat, and festive celebrations.",
    fullDescription: "Our sheep are reared in a clean, spacious, and disease-free environment. Fed with highly nutritious pasture and organic supplements, we ensure optimal weight gain and premium livestock health. We supply to farms for breeding, markets, and individuals for personal use or festive celebrations.",
    image: "/sheep-rearing.png",
    priceNote: "Contact for price per head / wholesale"
  },
  {
    id: "goat-rearing",
    name: "Goat Rearing & Livestock",
    description: "Premium quality, active, and healthy goats reared on nutrient-rich feeds. Perfect for commercial and retail needs.",
    fullDescription: "Our goats are bred with care in a hygienic environment, receiving regular veterinary checks and a balanced diet of natural pasture and high-quality feeds. Available in various breeds and sizes, our goats are perfect for breeding, meat production, festive events, and wholesale supply.",
    image: "/goat-rearing.png",
    priceNote: "Contact for price per head / wholesale"
  },
  {
    id: "pig-farming",
    name: "Pig Farming & Livestock",
    description: "High-quality, fast-growing pigs reared in hygienic conditions. Perfect for breeding, pork production, and wholesale.",
    fullDescription: "Our pig farming operations utilize modern, hygienic, and standard practices to ensure optimum animal welfare and high-yield production. Our pigs are raised on highly balanced, nutrient-rich feeds, resulting in excellent health and meat quality. We supply healthy piglets for breeding and mature pigs for processing or wholesale supply.",
    image: "/pig-farming.png",
    priceNote: "Contact for price per head / wholesale"
  }
];

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}

export const galleryItems = [
  {
    id: "catfish-feeding-vid",
    type: "video",
    category: "produce",
    title: "Feeding Time at the Catfish Ponds",
    description: "Watch our catfish actively feeding during morning checks. We maintain optimal feeding schedules for healthy growth.",
    publicId: "docs/sea_spouts"
  },
  {
    id: "palm-oil-press",
    type: "image",
    category: "produce",
    title: "Traditional Hygienic Oil Pressing",
    description: "Our high-efficiency oil press extracts 100% pure palm oil without artificial heat or chemical additives.",
    publicId: "cld-sample-4"
  },
  {
    id: "maize-harvest",
    type: "image",
    category: "produce",
    title: "Golden Maize Grains Selection",
    description: "Freshly harvested corn cobs drying naturally to preserve nutrition and prevent mold.",
    publicId: "cld-sample-2"
  },
  {
    id: "livestock-pasture",
    type: "image",
    category: "livestock",
    title: "Sheep & Goat Grazing on Open Fields",
    description: "Our livestock enjoy spacious pastures, grazing on natural organic grasses under veterinary care.",
    publicId: "cld-sample-5"
  },
  {
    id: "pigs-feeding",
    type: "image",
    category: "livestock",
    title: "Hygienic Feeding Pens",
    description: "Pigs raised in clean concrete pens, fed with nutrient-dense feeds to ensure rapid growth and lean pork.",
    publicId: "cld-sample-3"
  },
  {
    id: "farm-drone-view",
    type: "video",
    category: "livestock",
    title: "Aerial View of JVC Farms",
    description: "A bird's eye view of our extensive farm facilities, showing ponds, pens, and plantations.",
    publicId: "dog"
  }
];

export function getCloudinaryUrl(publicId: string, resourceType: "image" | "video" = "image") {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo";
  if (publicId.startsWith("http://") || publicId.startsWith("https://")) {
    return publicId;
  }
  return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/${publicId}`;
}
