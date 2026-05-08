import { useEffect, useState } from "react";

/**
 * BeoVisionShowcase — V4 Clean Hero.
 *
 * Inspired by the user's reference image: clean composition with 2 floating
 * "monitors" — one shows the live AI detection on a CCTV view, the other
 * shows the action being executed (WhatsApp). Big typography on the left
 * delivers the value prop. Premium, simple, fast to grasp.
 */
export default function BeoVisionShowcase({ calendarUrl }: { calendarUrl?: string }) {
  const ctaUrl = calendarUrl || "#contacto";
  return (
    <div className="relative">
      {/* Soft gradient background glow */}
      <div className="absolute -inset-20 pointer-events-none opacity-50" style={{ background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,194,224,0.10), transparent 70%)" }} />

      <div className="relative grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">

        {/* ━━━━━━━━━━━━ LEFT: Big copy + stats ━━━━━━━━━━━━ */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00C2E0]/25 bg-[#00C2E0]/5 text-[12px] text-[#00C2E0] font-bold tracking-[0.18em] uppercase mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0] animate-pulse" />
            BEO Vision · 90× supervisión humana
          </div>

          <h2 className="text-[clamp(40px,6vw,80px)] font-extrabold leading-[0.96] tracking-[-0.04em] mb-7">
            Adiós al <span className="text-[#FB923C]">1%</span>.<br />
            <span className="text-[#00C2E0]">Hola al 100%.</span>
          </h2>

          <p className="text-[18px] md:text-[20px] text-[#888] leading-relaxed max-w-[520px] mb-10">
            Tus cámaras y tu POS se convierten en un <b className="text-[#E0E0E0]">auditor inteligente que opera 24/7</b> — detecta, razona y le dice a tu equipo exactamente qué hacer por WhatsApp.
          </p>

          {/* Mini stats inline */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-[520px]">
            <Stat top="1% → 100%" sub="cobertura operativa" color="#00C2E0" />
            <Stat top="+18%" sub="conversión recuperada" color="#34D399" />
            <Stat top="+12 pts" sub="margen recuperado" color="#34D399" />
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <a href={ctaUrl} target={calendarUrl ? "_blank" : undefined} rel={calendarUrl ? "noopener noreferrer" : undefined} className="px-7 py-3.5 rounded-full bg-[#00C2E0] text-[#080808] font-bold text-[15px] hover:bg-[#00D4F5] transition-colors">
              Quiero esto en mi cadena &rarr;
            </a>
            <span className="text-[13px] text-[#444]">Sin hardware nuevo · Sin proyectos de IT</span>
          </div>

          {/* Footnote */}
          <p className="text-[12px] text-[#333] leading-relaxed max-w-[460px] mt-8 pt-6 border-t border-[#1A1A1A]">
            <b className="text-[#666]">Deja de resignar margen</b> para supervisar solo el 1% de tu operación. BEO opera mejor, vende más y crece tu margen — sin crecer tu headcount.
          </p>
        </div>

        {/* ━━━━━━━━━━━━ RIGHT: floating monitors ━━━━━━━━━━━━ */}
        <div className="relative h-[520px] md:h-[600px]">
          {/* Monitor 1 — Live AI detection on CCTV */}
          <div
            className="absolute top-0 left-0 right-8 lg:right-12 z-10"
            style={{
              transform: "perspective(1200px) rotateY(-8deg) rotateX(3deg)",
              transformOrigin: "center center",
              animation: "bvs-float-1 7s ease-in-out infinite",
            }}
          >
            <CCTVMonitor />
          </div>

          {/* Monitor 2 — WhatsApp action */}
          <div
            className="absolute bottom-0 left-12 lg:left-20 right-0 z-20 max-w-[340px]"
            style={{
              transform: "perspective(1200px) rotateY(6deg) rotateX(-2deg)",
              transformOrigin: "center center",
              animation: "bvs-float-2 8s ease-in-out infinite",
            }}
          >
            <WhatsAppActionCard />
          </div>

          {/* Subtle floor reflection */}
          <div className="absolute bottom-[-40px] left-[10%] right-[10%] h-12 rounded-[50%] bg-[#00C2E0]/10 blur-2xl" />
        </div>
      </div>

      <Keyframes />
    </div>
  );
}

/* ============================================================
   CCTV MONITOR — clean realistic footage with AI overlays
   ============================================================ */
function CCTVMonitor() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#0A0E12] border border-[#1F2530] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_60px_-20px_rgba(0,194,224,0.3)]">
      {/* Top chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0E1318] border-b border-[#1F2530]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="ml-3 text-[11px] font-mono font-semibold text-[#666]">CAM-04 · Sucursal Polanco · Caja</span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" style={{ animation: "bvs-rec 1.4s ease-in-out infinite" }} />
          <span className="text-[#FF5F57] font-bold">REC</span>
          <span className="text-[#444] mx-1">·</span>
          <span className="text-[#666]">14:22:07</span>
        </span>
      </div>

      {/* CCTV frame with realistic look */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-[#15110A] via-[#0A0805] to-[#08060A] overflow-hidden">

        {/* Ceiling lights from above (warm sodium-like) */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 30% at 30% 0%, rgba(252,211,77,0.18), transparent 70%), radial-gradient(ellipse 60% 30% at 70% 0%, rgba(252,211,77,0.15), transparent 70%)" }} />

        {/* Floor with perspective gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(60,40,20,0.25) 70%, rgba(20,15,10,0.5) 100%)" }} />

        {/* SVG with the actual scene */}
        <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="cctv-spot" cx="50%" cy="0%" r="60%">
              <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="cctv-counter" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3A2A1A" />
              <stop offset="100%" stopColor="#1A1208" />
            </linearGradient>
            <linearGradient id="cctv-shelf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A1F12" />
              <stop offset="100%" stopColor="#0E0805" />
            </linearGradient>
            <filter id="cctv-glow">
              <feGaussianBlur stdDeviation="2" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Spotlights */}
          {[150, 400, 650].map((x, i) => (
            <ellipse key={i} cx={x} cy="0" rx="160" ry="280" fill="url(#cctv-spot)" />
          ))}

          {/* Back wall — subtle */}
          <rect x="0" y="80" width="800" height="2" fill="#3A2A1A" opacity="0.5" />

          {/* Shelves in back */}
          <rect x="40" y="100" width="280" height="100" rx="3" fill="url(#cctv-shelf)" stroke="#3A2A1A" strokeWidth="0.8" />
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <rect x={50 + i * 32} y={115} width="22" height="32" rx="1.5" fill={["#EF4444", "#10B981", "#F59E0B", "#A78BFA", "#06B6D4", "#EC4899", "#FBBF24", "#34D399"][i]} opacity="0.7" />
              <rect x={50 + i * 32} y={158} width="22" height="32" rx="1.5" fill={["#06B6D4", "#F59E0B", "#EF4444", "#10B981", "#A78BFA", "#FBBF24", "#34D399", "#EC4899"][i]} opacity="0.65" />
            </g>
          ))}

          {/* Counter (foreground) */}
          <rect x="380" y="320" width="380" height="50" rx="4" fill="url(#cctv-counter)" stroke="#3A2A1A" strokeWidth="1" />
          {/* POS terminal */}
          <g transform="translate(680, 325)">
            <rect width="38" height="32" rx="2" fill="#0E1418" stroke="#3A4250" />
            <rect x="4" y="4" width="30" height="14" rx="0.5" fill="#001518" stroke="#00C2E0" strokeOpacity="0.4" />
            <rect x="6" y="22" width="22" height="2" rx="0.5" fill="#3A4250" />
            <rect x="6" y="26" width="14" height="2" rx="0.5" fill="#3A4250" />
          </g>

          {/* CASHIER (real-looking silhouette behind counter) */}
          <g transform="translate(540, 280)">
            {/* Person body proportions */}
            <ellipse cx="0" cy="-22" rx="11" ry="13" fill="#2A1F18" />
            <path d="M -18 0 Q -22 -12 -10 -14 L 10 -14 Q 22 -12 18 0 L 16 65 L -16 65 Z" fill="#1A1410" />
            {/* AI overlay: bounding box + label */}
            <g style={{ animation: "bvs-detect 4s ease-in-out infinite" }}>
              <rect x="-26" y="-38" width="52" height="108" rx="3" fill="none" stroke="#34D399" strokeWidth="1.5" strokeDasharray="4 3" filter="url(#cctv-glow)" />
              <rect x="-26" y="-50" width="80" height="11" rx="1" fill="#34D399" />
              <text x="14" y="-42" textAnchor="middle" fill="#001A10" fontSize="7.5" fontFamily="ui-monospace" fontWeight="900">CAJERO · 0.97</text>
            </g>
          </g>

          {/* CUSTOMER 1 — at register */}
          <g transform="translate(640, 340)">
            <ellipse cx="0" cy="-20" rx="10" ry="12" fill="#1A1410" />
            <path d="M -16 0 Q -20 -10 -8 -12 L 8 -12 Q 20 -10 16 0 L 14 50 L -14 50 Z" fill="#0E0A05" />
            <g style={{ animation: "bvs-detect 4s ease-in-out 0.4s infinite" }}>
              <rect x="-22" y="-34" width="44" height="88" rx="3" fill="none" stroke="#00C2E0" strokeWidth="1.5" strokeDasharray="4 3" filter="url(#cctv-glow)" />
              <rect x="-22" y="-46" width="74" height="11" rx="1" fill="#00C2E0" />
              <text x="15" y="-38" textAnchor="middle" fill="#001518" fontSize="7.5" fontFamily="ui-monospace" fontWeight="900">M · 32 · 0.94</text>
            </g>
          </g>

          {/* CUSTOMER 2 — recurring (in queue) */}
          <g transform="translate(720, 350)">
            <ellipse cx="0" cy="-19" rx="10" ry="12" fill="#15100A" />
            <path d="M -15 0 Q -19 -10 -8 -11 L 8 -11 Q 19 -10 15 0 L 13 45 L -13 45 Z" fill="#0E0A05" />
            <g style={{ animation: "bvs-detect 4s ease-in-out 0.8s infinite" }}>
              <rect x="-21" y="-33" width="42" height="80" rx="3" fill="none" stroke="#34D399" strokeWidth="1.5" strokeDasharray="4 3" filter="url(#cctv-glow)" />
              <rect x="-21" y="-45" width="98" height="11" rx="1" fill="#34D399" />
              <text x="28" y="-37" textAnchor="middle" fill="#001A10" fontSize="7.5" fontFamily="ui-monospace" fontWeight="900">RECURRENTE #14</text>
              <rect x="-21" y="50" width="42" height="9" rx="2" fill="#001A10" stroke="#34D399" strokeWidth="0.6" />
              <text x="0" y="56.5" textAnchor="middle" fill="#34D399" fontSize="6.5" fontFamily="ui-monospace" fontWeight="700">$487 PROM</text>
            </g>
          </g>

          {/* IDLE EMPLOYEE on the side */}
          <g transform="translate(180, 340)">
            <ellipse cx="0" cy="-22" rx="11" ry="13" fill="#1A1410" />
            <path d="M -17 0 Q -21 -10 -10 -12 L 10 -12 Q 21 -10 17 0 L 15 60 L -15 60 Z" fill="#0E0A05" />
            {/* Phone hint */}
            <rect x="14" y="14" width="6" height="10" rx="1" fill="#00C2E0" />
            <g style={{ animation: "bvs-warn 1.8s ease-in-out infinite" }}>
              <rect x="-25" y="-36" width="50" height="100" rx="3" fill="none" stroke="#FB923C" strokeWidth="1.6" strokeDasharray="4 3" filter="url(#cctv-glow)" />
              <rect x="-25" y="-48" width="118" height="11" rx="1" fill="#FB923C" />
              <text x="34" y="-40" textAnchor="middle" fill="#1A0A00" fontSize="7.5" fontFamily="ui-monospace" fontWeight="900">IDLE 4:32 · CELULAR</text>
            </g>
          </g>

          {/* Camera lens vignette */}
          <ellipse cx="400" cy="250" rx="500" ry="320" fill="none" stroke="#000" strokeWidth="80" opacity="0.4" />
        </svg>

        {/* CCTV scanlines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #FFF 0px, #FFF 1px, transparent 1px, transparent 4px)" }} />
        {/* Subtle grain */}
        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.15]"
          style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='3'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }}
        />
      </div>
    </div>
  );
}

