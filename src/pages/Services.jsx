// src/pages/Services.jsx
import React from "react";

const IconBadge = ({ variant = "cyan", children }) => {
  const variants = {
    cyan: "from-cyan-400 via-sky-500 to-blue-600",
    pink: "from-pink-500 via-fuchsia-500 to-purple-600",
    gray: "from-slate-200 via-slate-300 to-slate-500",
    indigo: "from-indigo-400 via-violet-500 to-purple-600",
    rose: "from-rose-500 via-pink-500 to-fuchsia-600",
    amber: "from-amber-400 via-orange-400 to-yellow-300",
  };

  return (
    <div className="relative w-12 h-12 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.55),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.35),transparent_55%)]" />
      <div className="relative w-full h-full flex items-center justify-center text-white drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)]">
        {children}
      </div>
    </div>
  );
};

const FilledIcon = ({ name }) => {
  const s = "w-[26px] h-[26px]";

  switch (name) {
    case "books":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 4.8c0-.99.81-1.8 1.8-1.8H18c.55 0 1 .45 1 1v15.7c0 .72-.58 1.3-1.3 1.3H7.3A2.3 2.3 0 0 1 5 18.7V4.8Z" fill="rgba(255,255,255,0.92)" />
          <path d="M7.2 6.8h9.6M7.2 9.7h9.6M7.2 12.6h7.2" stroke="rgba(0,0,0,0.25)" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M6.2 20.9c.2-1.1 1.16-1.9 2.3-1.9H19" stroke="rgba(0,0,0,0.25)" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case "target":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8.6" fill="rgba(255,255,255,0.92)" />
          <circle cx="12" cy="12" r="5.2" fill="rgba(0,0,0,0.10)" />
          <circle cx="12" cy="12" r="2.2" fill="rgba(0,0,0,0.18)" />
          <path d="M12 12l7-7" stroke="rgba(0,0,0,0.25)" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 5h3v3" stroke="rgba(0,0,0,0.25)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "link":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10.2 13.8a4.2 4.2 0 0 1 0-5.9l1.6-1.6a4.2 4.2 0 0 1 5.9 5.9l-1.1 1.1" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M13.8 10.2a4.2 4.2 0 0 1 0 5.9l-1.6 1.6a4.2 4.2 0 0 1-5.9-5.9l1.1-1.1" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "research":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 20h12" stroke="rgba(255,255,255,0.92)" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M10.2 14.8c.9-2.9 3-4.8 6.1-5.1" stroke="rgba(255,255,255,0.92)" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M9 4.6l6.3 6.3" stroke="rgba(0,0,0,0.18)" strokeWidth="2" strokeLinecap="round" />
          <path d="M14.6 3.8l5.2 5.2-2.2 2.2-5.2-5.2 2.2-2.2Z" fill="rgba(255,255,255,0.92)" />
          <circle cx="12" cy="12" r="1.6" fill="rgba(0,0,0,0.18)" />
        </svg>
      );

    case "policy":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 7.5h10.2c.9 0 1.8.7 1.8 1.8v8.2c0 1.1-.9 2-2 2H7.5c-1.4 0-2.5-1.1-2.5-2.5V9.2C5 8.2 5.9 7.5 7 7.5Z" fill="rgba(255,255,255,0.92)" />
          <path d="M9.2 7.5V6.2c0-1 0.8-1.7 1.7-1.7h2.2c1 0 1.7.8 1.7 1.7v1.3" stroke="rgba(0,0,0,0.22)" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M5 12h14" stroke="rgba(0,0,0,0.18)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "tele":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.2 6.5h11.6c.8 0 1.5.7 1.5 1.5v7.2c0 .8-.7 1.5-1.5 1.5H6.2c-.8 0-1.5-.7-1.5-1.5V8c0-.8.7-1.5 1.5-1.5Z" fill="rgba(255,255,255,0.92)" />
          <path d="M8 19.3h8" stroke="rgba(0,0,0,0.18)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 19.3l-.7-1.6h5.4L14 19.3" stroke="rgba(0,0,0,0.18)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "awareness":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.8 12.4v-2.8c0-.6.4-1 1-1h2.2l7.8-2.6c.7-.2 1.4.3 1.4 1v12c0 .7-.7 1.2-1.4 1L8 15.4H5.8c-.6 0-1-.4-1-1Z" fill="rgba(255,255,255,0.92)" />
          <path d="M8.8 15.6l1.3 3.2" stroke="rgba(0,0,0,0.18)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18.5 9.2c.9 1 1.3 2.6 0 3.6" stroke="rgba(0,0,0,0.22)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case "cert":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 5.6h10c1 0 1.8.8 1.8 1.8v2.4c0 3.8-2.8 6.8-6.8 6.8S5.2 13.6 5.2 9.8V7.4c0-1 .8-1.8 1.8-1.8Z" fill="rgba(255,255,255,0.92)" />
          <path d="M8.5 20.2h7" stroke="rgba(0,0,0,0.22)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 16.6v3.6" stroke="rgba(0,0,0,0.18)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6 7.2H4.6v1.3c0 2 1.6 3.6 3.6 3.6" stroke="rgba(0,0,0,0.18)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 7.2h1.4v1.3c0 2-1.6 3.6-3.6 3.6" stroke="rgba(0,0,0,0.18)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    default:
      return null;
  }
};

