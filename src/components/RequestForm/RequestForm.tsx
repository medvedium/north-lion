"use client";

import React, { useState } from "react";
import styles from "./RequestForm.module.css";
import InputMask from "react-input-mask";
import Link from "next/link";

const RequestForm = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    agreement: true,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "agreement") {
      setValues({ ...values, [event.target.name]: event.target.checked });
      return;
    } else {
      const { value, name } = event.target;
      setValues({ ...values, [name]: value });
    }
  };

  async function sendData(url: string, data: FormData) {
    setLoading(true);
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });
    if (!res.ok) {
      setLoading(false);
      throw new Error(`Не удалось отправить заявку, статус: ${res.status}`);
    }
    return res;
  }

  function handleResponse(res: Response) {
    if (res.ok) {
    }
    setLoading(false);
    setValues({
      name: "",
      phone: "",
      agreement: true,
    });
  }
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    sendData("/sendData.php", data)
      .then((res) => handleResponse(res))
      .catch((error) => console.error(error));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {loading && (
        <div className="overlay">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width="200"
            height="200"
            style={{
              shapeRendering: "auto",
              display: "block",
              background: "transparent",
              width: 64,
              height: 64,
            }}
            xmlnsXlink={"http://www.w3.org/1999/xlink"}
          >
            <g>
              <g transform="translate(50,50)">
                <g transform="scale(0.7)">
                  <circle fill="#2c2e3e" r="50" cy="0" cx="0"></circle>
                  <circle fill="#ffd336" r="15" cy="-28" cx="0">
                    <animateTransform
                      values="0 0 0;360 0 0"
                      keyTimes="0;1"
                      repeatCount="indefinite"
                      dur="2s"
                      type="rotate"
                      attributeName="transform"
                    ></animateTransform>
                  </circle>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
      <div className={styles.form__item}>
        <input
          className={styles.form__input}
          type="text"
          name="name"
          id={"name"}
          required
          onChange={(e) => handleChange(e)}
          value={values.name}
        />
        <label htmlFor={"name"} className={styles.form__label}>
          Ваше имя
        </label>
      </div>
      <div className={styles.form__item}>
        <InputMask
          mask={"+7 (999) 999-99-99"}
          className={styles.form__input}
          type="text"
          name="phone"
          id={"phone"}
          required
          onChange={(e) => handleChange(e)}
          value={values.phone}
        />
        <label htmlFor={"phone"} className={styles.form__label}>
          Номер телефона
        </label>
      </div>
      <div className={styles.form__item}>
        <input
          type="checkbox"
          name={"agreement"}
          id={"agreement"}
          onChange={(e) => handleChange(e)}
          checked={values.agreement}
          required
          className={styles.form__checkbox}
        />
        <label htmlFor="agreement">
          Согласие на обработку&nbsp;
          <Link className={`link ${styles.link}`} href="/agreement">
            персональных данных
          </Link>
        </label>
      </div>
      <input
        className={`${styles.form__input} ${styles.btn}`}
        type="submit"
        value="Отправить"
      />
    </form>
  );
};

export default RequestForm;
