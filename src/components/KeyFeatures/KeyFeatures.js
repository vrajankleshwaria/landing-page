import React from "react";
import notemaker from "../../assets/images/noteTaker.webp";

import styles from "./keyFeature.module.scss";
import commonStyles from "../styles.module.scss";

const KeyFeatures = () => (
  <section className={commonStyles.container}>
    <div className={styles.keyFeatures}>
      <h2 className={styles.header}>Key Features</h2>
      <div className={styles.content}>
        <ul>
          <li>Easy-to-use interface</li>
          <li>synchronization</li>
          <li>Cross-platform compatibility</li>
          <li>support</li>
          <li>Advanced search and tagging</li>
        </ul>
        <img src={notemaker} className={styles.noteTaker} />
      </div>
    </div>
  </section>
);

export default KeyFeatures;
