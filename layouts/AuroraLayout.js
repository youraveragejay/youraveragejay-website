import AuroraNavbar from "../components/AuroraNavbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
