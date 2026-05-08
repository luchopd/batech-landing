import { useState, useEffect, useRef } from "react";
import QueueDetectionDemo from "../components/landing/QueueDetectionDemo";
import BeoVisionShowcase from "../components/landing/BeoVisionShowcase";
import { LANGS, getTranslator, type Lang } from "../i18n/landingTranslations";

interface Props {
  onStartOnboarding: () => void;
}

/* ── Agent data ── */
const AGENTS = [
  {
    tag: "Agente 01", name: "Revenue Agent", sub: "Conversion e ingresos",
    desc: "Correlaciona tráfico de personas con datos del POS en tiempo real. Detecta caídas de conversión por hora, turno y sucursal antes de que se acumulen.",
    features: ["Detecta drops de conversión por hora y sucursal", "Cruza tráfico de personas vs. ventas del POS", "Alerta antes de que el turno termine"],
    kpis: [{ label: "Clientes hoy", value: "247", delta: "+12% vs ayer", up: true }, { label: "Conversión", value: "38%", delta: "-6% benchmark", up: false }],
    alert: { icon: "\u26A0\uFE0F", text: <><b>Conversión cayendo</b> — Sucursal 4: -18% vs ayer misma hora. 2 colaboradores sin tarea en zona B.</> },
    wa: "Conversión -18% vs ayer. Reasigna zona B a caja ahora.",
  },
  {
    tag: "Agente 02", name: "Operations Agent", sub: "Filas y tiempos de espera",
    desc: "Monitorea longitud de fila y tiempo de espera en cada punto de servicio, en tiempo real, 24/7. Detecta incumplimientos de protocolo el momento en que ocurren.",
    features: ["Mide tiempo de espera por punto de servicio", "Detecta filas sobre el límite en segundos", "Alerta con acción específica, no solo el dato"],
    kpis: [{ label: "Fila actual", value: "9", delta: "límite: 5", up: false, color: "#FB923C" }, { label: "Espera prom.", value: "7.2 min", delta: "+4 min target", up: false }],
    alert: { icon: "\u26A0\uFE0F", text: <><b>Fila crítica</b> en caja principal. Espera 7 min supera límite de 3 min.</> },
    wa: "Fila de 9 personas. Espera: 7 min. Abre caja 2 de inmediato.",
  },
  {
    tag: "Agente 03", name: "Workforce Agent", sub: "Productividad del equipo",
    desc: "Detecta uso del celular y tiempo ocioso del personal vía visión computacional. Compara cobertura real vs. picos de tráfico y alerta cuando el staffing no corresponde a la demanda.",
    features: ["Detecta uso de celular en turno por visión AI", "Mide cobertura activa vs. picos de tráfico", "Alertas de understaff antes del pico"],
    kpis: [{ label: "Productividad", value: "81%", delta: "+4pts semana", up: true }, { label: "Uso celular", value: "3", delta: "hora pico", up: false, color: "#FB923C" }],
    alert: { icon: "\uD83D\uDCF1", text: <><b>3 empleados</b> usando celular en hora pico. Zona B sin cobertura activa.</> },
    wa: "3 colaboradores inactivos en hora pico. Zona B sin cobertura.",
  },
  {
    tag: "Agente 04", name: "Finance Agent", sub: "Conciliación y merma",
    desc: "Reconcilia caja vs. transacciones del POS. Detecta anomalías, patrones de merma y diferencias al cierre del día antes de que escalen.",
    features: ["Reconciliación automática de caja vs POS", "Detección de anomalías y patrones de merma", "Alerta de diferencias antes del cierre"],
    kpis: [{ label: "Diferencia caja", value: "$340", delta: "Turno mañana", up: false, color: "#FB923C" }, { label: "Transacciones", value: "1,247", delta: "Sin anomalías", up: true }],
    alert: { icon: "\uD83D\uDCBD", text: <><b>Diferencia de $340 MXN</b> detectada en sucursal 2. Posible error de cobro en turno mañana.</> },
    wa: "Diferencia $340 en cierre. Revisa transacciones del turno mañana.",
  },
  {
    tag: "Agente 05", name: "Experience Agent", sub: "Recurrencia y demografía",
    desc: "Rastrea recurrencia de clientes, demografía y tiempo de permanencia por zona. Detecta tendencias de lealtad invisibles para el POS solo.",
    features: ["Frecuencia de retorno por tipo de cliente", "Rango de edad y género del tráfico real", "Dwell time por zona de la sucursal"],
    kpis: [{ label: "Recurrencia 30d", value: "34%", delta: "+8pts mes", up: true }, { label: "Edad prom.", value: "28", delta: "años", up: true }],
    alert: { icon: "\uD83D\uDCC8", text: <>Clientes 25-35 años muestran <b>recurrencia +18%</b> en sucursal Norte vs. promedio de cadena.</>, good: true },
    wa: null,
  },
  {
    tag: "Agente 06", name: "Intelligence Agent", sub: "Benchmarks e inteligencia",
    desc: "Compara cada sucursal contra las demás y contra benchmarks de industria. Identifica qué ubicaciones están por debajo del potencial y explica por qué.",
    features: ["Ranking automático de sucursales por KPI", "Comparación contra benchmarks de industria", "Diagnóstico de causa raíz por sucursal"],
    kpis: [{ label: "Sucursal top", value: "Norte", delta: "62% conv.", up: true, color: "#34D399" }, { label: "Bajo potencial", value: "Centro", delta: "38% conv.", up: false, color: "#FB923C" }],
    alert: { icon: "\uD83D\uDCCA", text: <>Sucursal Centro: <b>12% por debajo</b> del promedio de cadena. Causa principal: tiempo de espera elevado.</> },
    wa: null,
  },
  {
    tag: "Agente 07", name: "Execution Agent", sub: "Acción y entrega",
    desc: "Empaqueta el output de todos los agentes en un plan de acción priorizado. Lo entrega directamente al gerente de turno por WhatsApp. Sin dashboards. Sin apps.",
    features: ["Prioriza acciones por impacto en revenue", "Entrega por WhatsApp al responsable directo", "Resumen diario automático por sucursal"],
    kpis: [],
    alert: null,
    wa: null,
    summary: { title: "RESUMEN DEL DIA — SUCURSAL CENTRO", msg: "✓ Fila resuelta a las 11:18 · ✓ Conversión recuperada +9% · ⚠ Diferencia de caja pendiente · 📈 Recurrencia semanal +4pts", footer: "3 acciones completadas hoy. Conversión final: 44% ↑ vs 38% apertura." },
  },
];

