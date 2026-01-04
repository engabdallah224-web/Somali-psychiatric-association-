export default function Contact() {
  return (
    <section className="bg-[#050b2a] min-h-[70vh] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -left-24 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-52 -right-32 w-[820px] h-[820px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-16">
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-[12px]">
            Get In Touch
          </span>

          <h1 className="mt-5 text-[44px] md:text-[60px] font-extrabold tracking-tight text-white">
            Contact <span className="text-cyan-300">Us</span>
          </h1>

          <p className="mt-3 text-white/60 text-[14px] md:text-[15px]">
            Reach out to join us or learn more
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* left column */}
          <div className="space-y-6">
            {/* head office */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/25 flex items-center justify-center text-cyan-300">
                  🌐
                </div>
                <h3 className="text-white font-extrabold text-[18px]">Head Office</h3>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
                  <div className="text-cyan-300">📞</div>
                  <div>
                    <p className="text-white font-semibold text-[13px]">Phone</p>
                    <p className="text-white/70 text-[13px]">+252-615899081</p>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
                  <div className="text-cyan-300">✉️</div>
                  <div>
                    <p className="text-white font-semibold text-[13px]">Email</p>
                    <p className="text-white/70 text-[13px]">info@somalipsychiatric.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* branches */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white font-extrabold text-[18px]">Our Branches</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {["Mogadishu", "Kismayo", "Cadaado", "Beled Hawo", "Dhoobley"].map((b) => (
                  <div key={b} className="rounded-xl bg-white/5 border border-white/10 p-4 text-white/80 text-[13px] flex items-center gap-2">
                    <span className="text-cyan-300">📍</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right column: form */}
          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6">
            <h3 className="text-cyan-300 font-extrabold text-[18px]">Send Us a Message</h3>
            <p className="text-white/55 text-[13px] mt-1.5">We’ll respond to you as soon as possible</p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="text-white/70 text-[12px] font-semibold">Full Name</label>
                <input
                  className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-white/70 text-[12px] font-semibold">Email Address</label>
                <input
                  className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/50"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="text-white/70 text-[12px] font-semibold">Your Message</label>
                <textarea
                  rows={6}
                  className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/50 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="button"
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-95 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
