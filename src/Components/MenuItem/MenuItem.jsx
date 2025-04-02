import React from "react";
import styles from "./MenuItem.module.css";
import CounterButton from "../CounterButton/CounterButton";

const MenuItem = ({
  item,
  cartContent,
  setCartContent,
  addToCartButtonActive,
  setAddToCartButtonActive,
  itemQuantity,
}) => {
  const addItemToCart = () => {
    setCartContent((prev) => {
      // Find existing item (does it exist in the cart)
      const itemIndex = prev.findIndex(
        (cartItem) => cartItem.menuItemNum === item.id
      ); // checking if the cart item is in the cart with id

      // Add item of non existing + 1
      if (itemIndex === -1) {
        return [...prev, { menuItemNum: item.id, qty: 1 }];
      }

      // Add IF exist (adding existing + 1)
      const updatedCart = [...prev]; // make a clone of prev
      updatedCart[itemIndex] = {
        ...updatedCart[itemIndex],
        qty: updatedCart[itemIndex].qty + 1,
      };
      return updatedCart;
    });
  };

  const subtractItemFromCart = () => {
    setCartContent((prev) => {
      // Find existing item
      const itemIndex = prev.findIndex(
        (cartItem) => cartItem.menuItemNum === item.id
      );

      // If non existing return same refernce
      if (itemIndex === -1) return prev;

      // Clone the specific item
      const updateItem = { ...prev[itemIndex], qty: prev[itemIndex].qty - 1 };

      // Create new cart array
      const updateCart = prev.map((item, i) =>
        i === itemIndex ? updateItem : item
      );

      // Filter out items where quantity reaches 0
      // _, is for finding the index as i is for the cart item
      return updateItem.qty === 0
        ? updateCart.filter((_) => i !== itemIndex)
        : updateCart;
    });
  };

  return (
    <div className={styles.menuItem}>
      <img src={item.imageUrl} />
      {itemQuantity || addToCartButtonActive == item.id ? (
        <CounterButton
          addItemToCart={addItemToCart}
          subtractItemFromCart={subtractItemFromCart}
          itemQuantity={itemQuantity}
        ></CounterButton>
      ) : (
        <button onClick={() => setAddToCartButtonActive(item.id)}>
          Add to Cart
        </button>
        // hvis item quanitty er mer enn null så vil CounterButton bli trykket eller hvis ikke finnes i handlekurv eller ikke har blitt trykket på så er det vanlig button som blir aktiv
      )}
    </div>
  );
};

export default MenuItem;
