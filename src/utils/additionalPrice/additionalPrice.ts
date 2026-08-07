export type NumNameOption = "None" | "Player" | "Custom";

const additionalPrice: Record<NumNameOption, number> = {
    None: 0,
    Player: 15,
    Custom: 25,
};

export function getAdditionalPrice(option: NumNameOption): number {
    return additionalPrice[option];
}

