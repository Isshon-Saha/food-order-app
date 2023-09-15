import React, { useContext } from "react";
import CartContext from "../store/cart-context";

const Modal = () => {
  const ctx = useContext(CartContext);
  const hasItems = ctx.items.length > 0;
  
  return (
    <dialog id="cart_modal" className="modal">
      <div className="flex-col items-center justify-center gap-2 modal-box font-fira">
        {ctx.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-center justify-between"
          >
            <div className="flex flex-row-reverse items-center justify-start gap-4">
              <button onClick={(e) => { ctx.removeItem(item.id) }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trash-2"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </button>
              <h3 className="text-lg font-bold">
                {item.name} x {item.amount}
              </h3>
            </div>
            <p className="py-4">${item.price.toFixed(2)}</p>
          </div>
        ))}
        <div className="divider"></div>
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-semibold font-fira">Total Amount: </h2>
          <span>${ctx.totalAmount.toFixed(2)}</span>
        </div>
        {hasItems && (
          <div className="flex flex-row items-center justify-center mt-4">
            <button className="font-bold btn btn-primary hover:btn-success font-fira">
              Buy now
            </button>
          </div>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Buy</button>
      </form>
    </dialog>
  );
};

export default Modal;
