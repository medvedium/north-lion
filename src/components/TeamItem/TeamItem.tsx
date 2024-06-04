import React from "react";
import styles from "./TeamItem.module.css";
import ExportedImage from "next-image-export-optimizer";

type TeamItemProps = {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  name: string;
  title: string;
};

const MyComponent = ({
  imageSrc,
  name,
  title,
  imageWidth,
  imageHeight,
}: TeamItemProps) => {
  return (
    <div>
      <ExportedImage
        src={imageSrc}
        alt={name}
        width={imageWidth}
        height={imageHeight}
        className={styles.image}
      />

      <p className={styles.name}>{name}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default MyComponent;
