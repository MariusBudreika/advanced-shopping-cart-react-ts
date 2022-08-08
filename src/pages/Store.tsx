import React from "react";
import StoreItem from "../components/StoreItem/StoreItem";
import storeItems from "../data/items.json";
import MainLayout from "../components/MainLayout/MainLayout";
import styles from "./Store.module.scss";

const Store = () => {
  return (
    <MainLayout>
      <h1>Store</h1>
      <div className={styles.list}>
        {storeItems.map((item) => (
          <StoreItem {...item} key={item.id} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Store;
