// src/pages/About.jsx
import spaLogo from "../assets/spa-logo.png";

const cx = (...c) => c.filter(Boolean).join(" ");

export default function About() {
  return (
    <section id="about" className="bg-[#050b2a] relative overflow-hidden">
      {/* background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -left-24 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-44 -right-28 w-[720px] h-[720px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-16">
        {/* header */}
        <div className="flex flex-col items-center text-center">
          <span
            className={cx(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full",
              "bg-white/10 border border-white/15 text-white/80 text-[12px]",
              "backdrop-blur",
              "hover:bg-white/12 hover:border-white/25 transition-all duration-300"
            )}
          >
            Our Purpose
          </span>

          <h1 className="mt-5 text-[44px] md:text-[60px] font-extrabold tracking-tight text-white">
            Vision & <span className="text-cyan-300">Mission</span>
          </h1>

          <p className="mt-3 max-w-2xl text-white/60 text-[14px] md:text-[15px]">
            Advancing mental health care across Somalia through excellence and innovation
          </p>
        </div>

        {/* cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div
            className={cx(
              "group relative rounded-2xl overflow-hidden",
              "border border-white/10 bg-white/5 backdrop-blur-md",
              "p-6 md:p-7",
              "shadow-[0_18px_60px_rgba(0,0,0,0.25)]",
              "transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            )}
          >
            {/* top gradient bar (like screenshot) */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-16">
              <div className="absolute inset-x-0 -top-6 h-20 bg-gradient-to-r from-cyan-500/45 to-blue-500/25 blur-xl opacity-90" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/0" />
            </div>

            <div className="relative flex items-start gap-4">
              {/* icon box */}
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-white/10">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-[26px] md:text-[28px] font-extrabold text-cyan-300">
                  Vision
                </h3>
                <p className="mt-3 text-white/70 text-[14px] leading-relaxed max-w-md">
                  A Somali society with accessible, quality mental health care that respects the rights of
                  individuals with mental health conditions.
                </p>
              </div>
            </div>

            {/* subtle shine */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
            </div>
          </div>

          {/* Mission */}
          <div
            className={cx(
              "group relative rounded-2xl overflow-hidden",
              "border border-white/10 bg-white/5 backdrop-blur-md",
              "p-6 md:p-7",
              "shadow-[0_18px_60px_rgba(0,0,0,0.25)]",
              "transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            )}
          >
            {/* top gradient bar */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-16">
              <div className="absolute inset-x-0 -top-6 h-20 bg-gradient-to-r from-purple-500/40 to-pink-500/25 blur-xl opacity-90" />
            </div>

            <div className="relative flex items-start gap-4">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-purple-500/18 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20 border border-white/10">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 8v4l3 2"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-[26px] md:text-[28px] font-extrabold text-purple-300">
                  Mission
                </h3>
                <p className="mt-3 text-white/70 text-[14px] leading-relaxed max-w-md">
                  To strengthen knowledge, service quality, and accessibility of mental health care through
                  training, research, awareness, and collaboration to build a robust national mental health
                  system.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
            </div>
          </div>
        </div>

        {/* small brand mark */}
        <div className="mt-10 flex justify-center opacity-70">
          <img src={spaLogo} alt="SPA" className="w-10 h-10 object-contain" />
        </div>
      </div>
    </section>
  );
}
