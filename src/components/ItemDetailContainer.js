import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import itemsMock from "../itemsMock";

function ItemDetailContainer(props) {
  const navigate = useNavigate();
  let { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    let itemToReturn = null;
    if (id) {
      itemToReturn = itemsMock.filter((i) => i.id === id)[0];
    } else {
      navigate("/");
    }
    const getItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(setItem(itemToReturn));
        }, 1000);
      });
    };
    getItem();
  }, [id, navigate]);

  return (
    <>
      {item ? (
        <ItemDetail itemDetail={item} />
      ) : (
        <Spinner className="mt-5" animation="border" />
      )}
    </>
  );
}
export default ItemDetailContainer;
