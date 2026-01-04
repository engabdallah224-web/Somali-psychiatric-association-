import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import spaLogo from "../assets/spa-logo.png";

const NAV = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Objectives", id: "objectives" },
  { label: "Services", id: "services" },
  { label: "Membership", id: "membership" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const cx = (...c) => c.filter(Boolean).join(" ");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const headerOffset = useMemo(() => {
    // fallback haddii ref uusan weli ready ahayn
    return headerRef.current?.offsetHeight ? headerRef.current.offsetHeight + 12 : 84;
  }, [headerRef.current?.offsetHeight]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Click handler: always go to home sections
  const go = (id) => {
    setOpen(false);

    // haddii aan home joogin -> u soco /#id
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    // haddii home joogo -> smooth scroll
    // update url hash (without jumping)
    if (window.location.hash !== `#${id}`) {
      window.history.replaceState(null, "", `#${id}`);
    }
    scrollToId(id);
  };

  // When route/hash changes (ex: navigate("/#services")) -> scroll after render
  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = window.location.hash?.replace("#", "");
    if (!hash) return;

    const t = setTimeout(() => {
      scrollToId(hash);
    }, 120);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.key]);

  // Active section observer (only on Home)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const ids = NAV.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (best?.target?.id) setActive(best.target.id);
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: `-${headerOffset}px 0px -45% 0px`,
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname, headerOffset]);

  // Close mobile menu on resize (desktop)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // If not on home, keep highlight based on hash if any, else none
  useEffect(() => {
    if (location.pathname === "/") return;
    const hash = window.location.hash?.replace("#", "");
    if (hash && NAV.some((n) => n.id === hash)) setActive(hash);
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className={cx(
        "sticky top-0 z-50",
        "bg-[#050b2a]/75 backdrop-blur-xl",
        "border-b border-white/10"
      )}
    >
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/#home" onClick={(e) => (location.pathname === "/" ? (e.preventDefault(), go("home")) : null)} className="flex items-center gap-3">
          <img
            src={spaLogo}
            alt="SPA"
            className="w-10 h-10 rounded-xl bg-white/90 p-1 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          />
          <div className="leading-tight">
            <div className="text-white font-extrabold text-[14px] sm:text-[15px] tracking-tight">
              Somali Psychiatric Association
            </div>
            <div className="text-white/60 text-[12px]">Mental Health Excellence</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV.map((n) => {
            const isActive = active === n.id && location.pathname === "/";
            return (
              <Link
                key={n.id}
                to={`/#${n.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(n.id);
                }}
                className={cx(
                  "px-4 py-2 rounded-full text-[13px] font-semibold",
                  "transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-r from-teal-400 to-blue-500 text-slate-900 shadow-[0_12px_30px_rgba(56,189,248,0.25)]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className={cx(
            "lg:hidden w-10 h-10 rounded-xl",
            "bg-white/10 border border-white/15 text-white",
            "flex items-center justify-center",
            "transition hover:bg-white/15"
          )}
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={cx("transition-transform duration-300", open ? "rotate-90" : "rotate-0")}>
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile menu (animated) */}
      <div
        className={cx(
          "lg:hidden overflow-hidden border-t border-white/10",
          "bg-[#050b2a]/92 backdrop-blur-xl",
          "transition-all duration-300",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
          {NAV.map((n) => {
            const isActive = active === n.id && location.pathname === "/";
            return (
              <Link
                key={n.id}
                to={`/#${n.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(n.id);
                }}
                className={cx(
                  "w-full text-left px-4 py-3 rounded-xl text-[14px] font-semibold",
                  "transition-all duration-300",
                  "active:scale-[0.99]",
                  isActive
                    ? "bg-gradient-to-r from-teal-400 to-blue-500 text-slate-900"
                    : "text-white/85 hover:bg-white/10"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
