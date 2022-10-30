import Image from "next/image";
import Link from "next/link";

const AuroraNavbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          className="logoimg"
          src="/logo.png"
          alt="logo"
          height={115}
          width={115}
        />
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/the-aurora-project/commands" legacyBehavior>
        <a>Commands</a>
      </Link>
      <Link href="https://discord.com/api/oauth2/authorize?client_id=977647458677035008&permissions=8&scope=bot" legacyBehavior>
        <a target="_blank">Invite to server</a>
      </Link>
    </nav>
  );
};

export default AuroraNavbar;
