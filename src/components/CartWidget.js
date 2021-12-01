import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  const { cart } = useContext(CartContext);
  return (
    <div className={cart.length === 0 && "d-none"}>
      <FaShoppingCart />
      <span className="px-2">{cart.length}</span>
    </div>
  );
}

export default CartWidget;
