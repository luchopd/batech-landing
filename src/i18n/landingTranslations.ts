/**
 * Trilingual strings for the landing page (ES / EN / PT).
 * Pattern: t("key") -> returns string in current language.
 * Structured data (agents, FAQ, etc.) is exported per language.
 */

export type Lang = "es" | "en" | "pt";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "pt", label: "PT", flag: "🇧🇷" },
];

type Dict = Record<string, string>;

const ES: Dict = {
  // Nav
  "nav.problema": "El problema",
  "nav.beo": "BEO",
  "nav.porque": "Por qué BEO",
  "nav.trayectoria": "Trayectoria",
  "nav.faq": "FAQ",
  "nav.demo": "Agenda una demo",

  // Hero
  "hero.pill": "BEO · Agentes de IA para operaciones físicas",
  "hero.h1.line1": "Tus cámaras",
  "hero.h1.line2": "ya ven",
  "hero.h1.line3": "todo.",
  "hero.h1.line4": "BEO te dice",
  "hero.h1.line5": "qué hacer.",
  "hero.body": "La plataforma de inteligencia operacional para negocios que venden cara a cara. ",
  "hero.body.bold": "Supervisa, interpreta y acciona.",
  "hero.cta.primary": "Agenda una demo →",
  "hero.cta.secondary": "Ver cómo funciona",
  "hero.stat1.n": "+15%",
  "hero.stat1.l": "Conversión en el primer mes",
  "hero.stat2.n": "24/7",
  "hero.stat2.l": "Cobertura operativa",
  "hero.stat3.n": "$0",
  "hero.stat3.l": "Hardware nuevo requerido",
  "hero.stat4.n": "Any POS",
  "hero.stat4.l": "Con o sin API",
  "hero.phone.live": "EN VIVO",
  "hero.phone.header": "BEO · 11:14 AM",
  "hero.phone.alert.bold": "⚠ Fila de 9 personas",
  "hero.phone.alert.tail": " en caja. Espera: 7 min. 2 colaboradores sin tarea en zona B.",
  "hero.phone.action.label": "Acción:",
  "hero.phone.action.text": " Reasigna zona B a caja de inmediato.",
  "hero.phone.read": "Leído ✓✓",
  "hero.phone.reply": "Listo, ya los moví. Gracias BEO 👏",

  // Problem
  "problem.pill": "Sin BEO",
  "problem.h2.line1": "Así opera tu",
  "problem.h2.line2": "cadena hoy.",
  "problem.h2.line3": "Sin IA.",
  "problem.body": "Tu equipo pierde entre 40 y 60% de su tiempo en tareas que no generan valor. Esto es lo que pasa cada día.",
  "problem.cost.pill": "El costo de no actuar",
  "problem.cost.h3.line1": "Lo que cambia",
  "problem.cost.h3.line2": "cuando BEO trabaja.",
  "problem.table.process": "Proceso",
  "problem.table.without": "Sin BEO",
  "problem.table.with": "Con BEO",
  "problem.table.roi": "ROI estimado",

  // Live demo
  "demo.pill": "Live demo · Esto pasa cada hora pico",
  "demo.h2.line1": "Tu cámara detecta la fila.",
  "demo.h2.line2": "Tu POS pierde la venta.",
  "demo.h2.line3": "BEO actúa antes.",
  "demo.body": "Visión computacional + sincronización con tu POS en tiempo real. BEO correlaciona los datos, detecta el problema y entrega la acción específica al gerente por WhatsApp — todo en menos de 90 segundos.",
  "demo.stat1.n": "< 90s",
  "demo.stat1.l": "Del primer cliente en fila a la acción ejecutada por tu equipo",
  "demo.stat2.n": "100%",
  "demo.stat2.l": "Cobertura visual + transaccional, 24/7, sin supervisores en piso",
  "demo.stat3.n": "+18%",
  "demo.stat3.l": "Conversión recuperada en horas pico",
  "demo.cta": "Quiero ver esto en mi sucursal →",

  // Vision Showcase
  "vision.pill": "BEO Vision · 90× supervisión humana",
  "vision.h1.line1.before": "Adiós al",
  "vision.h1.line1.percent": "1%",
  "vision.h1.line2": "Hola al 100%.",
  "vision.body": "Tus cámaras y tu POS se convierten en un",
  "vision.body.bold": "auditor inteligente que opera 24/7",
  "vision.body.tail": "— detecta, razona y le dice a tu equipo exactamente qué hacer por WhatsApp.",
  "vision.stat1.n": "1% → 100%",
  "vision.stat1.l": "cobertura operativa",
  "vision.stat2.n": "+18%",
  "vision.stat2.l": "conversión recuperada",
  "vision.stat3.n": "+12 pts",
  "vision.stat3.l": "margen recuperado",
  "vision.cta": "Quiero esto en mi cadena →",
  "vision.cta.sub": "Sin hardware nuevo · Sin proyectos de IT",
  "vision.footnote.bold": "Deja de resignar margen",
  "vision.footnote.tail": "para supervisar solo el 1% de tu operación. BEO opera mejor, vende más y crece tu margen — sin crecer tu headcount.",
  "vision.cctv.label": "CAM-04 · Sucursal Polanco · Caja",
  "vision.cctv.rec": "REC",
  "vision.cctv.cashier": "CAJERO · 0.97",
  "vision.cctv.customer1": "M · 32 · 0.94",
  "vision.cctv.customer2": "RECURRENTE #14",
  "vision.cctv.avg": "$487 PROM",
  "vision.cctv.idle": "IDLE 4:32 · CELULAR",
  "vision.wa.title": "BEO · Operaciones",
  "vision.wa.online": "en línea",
  "vision.wa.alert.tag": "⚠ ACCIÓN INMEDIATA",
  "vision.wa.alert.bold": "Fila de 6 personas",
  "vision.wa.alert.line2": "en caja 1.",
  "vision.wa.alert.line3": "Espera promedio: 8 min.",
  "vision.wa.alert.action": "→ Abre caja 2 ahora.",
  "vision.wa.alert.sig": "BEO Revenue Agent",
  "vision.wa.reply.text": "Listo, abriendo caja 2 👍",
  "vision.wa.reply.sig": "Gerente · ✓✓",
  "vision.wa.result.tag": "📈 RESULTADO 12 MIN DESPUÉS",
  "vision.wa.result.k1.l": "tiempo espera",
  "vision.wa.result.k2.l": "conversión",
  "vision.wa.composer": "Mensaje",

  // Calculator
  "calc.pill": "Multiplicador operativo",
  "calc.h2.line1": "Tu equipo.",
  "calc.h2.suffix": "más visibilidad.",
  "calc.body": "BEO no reemplaza a tu equipo gerencial — lo",
  "calc.body.bold": "amplifica",
  "calc.body.tail": ". Le da visibilidad operativa que físicamente no podría tener: 100% del tiempo, en cada sucursal, en cada cámara, en cada transacción.",
  "calc.title": "Calcula la cobertura de tu operación",
  "calc.subtitle": "Mismo equipo · Misma estructura · Capacidad operativa multiplicada",
  "calc.slider1": "Número de sucursales",
  "calc.slider2": "Horas operativas por día",
  "calc.totalLabel": "Tiempo operativo total al mes",
  "calc.totalFormula.before": "sucursales ×",
  "calc.totalFormula.after": "h × 30 días",
  "calc.totalUnit": "hrs",
  "calc.humanLabel": "Cobertura realista de tu equipo en piso",
  "calc.humanSub": "hrs/mes observadas en sucursal",
  "calc.humanPct.suffix": "del tiempo operativo",
  "calc.humanPct.blind": "99.4% sin visibilidad",
  "calc.humanNote": "Lo que un gerente de zona puede observar realísticamente entre visitas, viajes y reuniones.",
  "calc.beoLabel": "Tu equipo · potenciado por BEO",
  "calc.beoSub": "hrs/mes con visibilidad total",
  "calc.beoPct": "100% del tiempo operativo",
  "calc.beoBlind": "0% ciego",
  "calc.beoNote": "Tu equipo gerencial deja de revisar reportes y empieza a actuar sobre alertas específicas.",
  "calc.multiplier.suffix": "más cobertura operativa con el equipo que ya tienes",
  "calc.multiplier.sub.before": "Mismo headcount. Mismos roles. Visibilidad multiplicada por",
  "calc.footerNote": "Tu equipo deja de cazar problemas. Empieza a recibir soluciones.",
  "calc.cta": "Quiero potenciar mi operación →",

  // Agents section
  "agents.pill": "Los agentes de BEO",
  "agents.h2.line1": "7 agentes. Detectan.",
  "agents.h2.line2.before": "Interpretan.",
  "agents.h2.line2.suffix": "Actúan.",
  "agents.body": "No son chatbots ni automatizaciones genéricas. Son agentes especializados en operaciones físicas que ejecutan flujos completos de principio a fin — y le dicen a tu equipo qué hacer por WhatsApp.",
  "agents.live": "EN VIVO",
  "agents.wa.label": "BEO → WhatsApp",

  // Why BEO
  "why.pill": "Por qué BEO",
  "why.h2.line1": "Vertical. Autónomo.",
  "why.h2.line2": "Sin fricción.",
  "why.body": "No chatbots. No automatizaciones genéricas. Agentes especializados en operaciones físicas.",
  "why.benchmark.title": "Benchmark de industria",
  "why.benchmark.desc": "Compara cada sucursal vs. benchmarks y estándares de excelencia de tu industria.",

  // Integrations
  "integrations.pill": "Integraciones",
  "integrations.h2.line1": "Se conecta con",
  "integrations.h2.line2": "lo que ya usas.",
  "integrations.body": "Sin migraciones. Sin cambios de stack. Sin proyectos de IT.",
  "integrations.beolink.b1": "Solo lectura",
  "integrations.beolink.b2": "3 min setup",
  "integrations.beolink.b3": "Cero impacto en POS",
  "integrations.footer": "Te conectamos con lo que ya tienes.",
  "integrations.footer.bold": "Sin migraciones. Sin proyectos de IT.",
  "integrations.cta": "Agenda una demo →",

  // Clients
  "clients.label": "Confían en Batech",
  "clients.subtitle": "Marcas líderes en LATAM que ya operan con BEO",

  // Trayectoria / Hitos
  "trayectoria.pill": "Reconocimientos",
  "trayectoria.h2.line1": "Lo que construimos.",
  "trayectoria.h2.line2.before": "Lo que",
  "trayectoria.h2.line2.suffix": "logramos.",
  "trayectoria.coverage": "Cobertura",
  "trayectoria.featuredIn": "También presentes en",

  // FAQ
  "faq.pill": "FAQ",
  "faq.h2": "Preguntas frecuentes.",

  // Contact
  "contact.pill": "Agenda tu demo",
  "contact.h2.line1": "Listo para dejar de",
  "contact.h2.line2.before": "operar",
  "contact.h2.line2.suffix": "a ciegas?",
  "contact.intro": "BEO está diseñado para cadenas con 5 o más puntos de venta físicos donde el revenue depende de la atención en persona. Si calificas, alguien de nuestro equipo te contacta en menos de 24 horas.",
  "contact.form.title": "Cuéntanos sobre tu operación",
  "contact.form.subtitle": "2 minutos. Te contactamos en menos de 24 horas.",
  "contact.form.name": "Nombre *",
  "contact.form.name.ph": "Tu nombre",
  "contact.form.company": "Empresa *",
  "contact.form.company.ph": "Tu empresa",
  "contact.form.email": "Email *",
  "contact.form.email.ph": "tu@empresa.com",
  "contact.form.whatsapp": "WhatsApp *",
  "contact.form.whatsapp.ph": "+52 55 0000 0000",
  "contact.form.industry": "Industria *",
  "contact.form.industry.ph": "Selecciona",
  "contact.form.branches": "¿Cuántas sucursales? *",
  "contact.form.branches.ph": "Rango",
  "contact.form.country": "País *",
  "contact.form.country.ph": "País",
  "contact.form.challenge": "¿Mayor reto operacional hoy?",
  "contact.form.challenge.ph": "Ej: No sé qué hace mi equipo cuando no estoy...",
  "contact.form.submit": "Solicitar demo →",
  "contact.form.disclaimer": "Solo contactamos empresas que califican. Sin spam.",
  "contact.success.title": "¡Recibimos tu solicitud!",
  "contact.success.body": "Revisamos tu información y si calificas, alguien de nuestro equipo te escribe por WhatsApp en menos de 24 horas.",

  // Final CTA
  "fcta.pill": "Sin hardware nuevo · Sin proyectos de IT",
  "fcta.h2.line1": "Tu operación puede",
  "fcta.h2.line2": "funcionar diferente.",
  "fcta.h2.line3": "Hoy.",
  "fcta.body": "Tus cámaras ya graban. Tu POS ya registra. BEO solo los conecta.",
  "fcta.cta": "Agenda tu demo →",

  // Footer
  "footer.copy": "© 2026 Batech Technologies LLC · batech.ai",

  // QueueDetectionDemo
  "qd.title": "BEO · Computer Vision + POS Sync",
  "qd.live": "EN VIVO",
  "qd.cam": "CAM-04 · Sucursal Centro",
  "qd.counter": "CAJA · POS-04",
  "qd.hud.queue": "PERSONAS EN FILA",
  "qd.hud.queue.limit": "/ 5 lim.",
  "qd.hud.wait": "ESPERA PROM.",
  "qd.alert": "⚠ FILA CRÍTICA",
  "qd.pos.title": "POS sync · Edge agent",
  "qd.pos.tx": "Transacciones POS-04",
  "qd.pos.cdc": "cdc · realtime",
  "qd.pos.sale": "VENTA",
  "qd.conv.title": "Conversión hoy",
  "qd.conv.benchmark": "benchmark 56%",
  "qd.beo.tag": "BEO correlando",
  "qd.beo.vision": "Visión:",
  "qd.beo.vision.val": "9 personas en fila",
  "qd.beo.pos": "POS:",
  "qd.beo.pos.val": "throughput -42%",
  "qd.beo.tail": "· 2 colaboradores sin tarea en zona B.",
  "qd.wa.tag": "WhatsApp · Gerente Centro",
  "qd.wa.sent": "enviado",
  "qd.wa.msg.prefix": "Fila de 9 personas en caja. Espera 7 min.",
  "qd.wa.msg.action": "Abre caja 2 ahora",
  "qd.wa.msg.suffix": "y reasigna zona B.",
};

