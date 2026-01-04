import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import spaLogo from "../assets/spa-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-spa", label: "About SPA" },
  { to: "/programs", label: "Programs" },
  { to: "/membership", label: "Membership" },
  { to: "/governance", label: "Governance" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="spa-container flex items-center justify-between h-16">
        {/* Logo + text */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={spaLogo}
            alt="Somali Psychiatric Association logo"
            className="h-10 w-auto drop-shadow-sm"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold text-spa-dark leading-tight">
              Somali Psychiatric Association
            </span>
            <span className="text-[11px] text-slate-500">
              Ururka Dhakhaatiirta Maskaxda Soomaaliyeed
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-spa-primary font-semibold"
                    : "text-slate-600 hover:text-spa-primary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/membership"
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-spa-primary text-white shadow hover:bg-spa-teal transition-colors"
          >
            Join SPA
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-300 w-9 h-9 text-slate-600 hover:border-spa-primary hover:text-spa-primary transition-colors"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/98">
          <div className="spa-container py-3 flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-1 ${
                    isActive
                      ? "text-spa-primary font-semibold"
                      : "text-slate-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/membership"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-semibold bg-spa-primary text-white shadow hover:bg-spa-teal transition-colors"
            >
              Join SPA
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
