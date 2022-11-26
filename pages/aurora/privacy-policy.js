import AuroraLayout from "../../layouts/AuroraLayout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const AuroraPrivacyPolicy = () => {
  return (
    <AuroraLayout>
      <Head>
        <title>Aurora | Privacy Policy</title>
      </Head>
      <div className="aurora-privacy">
        <Image
          src="/auroralogo.png"
          alt="auroralogoimg"
          className="logo"
          width={100}
          height={100}
        />
        <h1>Privacy Policy</h1>
        <h3>
          By being in a server with Aurora, you agree to your Discord user ID
          being stored for functional purposes only.
        </h3>
        <ul>
          <li>
            All data is stored using{" "}
            <Link href="https://mongodb.com/atlas" legacyBehavior>
              <a>MongoDB Atlas</a>
            </Link>{" "}
            and is subject to their ToS and Privacy Policy
          </li>
          <li>
            Aurora only stores and processes your Discord user ID along with
            your Aurora data (e.g. levels)
          </li>
          <li>No sensitive data is processed or stored</li>
        </ul>
      </div>
    </AuroraLayout>
  );
};

export default AuroraPrivacyPolicy;
