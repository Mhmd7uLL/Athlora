import { useState } from "react";
import type { NumNameOption } from "../utils/additionalPrice/additionalPrice";
import pict1 from "../assets/adidasEspana/pict1.webp";

export function useHome() {
  const [active, setActive] = useState("FC");
  const [activeBrand, setActiveBrand] = useState("Adidas");
  const [activeSize, setActiveSize] = useState("XS");
  const [activeKit, setActiveKit] = useState(pict1);
  const [customNum, setCustomNum] = useState<number | "">("");
  const [activeNumName, setActiveNumName] = useState<NumNameOption>("None");

  return {
    active,
    activeBrand,
    activeSize,
    activeKit,
    activeNumName,
    customNum,
    setActive,
    setActiveBrand,
    setActiveSize,
    setActiveKit,
    setActiveNumName,
    setCustomNum,
  };
}