const BEFORE_AFTER = [
  { label: "Tiempo de espera", before: "Reporte semanal", after: "Alerta en tiempo real" },
  { label: "Productividad equipo", before: "Visita mensual", after: "Monitoreo 24/7" },
  { label: "Tasa de conversión", before: "Dato mensual", after: "Por hora, por sucursal" },
  { label: "Empleado ocioso", before: "Nunca (o por casualidad)", after: "En menos de 3 minutos" },
  { label: "Benchmark sucursales", before: "Spreadsheet manual", after: "Automático e instantáneo" },
];

const WORKFLOW_STEPS = [
  { title: "El cliente entra", desc: "Nadie sabe cuántas personas hay en piso. El gerente lo descubrirá en el cierre de caja." },
  { title: "Se forma una fila", desc: "El manager se entera por una queja en WhatsApp. Para entonces ya perdiste tres ventas." },
  { title: "Empleado ocioso", desc: "Nadie lo detecta. Se sabrá en la próxima visita del gerente regional en 3 semanas." },
  { title: "El turno tarde vende menos", desc: "El reporte semanal muestra que lleva 4 días así. Nadie sabe por qué." },
  { title: "Fin de mes", desc: "Revisas números pero no sabes qué pasó en el piso. El siguiente mes empieza igual." },
];

const HITOS = [
  {
    logo: "/awards/forbes-30-promesas.jpg",
    badge: "Forbes México",
    title: "30 Promesas de los Negocios",
    desc: "Batech seleccionada entre las 30 promesas de los negocios en México por Forbes — los emprendedores con mayor potencial de impacto en el ecosistema.",
  },
  {
    logo: "/awards/bloomberg-linea.jpg",
    badge: "Bloomberg Línea",
    title: "100 Innovadores LATAM 2024",
    desc: "Reconocidos entre los 100 innovadores más destacados de América Latina por su impacto en IA aplicada a operaciones físicas.",
  },
  {
    logo: "/awards/las-100-pro.jpg",
    badge: "LAS 100 PRO 2025 · by Balfi",
    title: "#1 en Validación y Producto",
    desc: "Batech reconocido como el #1 en validación y producto entre las 100 startups con mayor tracción comercial de la región.",
  },
  {
    logo: "/awards/shark-tank.svg",
    badge: "Shark Tank México",
    title: "Pitch ante los tiburones",
    desc: "Batech presentado ante los inversionistas de Shark Tank México como una de las startups con mayor potencial disruptivo en el ecosistema mexicano.",
    invertLogo: true,
  },
  {
    logo: "/awards/nvidia-inception.png",
    badge: "NVIDIA Inception",
    title: "Programa global de IA",
    desc: "Seleccionados por NVIDIA para su programa Inception — la red global de las startups que están construyendo la frontera de la IA aplicada.",
  },
  {
    logo: "/awards/pegasus-startup-world-cup.png",
    badge: "Pegasus Tech Ventures",
    title: "Startup World Cup",
    desc: "Representamos a México y Latinoamérica en el Startup World Cup, la competencia global de startups con presencia en más de 70 países.",
  },
  {
    logo: "/awards/cubo-startup-2026.svg",
    badge: "Cubo Itaú",
    title: "Cubo Itaú Startup 2026",
    desc: "Cubo Itaú Startup 2026 — programa del banco más grande de Brasil que selecciona a las startups con mayor potencial de escala en LATAM.",
  },
  {
    logo: "/awards/early-stage-100.jpg",
    badge: "NuMundo · Nascent",
    title: "Early Stage 100 México",
    desc: "Seleccionados por NuMundo Ventures y Nascent dentro del Early Stage 100 México — las startups en etapa temprana con mayor potencial del país.",
  },
];

const FEATURED_LOGOS: { src: string; alt: string }[] = [];

const COUNTRIES = ["🇺🇸 USA", "🇲🇽 México", "🇦🇷 Argentina", "🇨🇱 Chile", "🇪🇨 Ecuador", "🇬🇹 Guatemala", "🇨🇴 Colombia", "🇧🇷 Brasil", "🇵🇪 Perú", "🇨🇷 Costa Rica", "🇸🇻 El Salvador"];

