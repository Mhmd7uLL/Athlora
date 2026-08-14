import { useState } from "react";
import type { Size } from "../../types/cart";
import type { NumNameOption } from "../../utils/additionalPrice/additionalPrice";
import pict1 from "../../assets/homeAssets/adidasEspana/pict1.webp";

export function useAdidas() {
  const [activeSize, setActiveSize] = useState<Size>("XS");
  const [activeKit, setActiveKit] = useState(pict1);
  const [customNum, setCustomNum] = useState<number | "">("");
  const [activeNumName, setActiveNumName] = useState<NumNameOption>("None");
  const [selectedPlayer, setSelectedPlayer] = useState("Select Player");
  const [customName, setCustomName] = useState("");

  return {
    activeSize,
    activeKit,
    activeNumName,
    customNum,
    customName,
    selectedPlayer,
    setActiveSize,
    setActiveKit,
    setActiveNumName,
    setCustomNum,
    setCustomName,
    setSelectedPlayer,
  };
}
