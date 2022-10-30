import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
      <Link href="/the-aurora-project" legacyBehavior>
        <a>The Aurora Project</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
