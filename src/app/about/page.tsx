import styles from "./page.module.css";
import AboutDescription from "@/components/AboutDescription/AboutDescription";
import Team from "@/components/Team/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании | Агенство Недвижимости Северный Лев",
};
export default function Page() {
  return (
    <main className={styles.main}>
      <AboutDescription />
      <Team />
    </main>
  );
}
