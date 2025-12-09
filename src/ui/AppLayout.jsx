import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";



function AppLayout() {
  return (
    <div className="app-layout">
      <Header />

      <div className="main-container">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
