import spaLogo from "../assets/spa-logo.png";

export default function Footer() {
  return (
    <footer className="bg-spa-dark text-slate-100 mt-8">
      <div className="spa-container py-8 grid md:grid-cols-3 gap-8 text-sm">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src={spaLogo} alt="SPA logo" className="h-10 w-auto" />
            <div>
              <p className="font-semibold">
                Somali Psychiatric Association (SPA)
              </p>
              <p className="text-xs text-slate-300">
                Ururka Dhakhaatiirta Maskaxda Soomaaliyeed
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-300 max-w-xs">
            Hoggaan qaran oo caafimaad maskaxeed & karamo u horseeda bulshada
            Soomaaliyeed, iyada oo la isku xirayo xirfadlayaasha, jaamacadaha &
            hay’adaha caalamiga ah.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-2">Quick links</p>
          <ul className="space-y-1 text-xs text-slate-200">
            <li>About SPA</li>
            <li>Programs</li>
            <li>Membership</li>
            <li>Governance & Bylaws</li>
            <li>Resources & Publications</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-2">Contact</p>
          <p className="text-xs text-slate-200">
            Email: info@somalipsychiatricassociation.org
          </p>
          <p className="text-xs text-slate-200">Phone: +252-615899081</p>
          <p className="text-xs text-slate-200">
            Address: Muqdisho, Soomaaliya – laamo ku yaalla Kismaayo, Cadado,
            Dhoobley & Beled Xaawo.
          </p>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="spa-container py-3 text-[11px] text-slate-300 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Somali Psychiatric Association.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
