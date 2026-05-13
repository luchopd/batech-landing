import { useState, useEffect, useRef } from "react";
import QueueDetectionDemo from "../components/landing/QueueDetectionDemo";
import BeoVisionShowcase from "../components/landing/BeoVisionShowcase";
import {
  LANGS, getTranslator, type Lang,
  getAgents, getWorkflow, getBeforeAfter, getWhyCards, getHitos, getFaq,
  getIntegrations, getCountries, getQualifications, getIndustryOptions,
  getBranchRanges, getCountryOptions, getLocale,
} from "../i18n/landingTranslations";

interface Props {
  onStartOnboarding: () => void;
}

const CONNECTORS_TICKER = [
  "Toast", "Square", "Loyverse", "Shopify", "MercadoLibre",
  "Stripe", "MercadoPago", "Clip", "Rappi", "Siigo",
  "Alegra", "Worky", "Factorial", "Odoo", "Cloudbeds",
  "HubSpot", "Tiendanube", "SimplyBook",
  "Soft Restaurant", "National Soft", "Aloha", "MICROS", "NCR Silver",
];

const FEATURED_LOGOS: { src: string; alt: string }[] = [];

const CLIENTS: { name: string; logo: string; dark?: boolean }[] = [
  { name: "Coca-Cola", logo: "/clients/coca-cola.png" },
  { name: "Arca Continental", logo: "/clients/arca-continental.png" },
  { name: "Burger King", logo: "/clients/burger-king.png" },
  { name: "Seguros SURA", logo: "/clients/sura.svg" },
  { name: "Pintulac", logo: "/clients/pintulac.png" },
  { name: "Foliatti Casino", logo: "/clients/foliatti.png" },
  { name: "Doggis", logo: "/clients/doggis.png" },
  { name: "Grupo Rica", logo: "/clients/grupo-rica.png" },
  { name: "Barrio Chicken", logo: "/clients/barrio-chicken.png" },
];

