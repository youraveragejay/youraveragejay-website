import AuroraLayout from "../../layouts/AuroraLayout";
import Image from "next/image";
import Link from "next/link";

const TheAuroraProject = () => {
  return (
    <AuroraLayout>
      <div className="aurora-about">
        <Image
          src="/auroralogo.png"
          alt="auroralogoimg"
          className="logo"
          width={100}
          height={100}
        />
        <h1>Aurora</h1>
        <p>
          Is a general purpose Discord bot, used for memes, moderation and all
          round fun for the server.
        </p>
        <div className="btndiv">
          <Link href="/aurora/commands" legacyBehavior>
            <a className="btn">View Commands</a>
          </Link>
        </div>
      </div>
    </AuroraLayout>
  );
};

export default TheAuroraProject;