const services = [
  { title: "CPD Training", desc: "Professional workshops and continuous training", icon: "books", badge: "cyan", glow: "from-cyan-400 to-blue-500" },
  { title: "Annual Conferences", desc: "Conferences and educational seminars", icon: "target", badge: "pink", glow: "from-pink-500 to-rose-500" },
  { title: "Chain-Free Programs", desc: "Community-based care programs", icon: "link", badge: "gray", glow: "from-slate-200 to-slate-400" },
  { title: "Research Support", desc: "Research and publication support", icon: "research", badge: "indigo", glow: "from-indigo-400 to-purple-500" },
  { title: "Policy Advisory", desc: "Policy consultation and advocacy", icon: "policy", badge: "rose", glow: "from-rose-500 to-pink-500" },
  { title: "Tele-psychiatry", desc: "Remote consultation services", icon: "tele", badge: "cyan", glow: "from-cyan-400 to-blue-500" },
  { title: "Public Awareness", desc: "Community awareness campaigns", icon: "awareness", badge: "pink", glow: "from-fuchsia-500 to-purple-500" },
  { title: "Certifications", desc: "Professional certification issuance", icon: "cert", badge: "amber", glow: "from-amber-400 to-yellow-300" },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#050b2a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -left-24 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-48 -right-32 w-[760px] h-[760px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-16">
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-[12px] backdrop-blur">
            What We Offer
          </span>

          <h1 className="mt-5 text-[44px] md:text-[60px] font-extrabold tracking-tight text-white">
            Services & <span className="text-cyan-300">Programs</span>
          </h1>

          <p className="mt-3 text-white/60 text-[14px] md:text-[15px]">
            Comprehensive mental health services and professional development
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 overflow-hidden
                         transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-white/20
                         hover:shadow-[0_18px_55px_rgba(0,0,0,0.45)]"
            >
              <div
                className={`pointer-events-none absolute -top-10 left-0 right-0 h-24 bg-gradient-to-r ${s.glow}
                            opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-35`}
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
              </div>

              <div className="relative transition-transform duration-300 group-hover:scale-[1.08] group-hover:-rotate-[2deg]">
                <IconBadge variant={s.badge}>
                  <FilledIcon name={s.icon} />
                </IconBadge>
              </div>

              <h3 className="mt-4 text-white font-extrabold text-[16px] tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-white/60 text-[13px] leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-4 h-[2px] w-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
