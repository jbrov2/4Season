import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Intake", to: "/intake" },
  { label: "Hybrid Training", to: "/hybrid-training" },
  { label: "Progress", to: "/progress" },
  { label: "Farm Live Feed", to: "/live-feed" },
  { label: "Media Archive", to: "/media-archive" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-20 border-b border-brand-dark/15 bg-white">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-xl font-black text-brand-dark">
          4 Seasons <span className="text-brand">Harvest</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="nav-links"
          className="rounded-lg border border-brand-dark/20 px-3 py-2 text-sm font-bold text-ink md:hidden"
        >
          Menu
        </button>

        <ul
          id="nav-links"
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-18 flex-col gap-0 border-b border-brand-dark/15 bg-white px-6 pb-4 md:static md:flex md:flex-row md:gap-7 md:border-0 md:p-0`}
        >
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block border-b-2 py-3 text-[15px] font-medium hover:border-brand hover:text-brand md:py-1.5 ${
                    isActive
                      ? "border-brand text-brand"
                      : "border-transparent text-ink"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
