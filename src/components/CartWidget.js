import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);
  return (
    <div className="mt-5">
      {cart.length === 0 ? (
        <span>No hay items en el carrito</span>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <span>{item.title} - </span>
              <span>qty: {item.qty} - </span>
              <span>$ {item.qty * item.priceNum}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartWidget;
