import { useState, useEffect, useCallback } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth || 0,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return windowSize;
}

export default useWindowSize;
