import { Link } from "react-router-dom";

function Item({ itemInfo }) {
  return (
    <Link className="item-link" to={`/item/${itemInfo.id}`}>
      <div>
        <img
          className="image-container"
          src={itemInfo.pictureUrl}
          alt={itemInfo.description}
        />
      </div>
      <div>
        <h1 className="item-title">{itemInfo.title}</h1>
        <h2 className="item-price">{itemInfo.price}</h2>
      </div>
    </Link>
  );
}
export default Item;
