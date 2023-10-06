import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/NavBar/Footer";

const Root = () => {
  return (
    <div className="bg-base-200">
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
