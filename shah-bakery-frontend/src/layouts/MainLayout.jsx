import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[var(--cream)] min-h-screen overflow-hidden">

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;