const FAQ = [
  { q: "¿Qué pasa si mi POS no tiene API?", a: "BEO Link lo resuelve. Es una app que se instala en 3 minutos, detecta tu POS automáticamente y extrae datos vía CDC (Change Data Capture) — lee archivos de registro en modo solo lectura, sin consultas a la base de datos, sin impacto en el rendimiento. Funciona con Soft Restaurant, National Soft, Aloha, MICROS, NCR Silver y más." },
  { q: "¿Cuánto tarda la implementación?", a: "48 horas. Conectamos tus cámaras IP existentes, POS y RRHH sin instalar hardware adicional. No hay proyecto de IT. El día 3 tus gerentes ya reciben alertas por WhatsApp." },
  { q: "¿BEO reemplaza a mi equipo?", a: "No. BEO hace que tu equipo sea mucho más efectivo. Los gerentes dejan de hacer supervisión manual y empiezan a actuar sobre alertas específicas. El mismo equipo, con visibilidad completa." },
  { q: "¿Necesito cámaras nuevas?", a: "No. BEO funciona con las cámaras IP que ya tienes. Si ya tienen stream RTSP, BEO puede conectarse. Cero hardware adicional requerido." },
  { q: "¿Qué tan precisos son los agentes?", a: "En la semana 1 ya detectan patrones básicos. En el mes 2 conocen los patrones específicos de cada sucursal. Los clientes reportan accuracy superior al 90% desde la primera semana." },
  { q: "¿Mis datos están seguros?", a: "Sí. Datos aislados por cliente, estándares enterprise de seguridad. Las grabaciones de cámaras se procesan en edge y no se almacenan. Solo los insights generados por los agentes." },
  { q: "¿Qué ROI puedo esperar?", a: "Clientes reportan 12-20% de incremento en conversión en el primer mes. La recuperación de la inversión típicamente ocurre en menos de 60 días." },
];

const INTEGRATIONS = [
  { cat: "Visión", name: "Cámaras IP", sub: "RTSP · Sin hardware nuevo" },
  { cat: "Punto de venta", name: "Cualquier POS", sub: "Toast · Square · Lightspeed · Clover · Soft Restaurant · y más" },
  { cat: "Sin API? No importa", name: "BEO Link", sub: "Conecta POS sin API en 3 min · CDC · Solo lectura · Cero impacto", highlight: true, isBeoLink: true },
  { cat: "RRHH y nómina", name: "HR Systems", sub: "7shifts · Deputy · Conector genérico" },
  { cat: "Mensajería", name: "WhatsApp", sub: "360dialog · Twilio" },
];

const CONNECTORS_TICKER = [
  "Toast", "Square", "Loyverse", "Shopify", "MercadoLibre",
  "Stripe", "MercadoPago", "Clip", "Rappi", "Siigo",
  "Alegra", "Worky", "Factorial", "Odoo", "Cloudbeds",
  "HubSpot", "Tiendanube", "SimplyBook",
  "Soft Restaurant", "National Soft", "Aloha", "MICROS", "NCR Silver",
];

const CLIENTS = [
  { name: "Coca-Cola", logo: "/clients/coca-cola.png" },
  { name: "Burger King", logo: "/clients/burger-king.png" },
  { name: "Seguros SURA", logo: "/clients/sura.svg" },
  { name: "Doggis", logo: "/clients/doggis.png" },
  { name: "Grupo Rica", logo: "/clients/grupo-rica.png" },
  { name: "Barrio Chicken", logo: "/clients/barrio-chicken.png" },
];

