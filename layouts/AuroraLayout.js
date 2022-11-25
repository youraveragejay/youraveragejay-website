import AuroraNavbar from "../components/AuroraNavbar";
import Footer from "../components/Footer";
import Head from "next/head";

const AuroraLayout = ({ children }) => {
  return (
    <div>
      <AuroraNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default AuroraLayout;
