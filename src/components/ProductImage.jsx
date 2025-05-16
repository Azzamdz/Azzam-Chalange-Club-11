import { useState } from "react";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

export default function ProductImage() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <img
        src={selectedImage}
        alt="Main product"
        className="max-w-[400px] rounded-2xl"
      />
      <div className="flex gap-2 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 aspect-square object-cover rounded-2xl cursor-pointer ${
              selectedImage === img ? "border-2 border-black" : ""
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
