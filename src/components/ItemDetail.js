function ItemDetail({ itemDetail }) {
  return (
    <div className="item-detail">
      <div>
        <img src={itemDetail.pictureUrl} alt={itemDetail.description} />
      </div>
      <div>
        <h1 className="item-detail-title">{itemDetail.title}</h1>
        <h2 className="item-detail-price">{itemDetail.price}</h2>
        <h3 className="item-detail-description">{itemDetail.description}</h3>
      </div>
    </div>
  );
}
export default ItemDetail;
