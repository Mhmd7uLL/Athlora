import { useState, useEffect } from "react";
import type { Size } from "../../types/cart"
import type { NumNameOption } from "../../utils/additionalPrice";
import pict1 from "../../assets/homeAssets/pumaPortugal/pict1.jpg";

export function usePuma() {
  const [activeKit, setActiveKit] = useState(pict1);

  const [selectedPlayer, setSelectedPlayer] = useState("Select Player");
  
  const [activeSize, setActiveSize] = useState<Size>("XS");
  const [customNum, setCustomNum] = useState<number | "">("");
  const [activeNumName, setActiveNumName] = useState<NumNameOption>("None");
  const [customName, setCustomName] = useState("");

  const [showNotif, setShowNotif] = useState(false);
  const [showFailNotif, setShowFailNotif] = useState(false);

  useEffect(() => {
      if (!showNotif && !showFailNotif) return;
  
      const timer = setTimeout(() => {
        setShowNotif(false);
        setShowFailNotif(false);
      }, 3500);
  
      return () => clearTimeout(timer);
    }, [showNotif, showFailNotif])

  return {
    activeSize,
    activeKit,
    activeNumName,
    customNum,
    customName,
    selectedPlayer,
    showNotif,
    showFailNotif,

    setActiveSize,
    setActiveKit,
    setActiveNumName,
    setCustomNum,
    setCustomName,
    setSelectedPlayer,
    setShowNotif,
    setShowFailNotif,
  };
}
