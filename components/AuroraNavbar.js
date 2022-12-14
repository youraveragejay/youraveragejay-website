import Link from "next/link";
import Image from "next/image";
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
        <h2>Aurora</h2>
      </div>

      <FaHome size={15} />
      <Link href="/aurora" legacyBehavior>
        <a>Home</a>
      </Link>

      <RiCodeSSlashLine size={15} />
      <Link href="/aurora/commands" legacyBehavior>
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
      <Link href="/aurora/invite" legacyBehavior>
        <a target="_blank">Add to server</a>
      </Link>
    </nav>
  );
};

export default Navbar;