/* ============================================================
   WHATSAPP ACTION CARD
   ============================================================ */
function WhatsAppActionCard() {
  const [time, setTime] = useState("14:22");
  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      setTime(`${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`);
    }, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden bg-[#0E1A12] border border-[#34D399]/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_50px_-15px_rgba(52,211,153,0.4)]">
      {/* WhatsApp header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#075E54]">
        <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-black text-sm">B</span>
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-white">BEO · Operaciones</div>
          <div className="text-[10px] text-[#86EFAC] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#86EFAC] animate-pulse" />
            en línea
          </div>
        </div>
        <span className="ml-auto text-[#86EFAC] text-lg">📞</span>
      </div>

      {/* Messages */}
      <div className="bg-[#0B1410] p-4 space-y-3">
        {/* BEO message */}
        <div className="flex flex-col items-start" style={{ animation: "bvs-msg-in 0.6s ease-out" }}>
          <div className="bg-[#1F2C25] rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[260px] shadow-md">
            <div className="text-[10px] font-bold text-[#86EFAC] mb-1.5 tracking-wide">⚠ ACCIÓN INMEDIATA</div>
            <p className="text-[13px] text-[#E0F5DC] leading-snug">
              <b>Fila de 6 personas</b> en caja 1.<br />
              Espera promedio: 8 min.<br />
              <b className="text-[#86EFAC]">→ Abre caja 2 ahora.</b>
            </p>
            <div className="text-[9px] text-[#5A8A6E] mt-2 text-right font-mono">{time} · BEO Revenue Agent</div>
          </div>
        </div>

        {/* Manager reply */}
        <div className="flex flex-col items-end" style={{ animation: "bvs-msg-in 0.6s ease-out 1s both" }}>
          <div className="bg-[#1A4D2E] rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[220px]">
            <p className="text-[13px] text-[#E0F5DC]">Listo, abriendo caja 2 👍</p>
            <div className="text-[9px] text-[#5A8A6E] mt-1 text-right font-mono">{time} · Gerente · ✓✓</div>
          </div>
        </div>

        {/* Result message */}
        <div className="flex flex-col items-start" style={{ animation: "bvs-msg-in 0.6s ease-out 2s both" }}>
          <div className="bg-[#0F2A1A] border border-[#34D399]/30 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[270px]">
            <div className="text-[10px] font-bold text-[#34D399] mb-1.5 tracking-wide">📈 RESULTADO 12 MIN DESPUÉS</div>
            <div className="grid grid-cols-2 gap-2 mt-1.5">
              <div>
                <div className="text-[20px] font-extrabold text-[#34D399] tracking-tight leading-none">−42%</div>
                <div className="text-[10px] text-[#5A8A6E] mt-0.5">tiempo espera</div>
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-[#34D399] tracking-tight leading-none">+18%</div>
                <div className="text-[10px] text-[#5A8A6E] mt-0.5">conversión</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="px-3 py-2.5 bg-[#0E1A12] border-t border-[#1A2C20] flex items-center gap-2">
        <div className="flex-1 bg-[#1A2C20] rounded-full px-3 py-1.5 text-[12px] text-[#5A8A6E]">Mensaje</div>
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white text-[14px]">›</div>
      </div>
    </div>
  );
}