const EN: Dict = {
  // Nav
  "nav.problema": "The problem",
  "nav.beo": "BEO",
  "nav.porque": "Why BEO",
  "nav.trayectoria": "Track record",
  "nav.faq": "FAQ",
  "nav.demo": "Book a demo",

  // Hero
  "hero.pill": "BEO · AI agents for physical operations",
  "hero.h1.line1": "Your cameras",
  "hero.h1.line2": "already see",
  "hero.h1.line3": "everything.",
  "hero.h1.line4": "BEO tells you",
  "hero.h1.line5": "what to do.",
  "hero.body": "The operational intelligence platform for businesses that sell face-to-face. ",
  "hero.body.bold": "Monitors, interprets, and acts.",
  "hero.cta.primary": "Book a demo →",
  "hero.cta.secondary": "See how it works",
  "hero.stat1.n": "+15%",
  "hero.stat1.l": "Conversion in month 1",
  "hero.stat2.n": "24/7",
  "hero.stat2.l": "Operational coverage",
  "hero.stat3.n": "$0",
  "hero.stat3.l": "New hardware required",
  "hero.stat4.n": "Any POS",
  "hero.stat4.l": "With or without API",
  "hero.phone.live": "LIVE",
  "hero.phone.header": "BEO · 11:14 AM",
  "hero.phone.alert.bold": "⚠ 9-person queue",
  "hero.phone.alert.tail": " at the register. Wait: 7 min. 2 employees idle in zone B.",
  "hero.phone.action.label": "Action:",
  "hero.phone.action.text": " Move zone B staff to the register now.",
  "hero.phone.read": "Read ✓✓",
  "hero.phone.reply": "Done, already moved them. Thanks BEO 👏",

  // Problem
  "problem.pill": "Without BEO",
  "problem.h2.line1": "This is how your",
  "problem.h2.line2": "chain runs today.",
  "problem.h2.line3": "Without AI.",
  "problem.body": "Your team loses 40 to 60% of their time on tasks that don't generate value. Here's what happens every day.",
  "problem.cost.pill": "The cost of inaction",
  "problem.cost.h3.line1": "What changes",
  "problem.cost.h3.line2": "when BEO works.",
  "problem.table.process": "Process",
  "problem.table.without": "Without BEO",
  "problem.table.with": "With BEO",
  "problem.table.roi": "Estimated ROI",

  // Live demo
  "demo.pill": "Live demo · This happens every peak hour",
  "demo.h2.line1": "Your camera spots the queue.",
  "demo.h2.line2": "Your POS loses the sale.",
  "demo.h2.line3": "BEO acts first.",
  "demo.body": "Computer vision + real-time POS sync. BEO correlates the data, detects the problem, and delivers the specific action to the manager via WhatsApp — all in under 90 seconds.",
  "demo.stat1.n": "< 90s",
  "demo.stat1.l": "From the first customer in line to the action executed by your team",
  "demo.stat2.n": "100%",
  "demo.stat2.l": "Visual + transactional coverage, 24/7, no supervisors on the floor",
  "demo.stat3.n": "+18%",
  "demo.stat3.l": "Conversion recovered during peak hours",
  "demo.cta": "I want this in my store →",

  // Vision Showcase
  "vision.pill": "BEO Vision · 90× human supervision",
  "vision.h1.line1.before": "Goodbye to",
  "vision.h1.line1.percent": "1%",
  "vision.h1.line2": "Hello to 100%.",
  "vision.body": "Your cameras and POS become an",
  "vision.body.bold": "intelligent auditor that runs 24/7",
  "vision.body.tail": "— it detects, reasons, and tells your team exactly what to do via WhatsApp.",
  "vision.stat1.n": "1% → 100%",
  "vision.stat1.l": "operational coverage",
  "vision.stat2.n": "+18%",
  "vision.stat2.l": "conversion recovered",
  "vision.stat3.n": "+12 pts",
  "vision.stat3.l": "margin recovered",
  "vision.cta": "I want this for my chain →",
  "vision.cta.sub": "No new hardware · No IT projects",
  "vision.footnote.bold": "Stop sacrificing margin",
  "vision.footnote.tail": "to supervise just 1% of your operation. BEO operates better, sells more and grows your margin — without growing your headcount.",
  "vision.cctv.label": "CAM-04 · Polanco branch · Register",
  "vision.cctv.rec": "REC",
  "vision.cctv.cashier": "CASHIER · 0.97",
  "vision.cctv.customer1": "M · 32 · 0.94",
  "vision.cctv.customer2": "RETURNING #14",
  "vision.cctv.avg": "$487 AVG",
  "vision.cctv.idle": "IDLE 4:32 · PHONE",
  "vision.wa.title": "BEO · Operations",
  "vision.wa.online": "online",
  "vision.wa.alert.tag": "⚠ IMMEDIATE ACTION",
  "vision.wa.alert.bold": "6-person queue",
  "vision.wa.alert.line2": "at register 1.",
  "vision.wa.alert.line3": "Average wait: 8 min.",
  "vision.wa.alert.action": "→ Open register 2 now.",
  "vision.wa.alert.sig": "BEO Revenue Agent",
  "vision.wa.reply.text": "Done, opening register 2 👍",
  "vision.wa.reply.sig": "Manager · ✓✓",
  "vision.wa.result.tag": "📈 RESULT 12 MIN LATER",
  "vision.wa.result.k1.l": "wait time",
  "vision.wa.result.k2.l": "conversion",
  "vision.wa.composer": "Message",

  // Calculator
  "calc.pill": "Operational multiplier",
  "calc.h2.line1": "Your team.",
  "calc.h2.suffix": "more visibility.",
  "calc.body": "BEO doesn't replace your management team — it",
  "calc.body.bold": "amplifies",
  "calc.body.tail": " them. It gives them operational visibility they physically couldn't have: 100% of the time, at every branch, on every camera, every transaction.",
  "calc.title": "Calculate your operation's coverage",
  "calc.subtitle": "Same team · Same structure · Multiplied capacity",
  "calc.slider1": "Number of branches",
  "calc.slider2": "Operating hours per day",
  "calc.totalLabel": "Total operating time per month",
  "calc.totalFormula.before": "branches ×",
  "calc.totalFormula.after": "h × 30 days",
  "calc.totalUnit": "hrs",
  "calc.humanLabel": "Realistic coverage of your floor team",
  "calc.humanSub": "hrs/month actually observed",
  "calc.humanPct.suffix": "of operating time",
  "calc.humanPct.blind": "99.4% with no visibility",
  "calc.humanNote": "What a regional manager can realistically observe between visits, travel, and meetings.",
  "calc.beoLabel": "Your team · powered by BEO",
  "calc.beoSub": "hrs/month with total visibility",
  "calc.beoPct": "100% of operating time",
  "calc.beoBlind": "0% blind",
  "calc.beoNote": "Your management team stops reviewing reports and starts acting on specific alerts.",
  "calc.multiplier.suffix": "more operational coverage with the team you already have",
  "calc.multiplier.sub.before": "Same headcount. Same roles. Visibility multiplied by",
  "calc.footerNote": "Your team stops chasing problems. Starts receiving solutions.",
  "calc.cta": "I want to power my operation →",

  // Agents section
  "agents.pill": "The BEO agents",
  "agents.h2.line1": "7 agents. They detect.",
  "agents.h2.line2.before": "Interpret.",
  "agents.h2.line2.suffix": "Act.",
  "agents.body": "Not chatbots, not generic automations. Specialized agents for physical operations that run end-to-end flows — and tell your team what to do via WhatsApp.",
  "agents.live": "LIVE",
  "agents.wa.label": "BEO → WhatsApp",

  // Why BEO
  "why.pill": "Why BEO",
  "why.h2.line1": "Vertical. Autonomous.",
  "why.h2.line2": "Frictionless.",
  "why.body": "No chatbots. No generic automations. Specialized agents for physical operations.",
  "why.benchmark.title": "Industry benchmark",
  "why.benchmark.desc": "Compare each branch against benchmarks and excellence standards in your industry.",

  // Integrations
  "integrations.pill": "Integrations",
  "integrations.h2.line1": "Connects with",
  "integrations.h2.line2": "what you already use.",
  "integrations.body": "No migrations. No stack changes. No IT projects.",
  "integrations.beolink.b1": "Read only",
  "integrations.beolink.b2": "3 min setup",
  "integrations.beolink.b3": "Zero POS impact",
  "integrations.footer": "We connect to what you already have.",
  "integrations.footer.bold": "No migrations. No IT projects.",
  "integrations.cta": "Book a demo →",

  // Clients
  "clients.label": "Trusted by",
  "clients.subtitle": "Leading LATAM brands already running on BEO",

  // Trayectoria
  "trayectoria.pill": "Recognition",
  "trayectoria.h2.line1": "What we built.",
  "trayectoria.h2.line2.before": "What we",
  "trayectoria.h2.line2.suffix": "achieved.",
  "trayectoria.coverage": "Coverage",
  "trayectoria.featuredIn": "Also featured in",

  // FAQ
  "faq.pill": "FAQ",
  "faq.h2": "Frequently asked.",

  // Contact
  "contact.pill": "Book your demo",
  "contact.h2.line1": "Ready to stop",
  "contact.h2.line2.before": "operating",
  "contact.h2.line2.suffix": "blind?",
  "contact.intro": "BEO is designed for chains with 5 or more physical points of sale where revenue depends on in-person service. If you qualify, someone from our team will reach out in under 24 hours.",
  "contact.form.title": "Tell us about your operation",
  "contact.form.subtitle": "2 minutes. We'll contact you in under 24 hours.",
  "contact.form.name": "Name *",
  "contact.form.name.ph": "Your name",
  "contact.form.company": "Company *",
  "contact.form.company.ph": "Your company",
  "contact.form.email": "Email *",
  "contact.form.email.ph": "you@company.com",
  "contact.form.whatsapp": "WhatsApp *",
  "contact.form.whatsapp.ph": "+1 555 000 0000",
  "contact.form.industry": "Industry *",
  "contact.form.industry.ph": "Select",
  "contact.form.branches": "How many branches? *",
  "contact.form.branches.ph": "Range",
  "contact.form.country": "Country *",
  "contact.form.country.ph": "Country",
  "contact.form.challenge": "Biggest operational challenge today?",
  "contact.form.challenge.ph": "E.g. I don't know what my team does when I'm not there...",
  "contact.form.submit": "Request a demo →",
  "contact.form.disclaimer": "We only contact qualifying companies. No spam.",
  "contact.success.title": "We got your request!",
  "contact.success.body": "We're reviewing your info and if you qualify, someone from our team will reach out via WhatsApp in under 24 hours.",

  // Final CTA
  "fcta.pill": "No new hardware · No IT projects",
  "fcta.h2.line1": "Your operation can",
  "fcta.h2.line2": "work differently.",
  "fcta.h2.line3": "Today.",
  "fcta.body": "Your cameras already record. Your POS already logs. BEO just connects them.",
  "fcta.cta": "Book your demo →",

  // Footer
  "footer.copy": "© 2026 Batech Technologies LLC · batech.ai",

  // QueueDetectionDemo
  "qd.title": "BEO · Computer Vision + POS Sync",
  "qd.live": "LIVE",
  "qd.cam": "CAM-04 · Downtown branch",
  "qd.counter": "REGISTER · POS-04",
  "qd.hud.queue": "PEOPLE IN LINE",
  "qd.hud.queue.limit": "/ 5 lim.",
  "qd.hud.wait": "AVG WAIT",
  "qd.alert": "⚠ CRITICAL QUEUE",
  "qd.pos.title": "POS sync · Edge agent",
  "qd.pos.tx": "POS-04 transactions",
  "qd.pos.cdc": "cdc · realtime",
  "qd.pos.sale": "SALE",
  "qd.conv.title": "Conversion today",
  "qd.conv.benchmark": "benchmark 56%",
  "qd.beo.tag": "BEO correlating",
  "qd.beo.vision": "Vision:",
  "qd.beo.vision.val": "9 people in line",
  "qd.beo.pos": "POS:",
  "qd.beo.pos.val": "throughput -42%",
  "qd.beo.tail": "· 2 employees idle in zone B.",
  "qd.wa.tag": "WhatsApp · Downtown Manager",
  "qd.wa.sent": "sent",
  "qd.wa.msg.prefix": "9-person queue at the register. Wait 7 min.",
  "qd.wa.msg.action": "Open register 2 now",
  "qd.wa.msg.suffix": "and reassign zone B.",
};

