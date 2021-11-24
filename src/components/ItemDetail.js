import { useState } from "react";
import { useNavigate } from "react-router";
import ItemCount from "./ItemCount";

function ItemDetail({ itemDetail }) {
  const navigate = useNavigate();
  const [qty, setQty] = useState(0);
  function addItem(qty) {
    console.log("Items añadidos: ", qty);
    setQty(qty);
  }
  function goToCart() {
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
          <ItemCount initial={1} stock={5} onAdd={addItem} />
        ) : (
          <div>
            <p>Cantidad seleccionada: {qty}</p>
            <button class="btn btn-outline-secondary mt-3" onClick={goToCart}>
              Terinar mi compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default ItemDetail;
