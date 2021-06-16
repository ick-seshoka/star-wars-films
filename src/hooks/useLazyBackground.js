import { useState, useEffect } from "react";

export const useLazyBackground = (imageUrl) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setSrc(imageUrl);
  }, [src]);

  return src;
};