const PT: Dict = {
  // Nav
  "nav.problema": "O problema",
  "nav.beo": "BEO",
  "nav.porque": "Por que BEO",
  "nav.trayectoria": "Trajetória",
  "nav.faq": "FAQ",
  "nav.demo": "Agendar demo",

  // Hero
  "hero.pill": "BEO · Agentes de IA para operações físicas",
  "hero.h1.line1": "Suas câmeras",
  "hero.h1.line2": "já veem",
  "hero.h1.line3": "tudo.",
  "hero.h1.line4": "BEO te diz",
  "hero.h1.line5": "o que fazer.",
  "hero.body": "A plataforma de inteligência operacional para negócios que vendem cara a cara. ",
  "hero.body.bold": "Supervisiona, interpreta e age.",
  "hero.cta.primary": "Agendar demo →",
  "hero.cta.secondary": "Ver como funciona",
  "hero.stat1.n": "+15%",
  "hero.stat1.l": "Conversão no primeiro mês",
  "hero.stat2.n": "24/7",
  "hero.stat2.l": "Cobertura operacional",
  "hero.stat3.n": "R$0",
  "hero.stat3.l": "Hardware novo necessário",
  "hero.stat4.n": "Any POS",
  "hero.stat4.l": "Com ou sem API",
  "hero.phone.live": "AO VIVO",
  "hero.phone.header": "BEO · 11:14",
  "hero.phone.alert.bold": "⚠ Fila de 9 pessoas",
  "hero.phone.alert.tail": " no caixa. Espera: 7 min. 2 colaboradores sem tarefa na zona B.",
  "hero.phone.action.label": "Ação:",
  "hero.phone.action.text": " Realoque a zona B ao caixa imediatamente.",
  "hero.phone.read": "Lido ✓✓",
  "hero.phone.reply": "Pronto, já realoquei. Valeu BEO 👏",

  // Problem
  "problem.pill": "Sem BEO",
  "problem.h2.line1": "Assim opera sua",
  "problem.h2.line2": "rede hoje.",
  "problem.h2.line3": "Sem IA.",
  "problem.body": "Sua equipe perde entre 40 e 60% do tempo em tarefas que não geram valor. Isto é o que acontece todo dia.",
  "problem.cost.pill": "O custo de não agir",
  "problem.cost.h3.line1": "O que muda",
  "problem.cost.h3.line2": "quando BEO trabalha.",
  "problem.table.process": "Processo",
  "problem.table.without": "Sem BEO",
  "problem.table.with": "Com BEO",
  "problem.table.roi": "ROI estimado",

  // Live demo
  "demo.pill": "Live demo · Isto acontece todo horário de pico",
  "demo.h2.line1": "Sua câmera detecta a fila.",
  "demo.h2.line2": "Seu POS perde a venda.",
  "demo.h2.line3": "BEO age antes.",
  "demo.body": "Visão computacional + sincronização com seu POS em tempo real. BEO correlaciona os dados, detecta o problema e entrega a ação específica ao gerente pelo WhatsApp — tudo em menos de 90 segundos.",
  "demo.stat1.n": "< 90s",
  "demo.stat1.l": "Do primeiro cliente na fila à ação executada pela sua equipe",
  "demo.stat2.n": "100%",
  "demo.stat2.l": "Cobertura visual + transacional, 24/7, sem supervisores no chão",
  "demo.stat3.n": "+18%",
  "demo.stat3.l": "Conversão recuperada em horários de pico",
  "demo.cta": "Quero ver isso na minha loja →",

  // Vision Showcase
  "vision.pill": "BEO Vision · 90× supervisão humana",
  "vision.h1.line1.before": "Adeus aos",
  "vision.h1.line1.percent": "1%",
  "vision.h1.line2": "Olá aos 100%.",
  "vision.body": "Suas câmeras e seu POS viram um",
  "vision.body.bold": "auditor inteligente que opera 24/7",
  "vision.body.tail": "— detecta, raciocina e diz à sua equipe exatamente o que fazer pelo WhatsApp.",
  "vision.stat1.n": "1% → 100%",
  "vision.stat1.l": "cobertura operacional",
  "vision.stat2.n": "+18%",
  "vision.stat2.l": "conversão recuperada",
  "vision.stat3.n": "+12 pts",
  "vision.stat3.l": "margem recuperada",
  "vision.cta": "Quero isso na minha rede →",
  "vision.cta.sub": "Sem hardware novo · Sem projetos de TI",
  "vision.footnote.bold": "Pare de sacrificar margem",
  "vision.footnote.tail": "para supervisionar apenas 1% da sua operação. BEO opera melhor, vende mais e cresce sua margem — sem aumentar headcount.",
  "vision.cctv.label": "CAM-04 · Loja Polanco · Caixa",
  "vision.cctv.rec": "REC",
  "vision.cctv.cashier": "CAIXA · 0.97",
  "vision.cctv.customer1": "M · 32 · 0.94",
  "vision.cctv.customer2": "RECORRENTE #14",
  "vision.cctv.avg": "R$487 MÉD",
  "vision.cctv.idle": "OCIOSO 4:32 · CELULAR",
  "vision.wa.title": "BEO · Operações",
  "vision.wa.online": "online",
  "vision.wa.alert.tag": "⚠ AÇÃO IMEDIATA",
  "vision.wa.alert.bold": "Fila de 6 pessoas",
  "vision.wa.alert.line2": "no caixa 1.",
  "vision.wa.alert.line3": "Espera média: 8 min.",
  "vision.wa.alert.action": "→ Abra caixa 2 agora.",
  "vision.wa.alert.sig": "BEO Revenue Agent",
  "vision.wa.reply.text": "Pronto, abrindo caixa 2 👍",
  "vision.wa.reply.sig": "Gerente · ✓✓",
  "vision.wa.result.tag": "📈 RESULTADO 12 MIN DEPOIS",
  "vision.wa.result.k1.l": "tempo de espera",
  "vision.wa.result.k2.l": "conversão",
  "vision.wa.composer": "Mensagem",

  // Calculator
  "calc.pill": "Multiplicador operacional",
  "calc.h2.line1": "Sua equipe.",
  "calc.h2.suffix": "mais visibilidade.",
  "calc.body": "BEO não substitui sua equipe gerencial — ela",
  "calc.body.bold": "amplifica",
  "calc.body.tail": ". Dá visibilidade operacional que fisicamente não teriam: 100% do tempo, em cada loja, em cada câmera, em cada transação.",
  "calc.title": "Calcule a cobertura da sua operação",
  "calc.subtitle": "Mesma equipe · Mesma estrutura · Capacidade multiplicada",
  "calc.slider1": "Número de lojas",
  "calc.slider2": "Horas operacionais por dia",
  "calc.totalLabel": "Tempo operacional total no mês",
  "calc.totalFormula.before": "lojas ×",
  "calc.totalFormula.after": "h × 30 dias",
  "calc.totalUnit": "hrs",
  "calc.humanLabel": "Cobertura realista da sua equipe de chão",
  "calc.humanSub": "hrs/mês observadas na loja",
  "calc.humanPct.suffix": "do tempo operacional",
  "calc.humanPct.blind": "99,4% sem visibilidade",
  "calc.humanNote": "O que um gerente regional pode observar realisticamente entre visitas, viagens e reuniões.",
  "calc.beoLabel": "Sua equipe · potencializada pelo BEO",
  "calc.beoSub": "hrs/mês com visibilidade total",
  "calc.beoPct": "100% do tempo operacional",
  "calc.beoBlind": "0% cego",
  "calc.beoNote": "Sua equipe gerencial deixa de revisar relatórios e começa a agir sobre alertas específicos.",
  "calc.multiplier.suffix": "mais cobertura operacional com a equipe que você já tem",
  "calc.multiplier.sub.before": "Mesmo headcount. Mesmos cargos. Visibilidade multiplicada por",
  "calc.footerNote": "Sua equipe deixa de caçar problemas. Começa a receber soluções.",
  "calc.cta": "Quero potencializar minha operação →",

  // Agents section
  "agents.pill": "Os agentes do BEO",
  "agents.h2.line1": "7 agentes. Detectam.",
  "agents.h2.line2.before": "Interpretam.",
  "agents.h2.line2.suffix": "Agem.",
  "agents.body": "Não são chatbots nem automações genéricas. São agentes especializados em operações físicas que executam fluxos completos de ponta a ponta — e dizem à sua equipe o que fazer pelo WhatsApp.",
  "agents.live": "AO VIVO",
  "agents.wa.label": "BEO → WhatsApp",

  // Why BEO
  "why.pill": "Por que BEO",
  "why.h2.line1": "Vertical. Autônomo.",
  "why.h2.line2": "Sem fricção.",
  "why.body": "Sem chatbots. Sem automações genéricas. Agentes especializados em operações físicas.",
  "why.benchmark.title": "Benchmark do setor",
  "why.benchmark.desc": "Compare cada loja contra benchmarks e padrões de excelência do seu setor.",

  // Integrations
  "integrations.pill": "Integrações",
  "integrations.h2.line1": "Conecta com",
  "integrations.h2.line2": "o que você já usa.",
  "integrations.body": "Sem migrações. Sem mudanças de stack. Sem projetos de TI.",
  "integrations.beolink.b1": "Somente leitura",
  "integrations.beolink.b2": "Setup em 3 min",
  "integrations.beolink.b3": "Zero impacto no POS",
  "integrations.footer": "Conectamos com o que você já tem.",
  "integrations.footer.bold": "Sem migrações. Sem projetos de TI.",
  "integrations.cta": "Agendar demo →",

  // Clients
  "clients.label": "Confiam na Batech",
  "clients.subtitle": "Marcas líderes na LATAM que já operam com BEO",

  // Trayectoria
  "trayectoria.pill": "Reconhecimentos",
  "trayectoria.h2.line1": "O que construímos.",
  "trayectoria.h2.line2.before": "O que",
  "trayectoria.h2.line2.suffix": "alcançamos.",
  "trayectoria.coverage": "Cobertura",
  "trayectoria.featuredIn": "Também presentes em",

  // FAQ
  "faq.pill": "FAQ",
  "faq.h2": "Perguntas frequentes.",

  // Contact
  "contact.pill": "Agende sua demo",
  "contact.h2.line1": "Pronto para parar de",
  "contact.h2.line2.before": "operar",
  "contact.h2.line2.suffix": "no escuro?",
  "contact.intro": "BEO foi desenhado para redes com 5 ou mais pontos de venda físicos onde o revenue depende do atendimento presencial. Se qualificar, alguém do nosso time entra em contato em menos de 24 horas.",
  "contact.form.title": "Conte-nos sobre sua operação",
  "contact.form.subtitle": "2 minutos. Entramos em contato em menos de 24 horas.",
  "contact.form.name": "Nome *",
  "contact.form.name.ph": "Seu nome",
  "contact.form.company": "Empresa *",
  "contact.form.company.ph": "Sua empresa",
  "contact.form.email": "Email *",
  "contact.form.email.ph": "voce@empresa.com",
  "contact.form.whatsapp": "WhatsApp *",
  "contact.form.whatsapp.ph": "+55 11 0000 0000",
  "contact.form.industry": "Setor *",
  "contact.form.industry.ph": "Selecione",
  "contact.form.branches": "Quantas lojas? *",
  "contact.form.branches.ph": "Faixa",
  "contact.form.country": "País *",
  "contact.form.country.ph": "País",
  "contact.form.challenge": "Maior desafio operacional hoje?",
  "contact.form.challenge.ph": "Ex: Não sei o que minha equipe faz quando não estou...",
  "contact.form.submit": "Solicitar demo →",
  "contact.form.disclaimer": "Só entramos em contato com empresas que qualificam. Sem spam.",
  "contact.success.title": "Recebemos seu pedido!",
  "contact.success.body": "Estamos revisando seus dados e, se qualificar, alguém do nosso time escreve pelo WhatsApp em menos de 24 horas.",

  // Final CTA
  "fcta.pill": "Sem hardware novo · Sem projetos de TI",
  "fcta.h2.line1": "Sua operação pode",
  "fcta.h2.line2": "funcionar diferente.",
  "fcta.h2.line3": "Hoje.",
  "fcta.body": "Suas câmeras já gravam. Seu POS já registra. BEO só os conecta.",
  "fcta.cta": "Agendar sua demo →",

  // Footer
  "footer.copy": "© 2026 Batech Technologies LLC · batech.ai",

  // QueueDetectionDemo
  "qd.title": "BEO · Computer Vision + POS Sync",
  "qd.live": "AO VIVO",
  "qd.cam": "CAM-04 · Loja Centro",
  "qd.counter": "CAIXA · POS-04",
  "qd.hud.queue": "PESSOAS NA FILA",
  "qd.hud.queue.limit": "/ 5 lim.",
  "qd.hud.wait": "ESPERA MÉD.",
  "qd.alert": "⚠ FILA CRÍTICA",
  "qd.pos.title": "POS sync · Edge agent",
  "qd.pos.tx": "Transações POS-04",
  "qd.pos.cdc": "cdc · realtime",
  "qd.pos.sale": "VENDA",
  "qd.conv.title": "Conversão hoje",
  "qd.conv.benchmark": "benchmark 56%",
  "qd.beo.tag": "BEO correlacionando",
  "qd.beo.vision": "Visão:",
  "qd.beo.vision.val": "9 pessoas na fila",
  "qd.beo.pos": "POS:",
  "qd.beo.pos.val": "throughput -42%",
  "qd.beo.tail": "· 2 colaboradores sem tarefa na zona B.",
  "qd.wa.tag": "WhatsApp · Gerente Centro",
  "qd.wa.sent": "enviado",
  "qd.wa.msg.prefix": "Fila de 9 pessoas no caixa. Espera 7 min.",
  "qd.wa.msg.action": "Abra caixa 2 agora",
  "qd.wa.msg.suffix": "e realoque zona B.",
};