/* ── Scroll reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
}

export default function LandingPage({ onStartOnboarding: _onStartOnboarding }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeAgent, setActiveAgent] = useState(0);
  const [stores, setStores] = useState(20);
  const [opHours, setOpHours] = useState(14);
  const [formSent, setFormSent] = useState(false);
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "es";
    const saved = localStorage.getItem("batech_lang") as Lang | null;
    if (saved && ["es", "en", "pt"].includes(saved)) return saved;
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang === "en") return "en";
    if (browserLang === "pt") return "pt";
    return "es";
  });
  const t = getTranslator(lang);
  const locale = getLocale(lang);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("batech_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  /* ── Localized data ── */
  const AGENTS = getAgents(lang);
  const WORKFLOW_STEPS = getWorkflow(lang);
  const BEFORE_AFTER = getBeforeAfter(lang);
  const WHY_CARDS = getWhyCards(lang);
  const HITOS = getHitos(lang);
  const FAQ = getFaq(lang);
  const INTEGRATIONS = getIntegrations(lang);
  const COUNTRIES = getCountries(lang);
  const QUALIFICATIONS = getQualifications(lang);
  const INDUSTRY_OPTIONS = getIndustryOptions(lang);
  const BRANCH_RANGES = getBranchRanges(lang);
  const COUNTRY_OPTIONS = getCountryOptions(lang);

  // Coverage calculator (amplification framing — not replacement)
  const REALISTIC_HUMAN_HRS_PER_STORE = 4;
  const totalOperativeHrs = stores * opHours * 30;
  const humanCoverageHrs = stores * REALISTIC_HUMAN_HRS_PER_STORE;
  const beoCoverageHrs = totalOperativeHrs;
  const humanCoveragePct = (humanCoverageHrs / totalOperativeHrs) * 100;
  const multiplier = Math.round(beoCoverageHrs / Math.max(humanCoverageHrs, 1));

  const CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ39RZra2S1DmOkyPjwBa06TVFD0Zipfj_k8Ff5rZ534JthsYz6kfMz8NWZD2ivmOkdKnmwMPZCY";

  const openCalendar = () => {
    window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
  };

  const agent = AGENTS[activeAgent] || AGENTS[0];

  return (
    <div className="min-h-screen bg-[#080808] text-[#F0F0F0]" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* ══════════ NAV ══════════ */}
      <nav className="fixed top-0 w-full z-50 h-14 px-6 md:px-10 flex items-center justify-between border-b border-white/[0.06] backdrop-blur-xl bg-[#080808]/80">
        <a href="#" className="flex items-center text-white" aria-label="Batech">
          <img src="/batech-logo.svg" alt="Batech" className="h-6 md:h-7" />
        </a>
        <ul className="hidden md:flex items-center gap-7 text-[13px] text-[#555]">
          <li><a href="#problema" className="hover:text-[#E0E0E0] transition-colors">{t("nav.problema")}</a></li>
          <li><a href="#agentes" className="hover:text-[#E0E0E0] transition-colors">{t("nav.beo")}</a></li>
          <li><a href="#porque" className="hover:text-[#E0E0E0] transition-colors">{t("nav.porque")}</a></li>
          <li><a href="#trayectoria" className="hover:text-[#E0E0E0] transition-colors">{t("nav.trayectoria")}</a></li>
          <li><a href="#faq-section" className="hover:text-[#E0E0E0] transition-colors">{t("nav.faq")}</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-0.5 bg-[#0E1014] border border-[#1A1A1A] rounded-full p-0.5">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-colors ${
                  lang === l.code ? "bg-[#00C2E0] text-[#080808]" : "text-[#666] hover:text-[#E0E0E0]"
                }`}
                aria-label={`Switch to ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button onClick={openCalendar} className="text-[13px] font-semibold px-5 py-2 rounded-full bg-[#00C2E0] text-[#080808] hover:bg-[#00D4F5] transition-colors">
            {t("nav.demo")}
          </button>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(ellipse, #00C2E0, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#FFF 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="max-w-[1120px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00C2E0]/20 bg-[#00C2E0]/5 text-[13px] text-[#00C2E0] font-semibold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0] animate-pulse" />
                  {t("hero.pill")}
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="text-[clamp(36px,6vw,72px)] font-extrabold leading-[1.03] tracking-[-0.035em] mb-6">
                  {t("hero.h1.line1")}<br />{t("hero.h1.line2")} <span className="text-[#00C2E0]">{t("hero.h1.line3")}</span><br />{t("hero.h1.line4")}<br />{t("hero.h1.line5")}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-[17px] text-[#555] leading-relaxed max-w-[480px] mb-8">
                  {t("hero.body")}<b className="text-[#888]">{t("hero.body.bold")}</b>
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="flex flex-wrap gap-3">
                  <button onClick={openCalendar} className="px-7 py-3 rounded-full bg-[#00C2E0] text-[#080808] font-bold text-[15px] hover:bg-[#00D4F5] transition-colors">
                    {t("hero.cta.primary")}
                  </button>
                  <a href="#agentes" className="px-7 py-3 rounded-full border border-[#222] text-[#888] font-semibold text-[15px] hover:border-[#444] hover:text-white transition-colors">
                    {t("hero.cta.secondary")}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="flex flex-wrap gap-8 mt-10">
                  {[
                    { n: t("hero.stat1.n"), l: t("hero.stat1.l") },
                    { n: t("hero.stat2.n"), l: t("hero.stat2.l") },
                    { n: t("hero.stat3.n"), l: t("hero.stat3.l") },
                    { n: t("hero.stat4.n"), l: t("hero.stat4.l") },
                  ].map((s) => (
                    <div key={s.n}>
                      <div className="text-xl font-extrabold text-[#00C2E0] tracking-tight">{s.n}</div>
                      <div className="text-[12px] text-[#333] mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Phone mockup */}
            <Reveal delay={0.2} className="hidden md:block">
              <div className="relative mx-auto w-[300px]">
                <div className="absolute -inset-8 rounded-[40px] bg-[#00C2E0]/5 blur-2xl pointer-events-none" />
                <div className="relative bg-[#111] rounded-[32px] border border-[#222] p-3 shadow-2xl">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#080808] rounded-full z-10" />
                  <div className="absolute top-2 right-4 flex items-center gap-1.5 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0] animate-pulse" />
                    <span className="text-[10px] font-bold text-[#00C2E0] tracking-wider">{t("hero.phone.live")}</span>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-[24px] p-4 pt-8 space-y-3 min-h-[340px]">
                    <div className="text-[11px] text-[#333] text-center mb-2">{t("hero.phone.header")}</div>
                    <div className="bg-[#0D1A1E] rounded-xl rounded-tl-sm p-3 border border-[#00C2E0]/10">
                      <p className="text-[12px] text-[#AAA] leading-relaxed">
                        <span className="text-[#FB923C] font-bold">{t("hero.phone.alert.bold")}</span>{t("hero.phone.alert.tail")}<br /><br />
                        <span className="text-[#34D399] font-semibold">{t("hero.phone.action.label")}</span>{t("hero.phone.action.text")}
                      </p>
                      <div className="text-[10px] text-[#222] mt-2 text-right">{t("hero.phone.read")}</div>
                    </div>
                    <div className="bg-[#0D1F0D] rounded-xl rounded-tr-sm p-3 ml-8 border border-[#34D399]/10">
                      <p className="text-[12px] text-[#86EFAC]">{t("hero.phone.reply")}</p>
                      <div className="text-[10px] text-[#1A3A1A] mt-1 text-right">{t("hero.phone.read")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ LOGO TICKER ══════════ */}
      <div className="relative overflow-hidden bg-[#0A0A0A] border-y border-[#141414] py-5">
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
        <div className="flex animate-marquee">
          {[...CONNECTORS_TICKER, ...CONNECTORS_TICKER].map((c, i) => (
            <span key={i} className="whitespace-nowrap text-[13px] font-semibold text-[#222] mx-6 tracking-wide">{c}</span>
          ))}
        </div>
      </div>

      {/* ══════════ PROBLEM ══════════ */}
      <section className="py-24 md:py-32" id="problema">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] text-[12px] text-[#555] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("problem.pill")}
            </div>
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4">
              {t("problem.h2.line1")}<br />{t("problem.h2.line2")}<br /><span className="italic">{t("problem.h2.line3")}</span>
            </h2>
            <p className="text-[16px] text-[#555] max-w-[520px] leading-relaxed mb-12">
              {t("problem.body")}
            </p>
          </Reveal>

          <Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-16">
              {WORKFLOW_STEPS.map((s, i) => (
                <div key={i} className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl p-5 hover:bg-[#131313] transition-colors">
                  <div className="text-[11px] font-bold text-[#333] tracking-wider uppercase mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <h4 className="text-[14px] font-bold text-[#CCC] mb-2">{s.title}</h4>
                  <p className="text-[13px] text-[#444] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] text-[12px] text-[#555] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("problem.cost.pill")}
            </div>
            <h3 className="text-[clamp(22px,3vw,36px)] font-extrabold leading-tight tracking-tight mb-8">
              {t("problem.cost.h3.line1")}<br />{t("problem.cost.h3.line2")}
            </h3>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-[#1A1A1A] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0E0E0E] border-b border-[#1A1A1A]">
                <div className="px-5 py-3.5 text-[11px] font-bold text-[#444] tracking-wider uppercase">{t("problem.table.process")}</div>
                <div className="px-5 py-3.5 text-[11px] font-bold text-[#F87171] tracking-wider uppercase">{t("problem.table.without")}</div>
                <div className="px-5 py-3.5 text-[11px] font-bold text-[#00C2E0] tracking-wider uppercase">{t("problem.table.with")}</div>
              </div>
              {BEFORE_AFTER.map((r, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-[#141414] last:border-b-0">
                  <div className="px-5 py-4 text-[14px] text-[#999] font-medium">{r.label}</div>
                  <div className="px-5 py-4 text-[14px] text-[#666] line-through">{r.before}</div>
                  <div className="px-5 py-4 text-[14px] text-[#00C2E0] font-semibold">{r.after}</div>
                </div>
              ))}
              <div className="grid grid-cols-3 bg-[#0A0A0A]">
                <div className="px-5 py-4 text-[14px] text-[#00C2E0] font-bold">{t("problem.table.roi")}</div>
                <div className="px-5 py-4 text-[14px] text-[#666]">&mdash;</div>
                <div className="px-5 py-4 text-[20px] text-[#00C2E0] font-extrabold tracking-tight">15–25x</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ LIVE DEMO ══════════ */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] border-y border-[#141414]" id="demo-vivo">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C2E0]/25 bg-[#00C2E0]/5 text-[12px] text-[#00C2E0] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" style={{ animation: "qd-blink 1.2s ease-in-out infinite" }} />
              {t("demo.pill")}
            </div>
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-4">
              {t("demo.h2.line1")}<br />
              {t("demo.h2.line2")}<br />
              <span className="text-[#00C2E0]">{t("demo.h2.line3")}</span>
            </h2>
            <p className="text-[16px] text-[#555] max-w-[640px] mx-auto leading-relaxed">
              {t("demo.body")}
            </p>
          </Reveal>

          <Reveal>
            <QueueDetectionDemo lang={lang} />
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-3 mt-10">
            {[
              { n: t("demo.stat1.n"), l: t("demo.stat1.l") },
              { n: t("demo.stat2.n"), l: t("demo.stat2.l") },
              { n: t("demo.stat3.n"), l: t("demo.stat3.l") },
            ].map((p) => (
              <Reveal key={p.n}>
                <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl p-5">
                  <div className="text-2xl font-extrabold text-[#00C2E0] tracking-tight mb-1">{p.n}</div>
                  <div className="text-[13px] text-[#555] leading-snug">{p.l}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <button onClick={openCalendar} className="px-7 py-3 rounded-full bg-[#00C2E0] text-[#080808] font-bold text-[15px] hover:bg-[#00D4F5] transition-colors">
              {t("demo.cta")}
            </button>
          </Reveal>
        </div>
      </section>

      {/* ══════════ BEO VISION SHOWCASE ══════════ */}
      <section className="py-24 md:py-32 bg-[#06080A]" id="modelos">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <BeoVisionShowcase calendarUrl={CALENDAR_URL} lang={lang} />
        </div>
      </section>

      {/* ══════════ AMPLIFICATION CALCULATOR ══════════ */}
      <section className="py-24 md:py-32 bg-[#0C0C0C] border-y border-[#141414]" id="calculadora">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C2E0]/25 bg-[#00C2E0]/5 text-[12px] text-[#00C2E0] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("calc.pill")}
            </div>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4">
              {t("calc.h2.line1")} <span className="text-[#00C2E0]">{multiplier}x {t("calc.h2.suffix")}</span>
            </h2>
            <p className="text-[16px] text-[#555] max-w-[640px] mx-auto leading-relaxed">
              {t("calc.body")} <b className="text-[#888]">{t("calc.body.bold")}</b>{t("calc.body.tail")}
            </p>
          </Reveal>

          <Reveal>
            <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl overflow-hidden mb-10">
              <div className="bg-[#111] border-b border-[#1A1A1A] px-6 md:px-8 py-5">
                <div className="text-lg font-extrabold text-white tracking-tight mb-1">{t("calc.title")}</div>
                <div className="text-[13px] text-[#555]">{t("calc.subtitle")}</div>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[13px] text-[#888]">{t("calc.slider1")}</span>
                      <span className="text-[14px] font-bold text-[#00C2E0]">{stores}</span>
                    </div>
                    <input type="range" min={5} max={200} value={stores} onChange={(e) => setStores(+e.target.value)} className="w-full accent-[#00C2E0] cursor-pointer" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[13px] text-[#888]">{t("calc.slider2")}</span>
                      <span className="text-[14px] font-bold text-[#00C2E0]">{opHours}h</span>
                    </div>
                    <input type="range" min={8} max={24} value={opHours} onChange={(e) => setOpHours(+e.target.value)} className="w-full accent-[#00C2E0] cursor-pointer" />
                  </div>
                </div>

                <div className="bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-5 py-4 mb-6 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className="text-[11px] font-bold text-[#444] tracking-wider uppercase mb-1">{t("calc.totalLabel")}</div>
                    <div className="text-[13px] text-[#666]">{stores} {t("calc.totalFormula.before")} {opHours}{t("calc.totalFormula.after")}</div>
                  </div>
                  <div className="text-[26px] font-extrabold text-[#E0E0E0] tracking-tight">{totalOperativeHrs.toLocaleString(locale)} {t("calc.totalUnit")}</div>
                </div>

                <div className="grid md:grid-cols-[1fr_60px_1fr] gap-0 items-center mb-8">
                  <div className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-6">
                    <div className="text-[11px] font-bold text-[#444] tracking-wider uppercase mb-3">{t("calc.humanLabel")}</div>
                    <div className="text-[42px] font-extrabold text-[#E0E0E0] tracking-tight leading-none">{humanCoverageHrs.toLocaleString(locale)}</div>
                    <div className="text-[12px] text-[#333] mt-1">{t("calc.humanSub")}</div>
                    <div className="mt-4">
                      <div className="h-1.5 rounded-full bg-[#1A1A1A] overflow-hidden">
                        <div className="h-full bg-[#FB923C]/70 rounded-full" style={{ width: `${Math.max(humanCoveragePct, 0.5)}%` }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#666] mt-1.5">
                        <span>{humanCoveragePct.toFixed(1)}% {t("calc.humanPct.suffix")}</span>
                        <span className="text-[#444]">{t("calc.humanPct.blind")}</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-[#555] mt-3 pt-3 border-t border-[#1E1E1E] leading-snug">
                      {t("calc.humanNote")}
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col items-center gap-2">
                    <div className="w-px h-10 bg-[#1E1E1E]" />
                    <span className="text-[11px] font-bold text-[#00C2E0]/40 tracking-wider">+BEO</span>
                    <div className="w-px h-10 bg-[#1E1E1E]" />
                  </div>

                  <div className="bg-[#0A1A1C] border border-[#00C2E0]/20 rounded-xl p-6 mt-4 md:mt-0">
                    <div className="text-[11px] font-bold text-[#00C2E0]/70 tracking-wider uppercase mb-3">{t("calc.beoLabel")}</div>
                    <div className="text-[42px] font-extrabold text-[#00C2E0] tracking-tight leading-none">{beoCoverageHrs.toLocaleString(locale)}</div>
                    <div className="text-[12px] text-[#3A5560] mt-1">{t("calc.beoSub")}</div>
                    <div className="mt-4">
                      <div className="h-1.5 rounded-full bg-[#0A1A1C] overflow-hidden border border-[#00C2E0]/10">
                        <div className="h-full bg-gradient-to-r from-[#00C2E0] to-[#34D399] rounded-full" style={{ width: "100%" }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#3A5560] mt-1.5">
                        <span className="text-[#00C2E0] font-semibold">{t("calc.beoPct")}</span>
                        <span>{t("calc.beoBlind")}</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-[#34D399] font-semibold mt-3 pt-3 border-t border-[#00C2E0]/10 leading-snug">
                      {t("calc.beoNote")}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0A1A1C] to-[#0A0A0A] border border-[#00C2E0]/20 rounded-xl px-6 py-5 flex items-center gap-5">
                  <div className="text-5xl font-black text-[#00C2E0] tracking-tight flex-shrink-0 leading-none">{multiplier}x</div>
                  <div>
                    <div className="text-[15px] text-[#E0E0E0] font-bold leading-snug">{t("calc.multiplier.suffix")}</div>
                    <div className="text-[12px] text-[#555] mt-1">{t("calc.multiplier.sub.before")} {multiplier}.</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="text-center">
            <p className="text-[15px] text-[#555] mb-5">{t("calc.footerNote")}</p>
            <button onClick={openCalendar} className="px-7 py-3 rounded-full bg-[#00C2E0] text-[#080808] font-bold text-[15px] hover:bg-[#00D4F5] transition-colors">
              {t("calc.cta")}
            </button>
          </Reveal>
        </div>
      </section>

      {/* ══════════ AGENTS ══════════ */}
      <section className="py-24 md:py-32" id="agentes">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] text-[12px] text-[#555] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("agents.pill")}
            </div>
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4">
              {t("agents.h2.line1")}<br />{t("agents.h2.line2.before")} <span className="text-[#00C2E0]">{t("agents.h2.line2.suffix")}</span>
            </h2>
            <p className="text-[16px] text-[#555] max-w-[600px] leading-relaxed mb-10">
              {t("agents.body")}
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-2 mb-8">
              {AGENTS.map((a, i) => (
                <button key={i} onClick={() => setActiveAgent(i)} className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[13px] font-medium transition-all ${activeAgent === i ? "bg-[#00C2E0]/10 text-[#00C2E0] border-[#00C2E0]/30" : "border-[#222] text-[#555] hover:text-[#CCC] hover:border-[#333]"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${activeAgent === i ? "bg-[#00C2E0]" : "bg-[#333]"}`} />
                  {a.name.split(" ")[0]}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 min-h-[380px]">
              <div className="flex flex-col">
                <div className="text-[11px] font-bold text-[#333] tracking-wider uppercase mb-2">{agent.tag}</div>
                <h3 className="text-2xl font-extrabold tracking-tight mb-1">{agent.name}</h3>
                <div className="text-[13px] text-[#555] mb-4">{agent.sub}</div>
                <p className="text-[14px] text-[#666] leading-relaxed mb-6">{agent.desc}</p>
                <div className="space-y-2">
                  {agent.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-[13px] text-[#555]">
                      <span className="text-[#00C2E0] mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[#1A1A1A]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="text-[12px] text-[#444] ml-2 font-semibold">{agent.name}</span>
                  <span className="ml-auto flex items-center gap-1 text-[10px] font-bold text-[#00C2E0] tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0] animate-pulse" /> {t("agents.live")}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  {agent.kpis.length > 0 && (
                    <div className="grid grid-cols-2 gap-3">
                      {agent.kpis.map((k, i) => (
                        <div key={i} className="bg-[#141414] rounded-lg p-3">
                          <div className="text-[11px] text-[#444] mb-1">{k.label}</div>
                          <div className="text-xl font-extrabold tracking-tight" style={{ color: k.color || "#E0E0E0" }}>{k.value}</div>
                          <div className={`text-[11px] mt-0.5 ${k.up ? "text-[#34D399]" : "text-[#FB923C]"}`}>{k.delta}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {agent.alert && (
                    <div className={`rounded-lg p-3 border text-[13px] leading-relaxed ${agent.alert.good ? "bg-[#0A1A10] border-[#34D399]/20 text-[#86EFAC]" : "bg-[#1A0A0A] border-[#F87171]/15 text-[#CCC]"}`}>
                      <span className="mr-2">{agent.alert.icon}</span><b>{agent.alert.bold}</b>{agent.alert.tail}
                    </div>
                  )}

                  {agent.wa && (
                    <div className="bg-[#0D1A1E] rounded-lg p-3 border border-[#00C2E0]/10">
                      <div className="text-[10px] font-bold text-[#00C2E0]/60 tracking-wider uppercase mb-1">{t("agents.wa.label")}</div>
                      <div className="text-[13px] text-[#AAA]">{agent.wa}</div>
                    </div>
                  )}

                  {agent.summary && (
                    <>
                      <div className="bg-[#0D1A1E] rounded-lg p-3 border border-[#00C2E0]/10">
                        <div className="text-[10px] font-bold text-[#00C2E0]/60 tracking-wider uppercase mb-2">{agent.summary.title}</div>
                        <div className="text-[13px] text-[#CCC] leading-relaxed">{agent.summary.msg}</div>
                      </div>
                      <div className="bg-[#0A1A10] rounded-lg p-3 border border-[#34D399]/15 text-[13px] text-[#86EFAC]">
                        {agent.summary.footer}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ WHY BEO ══════════ */}
      <section className="py-24 md:py-32 bg-[#F5F5F3]" id="porque">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C2E0]/30 bg-[#00C2E0]/5 text-[12px] text-[#007A8F] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("why.pill")}
            </div>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-black mb-4">
              {t("why.h2.line1")}<br /><span className="text-[#00C2E0]">{t("why.h2.line2")}</span>
            </h2>
            <p className="text-[16px] text-[#555] max-w-[520px] leading-relaxed mb-12">
              {t("why.body")}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {WHY_CARDS.map((c) => (
              <Reveal key={c.num}>
                <div className="bg-white border border-[#DDD] rounded-2xl p-6 h-full">
                  <div className="text-[11px] font-bold text-[#00C2E0] tracking-wider mb-3">{c.num}</div>
                  <h4 className="text-[15px] font-bold text-black mb-2">{c.title}</h4>
                  <p className="text-[13px] text-[#555] leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="bg-[#0A1A1C] border border-[#00C2E0]/15 rounded-2xl p-6 flex items-center justify-center text-center h-full">
                <div>
                  <div className="text-4xl mb-4">🏆</div>
                  <div className="text-[16px] font-bold text-[#00C2E0] mb-2">{t("why.benchmark.title")}</div>
                  <div className="text-[13px] text-[#3A5A5E]">{t("why.benchmark.desc")}</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ INTEGRATIONS ══════════ */}
      <section className="py-24 md:py-32 bg-[#0C0C0C] border-y border-[#141414]" id="integraciones">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] text-[12px] text-[#555] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("integrations.pill")}
            </div>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4">
              {t("integrations.h2.line1")}<br />{t("integrations.h2.line2")}
            </h2>
            <p className="text-[16px] text-[#555] max-w-[520px] leading-relaxed mb-12">
              {t("integrations.body")}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {INTEGRATIONS.map((int, i) => {
              const isBeoLink = int.isBeoLink;
              return (
                <Reveal key={i}>
                  <div className={`rounded-2xl p-5 border transition-colors ${isBeoLink ? "bg-[#1A1408] border-[#FB923C]/20" : int.highlight ? "bg-[#0A1A1C] border-[#00C2E0]/15" : "bg-[#0E0E0E] border-[#1A1A1A] hover:bg-[#131313]"}`}>
                    <div className={`text-[11px] font-semibold tracking-wider uppercase mb-2 ${isBeoLink ? "text-[#FB923C]" : int.highlight ? "text-[#00C2E0]" : "text-[#444]"}`}>{int.cat}</div>
                    <div className={`text-[16px] font-bold mb-1 ${isBeoLink ? "text-[#FB923C]" : int.highlight ? "text-[#00C2E0]" : "text-[#CCC]"}`}>{int.name}</div>
                    <div className={`text-[13px] ${isBeoLink ? "text-[#8A6A3E]" : int.highlight ? "text-[#3A5A5E]" : "text-[#444]"}`}>{int.sub}</div>
                    {isBeoLink && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {[t("integrations.beolink.b1"), t("integrations.beolink.b2"), t("integrations.beolink.b3")].map((b) => (
                          <span key={b} className="text-[10px] font-semibold text-[#FB923C]/80 bg-[#FB923C]/5 border border-[#FB923C]/15 px-2 py-0.5 rounded-full">{b}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <p className="text-[15px] text-[#666] mb-5">{t("integrations.footer")} <b className="text-[#888]">{t("integrations.footer.bold")}</b></p>
            <button onClick={openCalendar} className="px-7 py-3 rounded-full bg-[#00C2E0] text-[#080808] font-bold text-[15px] hover:bg-[#00D4F5] transition-colors">
              {t("integrations.cta")}
            </button>
          </div>
        </div>
      </section>

      {/* ══════════ CLIENTS ══════════ */}
      <section className="py-16 md:py-20 bg-[#0A0A0A] border-y border-[#141414]" id="clientes">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] text-[11px] text-[#555] font-bold tracking-[0.2em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("clients.label")}
            </div>
            <p className="text-[14px] text-[#555] max-w-[560px] mx-auto">{t("clients.subtitle")}</p>
          </Reveal>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
          <div className="flex animate-marquee gap-6 hover:[animation-play-state:paused]">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className={`flex-shrink-0 h-20 md:h-24 w-44 md:w-52 rounded-2xl flex items-center justify-center px-6 transition-shadow border ${
                  c.dark
                    ? "bg-[#1A1A1A] border-[#2A2A2A] hover:shadow-[0_2px_24px_rgba(0,194,224,0.15)]"
                    : "bg-white border-transparent shadow-[0_2px_24px_rgba(255,255,255,0.04)] hover:shadow-[0_2px_24px_rgba(0,194,224,0.15)]"
                }`}
                title={c.name}
              >
                <img src={c.logo} alt={c.name} className="max-h-12 md:max-h-14 max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HITOS / TRAYECTORIA ══════════ */}
      <section className="py-24 md:py-32" id="trayectoria">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] text-[12px] text-[#555] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("trayectoria.pill")}
            </div>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
              {t("trayectoria.h2.line1")}<br />{t("trayectoria.h2.line2.before")} <span className="text-[#00C2E0]">{t("trayectoria.h2.line2.suffix")}</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {HITOS.map((h, i) => (
              <Reveal key={i}>
                <div className="rounded-2xl border h-full overflow-hidden flex flex-col bg-[#0E0E0E] border-[#1A1A1A]">
                  {h.logo && (
                    <div className="h-32 flex items-center justify-center bg-[#F5F5F3] border-b border-white/[0.04] px-6 py-5 overflow-hidden">
                      <img src={h.logo} alt={h.badge} className="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-[11px] font-bold text-[#00C2E0] tracking-wider uppercase">{h.badge}</span>
                    <h4 className="text-[18px] font-extrabold text-white mt-2 mb-2 tracking-tight">{h.title}</h4>
                    <p className="text-[13px] text-[#555] leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {FEATURED_LOGOS.length > 0 && (
            <Reveal className="mt-12">
              <p className="text-center text-[12px] font-semibold text-[#333] tracking-[0.2em] uppercase mb-6">{t("trayectoria.featuredIn")}</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
                {FEATURED_LOGOS.map((l) => (
                  <img key={l.alt} src={l.src} alt={l.alt} className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all" loading="lazy" />
                ))}
              </div>
            </Reveal>
          )}

          <Reveal className="mt-14">
            <p className="text-[13px] font-semibold text-[#333] tracking-wider uppercase mb-5">{t("trayectoria.coverage")}</p>
            <div className="flex flex-wrap gap-2">
              {COUNTRIES.map((c) => (
                <span key={c} className="px-4 py-2 rounded-full bg-[#0E0E0E] border border-[#1A1A1A] text-[13px] text-[#555]">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-24 md:py-32 bg-[#F5F5F3]" id="faq-section">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C2E0]/30 bg-[#00C2E0]/5 text-[12px] text-[#007A8F] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("faq.pill")}
            </div>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-black mb-10">
              {t("faq.h2")}
            </h2>
          </Reveal>
          <div className="space-y-2 max-w-[700px]">
            {FAQ.map((f, i) => (
              <Reveal key={i}>
                <div className="border-b border-[#DDD]">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left">
                    <span className="text-[15px] font-bold text-black pr-4">{f.q}</span>
                    <span className="text-[20px] text-[#999] flex-shrink-0 leading-none">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && <p className="text-[14px] text-[#555] leading-relaxed pb-5">{f.a}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT FORM ══════════ */}
      <section className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#141414]" id="contacto">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] text-[12px] text-[#555] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("contact.pill")}
            </div>
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4">
              {t("contact.h2.line1")}<br />{t("contact.h2.line2.before")} <span className="text-[#00C2E0]">{t("contact.h2.line2.suffix")}</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 mt-10">
            <Reveal>
              <p className="text-[15px] text-[#555] leading-relaxed mb-8">
                {t("contact.intro")}
              </p>
              <div className="space-y-4">
                {QUALIFICATIONS.map((c) => (
                  <div key={c} className="flex items-start gap-3 text-[14px] text-[#888]">
                    <span className="w-5 h-5 rounded-full bg-[#00C2E0]/10 border border-[#00C2E0]/20 flex items-center justify-center flex-shrink-0 text-[11px] text-[#00C2E0] mt-0.5">✓</span>
                    {c}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {!formSent ? (
                <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg font-extrabold mb-1">{t("contact.form.title")}</h3>
                  <p className="text-[13px] text-[#555] mb-6">{t("contact.form.subtitle")}</p>
                  <form onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">{t("contact.form.name")}</label>
                        <input required type="text" placeholder={t("contact.form.name.ph")} className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white placeholder-[#333] outline-none focus:border-[#00C2E0] transition-colors" />
                      </div>
                      <div>
                        <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">{t("contact.form.company")}</label>
                        <input required type="text" placeholder={t("contact.form.company.ph")} className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white placeholder-[#333] outline-none focus:border-[#00C2E0] transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">{t("contact.form.email")}</label>
                        <input required type="email" placeholder={t("contact.form.email.ph")} className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white placeholder-[#333] outline-none focus:border-[#00C2E0] transition-colors" />
                      </div>
                      <div>
                        <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">{t("contact.form.whatsapp")}</label>
                        <input required type="tel" placeholder={t("contact.form.whatsapp.ph")} className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white placeholder-[#333] outline-none focus:border-[#00C2E0] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">{t("contact.form.industry")}</label>
                      <select required defaultValue="" className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white outline-none focus:border-[#00C2E0] transition-colors">
                        <option value="" disabled>{t("contact.form.industry.ph")}</option>
                        {INDUSTRY_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">{t("contact.form.branches")}</label>
                      <select required defaultValue="" className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white outline-none focus:border-[#00C2E0] transition-colors">
                        <option value="" disabled>{t("contact.form.branches.ph")}</option>
                        {BRANCH_RANGES.map((o) => <option key={o.label} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">{t("contact.form.country")}</label>
                      <select required defaultValue="" className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white outline-none focus:border-[#00C2E0] transition-colors">
                        <option value="" disabled>{t("contact.form.country.ph")}</option>
                        {COUNTRY_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">{t("contact.form.challenge")}</label>
                      <textarea placeholder={t("contact.form.challenge.ph")} rows={3} className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white placeholder-[#333] outline-none focus:border-[#00C2E0] transition-colors resize-none" />
                    </div>
                    <button type="submit" className="w-full py-3 rounded-full bg-[#00C2E0] text-[#080808] font-bold text-[15px] hover:bg-[#00D4F5] transition-colors">
                      {t("contact.form.submit")}
                    </button>
                    <p className="text-[11px] text-[#333] text-center">{t("contact.form.disclaimer")}</p>
                  </form>
                </div>
              ) : (
                <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="w-14 h-14 rounded-full bg-[#00C2E0]/10 border border-[#00C2E0]/25 text-[#00C2E0] text-2xl flex items-center justify-center mb-5">✓</div>
                  <h3 className="text-xl font-extrabold mb-3">{t("contact.success.title")}</h3>
                  <p className="text-[14px] text-[#555] max-w-[360px] leading-relaxed">{t("contact.success.body")}</p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,194,224,0.06), transparent 70%)" }} />
        <div className="relative z-10 max-w-[600px] mx-auto px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#222] text-[12px] text-[#555] font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("fcta.pill")}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-[clamp(32px,5.5vw,60px)] font-extrabold leading-[1.03] tracking-[-0.035em] mb-5">
              {t("fcta.h2.line1")}<br />{t("fcta.h2.line2")}<br /><span className="text-[#00C2E0]">{t("fcta.h2.line3")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[18px] text-[#444] mb-10 leading-relaxed">
              {t("fcta.body")}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex justify-center gap-3 flex-wrap">
              <button onClick={openCalendar} className="px-7 py-3.5 rounded-full bg-[#00C2E0] text-[#080808] font-bold text-[15px] hover:bg-[#00D4F5] transition-colors">
                {t("fcta.cta")}
              </button>
              <a href="mailto:hola@batech.ai" className="px-7 py-3.5 rounded-full border border-[#222] text-[#555] font-semibold text-[15px] hover:border-[#444] hover:text-white transition-colors">
                hola@batech.ai
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-[#0C0C0C] border-t border-[#141414] py-8 px-6 md:px-10">
        <div className="max-w-[1120px] mx-auto flex flex-wrap items-center justify-between gap-5">
          <a href="#" className="flex items-center text-white" aria-label="Batech">
            <img src="/batech-logo.svg" alt="Batech" className="h-6" />
          </a>
          <ul className="flex flex-wrap gap-6">
            {[
              ["#problema", t("nav.problema")],
              ["#agentes", t("nav.beo")],
              ["#porque", t("nav.porque")],
              ["#trayectoria", t("nav.trayectoria")],
              ["#faq-section", t("nav.faq")],
              ["#contacto", t("nav.demo")],
            ].map(([href, label]) => (
              <li key={href}><a href={href} className="text-[13px] text-[#2A2A2A] hover:text-[#555] transition-colors">{label}</a></li>
            ))}
          </ul>
          <p className="text-[12px] text-[#222]">{t("footer.copy")}</p>
        </div>
      </footer>
    </div>
  );
}
