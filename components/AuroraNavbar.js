import Link from "next/link";
import Image from "next/image";
import { FiLogIn } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaDiscord, FaHome } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { RiCodeSSlashLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              className="logoimg"
              alt="auroralogoimg"
              src="/auroralogo.png"
              width={75}
              height={75}
            />
          </a>
        </Link>
        <h2>The Aurora Project</h2>
      </div>

      <FaHome size={15} />
      <Link href="/the-aurora-project" legacyBehavior>
        <a>Home</a>
      </Link>

      <RiCodeSSlashLine size={15} />
      <Link href="/the-aurora-project/commands" legacyBehavior>
        <a>Commands</a>
      </Link>

      <GiSettingsKnobs size={15} />
      <Link href="/menu" legacyBehavior>
        <a>Dashboard</a>
      </Link>

      <FaDiscord size={15} />
      <Link href="https://discord.gg/pUmhbV586X" legacyBehavior>
        <a target="_blank">Discord Server</a>
      </Link>

      <RiAddCircleFill size={15} />
      <Link
        href="/the-aurora-project/invite"
        legacyBehavior
      >
        <a target="_blank">Add to server</a>
      </Link>

      <FiLogIn size={15} />
      <Link
        href="https://discord.com/api/oauth2/authorize?client_id=977647458677035008&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=identify%20email%20guilds%20guilds.join"
        legacyBehavior
      >
        <a>Login</a>
      </Link>
    </nav>
  );
};

export default Navbar;
