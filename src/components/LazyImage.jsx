import React, { useEffect, useState } from "react";
// import dummyImage from './../../Assets/dummyImage.png'

function LazyImage({ imageSrc, dummyImage }) {
  const [src, setSrc] = useState(dummyImage);
  useEffect(() => {
   
    let image = new Image();
    image.src = imageSrc;
    image.onload = () => setSrc(imageSrc);
  }, []);
  return (
    <img
      loading="lazy"  
      style={{ width: "90%", borderRadius: 10, height: "160px", }}
      src={src}
    />
  );
}

export default LazyImage;
