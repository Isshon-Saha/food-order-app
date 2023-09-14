import React, { useRef } from "react";
import Meal from "./Meal";

const Card = (props) => {
  const amountRef = useRef();
  return (
    <div className="border-4 rounded-lg shadow-xl card bg-base-100 border-accent">
      {props.data.map((item) => (
        <Meal key={item.id} {...item}/>
      ))}
    </div>
  );
};

export default Card;
