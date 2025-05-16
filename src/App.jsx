// import React from "react";
// import ProductPage from "./components/ProductPage";

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <ProductPage />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductImage from "./components/ProductImage";
import ProductDescription from "./components/ProductDescription";

export default function App() {
  const [itemDalamCart, setItemDalamCart] = useState([]);

  function addToCart(product) {
    setItemDalamCart([...itemDalamCart, ...product]);
  }

  return (
    <>
      <Navbar itemDalamCart={itemDalamCart} />

      <main className="min-h-screen flex items-center justify-center gap-10 p-10 bg-gray-50">
        <ProductImage />
        <ProductDescription handleAddToCart={addToCart} />
      </main>
    </>
  );
}
