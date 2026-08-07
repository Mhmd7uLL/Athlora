import { useState } from "react";
import type { NumNameOption } from "../utils/additionalPrice/additionalPrice";

export function useHome() {
  const [active, setActive] = useState("FC");
  const [activeBrand, setActiveBrand] = useState("Adidas");
  const [activeSize, setActiveSize] = useState("XS");
  const [activeNumName, setActiveNumName] = useState<NumNameOption>("None");

  return {
    active,
    activeBrand,
    activeSize,
    activeNumName,
    setActive,
    setActiveBrand,
    setActiveSize,
    setActiveNumName,
  };
}
