import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
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
        <a>About</a>
      </Link>

      <Link href="#projects" legacyBehavior>
        <a>Projects</a>
      </Link>

      <Link href="#contact" legacyBehavior>
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
