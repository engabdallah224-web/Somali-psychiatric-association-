// src/pages/Membership.jsx
import { useEffect, useMemo, useState } from "react";

/* ========= Small Icon set (no extra libs) ========= */
const Icon = ({ name }) => {
  const cls = "w-7 h-7";
  const common = {
    className: cls,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "badge":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M12 2l3 3h4v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5h4l3-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "users":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="3" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a3 3 0 0 1 0 5.74" />
        </svg>
      );
    case "book":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M4 19a2 2 0 0 0 2 2h13" />
          <path d="M6 17V5a2 2 0 0 1 2-2h11v16H8a2 2 0 0 0-2 2Z" />
          <path d="M9 7h7" />
          <path d="M9 10h7" />
        </svg>
      );
    default:
      return null;
  }
};

const cx = (...c) => c.filter(Boolean).join(" ");

const Field = ({ label, required, children }) => (
  <div className="space-y-2">
    <label className="text-[12px] text-white/75 font-semibold">
      {label} {required ? <span className="text-cyan-300">*</span> : null}
    </label>
    {children}
  </div>
);

const Input = (props) => (
  <input
    {...props}
    className={cx(
      "w-full h-11 rounded-xl px-4 text-[13px] text-white placeholder:text-white/35",
      "bg-white/5 border border-white/10 outline-none",
      "focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20",
      "transition"
    )}
  />
);

const Select = ({ children, ...props }) => (
  <div className="relative">
    <select
      {...props}
      className={cx(
        "spa-select w-full h-11 rounded-xl px-4 pr-10 text-[13px] text-white",
        "bg-white/5 border border-white/10 outline-none",
        "focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20",
        "transition appearance-none"
      )}
    >
      {children}
    </select>

    <svg
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/55"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  </div>
);

const Textarea = (props) => (
  <textarea
    {...props}
    className={cx(
      "w-full rounded-xl px-4 py-3 text-[13px] text-white placeholder:text-white/35",
      "bg-white/5 border border-white/10 outline-none",
      "focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20",
      "transition resize-none"
    )}
  />
);

