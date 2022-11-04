import MainLayout from "../layouts/MainLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <MainLayout>
      <Head>
        <title>youraveragejay | Projects</title>
      </Head>
      <div id="projects">
          <h1>My Projects</h1>
          <Image
            src="/auroralogo.png"
            alt="auroralogoimg"
            className="logo"
            width={100}
            height={100}
          />
          <h2>The Aurora Project</h2>
          <p>
            Enrich your Discord community with this all purpose general Discord
            bot. Aurora can be used for Reddit searches, moderation, music and
            much more.
          </p>
          <br />
          <div className="btndiv">
            <Link href="/the-aurora-project" legacyBehavior>
              <a className="btn">Learn More</a>
            </Link>
          </div>
          <br />
          <div className="btndiv">
            <Link href="/projects" legacyBehavior>
              <a className="btn">View All</a>
            </Link>
          </div>
        </div>
    </MainLayout>
  );
};

export default Contact;
