import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({ itemDetail }) {
  const { addItem } = useContext(CartContext);
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  function addItems(qty) {
    console.log("Items añadidos: ", qty);
    setQty(qty);
  }

  function goToCart() {
    addItem(itemDetail, qty);
    navigate("/cart");
  }

  return (
    <div className="item-detail">
      <div>
        <img src={itemDetail.pictureUrl} alt={itemDetail.description} />
      </div>
      <div>
        <h1 className="item-detail-title">{itemDetail.title}</h1>
        <h2 className="item-detail-price">{itemDetail.price}</h2>
        <h3 className="item-detail-description">{itemDetail.description}</h3>
        {qty === 0 ? (
          <ItemCount initial={1} stock={5} onAdd={addItems} />
        ) : (
          <div>
            <p>Cantidad seleccionada: {qty}</p>
            <button
              className="btn btn-outline-secondary mt-3"
              onClick={goToCart}
            >
              Terinar mi compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default ItemDetail;