const DICTS: Record<Lang, Dict> = { es: ES, en: EN, pt: PT };

export function getTranslator(lang: Lang) {
  const d = DICTS[lang] ?? DICTS.es;
  return (key: string) => d[key] ?? DICTS.es[key] ?? key;
}

/* ─────────────────────────────────────────────────────────────
   Structured per-language data
   ───────────────────────────────────────────────────────────── */

export interface AgentKpi {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  color?: string;
}

export interface AgentAlert {
  icon: string;
  bold: string;
  tail: string;
  good?: boolean;
}

export interface AgentSummary {
  title: string;
  msg: string;
  footer: string;
}

export interface Agent {
  tag: string;
  name: string;
  sub: string;
  desc: string;
  features: string[];
  kpis: AgentKpi[];
  alert: AgentAlert | null;
  wa: string | null;
  summary?: AgentSummary;
}

const AGENTS_ES: Agent[] = [
  {
    tag: "Agente 01", name: "Revenue Agent", sub: "Conversión e ingresos",
    desc: "Correlaciona tráfico de personas con datos del POS en tiempo real. Detecta caídas de conversión por hora, turno y sucursal antes de que se acumulen.",
    features: ["Detecta drops de conversión por hora y sucursal", "Cruza tráfico de personas vs. ventas del POS", "Alerta antes de que el turno termine"],
    kpis: [{ label: "Clientes hoy", value: "247", delta: "+12% vs ayer", up: true }, { label: "Conversión", value: "38%", delta: "-6% benchmark", up: false }],
    alert: { icon: "⚠️", bold: "Conversión cayendo", tail: " — Sucursal 4: -18% vs ayer misma hora. 2 colaboradores sin tarea en zona B." },
    wa: "Conversión -18% vs ayer. Reasigna zona B a caja ahora.",
  },
  {
    tag: "Agente 02", name: "Operations Agent", sub: "Filas y tiempos de espera",
    desc: "Monitorea longitud de fila y tiempo de espera en cada punto de servicio, en tiempo real, 24/7. Detecta incumplimientos de protocolo el momento en que ocurren.",
    features: ["Mide tiempo de espera por punto de servicio", "Detecta filas sobre el límite en segundos", "Alerta con acción específica, no solo el dato"],
    kpis: [{ label: "Fila actual", value: "9", delta: "límite: 5", up: false, color: "#FB923C" }, { label: "Espera prom.", value: "7.2 min", delta: "+4 min target", up: false }],
    alert: { icon: "⚠️", bold: "Fila crítica", tail: " en caja principal. Espera 7 min supera límite de 3 min." },
    wa: "Fila de 9 personas. Espera: 7 min. Abre caja 2 de inmediato.",
  },
  {
    tag: "Agente 03", name: "Workforce Agent", sub: "Productividad del equipo",
    desc: "Detecta uso del celular y tiempo ocioso del personal vía visión computacional. Compara cobertura real vs. picos de tráfico y alerta cuando el staffing no corresponde a la demanda.",
    features: ["Detecta uso de celular en turno por visión AI", "Mide cobertura activa vs. picos de tráfico", "Alertas de understaff antes del pico"],
    kpis: [{ label: "Productividad", value: "81%", delta: "+4pts semana", up: true }, { label: "Uso celular", value: "3", delta: "hora pico", up: false, color: "#FB923C" }],
    alert: { icon: "📱", bold: "3 empleados", tail: " usando celular en hora pico. Zona B sin cobertura activa." },
    wa: "3 colaboradores inactivos en hora pico. Zona B sin cobertura.",
  },
  {
    tag: "Agente 04", name: "Finance Agent", sub: "Conciliación y merma",
    desc: "Reconcilia caja vs. transacciones del POS. Detecta anomalías, patrones de merma y diferencias al cierre del día antes de que escalen.",
    features: ["Reconciliación automática de caja vs POS", "Detección de anomalías y patrones de merma", "Alerta de diferencias antes del cierre"],
    kpis: [{ label: "Diferencia caja", value: "$340", delta: "Turno mañana", up: false, color: "#FB923C" }, { label: "Transacciones", value: "1,247", delta: "Sin anomalías", up: true }],
    alert: { icon: "💽", bold: "Diferencia de $340 MXN", tail: " detectada en sucursal 2. Posible error de cobro en turno mañana." },
    wa: "Diferencia $340 en cierre. Revisa transacciones del turno mañana.",
  },
  {
    tag: "Agente 05", name: "Experience Agent", sub: "Recurrencia y demografía",
    desc: "Rastrea recurrencia de clientes, demografía y tiempo de permanencia por zona. Detecta tendencias de lealtad invisibles para el POS solo.",
    features: ["Frecuencia de retorno por tipo de cliente", "Rango de edad y género del tráfico real", "Dwell time por zona de la sucursal"],
    kpis: [{ label: "Recurrencia 30d", value: "34%", delta: "+8pts mes", up: true }, { label: "Edad prom.", value: "28", delta: "años", up: true }],
    alert: { icon: "📈", bold: "Clientes 25-35 años", tail: " muestran recurrencia +18% en sucursal Norte vs. promedio de cadena.", good: true },
    wa: null,
  },
  {
    tag: "Agente 06", name: "Intelligence Agent", sub: "Benchmarks e inteligencia",
    desc: "Compara cada sucursal contra las demás y contra benchmarks de industria. Identifica qué ubicaciones están por debajo del potencial y explica por qué.",
    features: ["Ranking automático de sucursales por KPI", "Comparación contra benchmarks de industria", "Diagnóstico de causa raíz por sucursal"],
    kpis: [{ label: "Sucursal top", value: "Norte", delta: "62% conv.", up: true, color: "#34D399" }, { label: "Bajo potencial", value: "Centro", delta: "38% conv.", up: false, color: "#FB923C" }],
    alert: { icon: "📊", bold: "Sucursal Centro:", tail: " 12% por debajo del promedio de cadena. Causa principal: tiempo de espera elevado." },
    wa: null,
  },
  {
    tag: "Agente 07", name: "Execution Agent", sub: "Acción y entrega",
    desc: "Empaqueta el output de todos los agentes en un plan de acción priorizado. Lo entrega directamente al gerente de turno por WhatsApp. Sin dashboards. Sin apps.",
    features: ["Prioriza acciones por impacto en revenue", "Entrega por WhatsApp al responsable directo", "Resumen diario automático por sucursal"],
    kpis: [],
    alert: null,
    wa: null,
    summary: { title: "RESUMEN DEL DÍA — SUCURSAL CENTRO", msg: "✓ Fila resuelta a las 11:18 · ✓ Conversión recuperada +9% · ⚠ Diferencia de caja pendiente · 📈 Recurrencia semanal +4pts", footer: "3 acciones completadas hoy. Conversión final: 44% ↑ vs 38% apertura." },
  },
];