export default function Membership() {
  const plans = useMemo(
    () => [
      {
        title: "Full Members",
        sub: "Psychiatrists",
        icon: "badge",
        color: "from-cyan-500 to-blue-500",
        items: [
          "Professional credentials required",
          "Full voting rights",
          "Free CPD training",
          "Research opportunities",
          "Leadership positions",
        ],
      },
      {
        title: "Associate Members",
        sub: "Nurses, Psychologists, Social Workers",
        icon: "users",
        color: "from-purple-500 to-pink-500",
        popular: true,
        items: [
          "Mental health professionals",
          "Education & workshops",
          "Professional networking",
          "Resource access",
          "Collaboration opportunities",
        ],
      },
      {
        title: "Student Members",
        sub: "University Students",
        icon: "book",
        color: "from-blue-500 to-purple-500",
        items: [
          "Healthcare students",
          "Research opportunities",
          "Mentor programs",
          "Skill development",
          "Career guidance",
        ],
      },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [activePlan, setActivePlan] = useState(plans[1]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    profession: "",
    qualification: "",
    organization: "",
    experience: "",
    message: "",
  });

  const resetForm = () =>
    setForm({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      profession: "",
      qualification: "",
      organization: "",
      experience: "",
      message: "",
    });

  const openModal = (plan) => {
    setActivePlan(plan);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  // scroll lock + ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeModal();
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onChange = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();

    const to = "info@somalipsychiatric.org";
    const subject = `SPA Membership Application - ${activePlan?.title || "Membership"}`;

    const body = [
      `Membership Type: ${activePlan?.title || ""}`,
      `Category: ${activePlan?.sub || ""}`,
      "",
      `Full Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Profession/Title: ${form.profession}`,
      `Highest Qualification: ${form.qualification}`,
      `Current Organization: ${form.organization}`,
      `Years of Experience: ${form.experience}`,
      "",
      "Why do you want to join SPA?",
      form.message || "-",
      "",
      "----",
      "Sent from SPA Website",
    ].join("\n");

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    closeModal();
    resetForm();
  };

  return (
    <section className="bg-[#050b2a] min-h-[70vh] relative overflow-hidden">
      {/* background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-[560px] h-[560px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-52 -right-32 w-[780px] h-[780px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-16">
        {/* title */}
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-[12px]">
            Join Our Community
          </span>

          <h1 className="mt-5 text-[44px] md:text-[60px] font-extrabold tracking-tight text-white">
            Membership <span className="text-blue-300">Types</span>
          </h1>

          <p className="mt-3 text-white/60 text-[14px] md:text-[15px]">
            Choose the membership that fits your professional journey
          </p>
        </div>

        {/* ✅ Desktop = grid 3, Mobile = swipe (siman & qurux badan) */}
        <div
          className={cx(
            "mt-12",
            "grid gap-7 lg:grid-cols-3", // desktop
            "lg:overflow-visible",
            "max-lg:flex max-lg:gap-4 max-lg:overflow-x-auto max-lg:pb-3 max-lg:snap-x max-lg:snap-mandatory",
            "max-lg:[scrollbar-width:none] max-lg:[-ms-overflow-style:none]"
          )}
        >
          {/* hide scrollbar (webkit) */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}</style>

          {plans.map((p) => (
            <div
              key={p.title}
              className={cx(
                "group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden",
                "transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/20",
                p.popular ? "ring-1 ring-purple-500/45" : "",
                // ✅ Mobile card width siman + snap
                "max-lg:min-w-[82%] max-lg:snap-center",
                // ✅ padding responsive
                "p-6"
              )}
            >
              {/* top glow */}
              <div className={cx("absolute -top-10 left-0 right-0 h-24 bg-gradient-to-r opacity-25 blur-2xl", p.color)} />
              <div
                className={cx(
                  "pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-r",
                  p.color,
                  "opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-35"
                )}
              />

              {p.popular && (
                <div className="relative mt-1">
                  <div className="mx-auto h-9 w-[92%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_10px_30px_rgba(236,72,153,0.20)]">
                    <span className="text-[12px] font-extrabold tracking-wide text-white">
                      POPULAR
                    </span>
                  </div>
                </div>
              )}

              {/* icon tile */}
              <div className="relative mt-8 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-[0_0_40px_rgba(59,130,246,0.18)] transition-all duration-300 group-hover:scale-[1.06]">
                  <Icon name={p.icon} />
                </div>
                <div className="absolute w-28 h-28 rounded-full blur-3xl opacity-0 transition-opacity duration-300 bg-white/12 group-hover:opacity-100" />
              </div>

              <h3 className="relative mt-6 text-white font-extrabold text-[24px] text-center">
                {p.title}
              </h3>
              <p className="relative text-center text-white/55 text-[13px] mt-1">
                {p.sub}
              </p>

              <div className="relative mt-7 space-y-3">
                {p.items.map((it) => (
                  <div key={it} className="flex items-center gap-3 text-white/75 text-[14px]">
                    <span
                      className={cx(
                        "w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[12px]",
                        p.popular ? "text-pink-300" : "text-cyan-300"
                      )}
                    >
                      ✓
                    </span>
                    <span>{it}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openModal(p)}
                className={cx(
                  "relative mt-8 w-full py-3.5 rounded-xl font-semibold text-[14px] text-white",
                  "bg-gradient-to-r",
                  p.color,
                  "transition-all duration-300",
                  "hover:opacity-95 hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]",
                  "active:scale-[0.99]"
                )}
              >
                Apply Now
              </button>

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-16 -right-20 w-56 h-56 rounded-full bg-white/5 blur-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* ✅ hint for mobile swipe */}
        <div className="mt-4 text-center text-white/40 text-[12px] lg:hidden">
          Swipe to view more →
        </div>
      </div>

      {/* ========= MODAL ========= */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[3px]" onClick={closeModal} />

          <div className="relative h-full w-full flex items-start justify-center p-4 md:p-8 overflow-y-auto">
            <div
              className={cx(
                "relative w-full max-w-3xl rounded-2xl border border-white/10",
                "bg-gradient-to-b from-[#0b1537] to-[#071030]",
                "shadow-[0_30px_120px_rgba(0,0,0,0.55)] overflow-hidden",
                "max-h-[calc(100vh-2rem)]"
              )}
              role="dialog"
              aria-modal="true"
            >
              <div className="absolute inset-x-0 top-0 h-20 pointer-events-none">
                <div
                  className={cx(
                    "absolute -top-10 left-0 right-0 h-24 bg-gradient-to-r blur-2xl opacity-25",
                    activePlan?.color
                  )}
                />
              </div>

              <div className="sticky top-0 z-10 px-6 md:px-7 pt-6 pb-4 bg-gradient-to-b from-[#0b1537] to-transparent">
                <button
                  onClick={closeModal}
                  className={cx(
                    "absolute top-4 right-4 w-9 h-9 rounded-xl",
                    "bg-white/5 border border-white/10 text-white/70",
                    "hover:text-white hover:bg-white/10 transition"
                  )}
                  aria-label="Close"
                  type="button"
                >
                  ✕
                </button>

                <h3 className="text-[22px] md:text-[24px] font-extrabold text-cyan-300">
                  Membership Application
                </h3>
                <p className="mt-1 text-white/55 text-[13px]">
                  Please fill out the form below to apply for{" "}
                  <span className="text-white/80 font-semibold">
                    {activePlan?.title?.toLowerCase()}
                  </span>{" "}
                  membership
                </p>
              </div>

              <div className="px-6 md:px-7 pb-6 md:pb-7 overflow-y-auto max-h-[calc(100vh-12rem)]">
                <form onSubmit={onSubmit} className="mt-2 space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Full Name" required>
                      <Input
                        value={form.fullName}
                        onChange={onChange("fullName")}
                        placeholder="Your full name"
                        required
                      />
                    </Field>

                    <Field label="Email Address" required>
                      <Input
                        value={form.email}
                        onChange={onChange("email")}
                        placeholder="email@example.com"
                        type="email"
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Phone Number" required>
                      <Input
                        value={form.phone}
                        onChange={onChange("phone")}
                        placeholder="+252 ..."
                        required
                      />
                    </Field>

                    <Field label="City" required>
                      <Select value={form.city} onChange={onChange("city")} required>
                        <option value="" disabled>
                          Select city
                        </option>
                        <option value="Mogadishu">Mogadishu</option>
                        <option value="Hargeisa">Hargeisa</option>
                        <option value="Kismayo">Kismayo</option>
                        <option value="Baidoa">Baidoa</option>
                        <option value="Beledweyne">Beledweyne</option>
                        <option value="Garowe">Garowe</option>
                        <option value="Galkayo">Galkayo</option>
                        <option value="Jowhar">Jowhar</option>
                        <option value="Other">Other</option>
                      </Select>
                    </Field>
                  </div>

                  <Field label="Profession/Title" required>
                    <Input
                      value={form.profession}
                      onChange={onChange("profession")}
                      placeholder="e.g., Psychiatrist, Psychologist, Nurse"
                      required
                    />
                  </Field>

                  <Field label="Highest Qualification" required>
                    <Input
                      value={form.qualification}
                      onChange={onChange("qualification")}
                      placeholder="e.g., MD, MSc, PhD, Diploma"
                      required
                    />
                  </Field>

                  <Field label="Current Organization">
                    <Input
                      value={form.organization}
                      onChange={onChange("organization")}
                      placeholder="Hospital, University, or Organization"
                    />
                  </Field>

                  <Field label="Years of Experience">
                    <Select value={form.experience} onChange={onChange("experience")}>
                      <option value="" disabled>
                        Select experience
                      </option>
                      <option value="0-1">0-1</option>
                      <option value="2-4">2-4</option>
                      <option value="5-7">5-7</option>
                      <option value="8-10">8-10</option>
                      <option value="10+">10+</option>
                    </Select>
                  </Field>

                  <Field label="Why do you want to join SPA?">
                    <Textarea
                      value={form.message}
                      onChange={onChange("message")}
                      placeholder="Tell us about your interest in joining..."
                      rows={5}
                    />
                  </Field>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className={cx(
                        "w-1/2 h-12 rounded-xl font-semibold text-[13px]",
                        "bg-black/20 border border-white/10 text-white/80",
                        "hover:bg-white/5 hover:text-white transition"
                      )}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className={cx(
                        "w-1/2 h-12 rounded-xl font-semibold text-[13px] text-white",
                        "bg-gradient-to-r from-teal-400 to-blue-500",
                        "hover:opacity-95 transition shadow-lg",
                        "active:scale-[0.99]"
                      )}
                    >
                      Submit Application
                    </button>
                  </div>

                  <p className="text-[11px] text-white/40 pt-2">
                    Submitting will open your email app and send the application to{" "}
                    <span className="text-white/60">info@somalipsychiatric.org</span>.
                  </p>
                </form>
              </div>
            </div>
          </div>

          <style>{`
            .spa-select option { background: #0b1537 !important; color: #ffffff !important; }
            .spa-select optgroup { background: #0b1537 !important; color: #ffffff !important; }
          `}</style>
        </div>
      )}
    </section>
  );
}
