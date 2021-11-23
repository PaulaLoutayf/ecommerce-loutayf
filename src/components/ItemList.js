import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="item-list-container">
      {items.map((item, index) => {
        return <Item itemInfo={item} key={index} />;
      })}
    </div>
  );
}
export default ItemList;
