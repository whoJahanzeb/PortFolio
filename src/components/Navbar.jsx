import { NavLink } from "react-router-dom";

function Navabr() {
  return (
    <>
      <header className="py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <ul className="flex lg:space-x-10 items-center mx-auto">
            <li>
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive
                    ? "text-zinc-400 bg-zinc-950 rounded-full px-6 py-2 font-semibold text-base hover:text-zinc-500"
                    : "text-base text-zinc-400 hover:text-zinc-500 font-semibold border border-zinc-800 rounded-full px-6 py-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={(navData) =>
                  navData.isActive
                    ? "text-zinc-400 bg-zinc-950 rounded-full px-6 py-2 font-semibold text-base hover:text-zinc-500"
                    : "text-base text-zinc-400 hover:text-zinc-500 font-semibold border border-zinc-800 rounded-full px-6 py-2"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={(navData) =>
                  navData.isActive
                    ? "text-zinc-400 bg-zinc-950 rounded-full px-6 py-2 font-semibold text-base hover:text-zinc-500"
                    : "text-base text-zinc-400 hover:text-zinc-500 font-semibold border border-zinc-800 rounded-full px-6 py-2"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(navData) =>
                  navData.isActive
                    ? "text-zinc-400 bg-zinc-950 rounded-full px-6 py-2 font-semibold text-base hover:text-zinc-500"
                    : "text-base text-zinc-400 hover:text-zinc-500 font-semibold border border-zinc-800 rounded-full px-6 py-2"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(navData) =>
                  navData.isActive
                    ? "text-zinc-400 bg-zinc-950 rounded-full px-6 py-2 font-semibold text-base hover:text-zinc-500"
                    : "text-base text-zinc-400 hover:text-zinc-500 font-semibold border border-zinc-800 rounded-full px-6 py-2"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Navabr;
