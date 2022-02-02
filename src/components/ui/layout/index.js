import React from "react";
import styles from "./styles.module.css";

const Layout = ({ children, LayoutHeader }) => {
  return (
    <div className="container">
      <div className={`${styles.container} mt-5 mb-5`}>
        <div className="d-flex flex-column">
          <div  className={`border-bottom p-4 ${styles.margin_bottom}`}>
            {LayoutHeader && <LayoutHeader />}
          </div>
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
