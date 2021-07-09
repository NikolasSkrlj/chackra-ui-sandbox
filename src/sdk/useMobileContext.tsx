import React, { useState, useEffect } from "react";

export const useMobileContext = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const setMobileContext = () => {
      setIsMobile(window.innerWidth < 1050 ? true : false);
    };
    window.addEventListener("resize", setMobileContext);

    return () => {
      window.removeEventListener("resize", setMobileContext);
    };
  }, []);

  return {
    isMobile,
  };
};
