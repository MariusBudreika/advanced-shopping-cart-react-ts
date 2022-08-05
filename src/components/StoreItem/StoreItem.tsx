import React from "react";
import styles from "./StoreItem.module.scss";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} className={styles.cardImages} alt="" />
      <div className={styles.info}>
        <div className={styles.infoLabel}>{name}</div>
        <div className={styles.infoPrice}>${price}</div>
      </div>
    </div>
  );
};

export default StoreItem;