/* ============================================================
   STAT — small inline KPI
   ============================================================ */
function Stat({ top, sub, color }: { top: string; sub: string; color: string }) {
  return (
    <div>
      <div className="text-[20px] md:text-[24px] font-extrabold tracking-tight leading-none mb-1.5" style={{ color }}>{top}</div>
      <div className="text-[11px] text-[#555] leading-snug">{sub}</div>
    </div>
  );
}

function Keyframes() {
  return (
    <style>{`
      @keyframes bvs-rec { 0%,60%{opacity:1} 80%{opacity:0.2} }
      @keyframes bvs-detect {
        0%, 100% { opacity: 0.95; }
        50% { opacity: 0.65; }
      }
      @keyframes bvs-warn {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.55; }
      }
      @keyframes bvs-float-1 {
        0%, 100% { transform: perspective(1200px) rotateY(-8deg) rotateX(3deg) translateY(0); }
        50% { transform: perspective(1200px) rotateY(-8deg) rotateX(3deg) translateY(-10px); }
      }
      @keyframes bvs-float-2 {
        0%, 100% { transform: perspective(1200px) rotateY(6deg) rotateX(-2deg) translateY(0); }
        50% { transform: perspective(1200px) rotateY(6deg) rotateX(-2deg) translateY(-12px); }
      }
      @keyframes bvs-msg-in {
        from { opacity: 0; transform: translateY(8px) scale(0.96); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
    `}</style>
  );
}
