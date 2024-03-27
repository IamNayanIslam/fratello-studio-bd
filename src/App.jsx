import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Outlet />
      <Footer />
      <ToastContainer />

      {/*   <header>
    <div className="full-screen">
      <Navbar/>
    </div>
  </header> */}
    </>
  );
};

export default App;
