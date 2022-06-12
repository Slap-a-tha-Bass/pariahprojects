import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Card({ isLink, link, title, description }) {
  return (
    <div>
      {isLink ? (
        <div className={styles.card}>
          <Link href={link}>
            <div>
              <h2>{title} &rarr;</h2>
              <p>{description}</p>
            </div>
          </Link>
        </div>
      ) : (
        <div className={styles.card}>
          <h2>{title} &rarr;</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
