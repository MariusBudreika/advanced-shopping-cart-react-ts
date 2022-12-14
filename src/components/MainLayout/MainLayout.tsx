import React from "react";
import styles from "./MainLayout.module.scss";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default MainLayout;
