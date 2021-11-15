function Item({ itemInfo }) {
  return (
    <div>
      <div>
        <img src={itemInfo.pictureUrl} alt={itemInfo.description} />
      </div>
      <div>
        <h1>{itemInfo.title}</h1>
        <h2>{itemInfo.price}</h2>
      </div>
    </div>
  );
}
export default Item;