const AGENTS_EN: Agent[] = [
  {
    tag: "Agent 01", name: "Revenue Agent", sub: "Conversion and revenue",
    desc: "Correlates foot traffic with POS data in real time. Spots conversion drops by hour, shift, and branch before they pile up.",
    features: ["Detects conversion drops by hour and branch", "Cross-checks foot traffic vs. POS sales", "Alerts before the shift ends"],
    kpis: [{ label: "Customers today", value: "247", delta: "+12% vs yesterday", up: true }, { label: "Conversion", value: "38%", delta: "-6% benchmark", up: false }],
    alert: { icon: "⚠️", bold: "Conversion dropping", tail: " — Branch 4: -18% vs yesterday same hour. 2 employees idle in zone B." },
    wa: "Conversion -18% vs yesterday. Move zone B staff to register now.",
  },
  {
    tag: "Agent 02", name: "Operations Agent", sub: "Queues and wait times",
    desc: "Monitors queue length and wait time at every service point, in real time, 24/7. Detects protocol breaches the moment they happen.",
    features: ["Measures wait time per service point", "Detects queues over the limit in seconds", "Alerts with a specific action, not just data"],
    kpis: [{ label: "Current queue", value: "9", delta: "limit: 5", up: false, color: "#FB923C" }, { label: "Avg wait", value: "7.2 min", delta: "+4 min target", up: false }],
    alert: { icon: "⚠️", bold: "Critical queue", tail: " at main register. 7 min wait exceeds the 3 min limit." },
    wa: "9-person queue. Wait: 7 min. Open register 2 immediately.",
  },
  {
    tag: "Agent 03", name: "Workforce Agent", sub: "Team productivity",
    desc: "Detects phone use and staff idle time via computer vision. Compares real coverage vs. traffic peaks and alerts when staffing doesn't match demand.",
    features: ["Detects phone use on shift via AI vision", "Measures active coverage vs. traffic peaks", "Understaffing alerts before the peak"],
    kpis: [{ label: "Productivity", value: "81%", delta: "+4pts this week", up: true }, { label: "Phone use", value: "3", delta: "peak hour", up: false, color: "#FB923C" }],
    alert: { icon: "📱", bold: "3 employees", tail: " on their phones during peak hour. Zone B has no active coverage." },
    wa: "3 employees idle during peak hour. Zone B uncovered.",
  },
  {
    tag: "Agent 04", name: "Finance Agent", sub: "Reconciliation and shrinkage",
    desc: "Reconciles cash vs. POS transactions. Detects anomalies, shrinkage patterns, and end-of-day differences before they escalate.",
    features: ["Automatic cash vs. POS reconciliation", "Anomaly and shrinkage pattern detection", "Difference alerts before close"],
    kpis: [{ label: "Cash variance", value: "$340", delta: "Morning shift", up: false, color: "#FB923C" }, { label: "Transactions", value: "1,247", delta: "No anomalies", up: true }],
    alert: { icon: "💽", bold: "$340 variance", tail: " detected at branch 2. Likely charge error in morning shift." },
    wa: "$340 variance at close. Review morning-shift transactions.",
  },
  {
    tag: "Agent 05", name: "Experience Agent", sub: "Return rate and demographics",
    desc: "Tracks customer return rate, demographics, and dwell time by zone. Detects loyalty trends invisible to the POS alone.",
    features: ["Return frequency by customer type", "Age range and gender of real traffic", "Dwell time by branch zone"],
    kpis: [{ label: "30d return rate", value: "34%", delta: "+8pts this month", up: true }, { label: "Avg age", value: "28", delta: "years", up: true }],
    alert: { icon: "📈", bold: "Customers aged 25-35", tail: " show +18% return rate at North branch vs. chain average.", good: true },
    wa: null,
  },
  {
    tag: "Agent 06", name: "Intelligence Agent", sub: "Benchmarks and intelligence",
    desc: "Compares each branch against the others and against industry benchmarks. Identifies which locations are below potential and explains why.",
    features: ["Automatic branch ranking by KPI", "Comparison against industry benchmarks", "Root-cause diagnosis per branch"],
    kpis: [{ label: "Top branch", value: "North", delta: "62% conv.", up: true, color: "#34D399" }, { label: "Underperforming", value: "Downtown", delta: "38% conv.", up: false, color: "#FB923C" }],
    alert: { icon: "📊", bold: "Downtown branch:", tail: " 12% below chain average. Main cause: high wait times." },
    wa: null,
  },
  {
    tag: "Agent 07", name: "Execution Agent", sub: "Action and delivery",
    desc: "Packages the output of every agent into a prioritized action plan. Delivers it straight to the shift manager via WhatsApp. No dashboards. No apps.",
    features: ["Prioritizes actions by revenue impact", "Delivers via WhatsApp to the direct owner", "Automatic daily summary per branch"],
    kpis: [],
    alert: null,
    wa: null,
    summary: { title: "DAILY SUMMARY — DOWNTOWN BRANCH", msg: "✓ Queue resolved at 11:18 · ✓ Conversion recovered +9% · ⚠ Cash variance pending · 📈 Weekly return rate +4pts", footer: "3 actions completed today. Final conversion: 44% ↑ vs 38% at open." },
  },
];

