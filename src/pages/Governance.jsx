export default function Governance() {
  return (
    <div className="spa-container py-10 space-y-8 text-sm text-slate-700">
      {/* Governance structure */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-spa-dark">
          Qaab-dhismeedka Maamulka (Governance)
        </h2>
        <p>
          SPA waxay leedahay qaab-dhiseme maamul oo cad oo xaqiijinaya
          isla-xisaabtan, hufnaan, iyo ka-qaybgal xubnaha.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
            <h3 className="font-semibold text-spa-primary mb-1">
              Aasaas (Founding General Assembly)
            </h3>
            <p>
              Kulanka aasaaska ah ee mideeya dhakhaatiirta iyo
              xirfadlayaasha caafimaadka maskaxda, halkaas oo lagu ansixiyo
              dastuurka, qaab-dhismeedka, iyo jihada guud ee ururka.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-1">
            <h3 className="font-semibold text-spa-primary">
              Golaha Dhexe (Board of Directors)
            </h3>
            <p>Waxaa ka mid noqon doona:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Guddoomiye</li>
              <li>Guddoomiye ku-xigeen</li>
              <li>Xoghayn Guud</li>
              <li>Agaasime Maaliyadeed</li>
              <li>Agaasime Barnaamijyo</li>
              <li>3–5 xubnood oo kale (Members at Large)</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
          <h3 className="font-semibold text-spa-primary mb-1">
            Guddiyada Shaqo
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Waxbarasho & Tababar (Education & Training Committee)</li>
            <li>Cilmi-baaris & Siyaasadeed (Research & Policy Committee)</li>
            <li>Adeegyada Bulshada (Community Services Committee)</li>
            <li>Anshaxa & Sharciga (Ethics & Legal Committee)</li>
            <li>Xiriirka Caalamiga (International Relations Committee)</li>
          </ul>
          <p className="mt-2">
            Xilliga xilka: 2–3 sano (sida uu go’aamiyo dastuurka / bylaws).
          </p>
        </div>
      </section>

      {/* Strategic priorities */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-spa-dark">
          Istaraatijiyada 3–5 sano (Strategic Priorities)
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Dhisidda & ballaarinta adeegyada tababar ee heer qaran.</li>
          <li>
            Sameynta shabakad xirfadlayaal isku xiran oo leh database qaran.
          </li>
          <li>
            Dhaqaale-raadinta waara (grants, xubinnimo, partnerships, adeegyo
            la bixiyo).
          </li>
          <li>
            Advocacy si loo helo siyaasado qaran oo taageera caafimaadka
            maskaxda.
          </li>
          <li>
            Hirgelinta barnaamijyada Chain-Free iyo reintegration ee dadka laga
            sii daayo xarumaha xiran.
          </li>
        </ul>
      </section>

      {/* Partnerships & Finance */}
      <section className="grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
          <h3 className="font-semibold text-spa-primary">
            Iskaashiga (Partnerships)
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Wasaaradda Caafimaadka (Somalia)</li>
            <li>WHO Somalia / WHO EMRO</li>
            <li>UNICEF, UNHCR, iyo hay’adaha UN kale</li>
            <li>NGOs maxalli & caalami ah</li>
            <li>Jaamacadaha & xarumaha tababarka caafimaadka</li>
            <li>Hay’adaha maalgelinta (donors)</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
          <h3 className="font-semibold text-spa-primary">
            Xisaab & Maalgelin (Finance & Funding)
          </h3>
          <p>Ilaha maalgelintu waxaa ka mid ah:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Xubinnimada & khidmadaha sanadlaha ah</li>
            <li>Grants ka yimaada hay’ado caalami ah</li>
            <li>Mashruucyo iskaa wax u qabso ah (community projects)</li>
            <li>Tabarucaad & taageero jaaliyadeed</li>
          </ul>
          <p className="text-xs text-slate-500 mt-2">
            Miisaaniyadaha la xusay (tusaale): diiwaangelin shuruuc, website &
            branding, shir sanadle, iyo hawl-maalmeedka admin – waxaa la
            cusboonaysiin doonaa marka qorshaha dhaqaale la dhammeeyo.
          </p>
        </div>
      </section>

      {/* M&E & bylaws */}
      <section className="grid md:grid-cols-2 gap-5">
        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
          <h3 className="font-semibold text-spa-primary">
            Monitoring & Evaluation (M&E)
          </h3>
          <p>
            SPA waxay isticmaali doontaa KPIs cad-cad si loo cabbiro saameynta
            barnaamijyadeeda:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Tirada tababarrada la qabtay iyo ka-qeybgalayaasha</li>
            <li>Tirada xubnaha ururka ee firfircoon</li>
            <li>Tirada adeegyada / bukaanada la gaarsiiyay</li>
            <li>
              Saameynta wacyigelinta (media reach, school programmes, iwm)
            </li>
            <li>
              Tirada meelaha laga yareeyay isticmaalka chains & xannibaadaha
            </li>
          </ul>
          <p className="text-xs text-slate-500 mt-1">
            Warbixin sanadle ah & audit xisaabeed ayaa laga diyaarin doonaa
            hawlaha SPA.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-2">
          <h3 className="font-semibold text-spa-primary">
            Shuruuc / Dastuur kooban (Bylaws – Summary)
          </h3>
          <p>
            Dastuurka SPA wuxuu ka koobnaan doonaa qodobbada soo socda:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Ujeedada, magaca & xarunta</li>
            <li>Xubinnimada, xuquuqda & waajibaadka</li>
            <li>Guddiyada & habka doorashada</li>
            <li>Maaliyadda & khidmadaha</li>
            <li>Shirarka guud & go’aamada</li>
            <li>Habka wax-ka-beddelka dastuurka</li>
            <li>Habka kala-baxa / xiritaanka ururka</li>
          </ul>
          <p className="text-xs text-slate-500 mt-1">
            Dastuur buuxa (6–10 bog) waxaa la diyaarin karaa markaas oo PDF &
            Word ah loogu talagalay diiwaangelinta rasmiga ah.
          </p>
        </div>
      </section>
    </div>
  );
}
