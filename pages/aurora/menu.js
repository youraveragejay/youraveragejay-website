import Head from "next/head";
import AuroraLayout from "../../layouts/AuroraLayout";

const Menu = () => {
  return (
    <AuroraLayout>
      <Head>
        <title>The Aurora Project | Server Select</title>
      </Head>
      <div>
        <h1>Select a server</h1>
      </div>
    </AuroraLayout>
  );
};

export default Menu;