const WHY_CARDS = [
  { num: "01", title: "Vertical, no genérico", desc: "Cada agente entiende los procesos de operaciones físicas. No es un chatbot adaptado. Es una herramienta construida para cadenas que venden cara a cara." },
  { num: "02", title: "De principio a fin, no sugerencias", desc: "BEO no sugiere. Detecta el problema, lo interpreta y entrega una recomendación específica por WhatsApp. Tu equipo actúa sin abrir ningún dashboard." },
  { num: "03", title: "Aprende con cada ciclo", desc: "Los agentes se vuelven más precisos con cada semana. Aprenden patrones de cada sucursal, horarios de mayor tráfico y comportamientos del equipo." },
  { num: "04", title: "Cualquier POS, en 48 horas", desc: "¿Tu POS tiene API? Nos conectamos directo. ¿No tiene API? BEO Link extrae datos vía CDC en 3 minutos. Sin proyectos de IT. Sin hardware nuevo." },
  { num: "05", title: "Enterprise-ready", desc: "Seguridad enterprise, datos aislados por sucursal y controles de acceso por rol. Diseñado para cadenas con decenas o cientos de ubicaciones desde el día uno." },
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
  const [opHours, setOpHours] = useState(14); // operating hours per day
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

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("batech_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Coverage calculator (amplification framing — not replacement)
  const REALISTIC_HUMAN_HRS_PER_STORE = 4; // monthly observation hours per store, realistically
  const totalOperativeHrs = stores * opHours * 30;        // total ops time exposed per month
  const humanCoverageHrs = stores * REALISTIC_HUMAN_HRS_PER_STORE;
  const beoCoverageHrs = totalOperativeHrs;
  const humanCoveragePct = (humanCoverageHrs / totalOperativeHrs) * 100;
  const multiplier = Math.round(beoCoverageHrs / Math.max(humanCoverageHrs, 1));

  const CALENDAR_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ39RZra2S1DmOkyPjwBa06TVFD0Zipfj_k8Ff5rZ534JthsYz6kfMz8NWZD2ivmOkdKnmwMPZCY";

  const openCalendar = () => {
    window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
  };

  const agent = AGENTS[activeAgent];

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
          {/* Language switcher */}
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
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(ellipse, #00C2E0, transparent 70%)" }} />
        {/* Grid lines */}
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
                    <span className="text-[10px] font-bold text-[#00C2E0] tracking-wider">EN VIVO</span>
                  </div>
                  <div className="bg-[#0A0A0A] rounded-[24px] p-4 pt-8 space-y-3 min-h-[340px]">
                    <div className="text-[11px] text-[#333] text-center mb-2">BEO · 11:14 AM</div>
                    {/* BEO message */}
                    <div className="bg-[#0D1A1E] rounded-xl rounded-tl-sm p-3 border border-[#00C2E0]/10">
                      <p className="text-[12px] text-[#AAA] leading-relaxed">
                        <span className="text-[#FB923C] font-bold">⚠ Fila de 9 personas</span> en caja. Espera: 7 min. 2 colaboradores sin tarea en zona B.<br /><br />
                        <span className="text-[#34D399] font-semibold">Acción:</span> Reasigna zona B a caja de inmediato.
                      </p>
                      <div className="text-[10px] text-[#222] mt-2 text-right">Leído ✓✓</div>
                    </div>
                    {/* Reply */}
                    <div className="bg-[#0D1F0D] rounded-xl rounded-tr-sm p-3 ml-8 border border-[#34D399]/10">
                      <p className="text-[12px] text-[#86EFAC]">Listo, ya los moví. Gracias BEO 👏</p>
                      <div className="text-[10px] text-[#1A3A1A] mt-1 text-right">Leído ✓✓</div>
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> Sin BEO
            </div>
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4">
              Así opera tu<br />cadena hoy.<br /><span className="italic">Sin IA.</span>
            </h2>
            <p className="text-[16px] text-[#555] max-w-[520px] leading-relaxed mb-12">
              Tu equipo pierde entre 40 y 60% de su tiempo en tareas que no generan valor. Esto es lo que pasa cada día.
            </p>
          </Reveal>

          {/* Pain workflow */}
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

          {/* Before / After table */}
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] text-[12px] text-[#555] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> El costo de no actuar
            </div>
            <h3 className="text-[clamp(22px,3vw,36px)] font-extrabold leading-tight tracking-tight mb-8">
              Lo que cambia<br />cuando BEO trabaja.
            </h3>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-[#1A1A1A] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-[#0E0E0E] border-b border-[#1A1A1A]">
                <div className="px-5 py-3.5 text-[11px] font-bold text-[#444] tracking-wider uppercase">Proceso</div>
                <div className="px-5 py-3.5 text-[11px] font-bold text-[#F87171] tracking-wider uppercase">Sin BEO</div>
                <div className="px-5 py-3.5 text-[11px] font-bold text-[#00C2E0] tracking-wider uppercase">Con BEO</div>
              </div>
              {BEFORE_AFTER.map((r, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-[#141414] last:border-b-0">
                  <div className="px-5 py-4 text-[14px] text-[#999] font-medium">{r.label}</div>
                  <div className="px-5 py-4 text-[14px] text-[#666] line-through">{r.before}</div>
                  <div className="px-5 py-4 text-[14px] text-[#00C2E0] font-semibold">{r.after}</div>
                </div>
              ))}
              {/* ROI row */}
              <div className="grid grid-cols-3 bg-[#0A0A0A]">
                <div className="px-5 py-4 text-[14px] text-[#00C2E0] font-bold">ROI estimado</div>
                <div className="px-5 py-4 text-[14px] text-[#666]">&mdash;</div>
                <div className="px-5 py-4 text-[20px] text-[#00C2E0] font-extrabold tracking-tight">15–25x</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ LIVE DEMO: QUEUE DETECTION + POS SYNC ══════════ */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] border-y border-[#141414]" id="demo-vivo">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C2E0]/25 bg-[#00C2E0]/5 text-[12px] text-[#00C2E0] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" style={{ animation: "qd-blink 1.2s ease-in-out infinite" }} />
              Live demo · Esto pasa cada hora pico
            </div>
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-4">
              Tu cámara detecta la fila.<br />
              Tu POS pierde la venta.<br />
              <span className="text-[#00C2E0]">BEO actúa antes.</span>
            </h2>
            <p className="text-[16px] text-[#555] max-w-[640px] mx-auto leading-relaxed">
              Visión computacional + sincronización con tu POS en tiempo real. BEO correlaciona los datos, detecta el problema y entrega la acción específica al gerente por WhatsApp — todo en menos de 90 segundos.
            </p>
          </Reveal>

          <Reveal>
            <QueueDetectionDemo />
          </Reveal>

          {/* Below-demo proof points */}
          <div className="grid sm:grid-cols-3 gap-3 mt-10">
            {[
              { n: "< 90s", l: "Del primer cliente en fila a la acción ejecutada por tu equipo" },
              { n: "100%", l: "Cobertura visual + transaccional, 24/7, sin supervisores en piso" },
              { n: "+18%", l: "Conversión recuperada en horas pico cuando BEO opera en vivo" },
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
              Quiero ver esto en mi sucursal &rarr;
            </button>
          </Reveal>
        </div>
      </section>

      {/* ══════════ BEO VISION SHOWCASE ══════════ */}
      <section className="py-24 md:py-32 bg-[#06080A]" id="modelos">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <BeoVisionShowcase calendarUrl={CALENDAR_URL} />
        </div>
      </section>

      {/* ══════════ AMPLIFICATION CALCULATOR ══════════ */}
      <section className="py-24 md:py-32 bg-[#0C0C0C] border-y border-[#141414]" id="calculadora">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C2E0]/25 bg-[#00C2E0]/5 text-[12px] text-[#00C2E0] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> Multiplicador operativo
            </div>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4">
              Tu equipo. <span className="text-[#00C2E0]">{multiplier}x más visibilidad.</span>
            </h2>
            <p className="text-[16px] text-[#555] max-w-[640px] mx-auto leading-relaxed">
              BEO no reemplaza a tu equipo gerencial — lo <b className="text-[#888]">amplifica</b>. Le da visibilidad operativa que físicamente no podría tener: 100% del tiempo, en cada sucursal, en cada cámara, en cada transacción.
            </p>
          </Reveal>

          <Reveal>
            <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl overflow-hidden mb-10">
              <div className="bg-[#111] border-b border-[#1A1A1A] px-6 md:px-8 py-5">
                <div className="text-lg font-extrabold text-white tracking-tight mb-1">Calcula la cobertura de tu operación</div>
                <div className="text-[13px] text-[#555]">Mismo equipo · Misma estructura · Capacidad operativa multiplicada</div>
              </div>
              <div className="p-6 md:p-8">
                {/* Sliders */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[13px] text-[#888]">Número de sucursales</span>
                      <span className="text-[14px] font-bold text-[#00C2E0]">{stores}</span>
                    </div>
                    <input type="range" min={5} max={200} value={stores} onChange={(e) => setStores(+e.target.value)} className="w-full accent-[#00C2E0] cursor-pointer" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[13px] text-[#888]">Horas operativas por día</span>
                      <span className="text-[14px] font-bold text-[#00C2E0]">{opHours}h</span>
                    </div>
                    <input type="range" min={8} max={24} value={opHours} onChange={(e) => setOpHours(+e.target.value)} className="w-full accent-[#00C2E0] cursor-pointer" />
                  </div>
                </div>

                {/* Total operating time exposed */}
                <div className="bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-5 py-4 mb-6 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className="text-[11px] font-bold text-[#444] tracking-wider uppercase mb-1">Tiempo operativo total al mes</div>
                    <div className="text-[13px] text-[#666]">{stores} sucursales × {opHours}h × 30 días</div>
                  </div>
                  <div className="text-[26px] font-extrabold text-[#E0E0E0] tracking-tight">{totalOperativeHrs.toLocaleString("es-MX")} hrs</div>
                </div>

                {/* Coverage comparison */}
                <div className="grid md:grid-cols-[1fr_60px_1fr] gap-0 items-center mb-8">
                  <div className="bg-[#141414] border border-[#2A2A2A] rounded-xl p-6">
                    <div className="text-[11px] font-bold text-[#444] tracking-wider uppercase mb-3">Cobertura realista de tu equipo en piso</div>
                    <div className="text-[42px] font-extrabold text-[#E0E0E0] tracking-tight leading-none">{humanCoverageHrs.toLocaleString("es-MX")}</div>
                    <div className="text-[12px] text-[#333] mt-1">hrs/mes observadas en sucursal</div>
                    <div className="mt-4">
                      <div className="h-1.5 rounded-full bg-[#1A1A1A] overflow-hidden">
                        <div className="h-full bg-[#FB923C]/70 rounded-full" style={{ width: `${Math.max(humanCoveragePct, 0.5)}%` }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#666] mt-1.5">
                        <span>{humanCoveragePct.toFixed(1)}% del tiempo operativo</span>
                        <span className="text-[#444]">99.4% sin visibilidad</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-[#555] mt-3 pt-3 border-t border-[#1E1E1E] leading-snug">
                      Lo que un gerente de zona puede observar realísticamente entre visitas, viajes y reuniones.
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col items-center gap-2">
                    <div className="w-px h-10 bg-[#1E1E1E]" />
                    <span className="text-[11px] font-bold text-[#00C2E0]/40 tracking-wider">+BEO</span>
                    <div className="w-px h-10 bg-[#1E1E1E]" />
                  </div>

                  <div className="bg-[#0A1A1C] border border-[#00C2E0]/20 rounded-xl p-6 mt-4 md:mt-0">
                    <div className="text-[11px] font-bold text-[#00C2E0]/70 tracking-wider uppercase mb-3">Tu equipo · potenciado por BEO</div>
                    <div className="text-[42px] font-extrabold text-[#00C2E0] tracking-tight leading-none">{beoCoverageHrs.toLocaleString("es-MX")}</div>
                    <div className="text-[12px] text-[#3A5560] mt-1">hrs/mes con visibilidad total</div>
                    <div className="mt-4">
                      <div className="h-1.5 rounded-full bg-[#0A1A1C] overflow-hidden border border-[#00C2E0]/10">
                        <div className="h-full bg-gradient-to-r from-[#00C2E0] to-[#34D399] rounded-full" style={{ width: "100%" }} />
                      </div>
                      <div className="flex justify-between text-[11px] text-[#3A5560] mt-1.5">
                        <span className="text-[#00C2E0] font-semibold">100% del tiempo operativo</span>
                        <span>0% ciego</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-[#34D399] font-semibold mt-3 pt-3 border-t border-[#00C2E0]/10 leading-snug">
                      Tu equipo gerencial deja de revisar reportes y empieza a actuar sobre alertas específicas.
                    </div>
                  </div>
                </div>

                {/* Multiplier badge */}
                <div className="bg-gradient-to-br from-[#0A1A1C] to-[#0A0A0A] border border-[#00C2E0]/20 rounded-xl px-6 py-5 flex items-center gap-5">
                  <div className="text-5xl font-black text-[#00C2E0] tracking-tight flex-shrink-0 leading-none">{multiplier}x</div>
                  <div>
                    <div className="text-[15px] text-[#E0E0E0] font-bold leading-snug">más cobertura operativa con el equipo que ya tienes</div>
                    <div className="text-[12px] text-[#555] mt-1">Mismo headcount. Mismos roles. Visibilidad multiplicada por {multiplier}.</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="text-center">
            <p className="text-[15px] text-[#555] mb-5">Tu equipo deja de cazar problemas. Empieza a recibir soluciones.</p>
            <button onClick={openCalendar} className="px-7 py-3 rounded-full bg-[#00C2E0] text-[#080808] font-bold text-[15px] hover:bg-[#00D4F5] transition-colors">
              Quiero potenciar mi operación &rarr;
            </button>
          </Reveal>
        </div>
      </section>

      {/* ══════════ AGENTS ══════════ */}
      <section className="py-24 md:py-32" id="agentes">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] text-[12px] text-[#555] font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> Los agentes de BEO
            </div>
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4">
              7 agentes. Detectan.<br />Interpretan. <span className="text-[#00C2E0]">Actúan.</span>
            </h2>
            <p className="text-[16px] text-[#555] max-w-[600px] leading-relaxed mb-10">
              No son chatbots ni automatizaciones genéricas. Son agentes especializados en operaciones físicas que ejecutan flujos completos de principio a fin — y le dicen a tu equipo qué hacer por WhatsApp.
            </p>
          </Reveal>

          <Reveal>
            {/* Agent tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {AGENTS.map((a, i) => (
                <button key={i} onClick={() => setActiveAgent(i)} className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[13px] font-medium transition-all ${activeAgent === i ? "bg-[#00C2E0]/10 text-[#00C2E0] border-[#00C2E0]/30" : "border-[#222] text-[#555] hover:text-[#CCC] hover:border-[#333]"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${activeAgent === i ? "bg-[#00C2E0]" : "bg-[#333]"}`} />
                  {a.name.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Agent panel */}
            <div className="grid md:grid-cols-2 gap-6 min-h-[380px]">
              {/* Left: info */}
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

              {/* Right: visual card */}
              <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl overflow-hidden">
                {/* Card header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[#1A1A1A]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="text-[12px] text-[#444] ml-2 font-semibold">{agent.name}</span>
                  <span className="ml-auto flex items-center gap-1 text-[10px] font-bold text-[#00C2E0] tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0] animate-pulse" /> EN VIVO
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  {/* KPIs */}
                  {agent.kpis.length > 0 && (
                    <div className="grid grid-cols-2 gap-3">
                      {agent.kpis.map((k, i) => (
                        <div key={i} className="bg-[#141414] rounded-lg p-3">
                          <div className="text-[11px] text-[#444] mb-1">{k.label}</div>
                          <div className="text-xl font-extrabold tracking-tight" style={{ color: (k as any).color || "#E0E0E0" }}>{k.value}</div>
                          <div className={`text-[11px] mt-0.5 ${k.up ? "text-[#34D399]" : "text-[#FB923C]"}`}>{k.delta}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Alert */}
                  {agent.alert && (
                    <div className={`rounded-lg p-3 border text-[13px] leading-relaxed ${(agent.alert as any).good ? "bg-[#0A1A10] border-[#34D399]/20 text-[#86EFAC]" : "bg-[#1A0A0A] border-[#F87171]/15 text-[#CCC]"}`}>
                      <span className="mr-2">{agent.alert.icon}</span>{agent.alert.text}
                    </div>
                  )}

                  {/* WhatsApp output */}
                  {agent.wa && (
                    <div className="bg-[#0D1A1E] rounded-lg p-3 border border-[#00C2E0]/10">
                      <div className="text-[10px] font-bold text-[#00C2E0]/60 tracking-wider uppercase mb-1">BEO → WhatsApp</div>
                      <div className="text-[13px] text-[#AAA]">{agent.wa}</div>
                    </div>
                  )}

                  {/* Execution Agent summary */}
                  {(agent as any).summary && (
                    <>
                      <div className="bg-[#0D1A1E] rounded-lg p-3 border border-[#00C2E0]/10">
                        <div className="text-[10px] font-bold text-[#00C2E0]/60 tracking-wider uppercase mb-2">{(agent as any).summary.title}</div>
                        <div className="text-[13px] text-[#CCC] leading-relaxed">{(agent as any).summary.msg}</div>
                      </div>
                      <div className="bg-[#0A1A10] rounded-lg p-3 border border-[#34D399]/15 text-[13px] text-[#86EFAC]">
                        {(agent as any).summary.footer}
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> Por qué BEO
            </div>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-black mb-4">
              Vertical. Autónomo.<br /><span className="text-[#00C2E0]">Sin fricción.</span>
            </h2>
            <p className="text-[16px] text-[#555] max-w-[520px] leading-relaxed mb-12">
              No chatbots. No automatizaciones genéricas. Agentes especializados en operaciones físicas.
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
                  <div className="text-[16px] font-bold text-[#00C2E0] mb-2">Benchmark de industria</div>
                  <div className="text-[13px] text-[#3A5A5E]">Compara cada sucursal vs. benchmarks y estándares de excelencia de tu industria.</div>
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> Integraciones
            </div>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4">
              Se conecta con<br />lo que ya usas.
            </h2>
            <p className="text-[16px] text-[#555] max-w-[520px] leading-relaxed mb-12">
              Sin migraciones. Sin cambios de stack. Sin proyectos de IT.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {INTEGRATIONS.map((int, i) => {
              const isBeoLink = (int as any).isBeoLink;
              return (
                <Reveal key={i}>
                  <div className={`rounded-2xl p-5 border transition-colors ${isBeoLink ? "bg-[#1A1408] border-[#FB923C]/20" : int.highlight ? "bg-[#0A1A1C] border-[#00C2E0]/15" : "bg-[#0E0E0E] border-[#1A1A1A] hover:bg-[#131313]"}`}>
                    <div className={`text-[11px] font-semibold tracking-wider uppercase mb-2 ${isBeoLink ? "text-[#FB923C]" : int.highlight ? "text-[#00C2E0]" : "text-[#444]"}`}>{int.cat}</div>
                    <div className={`text-[16px] font-bold mb-1 ${isBeoLink ? "text-[#FB923C]" : int.highlight ? "text-[#00C2E0]" : "text-[#CCC]"}`}>{int.name}</div>
                    <div className={`text-[13px] ${isBeoLink ? "text-[#8A6A3E]" : int.highlight ? "text-[#3A5A5E]" : "text-[#444]"}`}>{int.sub}</div>
                    {isBeoLink && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {["Solo lectura", "3 min setup", "Cero impacto en POS"].map((b) => (
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
            <p className="text-[15px] text-[#666] mb-5">Te conectamos con lo que ya tienes. <b className="text-[#888]">Sin migraciones. Sin proyectos de IT.</b></p>
            <button onClick={openCalendar} className="px-7 py-3 rounded-full bg-[#00C2E0] text-[#080808] font-bold text-[15px] hover:bg-[#00D4F5] transition-colors">
              Agenda una demo &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* ══════════ CLIENTS — subtle marquee ══════════ */}
      <section className="py-16 md:py-20 bg-[#0A0A0A] border-y border-[#141414]" id="clientes">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222] text-[11px] text-[#555] font-bold tracking-[0.2em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> {t("clients.label")}
            </div>
            <p className="text-[14px] text-[#555] max-w-[560px] mx-auto">{t("clients.subtitle")}</p>
          </Reveal>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
          <div className="flex animate-marquee gap-6 hover:[animation-play-state:paused]">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex-shrink-0 h-20 md:h-24 w-44 md:w-52 bg-white rounded-2xl flex items-center justify-center px-6 shadow-[0_2px_24px_rgba(255,255,255,0.04)] hover:shadow-[0_2px_24px_rgba(0,194,224,0.15)] transition-shadow"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-12 md:max-h-14 max-w-full object-contain"
                  loading="lazy"
                />
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> Reconocimientos
            </div>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
              Lo que construimos.<br />Lo que <span className="text-[#00C2E0]">logramos.</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {HITOS.map((h, i) => {
              const special = (h as any).special;
              const logo = (h as any).logo as string | undefined;
              const invertLogo = (h as any).invertLogo as boolean | undefined;
              return (
                <Reveal key={i}>
                  <div className={`rounded-2xl border h-full overflow-hidden flex flex-col ${special ? "bg-[#0A1A1C] border-[#00C2E0]/15" : "bg-[#0E0E0E] border-[#1A1A1A]"}`}>
                    {logo && (
                      <div className="h-32 flex items-center justify-center bg-[#F5F5F3] border-b border-white/[0.04] px-6 py-5 overflow-hidden">
                        <img
                          src={logo}
                          alt={h.badge}
                          className={`max-h-full max-w-full object-contain ${invertLogo ? "" : ""}`}
                          loading="lazy"
                        />
                      </div>
                    )}
                    {special && !logo && (
                      <div className="h-32 flex items-center justify-center bg-[#0A1A1C]">
                        <div className="text-5xl">🌎</div>
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-[11px] font-bold text-[#00C2E0] tracking-wider uppercase">{h.badge}</span>
                      <h4 className="text-[18px] font-extrabold text-white mt-2 mb-2 tracking-tight">{h.title}</h4>
                      <p className="text-[13px] text-[#555] leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Featured logos bar */}
          {FEATURED_LOGOS.length > 0 && (
            <Reveal className="mt-12">
              <p className="text-center text-[12px] font-semibold text-[#333] tracking-[0.2em] uppercase mb-6">También presentes en</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
                {FEATURED_LOGOS.map((l) => (
                  <img
                    key={l.alt}
                    src={l.src}
                    alt={l.alt}
                    className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                ))}
              </div>
            </Reveal>
          )}

          {/* Countries */}
          <Reveal className="mt-14">
            <p className="text-[13px] font-semibold text-[#333] tracking-wider uppercase mb-5">Cobertura</p>
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> FAQ
            </div>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-black mb-10">
              Preguntas frecuentes.
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" /> Agenda tu demo
            </div>
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4">
              Listo para dejar de<br />operar <span className="text-[#00C2E0]">a ciegas?</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 mt-10">
            {/* Left: qualification */}
            <Reveal>
              <p className="text-[15px] text-[#555] leading-relaxed mb-8">
                BEO está diseñado para cadenas con 5 o más puntos de venta físicos donde el revenue depende de la atención en persona. Si calificas, alguien de nuestro equipo te contacta en menos de 24 horas.
              </p>
              <div className="space-y-4">
                {[
                  "5 o más sucursales físicas con cámaras de seguridad",
                  "Sistema POS para registrar ventas",
                  "Revenue dependiente de atención presencial",
                  "Quieres visibilidad operacional en tiempo real",
                ].map((c) => (
                  <div key={c} className="flex items-start gap-3 text-[14px] text-[#888]">
                    <span className="w-5 h-5 rounded-full bg-[#00C2E0]/10 border border-[#00C2E0]/20 flex items-center justify-center flex-shrink-0 text-[11px] text-[#00C2E0] mt-0.5">✓</span>
                    {c}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={0.1}>
              {!formSent ? (
                <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg font-extrabold mb-1">Cuéntanos sobre tu operación</h3>
                  <p className="text-[13px] text-[#555] mb-6">2 minutos. Te contactamos en menos de 24 horas.</p>
                  <form onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">Nombre *</label>
                        <input required type="text" placeholder="Tu nombre" className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white placeholder-[#333] outline-none focus:border-[#00C2E0] transition-colors" />
                      </div>
                      <div>
                        <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">Empresa *</label>
                        <input required type="text" placeholder="Tu empresa" className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white placeholder-[#333] outline-none focus:border-[#00C2E0] transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">Email *</label>
                        <input required type="email" placeholder="tu@empresa.com" className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white placeholder-[#333] outline-none focus:border-[#00C2E0] transition-colors" />
                      </div>
                      <div>
                        <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">WhatsApp *</label>
                        <input required type="tel" placeholder="+52 55 0000 0000" className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white placeholder-[#333] outline-none focus:border-[#00C2E0] transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">Industria *</label>
                      <select required defaultValue="" className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white outline-none focus:border-[#00C2E0] transition-colors">
                        <option value="" disabled>Selecciona</option>
                        <option>Restaurantes / QSR</option>
                        <option>Retail especializado</option>
                        <option>Supermercados</option>
                        <option>Servicios financieros</option>
                        <option>Aerolíneas / Transporte</option>
                        <option>Hoteles</option>
                        <option>Entretenimiento / Casinos</option>
                        <option>Logística</option>
                        <option>Salud</option>
                        <option>Otra</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">¿Cuántas sucursales? *</label>
                      <select required defaultValue="" className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white outline-none focus:border-[#00C2E0] transition-colors">
                        <option value="" disabled>Rango</option>
                        <option value="no">Menos de 5</option>
                        <option>5-20</option>
                        <option>20-50</option>
                        <option>50-200</option>
                        <option>Más de 200</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">País *</label>
                      <select required defaultValue="" className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white outline-none focus:border-[#00C2E0] transition-colors">
                        <option value="" disabled>País</option>
                        <option>México</option>
                        <option>Colombia</option>
                        <option>Argentina</option>
                        <option>Chile</option>
                        <option>Ecuador</option>
                        <option>Perú</option>
                        <option>Guatemala</option>
                        <option>Costa Rica</option>
                        <option>Brasil</option>
                        <option>Estados Unidos</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[12px] text-[#555] font-semibold mb-1.5 block">¿Mayor reto operacional hoy?</label>
                      <textarea placeholder="Ej: No sé qué hace mi equipo cuando no estoy..." rows={3} className="w-full bg-[#141414] border border-[#1E1E1E] rounded-lg px-3 py-2.5 text-[14px] text-white placeholder-[#333] outline-none focus:border-[#00C2E0] transition-colors resize-none" />
                    </div>
                    <button type="submit" className="w-full py-3 rounded-full bg-[#00C2E0] text-[#080808] font-bold text-[15px] hover:bg-[#00D4F5] transition-colors">
                      Solicitar demo &rarr;
                    </button>
                    <p className="text-[11px] text-[#333] text-center">Solo contactamos empresas que califican. Sin spam.</p>
                  </form>
                </div>
              ) : (
                <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="w-14 h-14 rounded-full bg-[#00C2E0]/10 border border-[#00C2E0]/25 text-[#00C2E0] text-2xl flex items-center justify-center mb-5">✓</div>
                  <h3 className="text-xl font-extrabold mb-3">¡Recibimos tu solicitud!</h3>
                  <p className="text-[14px] text-[#555] max-w-[360px] leading-relaxed">Revisamos tu información y si calificas, alguien de nuestro equipo te escribe por WhatsApp en menos de 24 horas.</p>
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
