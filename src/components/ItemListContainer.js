import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const itemsMock = [
  {
    id: "1",
    title: "GIRAFFE POSTER",
    description:
      "JIRAFA CON GOMA DE MASCAR – PÓSTER DE ANIMALES CON UNA JIRAFA CON UN GLOBO DE CHICLE EN LA BOCA, FONDO ROSA",
    price: "$ 1.500,00",
    pictureUrl:
      "https://desenio.es/bilder/artiklar/zoom/11769_2.jpg?imgwidth=435&qt=Jirafa%20con%20goma%20de%20mascar",
  },
  {
    id: "2",
    title: "SURFBOARDS POSTER",
    description:
      "SURFBOARDS POSTER – FOTOGRAFÍA DE UNAS TABLAS DE SURF COLORIDAS APOYADAS SOBRE DOS PALMERAS",
    price: "$ 1.990,00",
    pictureUrl:
      "https://desenio.es/bilder/artiklar/zoom/15989_2.jpg?imgwidth=435&qt=Surfboards%20Poster",
  },
  {
    id: "3",
    title: "EIFFEL TOWER POSTER",
    description:
      "TORRE EIFFEL EN BLANCO Y NEGRO – FOTOGRAFÍA EN BLANCO Y NEGRO DEL PRIMER PLANO DE UNA PARTE DE LA TORRE EIFFEL",
    price: "$ 2.200,00",
    pictureUrl:
      "https://desenio.es/bilder/artiklar/zoom/11330_2.jpg?imgwidth=435&qt=Torre%20Eiffel%20en%20blanco%20y%20negro",
  },
];

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(setItems(itemsMock));
        }, 2000);
      });
    };
    fetchItems();
  }, []);

  function addItem(qty) {
    console.log("Items añadidos: ", qty);
  }
  return (
    <>
      <div>{props.item}</div>
      <ItemCount initial={1} stock={5} onAdd={addItem} />
      <ItemList items={items} />
    </>
  );
}
export default ItemListContainer;
