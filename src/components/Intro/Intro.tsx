"use client";

import React from "react";
import styles from "./Intro.module.css";
import ExportedImage from "next-image-export-optimizer";
import RequestForm from "@/components/RequestForm/RequestForm";

const Intro = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalVisibility = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <section className={styles.intro}>
        <div className={styles.introText}>
          <h1 className={styles.heading}>
            Недвижимость для&nbsp;жизни и&nbsp;инвестиций
          </h1>
          <p className={styles.subheading}>
            Подберем недвижимость под ваши цели за 15 минут и сделаем
            инвестиционный расчет интересующих объектов.
          </p>
          <button
            className="ui-button ui-button--dark"
            onClick={handleModalVisibility}
          >
            Подобрать недвижимость
          </button>
        </div>
        <div className={styles.introImage}>
          <ExportedImage
            src="/img/lionIntro.jpeg"
            alt="intro"
            width={600}
            height={600}
            className={styles.introBgLion}
            loading={"eager"}
          />
        </div>
      </section>
      {modalOpen && (
        <>
          <div className="backdrop" onClick={handleModalVisibility}></div>
          <div className="modal">
            <div className="modal-inner">
              <div
                className="close-modal"
                onClick={handleModalVisibility}
              ></div>
              <RequestForm />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Intro;
