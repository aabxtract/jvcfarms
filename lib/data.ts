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
  }
];

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}
