export type Size = "XS" | "S" | "M" | "L" | "XL";

export type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  size: Size;
  player: string;
  customNum: number | "";
  customName: string;
  quantity: number;
};
