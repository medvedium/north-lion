import React from "react";
import styles from "./Map.module.css";
import ExportedImage from "next-image-export-optimizer";

const Map = () => {
  return (
    <section className={"container"}>
      <div className={styles.container}>
        <h2>Работаем в более чем 20 городах и 4 странах</h2>
        <br />
        <ExportedImage
          src={"/img/map.svg"}
          alt={"map"}
          width={800}
          height={400}
          className={styles.map}
        />
        {/*<svg width="1000" height="600" xmlns="http://www.w3.org/2000/svg">*/}
        {/*  <rect width="100%" height="100%" fill="#e5e5e5" />*/}
        {/*  <circle cx="440" cy="160" r="4" fill="red" />*/}
        {/*  <text x="450" y="160" font-size="12">*/}
        {/*    Санкт-Петербург*/}
        {/*  </text>*/}
        {/*  <circle cx="480" cy="220" r="4" fill="red" />*/}
        {/*  <text x="490" y="220" font-size="12">*/}
        {/*    Владимир*/}
        {/*  </text>*/}
        {/*  <circle cx="470" cy="290" r="4" fill="red" />*/}
        {/*  <text x="480" y="290" font-size="12">*/}
        {/*    Воронеж*/}
        {/*  </text>*/}
        {/*  <circle cx="900" cy="100" r="4" fill="red" />*/}
        {/*  <text x="910" y="100" font-size="12">*/}
        {/*    Колыма*/}
        {/*  </text>*/}
        {/*  <circle cx="600" cy="250" r="4" fill="red" />*/}
        {/*  <text x="610" y="250" font-size="12">*/}
        {/*    Екатеринбург*/}
        {/*  </text>*/}
        {/*  <circle cx="550" cy="240" r="4" fill="red" />*/}
        {/*  <text x="560" y="240" font-size="12">*/}
        {/*    Ижевск*/}
        {/*  </text>*/}
        {/*  <circle cx="540" cy="230" r="4" fill="red" />*/}
        {/*  <text x="550" y="230" font-size="12">*/}
        {/*    Казань*/}
        {/*  </text>*/}
        {/*  <circle cx="380" cy="180" r="4" fill="red" />*/}
        {/*  <text x="390" y="180" font-size="12">*/}
        {/*    Калининград*/}
        {/*  </text>*/}
        {/*  <circle cx="520" cy="210" r="4" fill="red" />*/}
        {/*  <text x="530" y="210" font-size="12">*/}
        {/*    Киров*/}
        {/*  </text>*/}
        {/*  <circle cx="470" cy="350" r="4" fill="red" />*/}
        {/*  <text x="480" y="350" font-size="12">*/}
        {/*    Краснодар*/}
        {/*  </text>*/}
        {/*  <circle cx="470" cy="270" r="4" fill="red" />*/}
        {/*  <text x="480" y="270" font-size="12">*/}
        {/*    Липецк*/}
        {/*  </text>*/}
        {/*  <circle cx="460" cy="220" r="4" fill="red" />*/}
        {/*  <text x="470" y="220" font-size="12">*/}
        {/*    Москва*/}
        {/*  </text>*/}
        {/*  <circle cx="500" cy="220" r="4" fill="red" />*/}
        {/*  <text x="510" y="220" font-size="12">*/}
        {/*    Нижний Новгород*/}
        {/*  </text>*/}
        {/*  <circle cx="700" cy="250" r="4" fill="red" />*/}
        {/*  <text x="710" y="250" font-size="12">*/}
        {/*    Новосибирск*/}
        {/*  </text>*/}
        {/*  <circle cx="510" cy="250" r="4" fill="red" />*/}
        {/*  <text x="520" y="250" font-size="12">*/}
        {/*    Пенза*/}
        {/*  </text>*/}
        {/*  <circle cx="580" cy="220" r="4" fill="red" />*/}
        {/*  <text x="590" y="220" font-size="12">*/}
        {/*    Пермь*/}
        {/*  </text>*/}
        {/*  <circle cx="480" cy="340" r="4" fill="red" />*/}
        {/*  <text x="490" y="340" font-size="12">*/}
        {/*    Ростов-на-Дону*/}
        {/*  </text>*/}
        {/*  <circle cx="530" cy="260" r="4" fill="red" />*/}
        {/*  <text x="540" y="260" font-size="12">*/}
        {/*    Самара*/}
        {/*  </text>*/}
        {/*  <circle cx="470" cy="360" r="4" fill="red" />*/}
        {/*  <text x="480" y="360" font-size="12">*/}
        {/*    Сочи*/}
        {/*  </text>*/}
        {/*  <circle cx="570" cy="260" r="4" fill="red" />*/}
        {/*  <text x="580" y="260" font-size="12">*/}
        {/*    Уфа*/}
        {/*  </text>*/}
        {/*  <circle cx="600" cy="280" r="4" fill="red" />*/}
        {/*  <text x="610" y="280" font-size="12">*/}
        {/*    Челябинск*/}
        {/*  </text>*/}
        {/*  <circle cx="800" cy="500" r="4" fill="blue" />*/}
        {/*  <text x="810" y="500" font-size="12">*/}
        {/*    Бали*/}
        {/*  </text>*/}
        {/*  <circle cx="600" cy="350" r="4" fill="blue" />*/}
        {/*  <text x="610" y="350" font-size="12">*/}
        {/*    Дубай*/}
        {/*  </text>*/}
        {/*  <circle cx="750" cy="450" r="4" fill="blue" />*/}
        {/*  <text x="760" y="450" font-size="12">*/}
        {/*    Таиланд*/}
        {/*  </text>*/}
        {/*  <circle cx="500" cy="320" r="4" fill="blue" />*/}
        {/*  <text x="510" y="320" font-size="12">*/}
        {/*    Турция*/}
        {/*  </text>*/}
        {/*</svg>*/}
      </div>
    </section>
  );
};

export default Map;
