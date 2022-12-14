import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import styles from "./StoreItem.module.scss";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className={styles.card}>
      <img src={imgUrl} className={styles.cardImages} alt="" />
      <div className={styles.info}>
        <span className={styles.infoLabel}>{name}</span>
        <span className={styles.infoPrice}>{formatCurrency(price)}</span>
      </div>
      <div className={styles.cardBottom}>
        {quantity < 1 ? (
          <button
            className={styles.addToCart}
            onClick={() => increaseCartQuantity(id)}
          >
            + Add To Cart
          </button>
        ) : (
          <div className={styles.cart}>
            <div className={styles.cartTop}>
              <button
                className={styles.cartTopBtn}
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <div className={styles.cartTopQuantity}>{quantity} in cart</div>
              <button
                className={styles.cartTopBtn}
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <div className={styles.cartBottom}>
              <button
                className={styles.cartBottomRemove}
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
