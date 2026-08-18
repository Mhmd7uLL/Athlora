export type NumNameOption = "None" | "Player" | "Custom";

export const PLAYER_PRICE = 25;
export const CUSTOM_NUMBER_PRICE = 15;
export const CUSTOM_NAME_PRICE = 30;

export function getAdditionalPrice(
  option: NumNameOption,
  customNum: number | "",
  customName: string,
): number {
  if (option === "None") {
    return 0;
  }
  if (option === "Player") {
    return PLAYER_PRICE;
  }

  let price = 0;

  if (customNum !== "") {
    price += CUSTOM_NUMBER_PRICE;
  }
  if (customName.trim() !== "") {
    price += CUSTOM_NAME_PRICE;
  }

  return price;
}
