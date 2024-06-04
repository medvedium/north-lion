"use client";

import React from "react";
import styles from "./FeaturesItem.module.css";
import ExportedImage from "next-image-export-optimizer";

export interface FeaturesItemProps {
  title: string;
  children: React.ReactNode;
}

const FeaturesItem = ({ title, children }: FeaturesItemProps) => {
  return (
    <div className={styles.item}>
      <span className={styles.heading}>{title}</span>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FeaturesItem;
