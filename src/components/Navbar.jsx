import { useState } from "react";

export default function Navbar({ itemDalamCart }) {
  const [toggleSummary, setToggleSummary] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center relative">
      <img src="/logo.svg" alt="Logo" />

      <div
        className="relative size-8 grid place-items-center cursor-pointer"
        onClick={() => setToggleSummary(!toggleSummary)}
      >
        <img src="/belanja.svg" alt="Cart" />
        <p className="text-[10px] size-4 text-center rounded-full bg-red-600 text-white absolute top-0 right-0">
          {itemDalamCart.length}
        </p>
      </div>

      {toggleSummary && (
        <div className="modal bg-blue-700 p-3 absolute right-0 top-[64px] text-white rounded shadow-lg w-64">
          {itemDalamCart.length ? (
            itemDalamCart.map((item, index) => <p key={index}>{item.name}</p>)
          ) : (
            <p>Empty Cart</p>
          )}
        </div>
      )}
    </nav>
  );
}
