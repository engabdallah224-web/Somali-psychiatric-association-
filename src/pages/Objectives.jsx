// src/pages/Objectives.jsx
import { useState } from "react";

/* ========= Objective Icon Badge ========= */
const IconBadge = ({ variant = "cyan", children }) => {
  const variants = {
    cyan: "from-cyan-400 via-sky-500 to-blue-600",
    indigo: "from-indigo-400 via-violet-500 to-purple-600",
    purple: "from-purple-500 via-fuchsia-500 to-pink-500",
    pink: "from-pink-500 via-rose-500 to-orange-400",
    orange: "from-orange-500 via-amber-400 to-yellow-300",
    amber: "from-amber-400 via-orange-400 to-yellow-300",
  };

  return (
    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} opacity-95`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.58),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.35),transparent_55%)]" />
      <div className="relative w-full h-full flex items-center justify-center text-white drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)]">
        {children}
      </div>
    </div>
  );
};

/* ========= Objective Icons ========= */
const FilledIcon = ({ name }) => {
  const s = "w-[22px] h-[22px] md:w-[26px] md:h-[26px]";

  switch (name) {
    case "unity":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3 3h4v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5h4l3-3Z" fill="rgba(255,255,255,0.92)" />
          <path d="M9 12l2 2 4-4" stroke="rgba(0,0,0,0.25)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "education":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6.5l8-4 8 4-8 4-8-4Z" fill="rgba(255,255,255,0.92)" />
          <path d="M6 11.2V16c2.2 1.6 4.4 2.4 6 2.4s3.8-.8 6-2.4v-4.8" stroke="rgba(0,0,0,0.22)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M20 7v6" stroke="rgba(0,0,0,0.18)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "research":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 20h12" stroke="rgba(255,255,255,0.92)" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M10.2 14.8c.9-2.9 3-4.8 6.1-5.1" stroke="rgba(255,255,255,0.92)" strokeWidth="2.4" strokeLinecap="round" />
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
    case "awareness":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12v-2.6c0-.6.4-1 1-1h2l8-2.6c.7-.2 1.4.3 1.4 1v12c0 .7-.7 1.2-1.4 1L8 15.2H6c-.6 0-1-.4-1-1Z" fill="rgba(255,255,255,0.92)" />
          <path d="M8.8 15.6l1.3 3.2" stroke="rgba(0,0,0,0.18)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "rights":
      return (
        <svg className={s} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s-7-4.4-7-10.2C5 7.4 7.4 5 10.4 5c1.2 0 2.4.5 3.2 1.3C14.4 5.5 15.6 5 16.8 5 19.8 5 22 7.4 22 10.8 22 16.6 12 21 12 21Z" fill="rgba(255,255,255,0.92)" />
          <path d="M9.2 12h1.8l.9-2 1.1 4 1-2H16" stroke="rgba(0,0,0,0.22)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

const objectives = [
  { title: "Unity & Ethics", desc: "Unite psychiatry professionals across Somalia and promote professional ethics", icon: "unity", badge: "cyan", glow: "from-cyan-400 to-blue-500" },
  { title: "Education", desc: "Advance continuous professional development (CPD) and training", icon: "education", badge: "indigo", glow: "from-indigo-400 to-purple-500" },
  { title: "Research", desc: "Support research on mental health needs and solutions", icon: "research", badge: "purple", glow: "from-purple-500 to-pink-500" },
  { title: "Policy", desc: "Contribute to the development of national mental health policies", icon: "policy", badge: "pink", glow: "from-pink-500 to-rose-500" },
  { title: "Awareness", desc: "Raise public awareness to reduce stigma and misunderstanding", icon: "awareness", badge: "orange", glow: "from-orange-500 to-amber-500" },
  { title: "Rights", desc: "Protect and promote human rights of people with mental health conditions", icon: "rights", badge: "amber", glow: "from-amber-400 to-yellow-300" },
];

const coreValues = [
  { title: "Knowledge & Professionalism", desc: "We uphold evidence-based practice, continuous learning, and professional excellence in mental health care.", icon: "🧠" },
  { title: "Respect & Patient Confidentiality", desc: "We protect patient dignity, privacy, and confidentiality, ensuring compassionate and ethical care.", icon: "🛡️" },
  { title: "Integrity & Accountability", desc: "We act with honesty and responsibility, maintaining trust through transparent and accountable conduct.", icon: "🏅" },
  { title: "Unity & Collaboration", desc: "We strengthen partnerships among professionals and institutions to improve mental health services nationwide.", icon: "🤝" },
  { title: "Protection of Human Rights", desc: "We advocate for the rights and humane treatment of people living with mental health conditions.", icon: "💜" },
];

const cx = (...c) => c.filter(Boolean).join(" ");

function ValueCard({ item, open, onToggle }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-fuchsia-500/10 blur-2xl" />
        <div className="absolute -bottom-12 -right-10 w-44 h-44 rounded-full bg-indigo-500/10 blur-2xl" />
      </div>

      <button onClick={onToggle} className="relative w-full p-4 sm:p-5 flex items-start gap-3 text-left" type="button">
        <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-500 grid place-items-center shadow-[0_12px_30px_rgba(168,85,247,0.25)] transition-transform duration-300 group-hover:scale-[1.03]">
          <span className="text-white text-[16px] sm:text-[18px]">{item.icon}</span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-white/90 font-extrabold text-[13px] sm:text-[14px] leading-snug">{item.title}</p>
          <p className="text-white/45 text-[11px] mt-1">{open ? "Tap to collapse" : "Tap to expand"}</p>
        </div>

        <div className={cx("shrink-0 w-9 h-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center transition-all duration-300", open ? "rotate-180 bg-white/10" : "")}>
          <span className="text-white/70 text-[15px]">⌄</span>
        </div>
      </button>

      <div className={cx("grid transition-all duration-500 ease-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-white/70 text-[12px] sm:text-[13px] leading-relaxed">
            {item.desc}
          </div>
        </div>
      </div>

      <div className="h-[2px] w-0 bg-white/15 group-hover:w-full transition-all duration-500" />
    </div>
  );
}

export default function Objectives() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="objectives" className="bg-[#050b2a] min-h-[70vh] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-[560px] h-[560px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-44 -right-28 w-[720px] h-[720px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-16">
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-[12px] backdrop-blur">
            What We Aim For
          </span>
          <h1 className="mt-5 text-[44px] md:text-[60px] font-extrabold tracking-tight text-white">
            Our <span className="text-blue-300">Objectives</span>
          </h1>
          <p className="mt-3 text-white/60 text-[14px] md:text-[15px]">
            Six core goals driving our organization forward
          </p>
        </div>

        {/* objectives grid: mobile 3 columns */}
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6">
          {objectives.map((o) => (
            <div
              key={o.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-6 overflow-hidden
                         transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/20
                         hover:shadow-[0_18px_55px_rgba(0,0,0,0.45)]"
            >
              <div className={`pointer-events-none absolute -top-10 left-0 right-0 h-24 bg-gradient-to-r ${o.glow} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-35`} />

              <div className="transition-transform duration-300 group-hover:scale-[1.08] group-hover:-rotate-[2deg]">
                <IconBadge variant={o.badge}>
                  <FilledIcon name={o.icon} />
                </IconBadge>
              </div>

              <h3 className="mt-4 text-white font-extrabold text-[13px] sm:text-[16px] leading-snug">
                {o.title}
              </h3>

              <p className="mt-2 text-white/60 text-[11px] sm:text-[13px] leading-relaxed line-clamp-3">
                {o.desc}
              </p>

              <div className="mt-4 h-[2px] w-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* core values */}
        <div className="mt-16">
          <div className="text-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-[12px] backdrop-blur">
              What Guides Us
            </span>

            <h2 className="mt-5 text-[42px] md:text-[56px] font-extrabold tracking-tight text-white">
              Core <span className="text-fuchsia-300">Values</span>
            </h2>
          </div>

          {/* mobile 2 columns */}
          <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-1 gap-4">
            {coreValues.map((item, idx) => (
              <ValueCard
                key={item.title}
                item={item}
                open={openIndex === idx}
                onToggle={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .line-clamp-3{
          display:-webkit-box;
          -webkit-line-clamp:3;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }
      `}</style>
    </section>
  );
}
