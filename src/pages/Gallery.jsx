import { useMemo, useState } from "react";

// AUTO IMPORT: dhammaan jpg/png/webp gudaha src/assets/gallery
const modules = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

export default function Gallery() {
  const [active, setActive] = useState(null);

  const images = useMemo(() => {
    const arr = Object.entries(modules).map(([path, mod]) => ({
      path,
      url: mod?.default || mod,
    }));

    // Sort: g1, g2, ... g10 (haddii magacyadu yihiin g1.jpg)
    arr.sort((a, b) => {
      const na = parseInt(a.path.match(/g(\d+)/i)?.[1] || "0", 10);
      const nb = parseInt(b.path.match(/g(\d+)/i)?.[1] || "0", 10);
      return na - nb;
    });

    return arr.map((x) => x.url);
  }, []);

  return (
    <section className="bg-[#050b2a] min-h-[70vh] relative overflow-hidden">
      {/* soft blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -left-24 w-[520px] h-[520px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-52 -right-32 w-[820px] h-[820px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-16">
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 text-[12px]">
            Our Work
          </span>

          <h1 className="mt-5 text-[44px] md:text-[60px] font-extrabold tracking-tight text-white">
            Photo <span className="text-pink-300">Gallery</span>
          </h1>

          <p className="mt-3 text-white/60 text-[14px] md:text-[15px]">
            Capturing moments from our events and activities
          </p>

          {images.length === 0 && (
            <p className="mt-6 text-red-300 text-sm">
              No images found. Hubi in sawirradu ku jiraan:{" "}
              <span className="font-semibold">src/assets/gallery</span>
            </p>
          )}
        </div>

        {/* ✅ Mobile: 3 images per row */}
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(src)}
              className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md
                         shadow-[0_18px_60px_rgba(0,0,0,0.25)]
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="w-full object-cover
                           h-[110px] sm:h-[200px] lg:h-[240px]
                           transition-transform duration-500 group-hover:scale-[1.06]"
              />

              {/* ✅ small overlay shine on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            <img
              src={active}
              alt="Preview"
              className="w-full max-h-[85vh] object-contain bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}
