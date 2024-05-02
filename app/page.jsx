import Featured from "../components/Featured";
import CategoryList from "../components/CategoryList";
import CardList from "../components/CardList";
import styles from "./homepage.module.css";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        {/* <Menu /> */}
      </div>
    </div>
  );
}
