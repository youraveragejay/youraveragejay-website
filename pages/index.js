import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
        <div id="about">
          <div>
            <h1>Self-taught full-stack developer</h1>
            <p>
              I am most experienced in Node.js, and have made projects <br />
              such as websites, APIs and Discord bots
            </p>
            <Link href="#projects" legacyBehavior>
              <a className="btn">My Projects</a>
            </Link>
          </div>
          <div>
            <Image
              src="/codeimg.png"
              alt="codeimg"
              width={450}
              height={350}
              className="codeimg"
              priority
            />
          </div>
        </div>
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
        <div id="contact">
          <h1>Contact</h1>
          <h3>Join the support discord</h3>
          <p>
            We are a community of like-minded developers making the world a more
            technological based place. Also we have cookies.
          </p>
          <br />
          <Link href="https://discord.gg/pUmhbV586X" legacyBehavior>
            <a className="btn" target="_blank">
              JOIN THE DISCORD
            </a>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
