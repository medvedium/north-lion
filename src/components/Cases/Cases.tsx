import React from "react";
import styles from "./Cases.module.css";
import CaseCard from "@/components/CaseCard/CaseCard";

const Cases = () => {
  return (
    <section className={"container"}>
      <h2 className={styles.heading}>Наши кейсы</h2>
      <div className={styles.inner}>
        <CaseCard image={"/img/case1.jpeg"} />
        <CaseCard image={"/img/case2.jpeg"} />
        <CaseCard image={"/img/case3.jpeg"} />
        <CaseCard image={"/img/case4.jpeg"} />
      </div>
    </section>
  );
};

export default Cases;
