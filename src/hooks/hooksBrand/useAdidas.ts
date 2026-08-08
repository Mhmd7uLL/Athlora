import { useState } from "react";
import type { NumNameOption } from "../../utils/additionalPrice/additionalPrice";
import pict1 from "../../assets/homeAssets/adidasEspana/pict1.webp";

export function useAdidas() {
  const [activeSize, setActiveSize] = useState("XS");
  const [activeKit, setActiveKit] = useState(pict1);
  const [customNum, setCustomNum] = useState<number | "">("");
  const [activeNumName, setActiveNumName] = useState<NumNameOption>("None");

  return {
    activeSize,
    activeKit,
    activeNumName,
    customNum,
    setActiveSize,
    setActiveKit,
    setActiveNumName,
    setCustomNum,
  };
}
