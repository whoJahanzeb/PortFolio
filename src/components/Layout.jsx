import { Outlet } from "react-router-dom";
import Navabr from "./Navbar";

function Layout() {
  return (
    <>
      <div className="bg-zinc-950">
        <div className="max-w-7xl mx-auto bg-zinc-900 px-20">
          <div className="max-w-4xl mx-auto">
            <Navabr />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
export default Layout;
