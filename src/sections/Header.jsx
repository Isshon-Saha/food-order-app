// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import ReactDOM  from "react-dom";
import Modal from "../components/Modal";
import CartContext from "../store/cart-context";

const Header = (props) => {
  const ctx = useContext(CartContext);

  const numberOfItems = ctx.items?.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <header className="flex flex-col border-b-2 border-primary bg-background">
      <div className="flex flex-row items-center justify-between my-4 mx-7">
        <div className="flex flex-row items-center gap-2 text-xl font-bold font-fira justify-evenly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-utensils"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
          </svg>
          <p>Reactmeals</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div class="toggle-switch">
            <label class="switch-label">
              <input type="checkbox" onChange={props.onToggle} checked = {props.checked}  class="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
          {/* <input type="checkbox" className="rounded-sm toggle toggle-lg" onChange={props.onToggle} checked = {props.checked}/> */}
          <button onClick={()=>{document.getElementById('cart_modal').showModal()}} className="flex flex-row items-center gap-2 p-3 text-xl rounded-md font-fira bg-primary justify-evenly hover:bg-secondary-focus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-basket"
            >
              <path d="m5 11 4-7" />
              <path d="m19 11-4-7" />
              <path d="M2 11h20" />
              <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
              <path d="m9 11 1 9" />
              <path d="M4.5 15.5h15" />
              <path d="m15 11-1 9" />
            </svg>
            <p className="font-mono font-semibold text-slate-900">Cart</p>
            <div className="font-semibold rounded-md badge-lg badge-primary bg-accent text-slate-900">
              {numberOfItems}
            </div>
          </button>
          {ReactDOM.createPortal(<Modal/>,document.getElementById("overlays"))}
        </div>
      </div>
    </header>
  );
};

export default Header;
