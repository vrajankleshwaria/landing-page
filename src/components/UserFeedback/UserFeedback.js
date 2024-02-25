import React from "react";

import styles from "./userFeedback.module.scss";
import commonStyles from "../styles.module.scss";

const UserFeedback = () => (
  <section id={styles.testimonials}>
    <div class={commonStyles.container}>
      <h2 className={styles.header}>What Users Say</h2>
      <div class={styles.testimonial}>
        <p>
          "Acme Note has completely changed the way I take notes. It's so simple
          and efficient!"
        </p>
        <cite>- John Doe</cite>
      </div>
      <div class={styles.testimonial}>
        <p>
          "I've tried many note-taking apps, but Acme Note is by far the best.
          Highly recommended!"
        </p>
        <cite>- Jane Smith</cite>
      </div>
    </div>
  </section>
);

export default UserFeedback;