const AGENTS_PT: Agent[] = [
  {
    tag: "Agente 01", name: "Revenue Agent", sub: "Conversão e receita",
    desc: "Correlaciona tráfego de pessoas com dados do POS em tempo real. Detecta quedas de conversão por hora, turno e loja antes que se acumulem.",
    features: ["Detecta quedas de conversão por hora e loja", "Cruza tráfego de pessoas vs. vendas do POS", "Alerta antes do turno terminar"],
    kpis: [{ label: "Clientes hoje", value: "247", delta: "+12% vs ontem", up: true }, { label: "Conversão", value: "38%", delta: "-6% benchmark", up: false }],
    alert: { icon: "⚠️", bold: "Conversão caindo", tail: " — Loja 4: -18% vs ontem mesma hora. 2 colaboradores sem tarefa na zona B." },
    wa: "Conversão -18% vs ontem. Realoque zona B ao caixa agora.",
  },
  {
    tag: "Agente 02", name: "Operations Agent", sub: "Filas e tempos de espera",
    desc: "Monitora tamanho da fila e tempo de espera em cada ponto de atendimento, em tempo real, 24/7. Detecta descumprimentos de protocolo no momento em que acontecem.",
    features: ["Mede tempo de espera por ponto de atendimento", "Detecta filas acima do limite em segundos", "Alerta com ação específica, não só o dado"],
    kpis: [{ label: "Fila atual", value: "9", delta: "limite: 5", up: false, color: "#FB923C" }, { label: "Espera méd.", value: "7,2 min", delta: "+4 min target", up: false }],
    alert: { icon: "⚠️", bold: "Fila crítica", tail: " no caixa principal. Espera 7 min ultrapassa limite de 3 min." },
    wa: "Fila de 9 pessoas. Espera: 7 min. Abra caixa 2 imediatamente.",
  },
  {
    tag: "Agente 03", name: "Workforce Agent", sub: "Produtividade da equipe",
    desc: "Detecta uso de celular e tempo ocioso da equipe via visão computacional. Compara cobertura real vs. picos de tráfego e alerta quando o staffing não corresponde à demanda.",
    features: ["Detecta uso de celular em turno por visão AI", "Mede cobertura ativa vs. picos de tráfego", "Alertas de understaff antes do pico"],
    kpis: [{ label: "Produtividade", value: "81%", delta: "+4pts semana", up: true }, { label: "Uso celular", value: "3", delta: "hora de pico", up: false, color: "#FB923C" }],
    alert: { icon: "📱", bold: "3 funcionários", tail: " usando celular em hora de pico. Zona B sem cobertura ativa." },
    wa: "3 colaboradores inativos em hora de pico. Zona B sem cobertura.",
  },
  {
    tag: "Agente 04", name: "Finance Agent", sub: "Conciliação e quebra",
    desc: "Reconcilia caixa vs. transações do POS. Detecta anomalias, padrões de quebra e diferenças no fechamento do dia antes que escalem.",
    features: ["Reconciliação automática de caixa vs POS", "Detecção de anomalias e padrões de quebra", "Alerta de diferenças antes do fechamento"],
    kpis: [{ label: "Diferença caixa", value: "R$340", delta: "Turno manhã", up: false, color: "#FB923C" }, { label: "Transações", value: "1.247", delta: "Sem anomalias", up: true }],
    alert: { icon: "💽", bold: "Diferença de R$340", tail: " detectada na loja 2. Possível erro de cobrança no turno da manhã." },
    wa: "Diferença R$340 no fechamento. Revise transações do turno manhã.",
  },
  {
    tag: "Agente 05", name: "Experience Agent", sub: "Recorrência e demografia",
    desc: "Rastreia recorrência de clientes, demografia e tempo de permanência por zona. Detecta tendências de lealdade invisíveis para o POS sozinho.",
    features: ["Frequência de retorno por tipo de cliente", "Faixa etária e gênero do tráfego real", "Dwell time por zona da loja"],
    kpis: [{ label: "Recorrência 30d", value: "34%", delta: "+8pts mês", up: true }, { label: "Idade méd.", value: "28", delta: "anos", up: true }],
    alert: { icon: "📈", bold: "Clientes 25-35 anos", tail: " mostram recorrência +18% na loja Norte vs. média da rede.", good: true },
    wa: null,
  },
  {
    tag: "Agente 06", name: "Intelligence Agent", sub: "Benchmarks e inteligência",
    desc: "Compara cada loja contra as outras e contra benchmarks do setor. Identifica quais unidades estão abaixo do potencial e explica por quê.",
    features: ["Ranking automático de lojas por KPI", "Comparação contra benchmarks do setor", "Diagnóstico de causa raiz por loja"],
    kpis: [{ label: "Loja top", value: "Norte", delta: "62% conv.", up: true, color: "#34D399" }, { label: "Abaixo do potencial", value: "Centro", delta: "38% conv.", up: false, color: "#FB923C" }],
    alert: { icon: "📊", bold: "Loja Centro:", tail: " 12% abaixo da média da rede. Causa principal: tempo de espera elevado." },
    wa: null,
  },
  {
    tag: "Agente 07", name: "Execution Agent", sub: "Ação e entrega",
    desc: "Empacota o output de todos os agentes em um plano de ação priorizado. Entrega direto ao gerente de turno pelo WhatsApp. Sem dashboards. Sem apps.",
    features: ["Prioriza ações por impacto em revenue", "Entrega via WhatsApp ao responsável direto", "Resumo diário automático por loja"],
    kpis: [],
    alert: null,
    wa: null,
    summary: { title: "RESUMO DO DIA — LOJA CENTRO", msg: "✓ Fila resolvida às 11:18 · ✓ Conversão recuperada +9% · ⚠ Diferença de caixa pendente · 📈 Recorrência semanal +4pts", footer: "3 ações concluídas hoje. Conversão final: 44% ↑ vs 38% na abertura." },
  },
];

const AGENTS_BY_LANG: Record<Lang, Agent[]> = { es: AGENTS_ES, en: AGENTS_EN, pt: AGENTS_PT };
export const getAgents = (lang: Lang): Agent[] => AGENTS_BY_LANG[lang] ?? AGENTS_ES;

/* Workflow steps */
export interface WorkflowStep { title: string; desc: string; }
const WORKFLOW_ES: WorkflowStep[] = [
  { title: "El cliente entra", desc: "Nadie sabe cuántas personas hay en piso. El gerente lo descubrirá en el cierre de caja." },
  { title: "Se forma una fila", desc: "El manager se entera por una queja en WhatsApp. Para entonces ya perdiste tres ventas." },
  { title: "Empleado ocioso", desc: "Nadie lo detecta. Se sabrá en la próxima visita del gerente regional en 3 semanas." },
  { title: "El turno tarde vende menos", desc: "El reporte semanal muestra que lleva 4 días así. Nadie sabe por qué." },
  { title: "Fin de mes", desc: "Revisas números pero no sabes qué pasó en el piso. El siguiente mes empieza igual." },
];
const WORKFLOW_EN: WorkflowStep[] = [
  { title: "The customer walks in", desc: "Nobody knows how many people are on the floor. The manager will find out at end-of-day close." },
  { title: "A queue forms", desc: "The manager hears about it through a WhatsApp complaint. By then you've already lost three sales." },
  { title: "Idle employee", desc: "Nobody catches it. You'll find out on the regional manager's next visit, 3 weeks from now." },
  { title: "The evening shift sells less", desc: "The weekly report shows it's been like this for 4 days. Nobody knows why." },
  { title: "End of month", desc: "You review the numbers but you don't know what happened on the floor. Next month starts the same way." },
];
const WORKFLOW_PT: WorkflowStep[] = [
  { title: "O cliente entra", desc: "Ninguém sabe quantas pessoas estão no chão. O gerente vai descobrir no fechamento do caixa." },
  { title: "Forma-se uma fila", desc: "O gerente fica sabendo por uma reclamação no WhatsApp. A essa altura já perdeu três vendas." },
  { title: "Funcionário ocioso", desc: "Ninguém detecta. Vai-se saber na próxima visita do gerente regional, em 3 semanas." },
  { title: "O turno da noite vende menos", desc: "O relatório semanal mostra que já está assim há 4 dias. Ninguém sabe por quê." },
  { title: "Fim de mês", desc: "Você revisa os números mas não sabe o que aconteceu no chão. O próximo mês começa igual." },
];
export const getWorkflow = (lang: Lang): WorkflowStep[] => ({ es: WORKFLOW_ES, en: WORKFLOW_EN, pt: WORKFLOW_PT }[lang] ?? WORKFLOW_ES);

/* Before / After */
export interface BeforeAfter { label: string; before: string; after: string; }
const BA_ES: BeforeAfter[] = [
  { label: "Tiempo de espera", before: "Reporte semanal", after: "Alerta en tiempo real" },
  { label: "Productividad equipo", before: "Visita mensual", after: "Monitoreo 24/7" },
  { label: "Tasa de conversión", before: "Dato mensual", after: "Por hora, por sucursal" },
  { label: "Empleado ocioso", before: "Nunca (o por casualidad)", after: "En menos de 3 minutos" },
  { label: "Benchmark sucursales", before: "Spreadsheet manual", after: "Automático e instantáneo" },
];
const BA_EN: BeforeAfter[] = [
  { label: "Wait time", before: "Weekly report", after: "Real-time alert" },
  { label: "Team productivity", before: "Monthly visit", after: "24/7 monitoring" },
  { label: "Conversion rate", before: "Monthly data", after: "By hour, by branch" },
  { label: "Idle employee", before: "Never (or by chance)", after: "Under 3 minutes" },
  { label: "Branch benchmark", before: "Manual spreadsheet", after: "Automatic and instant" },
];
const BA_PT: BeforeAfter[] = [
  { label: "Tempo de espera", before: "Relatório semanal", after: "Alerta em tempo real" },
  { label: "Produtividade da equipe", before: "Visita mensal", after: "Monitoramento 24/7" },
  { label: "Taxa de conversão", before: "Dado mensal", after: "Por hora, por loja" },
  { label: "Funcionário ocioso", before: "Nunca (ou por acaso)", after: "Em menos de 3 minutos" },
  { label: "Benchmark de lojas", before: "Planilha manual", after: "Automático e instantâneo" },
];
export const getBeforeAfter = (lang: Lang): BeforeAfter[] => ({ es: BA_ES, en: BA_EN, pt: BA_PT }[lang] ?? BA_ES);

