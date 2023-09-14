import React, { useContext, useRef, useState } from "react";
import CartContext from "../store/cart-context";

const Meal = (item) => {
  const [isValid, setIsValid] = useState(true);
  const amountRef = useRef();
  const ctx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmountValue = amountRef.current.value;
    const enteredAmount = +enteredAmountValue;

    if (
      enteredAmount > 5 ||
      enteredAmount < 1
    ) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
      ctx.addItem({
        id: item.id,
        name: item.name,
        price: (item.price * enteredAmount),
        amount: enteredAmount,
      });
    }
  };

  return (
    <div
      className="flex flex-row items-center justify-between gap-5 border-b-2 card-body border-accent"
      key={item.id}
    >
      <div className="flex flex-col items-start justify-start">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <p className="font-semibold">${item.price.toFixed(2)}</p>
      </div>
      <div className="card-action flex flex-col justify-end items-end gap-5">
        <form
          onSubmit={submitHandler}
          className="flex flex-row justify-end items-end gap-4"
        >
          {/* <span className="font-bold">Amount: </span> */}
          <input
            ref={amountRef}
            id={item.id}
            type="number"
            placeholder="1"
            min={1}
            max={5}
            className="input input-bordered w-1/3 max-w-xs"
          />
          <button type="submit" className="btn btn-primary">
            Add to cart
          </button>
        </form>

        {!isValid && <p className="text-red-500">Please enter a valid input</p>}
      </div>
    </div>
  );
};

export default Meal;
