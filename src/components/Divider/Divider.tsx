import React from "react";
import styles from "./Divider.module.css";
import ExportedImage from "next-image-export-optimizer";

export interface DividerProps {
  children?: React.ReactNode;
}

const Divider = ({ children }: DividerProps) => {
  return (
    <section className={"container"}>
      <div className={styles.divider}>
        <ExportedImage
          src={"/img/logo.svg"}
          alt={"company logo"}
          width={80}
          height={80}
          className={styles.image}
        />
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};

export default Divider;
