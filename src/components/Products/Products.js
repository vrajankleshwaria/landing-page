import React from "react";
import cx from "classnames";

import { MAIN_PRODUCTS } from "../../utils/constant";

import styles from "./product.module.scss";
import commonStyles from "../styles.module.scss";

const Card = ({ product }) => (
  <div className={styles.card}>
    <img src={product?.img} />
    <div className={styles.cardContent}>{product?.header}</div>
    <div className={styles.cardSubContent}>{product.description}</div>
    <a href="#learnmore" class={styles.learnMore}>
      Learn More
    </a>
  </div>
);

const Product = () => {
  return (
    <div className={(styles.container, styles.productContainer)}>
      <div className={styles.header}>
        Learn what Acme products can do for you.
      </div>
      <div className={styles.products}>
        {MAIN_PRODUCTS.map((product) => (
          <Card product={product} />
        ))}
      </div>
      <a
        href="#allproducts"
        class={cx(commonStyles.btn, commonStyles.lightBtn, styles.allProducts)}
      >
        View All Products
      </a>
    </div>
  );
};

export default Product;
