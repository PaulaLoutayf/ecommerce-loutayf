import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const itemMock = {
  id: "1",
  title: "GIRAFFE POSTER",
  description:
    "JIRAFA CON GOMA DE MASCAR – PÓSTER DE ANIMALES CON UNA JIRAFA CON UN GLOBO DE CHICLE EN LA BOCA, FONDO ROSA",
  price: "$ 1.500,00",
  pictureUrl:
    "https://desenio.es/bilder/artiklar/zoom/11769_2.jpg?imgwidth=435&qt=Jirafa%20con%20goma%20de%20mascar",
};

function ItemDetailContainer(props) {
  const [item, setItem] = useState();

  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(setItem(itemMock));
        }, 2000);
      });
    };
    getItem();
  }, []);

  return (
    <>
      <ItemDetail itemDetail={item} />
    </>
  );
}
export default ItemDetailContainer;
