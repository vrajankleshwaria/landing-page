import React from "react";
import cx from "classnames";

import styles from "./footer.module.scss";
import commonStyles from "../styles.module.scss";

const Footer = () => (
  <footer>
    <div class={cx(commonStyles.container, styles.container)}>
      <p>
        Contact us:{" "}
        <a href="mailto:info@acmenote.com" className={styles.mail}>
          info@acmenote.com
        </a>{" "}
        | Phone: <span className={styles.phone}>123-456-7890</span>
      </p>
      <ul class={styles.socialLinks}>
        <li>
          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
