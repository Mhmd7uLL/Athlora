import { useState } from "react";

export function useHome() {
  const [active, setActive] = useState("FC");
  const [activeBrand, setActiveBrand] = useState("Adidas");

  return {
    active,
    activeBrand,
    setActive,
    setActiveBrand,
  };
}
