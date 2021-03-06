import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  function getFromCart(itemId) {
    return cart.find((item) => item.id === itemId);
  }

  function addItem(item, qty) {
    if (isInCart(item.id)) {
      const i = getFromCart(item.id);
      i.qty = i.qty + qty;
      removeItem(item.id);
      setCart([...cart, i]);
    } else {
      const newItem = { ...item, qty };
      setCart([...cart, newItem]);
    }
  }

  function removeItem(itemId) {
    const newList = cart.filter((item) => item.id !== itemId);
    setCart(newList);
  }

  function clear() {
    setCart([]);
  }

  function isInCart(itemId) {
    return itemId === undefined ? false : getFromCart(itemId);
  }

  function getTotal() {
    const nums = cart.map((i) => i.priceNum * i.qty);
    return cart.length === 0 ? 0 : nums.reduce((a, b) => a + b);
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