/* Why cards */
export interface WhyCard { num: string; title: string; desc: string; }
const WHY_ES: WhyCard[] = [
  { num: "01", title: "Vertical, no genérico", desc: "Cada agente entiende los procesos de operaciones físicas. No es un chatbot adaptado. Es una herramienta construida para cadenas que venden cara a cara." },
  { num: "02", title: "De principio a fin, no sugerencias", desc: "BEO no sugiere. Detecta el problema, lo interpreta y entrega una recomendación específica por WhatsApp. Tu equipo actúa sin abrir ningún dashboard." },
  { num: "03", title: "Aprende con cada ciclo", desc: "Los agentes se vuelven más precisos con cada semana. Aprenden patrones de cada sucursal, horarios de mayor tráfico y comportamientos del equipo." },
  { num: "04", title: "Cualquier POS, sin migración", desc: "¿Tu POS tiene API? Nos conectamos directo. ¿No tiene API? BEO Link extrae datos vía CDC. Sin proyectos de IT. Sin hardware nuevo. Sin cambiar tu stack." },
  { num: "05", title: "Enterprise-ready", desc: "Seguridad enterprise, datos aislados por sucursal y controles de acceso por rol. Diseñado para cadenas con decenas o cientos de ubicaciones desde el día uno." },
];
const WHY_EN: WhyCard[] = [
  { num: "01", title: "Vertical, not generic", desc: "Every agent understands physical-operations processes. Not a repurposed chatbot. A tool built for chains that sell face-to-face." },
  { num: "02", title: "End-to-end, not suggestions", desc: "BEO doesn't suggest. It detects the problem, interprets it, and delivers a specific recommendation via WhatsApp. Your team acts without opening any dashboard." },
  { num: "03", title: "Learns with every cycle", desc: "Agents get more precise each week. They learn each branch's patterns, peak hours, and team behaviors." },
  { num: "04", title: "Any POS, no migration", desc: "Does your POS have an API? We connect directly. No API? BEO Link extracts data via CDC. No IT projects. No new hardware. No stack changes." },
  { num: "05", title: "Enterprise-ready", desc: "Enterprise-grade security, branch-isolated data, and role-based access controls. Designed for chains with dozens or hundreds of locations from day one." },
];
const WHY_PT: WhyCard[] = [
  { num: "01", title: "Vertical, não genérico", desc: "Cada agente entende os processos de operações físicas. Não é um chatbot adaptado. É uma ferramenta construída para redes que vendem cara a cara." },
  { num: "02", title: "Ponta a ponta, não sugestões", desc: "BEO não sugere. Detecta o problema, interpreta e entrega uma recomendação específica pelo WhatsApp. Sua equipe age sem abrir nenhum dashboard." },
  { num: "03", title: "Aprende a cada ciclo", desc: "Os agentes ficam mais precisos a cada semana. Aprendem padrões de cada loja, horários de pico e comportamentos da equipe." },
  { num: "04", title: "Qualquer POS, sem migração", desc: "Seu POS tem API? Conectamos direto. Sem API? BEO Link extrai dados via CDC. Sem projetos de TI. Sem hardware novo. Sem trocar seu stack." },
  { num: "05", title: "Enterprise-ready", desc: "Segurança enterprise, dados isolados por loja e controles de acesso por papel. Projetado para redes com dezenas ou centenas de unidades desde o dia um." },
];
export const getWhyCards = (lang: Lang): WhyCard[] => ({ es: WHY_ES, en: WHY_EN, pt: WHY_PT }[lang] ?? WHY_ES);

/* Hitos / Awards */
export interface Hito { logo: string; badge: string; title: string; desc: string; invertLogo?: boolean; }
const HITOS_ES: Hito[] = [
  { logo: "/awards/forbes-30-promesas.jpg", badge: "Forbes México", title: "30 Promesas de los Negocios", desc: "Batech seleccionada entre las 30 promesas de los negocios en México por Forbes — los emprendedores con mayor potencial de impacto en el ecosistema." },
  { logo: "/awards/bloomberg-linea.jpg", badge: "Bloomberg Línea", title: "100 Innovadores LATAM 2024", desc: "Reconocidos entre los 100 innovadores más destacados de América Latina por su impacto en IA aplicada a operaciones físicas." },
  { logo: "/awards/las-100-pro.jpg", badge: "LAS 100 PRO 2025 · by Balfi", title: "#1 en Validación y Producto", desc: "Batech reconocido como el #1 en validación y producto entre las 100 startups con mayor tracción comercial de la región." },
  { logo: "/awards/shark-tank.svg", badge: "Shark Tank México", title: "Pitch ante los tiburones", desc: "Batech presentado ante los inversionistas de Shark Tank México como una de las startups con mayor potencial disruptivo en el ecosistema mexicano.", invertLogo: true },
  { logo: "/awards/nvidia-inception.png", badge: "NVIDIA Inception", title: "Programa global de IA", desc: "Seleccionados por NVIDIA para su programa Inception — la red global de las startups que están construyendo la frontera de la IA aplicada." },
  { logo: "/awards/pegasus-startup-world-cup.png", badge: "Pegasus Tech Ventures", title: "Startup World Cup", desc: "Representamos a México y Latinoamérica en el Startup World Cup, la competencia global de startups con presencia en más de 70 países." },
  { logo: "/awards/cubo-startup-2026.svg", badge: "Cubo Itaú", title: "Cubo Itaú Startup 2026", desc: "Cubo Itaú Startup 2026 — programa del banco más grande de Brasil que selecciona a las startups con mayor potencial de escala en LATAM." },
  { logo: "/awards/early-stage-100.jpg", badge: "NuMundo · Nascent", title: "Early Stage 100 México", desc: "Seleccionados por NuMundo Ventures y Nascent dentro del Early Stage 100 México — las startups en etapa temprana con mayor potencial del país." },
];
const HITOS_EN: Hito[] = [
  { logo: "/awards/forbes-30-promesas.jpg", badge: "Forbes Mexico", title: "30 Business Promises", desc: "Batech selected by Forbes as one of Mexico's 30 business promises — the entrepreneurs with the greatest potential to impact the ecosystem." },
  { logo: "/awards/bloomberg-linea.jpg", badge: "Bloomberg Línea", title: "100 LATAM Innovators 2024", desc: "Recognized among the 100 most outstanding innovators in Latin America for our impact on AI applied to physical operations." },
  { logo: "/awards/las-100-pro.jpg", badge: "LAS 100 PRO 2025 · by Balfi", title: "#1 in Validation and Product", desc: "Batech ranked #1 in validation and product among the 100 startups with the strongest commercial traction in the region." },
  { logo: "/awards/shark-tank.svg", badge: "Shark Tank Mexico", title: "Pitch in front of the sharks", desc: "Batech presented to the investors of Shark Tank Mexico as one of the startups with the greatest disruptive potential in the Mexican ecosystem.", invertLogo: true },
  { logo: "/awards/nvidia-inception.png", badge: "NVIDIA Inception", title: "Global AI program", desc: "Selected by NVIDIA for the Inception program — the global network of startups building the frontier of applied AI." },
  { logo: "/awards/pegasus-startup-world-cup.png", badge: "Pegasus Tech Ventures", title: "Startup World Cup", desc: "We represent Mexico and Latin America at the Startup World Cup, the global startup competition with presence in over 70 countries." },
  { logo: "/awards/cubo-startup-2026.svg", badge: "Cubo Itaú", title: "Cubo Itaú Startup 2026", desc: "Cubo Itaú Startup 2026 — a program from Brazil's largest bank that selects the startups with the greatest scaling potential in LATAM." },
  { logo: "/awards/early-stage-100.jpg", badge: "NuMundo · Nascent", title: "Early Stage 100 Mexico", desc: "Selected by NuMundo Ventures and Nascent for the Early Stage 100 Mexico — the country's early-stage startups with the highest potential." },
];
const HITOS_PT: Hito[] = [
  { logo: "/awards/forbes-30-promesas.jpg", badge: "Forbes México", title: "30 Promessas dos Negócios", desc: "Batech selecionada pela Forbes entre as 30 promessas dos negócios no México — os empreendedores com maior potencial de impacto no ecossistema." },
  { logo: "/awards/bloomberg-linea.jpg", badge: "Bloomberg Línea", title: "100 Inovadores LATAM 2024", desc: "Reconhecidos entre os 100 inovadores mais destacados da América Latina pelo impacto em IA aplicada a operações físicas." },
  { logo: "/awards/las-100-pro.jpg", badge: "LAS 100 PRO 2025 · by Balfi", title: "#1 em Validação e Produto", desc: "Batech reconhecido como #1 em validação e produto entre as 100 startups com maior tração comercial da região." },
  { logo: "/awards/shark-tank.svg", badge: "Shark Tank México", title: "Pitch diante dos tubarões", desc: "Batech apresentado aos investidores do Shark Tank México como uma das startups com maior potencial disruptivo no ecossistema mexicano.", invertLogo: true },
  { logo: "/awards/nvidia-inception.png", badge: "NVIDIA Inception", title: "Programa global de IA", desc: "Selecionados pela NVIDIA para o programa Inception — a rede global de startups que estão construindo a fronteira da IA aplicada." },
  { logo: "/awards/pegasus-startup-world-cup.png", badge: "Pegasus Tech Ventures", title: "Startup World Cup", desc: "Representamos o México e a América Latina na Startup World Cup, competição global de startups presente em mais de 70 países." },
  { logo: "/awards/cubo-startup-2026.svg", badge: "Cubo Itaú", title: "Cubo Itaú Startup 2026", desc: "Cubo Itaú Startup 2026 — programa do maior banco do Brasil que seleciona as startups com maior potencial de escala na LATAM." },
  { logo: "/awards/early-stage-100.jpg", badge: "NuMundo · Nascent", title: "Early Stage 100 México", desc: "Selecionados pela NuMundo Ventures e Nascent no Early Stage 100 México — as startups em estágio inicial com maior potencial do país." },
];
export const getHitos = (lang: Lang): Hito[] => ({ es: HITOS_ES, en: HITOS_EN, pt: HITOS_PT }[lang] ?? HITOS_ES);

