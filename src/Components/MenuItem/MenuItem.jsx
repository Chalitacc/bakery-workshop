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

  return (
    <div className={styles.menuItem}>
      <img src={item.imageUrl} />
      {itemQuantity || addToCartButtonActive == item.id ? (
        <CounterButton
          addItemToCart={addItemToCart}
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
