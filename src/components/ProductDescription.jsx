import { useState } from "react";

const shoes = {
  brand: "CONVERSE",
  name: "Walk Star Trainer",
  price: 999000,
  discount: true,
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
};

const discount = shoes.price * 0.2;
const discountedPrice = Math.round(shoes.price - discount);

function rupiahFormat(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

export default function ProductDescription({ handleAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = () => {
    const productArray = Array(quantity).fill(shoes);
    handleAddToCart(productArray);
  };

  return (
    <div className="flex flex-col gap-4 max-w-md">
      {/* Brand */}
      <p className="uppercase text-slate-500 tracking-widest">{shoes.brand}</p>

      {/* Product Name */}
      <h2 className="font-bold text-5xl">{shoes.name}</h2>

      {/* Description */}
      <p className="text-gray-700">{shoes.description}</p>

      {/* Price */}
      {shoes.discount ? (
        <div className="flex items-center gap-3">
          <p className="text-black font-bold text-2xl">
            {rupiahFormat(discountedPrice)}
          </p>
          <p className="line-through text-gray-400">
            {rupiahFormat(shoes.price)}
          </p>
        </div>
      ) : (
        <p className="text-2xl">{rupiahFormat(shoes.price)}</p>
      )}

      {/* Quantity + Add to cart */}
      <div className="flex items-center gap-4 mt-4">
        {/* Quantity control */}
        <div className="flex items-center bg-white rounded-xl px-2 py-1">
          <button
            className="bg-gray-200 text-orange-500 font-bold text-xl w-10 h-10 rounded-lg transition"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            −
          </button>
          <span className="w-10 text-center font-semibold text-lg">
            {quantity}
          </span>
          <button
            className="bg-gray-200 text-orange-500 font-bold text-xl w-10 h-10 rounded-lg transition"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        {/* Add to cart */}
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow transition"
          onClick={handleSubmit}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
