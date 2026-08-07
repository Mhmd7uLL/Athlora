export type NumNameOption = "None" | "Player" | "Custom";
export type sizeOption = "S" | "M" | "L" | "XL";

const additionalPrice: Record<NumNameOption, number> = {
  None: 0,
  Player: 25,
  Custom: 35,
};

export function getAdditionalPrice(option: NumNameOption): number {
  return additionalPrice[option];
}
