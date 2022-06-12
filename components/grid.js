import styles from "../styles/Home.module.css";
import Card from "./card";

export default function Grid({
  isLink1,
  link1,
  title1,
  description1,
  isLink2,
  link2,
  title2,
  description2,
  isLink3,
  link3,
  title3,
  description3,
  isLink4,
  link4,
  title4,
  description4,
}) {
  return (
    <div className={styles.grid}>
      {<Card
        isLink={isLink1}
        link={link1}
        title={title1}
        description={description1}
      />}
      {isLink2 && <Card
        isLink={isLink2}
        link={link2}
        title={title2}
        description={description2}
      />}
      {isLink2 && <Card
        isLink={isLink3}
        link={link3}
        title={title3}
        description={description3}
      />}
      {isLink4 && <Card
        isLink={isLink4}
        link={link4}
        title={title4}
        description={description4}
      />}
    </div>
  );
}
