import React from "react";
import notemaker from "../../assets/images/noteTaker.webp";

import styles from "./workProcess.module.scss";
import commonStyles from "../styles.module.scss";

const WorkProcess = () => (
  <section className={commonStyles.container}>
    <div className={styles.workProcess}>
      <h2 className={styles.header}>How It works</h2>
      <div className={styles.content}>
        <img src={notemaker} className={styles.noteTaker} />
        <ul>
          <li>Sign up for an account</li>
          <li>Start creating and organizing your notes</li>
          <li>Sync across devices</li>
          <li>Access your notes anytime, anywhere</li>
        </ul>
      </div>
    </div>
  </section>
);

export default WorkProcess;
