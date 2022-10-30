import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <Head>
          <title>youraveragejay | Main Site</title>
          <meta
            name="description"
            content="The official site of youraverageajay"
          />
        </Head>
      </div>
    </MainLayout>
  );
}
