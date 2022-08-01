import React from "react";
import CartButton from "../CartButton/CartButton";
import styles from "./Navbar.module.scss";
import NavItem from "./NavItem";

export const Navbar = () => {
  const navigationLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Store", path: "/store" },
  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {navigationLinks.map((navigationLink) => (
          <li className={styles.navList}>
            <NavItem title={navigationLink.title} path={navigationLink.path} />
          </li>
        ))}
      </ul>
      <CartButton />
    </nav>
  );
};
