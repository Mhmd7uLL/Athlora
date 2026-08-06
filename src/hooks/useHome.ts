import { useState } from 'react';

export function useHome(){
  const [active, setActive] = useState("FC");
  const [activeBrand, setActiveBrand] = useState("Adidas");
  const [activeSize, setActiveSize] = useState("XS");
  const [activeNumName, setActiveNumName] = useState("None");

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

