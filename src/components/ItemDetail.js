function ItemDetail({ itemDetail }) {
  return (
    <div>
      <div>
        <img src={itemDetail.pictureUrl} alt={itemDetail.description} />
      </div>
      <div>
        <h1>{itemDetail.title}</h1>
        <h2>{itemDetail.price}</h2>
        <h3>{itemDetail.description}</h3>
      </div>
    </div>
  );
}
export default ItemDetail;
