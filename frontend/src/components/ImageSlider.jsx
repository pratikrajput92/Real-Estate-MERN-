import { useState } from "react"


const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  if(!images || images.length === 0 ) 
    return null;

  return(
    <div>
      <img src={images[index]} alt="property"
       className="w-full h-130 mt-10 object-cover rounded-xl mb-4" />

       <button onClick={() =>
        setIndex((index - 1 + images.length)% images.length)}
        className="absolute left-4 top-1/2 bg-white px-3 py-1 rounded">
          ‹
       </button>
          
       <button onClick={() => setIndex((index + 1)% images.length)}
        className="absolute right-4 top-1/2 bg-white px-3 py-1 rounded">
          ›
       </button>
    </div>
  );
};

export default ImageSlider;