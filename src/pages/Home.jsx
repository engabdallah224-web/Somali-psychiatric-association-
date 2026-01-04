// src/pages/Home.jsx
import { useEffect, useMemo, useState } from "react";

import About from "./About.jsx";
import Objectives from "./Objectives.jsx";
import Services from "./Services.jsx";
import Membership from "./Membership.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";

import heroDoctor from "../assets/doctor-hero.jpg";

// ---- count up hook
function useCountUp(target, duration = 1200, start = 1) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let raf = 0;
    const startTs = performance.now();
    const from = start;
    const to = target;

    const tick = (ts) => {
      const t = Math.min(1, (ts - startTs) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.round(from + (to - from) * eased);
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return value;
}

const HEADER_OFFSET = 84;

export default function Home() {
  const members = useCountUp(500, 1400, 1);
  const programs = useCountUp(50, 1300, 1);
  const branches = useCountUp(5, 1100, 1);

  const stats = useMemo(
    () => [
      { value: members, suffix: "+", label: "Members" },
      { value: programs, suffix: "+", label: "Programs" },
      { value: branches, suffix: "", label: "Branches" },
    ],
    [members, programs, branches]
  );

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onScrollTo = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <>
      {/* ================= HERO / HOME ================= */}
      <section id="home" className="scroll-mt-[90px] relative overflow-hidden bg-[#050b2a]">
        {/* background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-56 -right-40 w-[720px] h-[720px] rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-16 md:pb-20">
          {/* ✅ Mobile: text then image | Desktop: 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* LEFT */}
            <div className="order-1">
              {/* top pill (mobile centered) */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={onScrollTo("about")}
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] md:text-[13px] font-semibold
                    bg-white/10 text-teal-200 border border-white/15 backdrop-blur
                    hover:bg-white/12 hover:border-white/25 transition-all duration-300"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-400/15 border border-teal-300/20">
                    ✦
                  </span>
                  <span className="tracking-wide">Leading Mental Health in Somalia</span>
                  <span className="opacity-70 group-hover:opacity-100 transition">→</span>
                </button>
              </div>

              {/* title (mobile centered) */}
              <h1 className="mt-6 text-white font-extrabold leading-[1.05] tracking-tight
                             text-[38px] sm:text-[50px] xl:text-[64px]
                             text-center lg:text-left">
                Transforming{" "}
                <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Mental Healthcare
                </span>{" "}
                in Somalia
              </h1>

              {/* paragraph (mobile centered) */}
              <p className="mt-5 text-white/70 text-[14px] md:text-[15px] leading-relaxed max-w-xl
                            text-center lg:text-left mx-auto lg:mx-0">
                The Somali Psychiatric Association (SPA) is a professional organization dedicated to uniting
                psychiatrists, researchers, and mental health professionals across Somalia.
              </p>

              {/* buttons (mobile centered) */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#membership"
                  onClick={onScrollTo("membership")}
                  className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-[14px]
                    bg-gradient-to-r from-teal-400 to-blue-500 text-slate-900
                    shadow-[0_14px_30px_rgba(0,0,0,0.35)]
                    hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)]
                    hover:scale-[1.03] active:scale-[0.99]
                    transition-all duration-300"
                >
                  <span>Join Us Today</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
                </a>

                <a
                  href="#about"
                  onClick={onScrollTo("about")}
                  className="group inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold text-[14px]
                    border border-teal-300/35 text-teal-200 bg-white/5 backdrop-blur
                    hover:bg-white/10 hover:border-teal-200/60 hover:text-white
                    transition-all duration-300"
                >
                  Learn More
                </a>
              </div>

              {/* ✅ stats (mobile centered) */}
              <div className="mt-10 sm:mt-12 max-w-md mx-auto lg:mx-0">
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center lg:text-left">
                      <div className="text-teal-200 text-[24px] sm:text-[28px] md:text-[30px] font-extrabold tracking-tight">
                        {s.value}
                        {s.suffix}
                      </div>
                      <div className="text-white/50 text-[11px] sm:text-[12px] md:text-[13px] mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="order-2 relative">
              {/* frame glow */}
              <div className="absolute -inset-5 rounded-[28px] bg-gradient-to-r from-teal-400/20 to-blue-500/20 blur-2xl" />

              <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                <img
                  src={heroDoctor}
                  alt="SPA Mental Health Professional"
                  className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] object-cover object-[center_15%] opacity-[0.96]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-black/10" />

                {/* ✅ badge: mobile center-bottom, desktop right-bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-5 lg:bottom-5">
                  <div
                    className="group relative rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500 text-white
                      px-5 py-4 shadow-[0_16px_35px_rgba(0,0,0,0.35)]
                      animate-[floaty_3.2s_ease-in-out_infinite]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                        <span className="text-[18px]">∿</span>
                      </div>
                      <div>
                        <div className="text-[16px] font-extrabold leading-none">24/7 Support</div>
                        <div className="text-[12px] text-white/85 mt-1">Always Available</div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/15 blur-2xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* desktop-only chevron */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                <button
                  onClick={onScrollTo("about")}
                  className="text-white/60 hover:text-white transition"
                  aria-label="Scroll down"
                >
                  <span className="text-2xl animate-[bounceSoft_1.4s_ease-in-out_infinite]">⌄</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes floaty {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes bounceSoft {
            0%, 100% { transform: translateY(0px); opacity: .7; }
            50% { transform: translateY(8px); opacity: 1; }
          }
        `}</style>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="scroll-mt-[90px]">
        <About />
      </section>

      {/* ================= OBJECTIVES ================= */}
      <section id="objectives" className="scroll-mt-[90px]">
        <Objectives />
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="scroll-mt-[90px]">
        <Services />
      </section>

      {/* ================= MEMBERSHIP ================= */}
      <section id="membership" className="scroll-mt-[90px]">
        <Membership />
      </section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="scroll-mt-[90px]">
        <Gallery />
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="scroll-mt-[90px]">
        <Contact />
      </section>
    </>
  );
}
