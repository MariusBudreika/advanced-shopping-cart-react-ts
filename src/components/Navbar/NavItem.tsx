import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavItem.module.scss";

interface NavLinkProps {
  title: string;
  path: string;
}

const NavItem: React.FC<NavLinkProps> = ({ title, path }) => {
  return (
    <>
      <Link to={path} className={styles.link}>
        {title}
      </Link>
    </>
  );
};

export default NavItem;
