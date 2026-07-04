import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  if (isTouchDevice) return null;
  return <div className="hidden" />;
};

export default CustomCursor;
