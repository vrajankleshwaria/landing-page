import React from "react";
import cx from "classnames";

import styles from "./mainContent.module.scss";
import commonStyles from "../styles.module.scss";

const MainContent = () => (
  <section className={styles.mainContent}>
    <div class={commonStyles.container}>
      <h2 className="">Try Acme Note, Starter Suite for free.</h2>
      <p>
        Unite marketing, sales, and service in a single app. Try Acme Note
        Starter Suite today. There's nothing to install. No credit card
        required.
      </p>
      <a href="#trial" class={commonStyles.btn}>
        Start Free Trial
      </a>
      <a href="#demo" class={cx(commonStyles.btn, commonStyles.lightBtn)}>
        Watch Demo
      </a>
    </div>
  </section>
);

export default MainContent;
