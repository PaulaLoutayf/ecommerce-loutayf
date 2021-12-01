import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, removeItem, getTotal } = useContext(CartContext);
  const cartTotal = getTotal();
  return (
    <div className="mt-5">
      {cart.length === 0 ? (
        <div>
          <span className="px-2">No hay items en el carrito</span>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              className="d-flex justify-content-center align-items-center border border-primary"
              key={index}
            >
              <span>{item.title} - </span>
              <span>qty: {item.qty} - </span>
              <span className="px-2">$ {item.qty * item.priceNum}</span>
              <span className="btn" onClick={() => removeItem(item.id)}>
                Quitar
              </span>
            </div>
          ))}
          <p className="mt-3">Total del carrito: ${cartTotal}</p>
        </div>
      )}
    </div>
  );
}

export default CartPage;
