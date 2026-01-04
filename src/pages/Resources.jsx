export default function Resources() {
  return (
    <div className="spa-container py-10 space-y-8 text-sm text-slate-700">
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-spa-dark">
          Resources, News & Publications
        </h2>
        <p className="max-w-3xl">
          Boggan waxaa loogu talagalay in lagu soo bandhigo wararka, shirarka,
          cilmi-baarista, iyo daabacaadaha SPA. Mustaqbalka waxaan ku xiri
          karnaa database (Supabase) si news & journal articles loogu daro si
          toos ah.
        </p>
      </section>

      <section className="space-y-4">
        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
          <h3 className="font-semibold text-spa-primary mb-1">
            Annual Conference & CPD Events
          </h3>
          <p>
            Shirka sanadlaha ah ee SPA iyo CPD events kale ayaa lagu
            faahfaahin doonaa halkan, oo ay ku jiraan ajendaha, speakers,
            iyo fursadaha diiwaangelinta.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
          <h3 className="font-semibold text-spa-primary mb-1">
            Journal / Quarterly Bulletin
          </h3>
          <p>
            SPA waxay qorsheyneysaa inay soo saarto{" "}
            <span className="italic">journal</span> ama{" "}
            <span className="italic">quarterly bulletin</span> ku saabsan
            caafimaadka maskaxda ee Soomaaliya – cilmi-baaris, case reports,
            iyo policy briefs.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
          <h3 className="font-semibold text-spa-primary mb-1">
            Media & Wacyigelin
          </h3>
          <p>
            Link-yada barnaamijyada TV/Radio, maqaallada, iyo ololayaasha
            wacyigelinta ee SPA ayaa lagu kaydin doonaa halkan si bulshada &
            xirfadlayaashu ugu helaan si fudud.
          </p>
        </div>
      </section>
    </div>
  );
}
