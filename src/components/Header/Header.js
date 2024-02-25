import React from "react";
import cx from "classnames";

import logo from "../../assets/images/Logo.jpeg";

import styles from "./header.module.scss";
import commonStyles from "../styles.module.scss";

const KeyFeatures = () => (
  <header>
    <div class={cx(commonStyles.container, styles.container)}>
      <h1 className={styles.header}>
        <img src={logo} alt="Acme Logo" className={styles.logo} />
        Acme Note
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a class={cx(commonStyles.btn, styles.signUp)} href="#signup">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default KeyFeatures;
