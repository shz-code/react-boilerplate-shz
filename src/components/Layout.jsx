import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
