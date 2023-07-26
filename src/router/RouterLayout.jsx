import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const RouterLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RouterLayout;
