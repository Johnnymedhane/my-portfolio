import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useAppContext } from "../contexts/contextApi";

function AppLayout() {
  const { selectedNav } = useAppContext();
  const isRootRoute = selectedNav === ""
  return (
    <div className="app-layout">
      <Header />
      <div className="main-wrapper">
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    {  !isRootRoute && <Footer />}
    </div>
  );
}

export default AppLayout;
