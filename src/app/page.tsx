import styles from "./page.module.css";
import Intro from "@/components/Intro/Intro";
import Features from "@/components/Features/Features";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import Map from "@/components/Map/Map";
import Cases from "@/components/Cases/Cases";
import Divider from "@/components/Divider/Divider";
import Promo from "@/components/Promo/Promo";
import React from "react";

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <Intro />
        <HomeAbout />
        <Divider>
          <ul>
            <li>Не нужно искать специалистов в разных местах</li>
            <li>Юридическое сопровождение оказывает наш штатный юрист</li>
            <li>Все Ваши потребности закроем в рамках нашей компании!</li>
          </ul>
        </Divider>
        <Features />
        <Divider>
          <b>Не откладывайте ваши жилищные вопросы на потом!</b>
          <i>Обратитесь к нам прямо сейчас!</i>
        </Divider>
        <Map />
        <Divider>
          <ul>
            <li>Индивидуальный подход к каждой сделке</li>
            <li>
              Готовы помочь Вам во всех ситуациях, связанных с недвижимостью
            </li>
            <li>Полное сопровождение сделки! Мы ценим Ваше время и комфорт!</li>
          </ul>
        </Divider>
        <Cases />
        <Promo />
      </main>
    </>
  );
}
