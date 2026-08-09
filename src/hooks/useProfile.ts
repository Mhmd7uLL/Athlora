import { useState } from "react";

export function useProfile() {
  const [active, setActive] = useState("dashboard");

  return {
    active,
    setActive,
  };
}
