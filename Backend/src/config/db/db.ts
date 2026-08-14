export interface Product {
  id: string;
  name: string;
  price: number;
  size: string[];
}

export const products: Product[] = [
  {
    id: "Adidas-1",
    name: "Adidas Jersey",
    price: 270,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "Nike-1",
    name: "Nike Football Jersey",
    price: 300,
    size: ["S", "M", "L", "XL"],
  },
  {
    id: "Puma-1",
    name: "Puma Football Jersey",
    price: 250,
    size: ["S", "M", "L", "XL"],
  },
];