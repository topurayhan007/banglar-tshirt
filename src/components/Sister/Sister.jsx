import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Sister = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>Sister</h3>
      <p>
        <small>Grandpa money: {money}</small>
      </p>
    </div>
  );
};

export default Sister;
