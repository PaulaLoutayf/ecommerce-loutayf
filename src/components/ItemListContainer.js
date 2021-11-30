import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ItemList from "./ItemList";
import itemsMock from "../itemsMock";

function ItemListContainer(props) {
  let { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      let itemsToReturn = [];
      if (categoryId) {
        itemsToReturn = itemsMock.filter((i) => i.categoryId === categoryId);
      } else {
        itemsToReturn = itemsMock;
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(setItems(itemsToReturn));
        }, 1000);
      });
    };
    fetchItems();
  }, [categoryId]);

  return (
    <>
      <div>{props.item}</div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <Spinner className="mt-5" animation="border" />
      )}
    </>
  );
}
export default ItemListContainer;
