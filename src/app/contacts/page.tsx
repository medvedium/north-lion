import styles from "./page.module.css";
import Link from "next/link";
import { FaAt, FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import RequestForm from "@/components/RequestForm/RequestForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Контакты | Агенство Недвижимости Северный Лев",
};
export default function Page() {
  return (
    <main className={styles.main}>
      <section className={"container"}>
        <h2>Наши контакты</h2>
        <p style={{ marginBottom: "20px" }}>
          Вы можете связаться с нами по следующим контактным данным:
        </p>
        <p className={styles.contacts_item}>
          <FaPhoneAlt color={"var(--primary-color)"} />
          <Link className={"link"} href={"tel:+79213700380"}>
            +7 (921) 370-03-80
          </Link>
        </p>
        <p className={styles.contacts_item}>
          <FaAt color={"var(--primary-color)"} />
          <Link className={"link"} href={"mailto:A9213700380@YANDEX.RU"}>
            A9213700380@YANDEX.RU
          </Link>
        </p>
        <h2 style={{ marginTop: "40px" }}>Мы в социальных сетях</h2>
        <p className={styles.contacts_item}>
          <FaTelegramPlane color={"var(--primary-color)"} />
          <Link className={"link"} href={"https://t.me/nedvigimost78"}>
            Telegram
          </Link>
        </p>
        <p className={styles.contacts_item}>
          <FaWhatsapp color={"var(--primary-color)"} />
          <Link className={"link"} href={"https://wa.me/79213700380"}>
            WhatsApp
          </Link>
        </p>
        <div style={{ marginTop: "40px" }}>
          <p style={{ marginBottom: "40px" }}>
            Либо оставьте ваши данные и мы обязательно Вам перезвоним
          </p>
          <RequestForm />
        </div>
      </section>
    </main>
  );
}
