import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Наша жизнь | Агенство Недвижимости Северный Лев",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={"container"}>Наша жизнь</div>
    </main>
  );
}
