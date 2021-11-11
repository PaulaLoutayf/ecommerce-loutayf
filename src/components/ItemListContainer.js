import ItemCount from "./ItemCount";

function ItemListContainer(props) {
  function addItem(qty) {
    console.log("Items añadidos: ", qty);
  }
  return (
    <>
      <div>{props.item}</div>
      <ItemCount initial={1} stock={5} onAdd={addItem} />
    </>
  );
}
export default ItemListContainer;