/* FAQ */
export interface Faq { q: string; a: string; }
const FAQ_ES: Faq[] = [
  { q: "¿Qué pasa si mi POS no tiene API?", a: "BEO Link lo resuelve. Es una app que se instala en 3 minutos, detecta tu POS automáticamente y extrae datos vía CDC (Change Data Capture) — lee archivos de registro en modo solo lectura, sin consultas a la base de datos, sin impacto en el rendimiento. Funciona con Soft Restaurant, National Soft, Aloha, MICROS, NCR Silver y más." },
  { q: "¿Cuánto tarda la implementación?", a: "Depende de tu setup. La mayoría de las cadenas están operando con BEO en cuestión de semanas — sin proyectos de IT, sin hardware nuevo. Conectamos tus cámaras IP existentes, POS y RRHH, y los gerentes empiezan a recibir alertas por WhatsApp tan pronto como los modelos terminan de calibrar contra tus patrones de operación." },
  { q: "¿BEO reemplaza a mi equipo?", a: "No. BEO hace que tu equipo sea mucho más efectivo. Los gerentes dejan de hacer supervisión manual y empiezan a actuar sobre alertas específicas. El mismo equipo, con visibilidad completa." },
  { q: "¿Necesito cámaras nuevas?", a: "No. BEO funciona con las cámaras IP que ya tienes. Si ya tienen stream RTSP, BEO puede conectarse. Cero hardware adicional requerido." },
  { q: "¿Qué tan precisos son los agentes?", a: "En la semana 1 ya detectan patrones básicos. En el mes 2 conocen los patrones específicos de cada sucursal. Los clientes reportan accuracy superior al 90% desde la primera semana." },
  { q: "¿Mis datos están seguros?", a: "Sí. Datos aislados por cliente, estándares enterprise de seguridad. Las grabaciones de cámaras se procesan en edge y no se almacenan. Solo los insights generados por los agentes." },
  { q: "¿Qué ROI puedo esperar?", a: "Clientes reportan 12-20% de incremento en conversión en el primer mes. La recuperación de la inversión típicamente ocurre en menos de 60 días." },
];
const FAQ_EN: Faq[] = [
  { q: "What if my POS doesn't have an API?", a: "BEO Link handles it. It's an app that installs in 3 minutes, detects your POS automatically, and extracts data via CDC (Change Data Capture) — it reads log files in read-only mode, with no database queries and no performance impact. Works with Soft Restaurant, National Soft, Aloha, MICROS, NCR Silver, and more." },
  { q: "How long does implementation take?", a: "It depends on your setup. Most chains are running on BEO within weeks — no IT projects, no new hardware. We connect your existing IP cameras, POS, and HR, and managers start receiving WhatsApp alerts as soon as the models finish calibrating against your operating patterns." },
  { q: "Does BEO replace my team?", a: "No. BEO makes your team far more effective. Managers stop doing manual supervision and start acting on specific alerts. Same team, full visibility." },
  { q: "Do I need new cameras?", a: "No. BEO works with the IP cameras you already have. If they support an RTSP stream, BEO can connect. Zero additional hardware required." },
  { q: "How accurate are the agents?", a: "In week 1 they already detect basic patterns. By month 2 they know the specific patterns of each branch. Customers report over 90% accuracy from the very first week." },
  { q: "Is my data secure?", a: "Yes. Customer-isolated data, enterprise security standards. Camera footage is processed on the edge and not stored. Only the insights generated by the agents are kept." },
  { q: "What ROI can I expect?", a: "Customers report a 12-20% increase in conversion in the first month. Payback typically happens in under 60 days." },
];
const FAQ_PT: Faq[] = [
  { q: "E se meu POS não tiver API?", a: "O BEO Link resolve. É um app que instala em 3 minutos, detecta seu POS automaticamente e extrai dados via CDC (Change Data Capture) — lê arquivos de log em modo somente leitura, sem consultas ao banco de dados, sem impacto no desempenho. Funciona com Soft Restaurant, National Soft, Aloha, MICROS, NCR Silver e outros." },
  { q: "Quanto tempo leva a implementação?", a: "Depende do seu setup. A maioria das redes está operando com BEO em questão de semanas — sem projetos de TI, sem hardware novo. Conectamos suas câmeras IP existentes, POS e RH, e os gerentes começam a receber alertas pelo WhatsApp assim que os modelos terminam de calibrar contra seus padrões de operação." },
  { q: "O BEO substitui minha equipe?", a: "Não. O BEO torna sua equipe muito mais efetiva. Os gerentes deixam de fazer supervisão manual e começam a agir sobre alertas específicos. A mesma equipe, com visibilidade total." },
  { q: "Preciso de câmeras novas?", a: "Não. O BEO funciona com as câmeras IP que você já tem. Se já têm stream RTSP, o BEO pode se conectar. Zero hardware adicional necessário." },
  { q: "Qual a precisão dos agentes?", a: "Na semana 1 já detectam padrões básicos. No mês 2 conhecem os padrões específicos de cada loja. Os clientes reportam accuracy acima de 90% desde a primeira semana." },
  { q: "Meus dados estão seguros?", a: "Sim. Dados isolados por cliente, padrões enterprise de segurança. As gravações das câmeras são processadas no edge e não armazenadas. Só os insights gerados pelos agentes são guardados." },
  { q: "Que ROI posso esperar?", a: "Clientes reportam 12-20% de aumento na conversão no primeiro mês. O payback acontece tipicamente em menos de 60 dias." },
];
export const getFaq = (lang: Lang): Faq[] => ({ es: FAQ_ES, en: FAQ_EN, pt: FAQ_PT }[lang] ?? FAQ_ES);

/* Integrations */
export interface Integration { cat: string; name: string; sub: string; highlight?: boolean; isBeoLink?: boolean; }
const INTEGR_ES: Integration[] = [
  { cat: "Visión", name: "Cámaras IP", sub: "RTSP · Sin hardware nuevo" },
  { cat: "Punto de venta", name: "Cualquier POS", sub: "Toast · Square · Lightspeed · Clover · Soft Restaurant · y más" },
  { cat: "¿Sin API? No importa", name: "BEO Link", sub: "Conecta POS sin API en 3 min · CDC · Solo lectura · Cero impacto", highlight: true, isBeoLink: true },
  { cat: "RRHH y nómina", name: "HR Systems", sub: "7shifts · Deputy · Conector genérico" },
  { cat: "Mensajería", name: "WhatsApp", sub: "360dialog · Twilio" },
];
const INTEGR_EN: Integration[] = [
  { cat: "Vision", name: "IP cameras", sub: "RTSP · No new hardware" },
  { cat: "Point of sale", name: "Any POS", sub: "Toast · Square · Lightspeed · Clover · Soft Restaurant · and more" },
  { cat: "No API? No problem", name: "BEO Link", sub: "Connects API-less POS in 3 min · CDC · Read-only · Zero impact", highlight: true, isBeoLink: true },
  { cat: "HR and payroll", name: "HR Systems", sub: "7shifts · Deputy · Generic connector" },
  { cat: "Messaging", name: "WhatsApp", sub: "360dialog · Twilio" },
];
const INTEGR_PT: Integration[] = [
  { cat: "Visão", name: "Câmeras IP", sub: "RTSP · Sem hardware novo" },
  { cat: "Ponto de venda", name: "Qualquer POS", sub: "Toast · Square · Lightspeed · Clover · Soft Restaurant · e outros" },
  { cat: "Sem API? Sem problema", name: "BEO Link", sub: "Conecta POS sem API em 3 min · CDC · Somente leitura · Zero impacto", highlight: true, isBeoLink: true },
  { cat: "RH e folha", name: "HR Systems", sub: "7shifts · Deputy · Conector genérico" },
  { cat: "Mensageria", name: "WhatsApp", sub: "360dialog · Twilio" },
];
export const getIntegrations = (lang: Lang): Integration[] => ({ es: INTEGR_ES, en: INTEGR_EN, pt: INTEGR_PT }[lang] ?? INTEGR_ES);

/* Countries pill list */
const COUNTRIES_ES = ["🇺🇸 USA", "🇲🇽 México", "🇦🇷 Argentina", "🇨🇱 Chile", "🇪🇨 Ecuador", "🇬🇹 Guatemala", "🇨🇴 Colombia", "🇧🇷 Brasil", "🇵🇪 Perú", "🇨🇷 Costa Rica", "🇸🇻 El Salvador"];
const COUNTRIES_EN = ["🇺🇸 USA", "🇲🇽 Mexico", "🇦🇷 Argentina", "🇨🇱 Chile", "🇪🇨 Ecuador", "🇬🇹 Guatemala", "🇨🇴 Colombia", "🇧🇷 Brazil", "🇵🇪 Peru", "🇨🇷 Costa Rica", "🇸🇻 El Salvador"];
const COUNTRIES_PT = ["🇺🇸 EUA", "🇲🇽 México", "🇦🇷 Argentina", "🇨🇱 Chile", "🇪🇨 Equador", "🇬🇹 Guatemala", "🇨🇴 Colômbia", "🇧🇷 Brasil", "🇵🇪 Peru", "🇨🇷 Costa Rica", "🇸🇻 El Salvador"];
export const getCountries = (lang: Lang): string[] => ({ es: COUNTRIES_ES, en: COUNTRIES_EN, pt: COUNTRIES_PT }[lang] ?? COUNTRIES_ES);

/* Form qualification bullets */
const QUAL_ES = [
  "5 o más sucursales físicas con cámaras de seguridad",
  "Sistema POS para registrar ventas",
  "Revenue dependiente de atención presencial",
  "Quieres visibilidad operacional en tiempo real",
];
const QUAL_EN = [
  "5 or more physical branches with security cameras",
  "POS system to record sales",
  "Revenue that depends on in-person service",
  "You want real-time operational visibility",
];
const QUAL_PT = [
  "5 ou mais lojas físicas com câmeras de segurança",
  "Sistema POS para registrar vendas",
  "Revenue dependente de atendimento presencial",
  "Você quer visibilidade operacional em tempo real",
];
export const getQualifications = (lang: Lang): string[] => ({ es: QUAL_ES, en: QUAL_EN, pt: QUAL_PT }[lang] ?? QUAL_ES);

/* Industry options */
const IND_ES = ["Restaurantes / QSR", "Retail especializado", "Supermercados", "Servicios financieros", "Aerolíneas / Transporte", "Hoteles", "Entretenimiento / Casinos", "Logística", "Salud", "Otra"];
const IND_EN = ["Restaurants / QSR", "Specialty retail", "Supermarkets", "Financial services", "Airlines / Transport", "Hotels", "Entertainment / Casinos", "Logistics", "Healthcare", "Other"];
const IND_PT = ["Restaurantes / QSR", "Varejo especializado", "Supermercados", "Serviços financeiros", "Aéreas / Transporte", "Hotéis", "Entretenimento / Cassinos", "Logística", "Saúde", "Outro"];
export const getIndustryOptions = (lang: Lang): string[] => ({ es: IND_ES, en: IND_EN, pt: IND_PT }[lang] ?? IND_ES);

/* Branch range options — first is "less than 5" with value="no" */
export interface RangeOption { value?: string; label: string; }
const RANGE_ES: RangeOption[] = [
  { value: "no", label: "Menos de 5" },
  { label: "5-20" }, { label: "20-50" }, { label: "50-200" }, { label: "Más de 200" },
];
const RANGE_EN: RangeOption[] = [
  { value: "no", label: "Less than 5" },
  { label: "5-20" }, { label: "20-50" }, { label: "50-200" }, { label: "More than 200" },
];
const RANGE_PT: RangeOption[] = [
  { value: "no", label: "Menos de 5" },
  { label: "5-20" }, { label: "20-50" }, { label: "50-200" }, { label: "Mais de 200" },
];
export const getBranchRanges = (lang: Lang): RangeOption[] => ({ es: RANGE_ES, en: RANGE_EN, pt: RANGE_PT }[lang] ?? RANGE_ES);

/* Country select options */
const COUNTRY_OPT_ES = ["México", "Colombia", "Argentina", "Chile", "Ecuador", "Perú", "Guatemala", "Costa Rica", "Brasil", "Estados Unidos", "Otro"];
const COUNTRY_OPT_EN = ["Mexico", "Colombia", "Argentina", "Chile", "Ecuador", "Peru", "Guatemala", "Costa Rica", "Brazil", "United States", "Other"];
const COUNTRY_OPT_PT = ["México", "Colômbia", "Argentina", "Chile", "Equador", "Peru", "Guatemala", "Costa Rica", "Brasil", "Estados Unidos", "Outro"];
export const getCountryOptions = (lang: Lang): string[] => ({ es: COUNTRY_OPT_ES, en: COUNTRY_OPT_EN, pt: COUNTRY_OPT_PT }[lang] ?? COUNTRY_OPT_ES);

/* Number formatting locale */
export const getLocale = (lang: Lang): string => ({ es: "es-MX", en: "en-US", pt: "pt-BR" }[lang]);
