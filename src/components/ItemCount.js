import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  function resta() {
    setCount((prevCount) => {
      if (prevCount === 0) {
        return 0;
      }
      return prevCount - 1;
    });
  }

  function suma() {
    setCount((prevCount) => {
      if (prevCount === stock) {
        return stock;
      }
      return prevCount + 1;
    });
  }

  function agregar() {
    if (stock === 0) {
      return;
    } else {
      onAdd(count);
    }
  }

  return (
    <div>
      <div>
        <p>Photo premium</p>
        <Button className="btn btn-outline-secondary" onClick={resta}>
          -
        </Button>
        <span className="number-count">{count}</span>
        <Button className="btn btn-outline-secondary" onClick={suma}>
          +
        </Button>
      </div>
      <button className="btn btn-outline-secondary mt-3" onClick={agregar}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
