export default function Programs() {
  return (
    <div className="bg-gradient-to-b from-spa-light/40 via-slate-50 to-white">
      <div className="spa-container py-10 space-y-8 animate-page">
        {/* Title + intro */}
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-spa-dark">
            Adeegyada & Barnaamijyada SPA
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl">
            SPA waxay diiradda saartaa barnaamijyo isku dhafan oo u dhexeeya
            tababarka xirfadlayaasha, cilmi-baarista, adeegyada bulshada,
            iyo advocacy, si loo gaaro bulsho Soomaaliyeed oo caafimaad
            maskaxeed leh.
          </p>
        </section>

        {/* Cards grid */}
        <section className="grid md:grid-cols-2 gap-5 text-sm">
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-spa-primary">
              1. Tababarro & Workshop-yada CPD
            </h3>
            <p className="text-slate-600">
              Tababaro joogto ah oo ku saabsan:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Mental health diagnosis & assessment</li>
              <li>Psychopharmacology & daaweynta casriga ah</li>
              <li>Community psychiatry & primary care integration</li>
              <li>Child & adolescent psychiatry</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-spa-primary">
              2. Shirar sanadle ah & Siminaaro
            </h3>
            <p className="text-slate-600">
              Shirka sanadlaha ah (Annual Conference) iyo siminaaro temaatik ah
              oo isku xira dhakhaatiirta, cilmi-baarayaasha, iyo hay’adaha
              caalamiga ah, si loo wadaago xogta & waayo-aragnimada.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-spa-primary">
              3. Barnaamijka Chain-Free & Community-Based Care
            </h3>
            <p className="text-slate-600">
              Dhiirrigelinta beddelka xarumaha ku saleysan xannibaad (chains)
              oo loo wareegayo daryeel ku dhisan bulsho, qoys, iyo xarumo
              caafimaad.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-spa-primary">
              4. Cilmi-baaris & Daabacaad
            </h3>
            <p className="text-slate-600">
              Taageeridda cilmi-baaris ku saabsan baahiyaha caafimaadka
              maskaxda, abuurista{" "}
              <span className="italic">journal / quarterly bulletin</span>,
              iyo faafinta xogta cilmiyeed ee ku saabsan Somalia.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-spa-primary">
              5. La-talin siyaasadeed & Advocacy
            </h3>
            <p className="text-slate-600">
              La shaqayn Wasaaradda Caafimaadka, WHO, UNICEF, UNHCR, iyo
              NGOs kale, si loo horumariyo siyaasadaha caafimaadka maskaxda
              iyo in miisaaniyadda qaran ay ka tarjumto baahiyaha bulshada.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
            <h3 className="font-semibold text-spa-primary">
              6. Telepsychiatry & Talo fog
            </h3>
            <p className="text-slate-600">
              Adeegyo talo caafimaad oo online ah oo lagu taageerayo
              bukaanada ku nool meelaha fog-fog, iyadoo lala shaqeeyo
              xarumaha caafimaadka maxalliga ah.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm md:col-span-2 space-y-2">
            <h3 className="font-semibold text-spa-primary">
              7. Ololayaal wacyigelin bulsho
            </h3>
            <p className="text-slate-600">
              Media campaigns, school programmes, iyo barnaamijyo wacyigelin
              oo lagu yareynayo stigma, lagu kordhinayo fahamka xanuunnada
              maskaxda, laguna dhiirrigelinayo in dadku raadsadaan daryeel
              xirfadeed.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
