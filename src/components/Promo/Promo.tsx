import React from "react";
import RequestForm from "@/components/RequestForm/RequestForm";

const Promo = () => {
  return (
    <section className={"container"}>
      <h2>Получите вашу выгоду</h2>
      <p style={{ marginBottom: "40px" }}>
        Заполните форму, получите промо код на профессиональную приемку квартиры
        в новостройке. Действительно при покупке квартиры через АН Северный Лев
      </p>
      <RequestForm />
    </section>
  );
};

export default Promo;
