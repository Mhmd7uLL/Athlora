import { useState } from "react";

export function useProfile() {
  const [active, setActive] = useState("Dashboard");

  return {
    active,
    setActive,
  };
}
