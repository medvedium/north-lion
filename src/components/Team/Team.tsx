import React from "react";
import styles from "./Team.module.css";
import TeamItem from "@/components/TeamItem/TeamItem";

const Team = () => {
  return (
    <section className="container">
      <h2>Наша команда</h2>
      <div className={styles.inner}>
        <TeamItem
          imageSrc={"/img/team/anastasiya.jpg"}
          imageWidth={959}
          imageHeight={1280}
          name={"Анастасия"}
          title={"Генеральный директор"}
        />
        <TeamItem
          imageSrc={"/img/team/irina.jpg"}
          imageWidth={884}
          imageHeight={884}
          name={"Ирина"}
          title={"Специалист по недвижимости"}
        />
        <TeamItem
          imageSrc={"/img/team/galina.jpg"}
          imageWidth={779}
          imageHeight={1280}
          name={"Галина"}
          title={"Специалист по недвижимости"}
        />
        <TeamItem
          imageSrc={"/img/team/sofia.jpg"}
          imageWidth={845}
          imageHeight={1280}
          name={"София"}
          title={"Специалист по недвижимости"}
        />
        <TeamItem
          imageSrc={"/img/team/anzhelika.jpg"}
          imageWidth={1280}
          imageHeight={852}
          name={"Анжелика"}
          title={"Специалист по недвижимости"}
        />
        <TeamItem
          imageSrc={"/img/team/youlya.jpg"}
          imageWidth={1179}
          imageHeight={786}
          name={"Юлия"}
          title={"Специалист по недвижимости"}
        />
      </div>
    </section>
  );
};

export default Team;
