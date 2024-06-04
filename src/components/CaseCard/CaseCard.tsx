import React from "react";
import styles from "./CaseCard.module.css";
import ExportedImage from "next-image-export-optimizer";

export interface CaseCardProps {
  image: string;
}

const CaseCard = ({ image }: CaseCardProps) => {
  return (
    <div className={styles.card}>
      <ExportedImage
        src={image}
        alt={"case image"}
        width={1280}
        height={960}
        className={styles.image}
      />
    </div>
  );
};

export default CaseCard;
