"use client";

import React, { useEffect } from "react";
import { FaPlus, FaRocketchat } from "react-icons/fa";
import styles from "./CallBack.module.css";
import Link from "next/link";
import RequestForm from "@/components/RequestForm/RequestForm";
import useWindowSize from "@/hooks/useWindowSize";

const CallBack = () => {
  const [isCallbackOpen, setIsCallbackOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 991) {
      setIsCallbackOpen(false);
    } else {
      setIsCallbackOpen(true);
    }
  }, [size]);

  const toggleCallback = () => {
    setIsCallbackOpen(!isCallbackOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div onClick={toggleCallback} className={styles.flying}>
        {isCallbackOpen ? (
          <FaPlus
            className={styles.icon}
            style={{ rotate: "45deg" }}
            onClick={toggleCallback}
          />
        ) : (
          <FaRocketchat
            className={`${styles.icon} ${isCallbackOpen && styles.active}`}
          />
        )}
      </div>
      <div
        className={`${styles.callback} ${
          isCallbackOpen ? styles.callback__open : ""
        }`}
      >
        <div className={styles.content}>
          <button className="ui-button ui-button--dark" onClick={toggleModal}>
            Оставить заявку
          </button>
          <Link className="ui-button ui-button--dark" href={"tel:+79213700380"}>
            Позвонить
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <div>
          <div className="backdrop" onClick={toggleModal}></div>
          <div className="modal">
            <div className="modal-inner">
              <div className="close-modal" onClick={toggleModal}></div>
              <RequestForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CallBack;
