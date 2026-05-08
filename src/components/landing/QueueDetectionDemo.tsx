import { useEffect, useRef } from "react";

/**
 * Cinematic SVG animation: top-down store view where computer vision
 * detects a growing queue, syncs with POS in real time, and BEO sends
 * a WhatsApp action to the manager. Loops on a 14s cycle.
 *
 * No external libraries — pure SVG + CSS keyframes for buttery 60fps.
 */
export default function QueueDetectionDemo() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-[#1A1A1A] bg-[#0A0A0A] shadow-[0_30px_80px_-20px_rgba(0,194,224,0.15)]">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0,194,224,0.08), transparent 70%)" }}
      />

      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 bg-[#0E0E0E] border-b border-[#1A1A1A] relative z-10">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[12px] font-semibold text-[#888]">BEO · Computer Vision + POS Sync</span>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] font-bold text-[#00C2E0] tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C2E0]" style={{ animation: "qd-blink 1.2s ease-in-out infinite" }} />
          EN VIVO
        </span>
      </div>

      {/* Stage */}
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-0 relative z-10 items-stretch">

        {/* ━━━━━━━━━━━━ LEFT PANE: STORE TOP-DOWN ━━━━━━━━━━━━ */}
        <div className="relative bg-[#0A0F12] aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden min-w-0">
          {/* Subtle floor grid */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#00C2E0 1px,transparent 1px),linear-gradient(90deg,#00C2E0 1px,transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Frame label */}
          <div className="absolute top-3 left-4 z-10 text-[10px] font-bold tracking-[0.15em] text-[#00C2E0]/70 uppercase">CAM-04 · Sucursal Centro</div>
          <div className="absolute top-3 right-4 z-10 flex items-center gap-1.5 text-[10px] font-mono text-[#444]">
            <span className="w-1 h-1 rounded-full bg-[#FF5F57]" style={{ animation: "qd-blink 0.9s ease-in-out infinite" }} />
            REC · 12:14:07
          </div>

          <svg viewBox="0 0 480 360" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="qd-camera-cone" cx="50%" cy="0%" r="100%">
                <stop offset="0%" stopColor="#00C2E0" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#00C2E0" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="qd-counter" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1A2025" />
                <stop offset="100%" stopColor="#0E1418" />
              </linearGradient>
              <filter id="qd-glow">
                <feGaussianBlur stdDeviation="2" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Store walls */}
            <rect x="20" y="20" width="440" height="320" rx="6" fill="none" stroke="#1A2A30" strokeWidth="1" strokeDasharray="3 3" />

            {/* Counter (bottom area) */}
            <rect x="60" y="260" width="360" height="44" rx="6" fill="url(#qd-counter)" stroke="#243038" strokeWidth="1" />
            <text x="240" y="288" textAnchor="middle" fill="#3A5560" fontSize="9" fontFamily="Inter" fontWeight="600" letterSpacing="2">
              CAJA · POS-04
            </text>

            {/* POS terminal icon at counter */}
            <g transform="translate(370,266)">
              <rect width="36" height="32" rx="3" fill="#0E1418" stroke="#2A3840" />
              <rect x="4" y="4" width="28" height="14" rx="1" fill="#001518" stroke="#00C2E0" strokeOpacity="0.3" />
              <line x1="6" y1="22" x2="30" y2="22" stroke="#2A3840" strokeWidth="1" />
              <line x1="6" y1="26" x2="22" y2="26" stroke="#2A3840" strokeWidth="1" />
            </g>

            {/* Camera mount (top center) */}
            <g transform="translate(240,32)">
              <circle r="9" fill="#0E1418" stroke="#2A3840" strokeWidth="1.5" />
              <circle r="4" fill="#00C2E0" opacity="0.4" />
              <circle r="2" fill="#00C2E0" />
            </g>

            {/* Camera detection cone (sweeps from camera to queue) */}
            <path
              d="M 240 40 L 130 250 L 350 250 Z"
              fill="url(#qd-camera-cone)"
              opacity="0"
              style={{ animation: "qd-cone 14s ease-in-out infinite" }}
            />

            {/* Scanning line inside cone */}
            <line
              x1="130" x2="350" y1="250" y2="250"
              stroke="#00C2E0" strokeWidth="0.8" strokeOpacity="0.5"
              style={{ animation: "qd-scan 14s ease-in-out infinite", filter: "url(#qd-glow)" }}
            />

            {/* People in queue (each with their own delay → growing queue) */}
            {[
              { x: 330, delay: 0, id: 1 },
              { x: 295, delay: 1.0, id: 2 },
              { x: 260, delay: 1.7, id: 3 },
              { x: 225, delay: 2.3, id: 4 },
              { x: 190, delay: 2.9, id: 5 },
              { x: 155, delay: 3.5, id: 6 },
              { x: 120, delay: 4.0, id: 7 },
              { x: 85, delay: 4.4, id: 8 },
              { x: 50, delay: 4.8, id: 9 },
            ].map((p) => (
              <g key={p.id} style={{ animation: `qd-person 14s ease-out ${p.delay}s infinite`, opacity: 0 }}>
                {/* Bounding box */}
                <rect x={p.x - 14} y={216} width="28" height="38" rx="2" fill="none" stroke="#00C2E0" strokeWidth="1" strokeOpacity="0.7" strokeDasharray="2 2" />
                {/* Confidence label */}
                <rect x={p.x - 14} y={209} width="20" height="6" rx="1" fill="#00C2E0" />
                <text x={p.x - 11} y={214} fill="#001518" fontSize="4.5" fontFamily="Inter" fontWeight="700">{0.92 + (p.id % 7) * 0.01}</text>
                {/* Person silhouette */}
                <circle cx={p.x} cy={228} r="5" fill="#00C2E0" opacity="0.9" />
                <path d={`M ${p.x - 7} 252 Q ${p.x} 234 ${p.x + 7} 252 Z`} fill="#00C2E0" opacity="0.85" />
              </g>
            ))}

            {/* HUD: queue count counter */}
            <g transform="translate(36,42)">
              <rect width="86" height="44" rx="6" fill="#000A0C" stroke="#00C2E0" strokeOpacity="0.25" />
              <text x="8" y="14" fill="#00C2E0" opacity="0.6" fontSize="7" fontFamily="Inter" fontWeight="600" letterSpacing="1.5">PERSONAS EN FILA</text>
              <text id="qd-queue-num" x="8" y="36" fill="#00C2E0" fontSize="22" fontFamily="Inter" fontWeight="800" letterSpacing="-0.5">
                <tspan style={{ animation: "qd-num1 14s steps(1) infinite" }}>0</tspan>
              </text>
              <text x="34" y="36" fill="#3A5560" fontSize="10" fontFamily="Inter" fontWeight="600">/ 5 lim.</text>
            </g>

            {/* HUD: wait time */}
            <g transform="translate(358,42)">
              <rect width="86" height="44" rx="6" fill="#000A0C" stroke="#00C2E0" strokeOpacity="0.25" />
              <text x="8" y="14" fill="#00C2E0" opacity="0.6" fontSize="7" fontFamily="Inter" fontWeight="600" letterSpacing="1.5">ESPERA PROM.</text>
              <text x="8" y="36" fill="#FB923C" fontSize="22" fontFamily="Inter" fontWeight="800" letterSpacing="-0.5">
                <tspan style={{ animation: "qd-wait 14s steps(1) infinite" }}>0:00</tspan>
              </text>
            </g>

            {/* Critical alert flash */}
            <rect
              x="20" y="20" width="440" height="320" rx="6"
              fill="none" stroke="#F87171" strokeWidth="2"
              opacity="0"
              style={{ animation: "qd-alert 14s ease-in-out infinite" }}
            />
            <g style={{ animation: "qd-alert 14s ease-in-out infinite", opacity: 0 }} transform="translate(180,160)">
              <rect width="120" height="34" rx="6" fill="#1A0A0A" stroke="#F87171" strokeOpacity="0.5" />
              <text x="60" y="22" textAnchor="middle" fill="#F87171" fontSize="11" fontFamily="Inter" fontWeight="800" letterSpacing="0.5">
                ⚠ FILA CRÍTICA
              </text>
            </g>
          </svg>
        </div>

        {/* ━━━━━━━━━━━━ RIGHT PANE: POS SYNC + ALERT ━━━━━━━━━━━━ */}
        <div className="relative bg-[#080A0C] p-4 md:p-5 flex flex-col gap-3 border-t lg:border-t-0 lg:border-l border-[#141414] min-w-0">
          {/* Section label */}
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-[#444] uppercase">
            <span className="w-1 h-1 rounded-full bg-[#00C2E0]" />
            POS sync · Edge agent
          </div>

          {/* POS transaction stream */}
          <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[12px] font-bold text-[#CCC]">Transacciones POS-04</span>
              <span className="text-[10px] text-[#444] font-mono">cdc · realtime</span>
            </div>
            <div className="font-mono text-[11px] space-y-1.5 h-24 overflow-hidden relative">
              <div className="absolute inset-0 flex flex-col gap-1.5" style={{ animation: "qd-stream 14s linear infinite" }}>
                {[
                  { t: "12:13:54", a: "$248", ok: true },
                  { t: "12:13:48", a: "$192", ok: true },
                  { t: "12:13:31", a: "$340", ok: true },
                  { t: "12:13:22", a: "$87", ok: true },
                  { t: "12:13:08", a: "$156", ok: true },
                  { t: "12:12:54", a: "$420", ok: true },
                  { t: "12:12:38", a: "$98", ok: true },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[#00C2E0]/40">{tx.t}</span>
                    <span className="text-[#34D399]">▸</span>
                    <span className="text-[#CCC]">VENTA {tx.a}</span>
                    <span className="ml-auto text-[#34D399]/60">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conversion KPI */}
          <div className="bg-[#0E0E0E] border border-[#1A1A1A] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-[#666] font-semibold uppercase tracking-wider">Conversión hoy</span>
              <span className="text-[10px] text-[#FB923C] font-mono" style={{ animation: "qd-show-late 14s ease-out infinite", opacity: 0 }}>↓ -18%</span>
            </div>
            {/* Animated bar */}
            <div className="h-2 rounded-full bg-[#1A1A1A] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #00C2E0, #FB923C, #F87171)",
                  width: "62%",
                  transformOrigin: "left",
                  animation: "qd-conv 14s ease-in-out infinite",
                }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[20px] font-extrabold text-[#E0E0E0] tracking-tight" style={{ animation: "qd-conv-num 14s steps(1) infinite" }}>
                62%
              </span>
              <span className="text-[10px] text-[#444]">benchmark 56%</span>
            </div>
          </div>

          {/* BEO neural correlation */}
          <div
            className="bg-gradient-to-br from-[#0A1A1C] to-[#0A0F12] border border-[#00C2E0]/20 rounded-xl p-4"
            style={{ animation: "qd-show-late 14s ease-out infinite", opacity: 0 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 rounded-full bg-[#00C2E0]/20" style={{ animation: "qd-pulse 1.4s ease-out infinite" }} />
                <div className="absolute inset-1 rounded-full bg-[#00C2E0] flex items-center justify-center text-[#001518] text-[10px] font-black">B</div>
              </div>
              <span className="text-[11px] font-bold text-[#00C2E0] tracking-wider uppercase">BEO correlando</span>
            </div>
            <p className="text-[12px] text-[#AAA] leading-snug">
              Visión: <b className="text-[#00C2E0]">9 personas en fila</b> · POS: <b className="text-[#00C2E0]">throughput -42%</b> · 2 colaboradores sin tarea en zona B.
            </p>
          </div>

          {/* WhatsApp action */}
          <div
            className="bg-[#0D1F0D] border border-[#34D399]/20 rounded-xl p-4"
            style={{ animation: "qd-show-latest 14s ease-out infinite", opacity: 0 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white text-[11px]">✓</div>
              <span className="text-[11px] font-bold text-[#86EFAC] tracking-wider uppercase">WhatsApp · Gerente Centro</span>
              <span className="ml-auto text-[10px] text-[#34D399]/50 font-mono">enviado</span>
            </div>
            <p className="text-[12px] text-[#E0F5DC] leading-snug">
              Fila de 9 personas en caja. Espera 7 min. <b>Abre caja 2 ahora</b> y reasigna zona B.
            </p>
          </div>

        </div>
      </div>

      {/* ━━━━━ KEYFRAMES ━━━━━ */}
      <style>{`
        @keyframes qd-blink {
          0%, 60% { opacity: 1; }
          80% { opacity: 0.3; }
        }
        @keyframes qd-cone {
          0%, 8% { opacity: 0; }
          15%, 78% { opacity: 1; }
          88%, 100% { opacity: 0; }
        }
        @keyframes qd-scan {
          0%, 8% { opacity: 0; transform: translateY(0); }
          15% { opacity: 0.6; }
          50% { opacity: 0.6; transform: translateY(-180px); }
          78% { opacity: 0.6; transform: translateY(0); }
          88%, 100% { opacity: 0; }
        }
        @keyframes qd-person {
          0%, 5% { opacity: 0; transform: translateY(20px) scale(0.8); }
          12%, 75% { opacity: 1; transform: translateY(0) scale(1); }
          85%, 100% { opacity: 0; transform: translateY(0) scale(1); }
        }
        @keyframes qd-num1 {
          0%, 5% { opacity: 0; }
          7% { opacity: 1; content: "1"; }
        }
        @keyframes qd-wait { 0% {} 100% {} }
        @keyframes qd-alert {
          0%, 60% { opacity: 0; }
          65%, 75% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }
        @keyframes qd-stream {
          0% { transform: translateY(0); }
          100% { transform: translateY(-60px); }
        }
        @keyframes qd-conv {
          0%, 15% { width: 62%; background: linear-gradient(90deg,#00C2E0,#00C2E0); }
          50% { width: 50%; background: linear-gradient(90deg,#00C2E0,#FB923C); }
          70% { width: 38%; background: linear-gradient(90deg,#FB923C,#F87171); }
          90%, 100% { width: 62%; background: linear-gradient(90deg,#00C2E0,#34D399); }
        }
        @keyframes qd-conv-num { 0% {} 100% {} }
        @keyframes qd-show-late {
          0%, 55% { opacity: 0; transform: translateY(8px); }
          65%, 88% { opacity: 1; transform: translateY(0); }
          95%, 100% { opacity: 0; }
        }
        @keyframes qd-show-latest {
          0%, 70% { opacity: 0; transform: translateY(8px); }
          78%, 90% { opacity: 1; transform: translateY(0); }
          96%, 100% { opacity: 0; }
        }
        @keyframes qd-pulse {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>

      {/* JS-driven counters (queue & wait time tied to the same 14s loop) */}
      <CounterScript />
    </div>
  );
}

/**
 * Drives the queue counter and wait time text by reading the loop progress
 * from a CSS animation phase (synced via requestAnimationFrame).
 */
function CounterScript() {
  // We use a small effect-less approach: a hidden component that updates
  // two refs each frame. Implemented as a separate client component to
  // keep the SSR/SSG-safe export above clean.
  return (
    <CounterRunner />
  );
}

function CounterRunner() {
  const queueRef = useRef<SVGTextElement | null>(null);
  const waitRef = useRef<SVGTextElement | null>(null);

  useEffect(() => {
    queueRef.current = document.querySelector('#qd-queue-num tspan') as SVGTextElement | null;
    // find the wait tspan by querying the right hud
    const allTspans = document.querySelectorAll<SVGTextElement>('text[fill="#FB923C"] tspan');
    waitRef.current = allTspans[0] || null;

    let raf = 0;
    const start = performance.now();
    const LOOP = 14000;

    const PEOPLE = [0, 1.0, 1.7, 2.3, 2.9, 3.5, 4.0, 4.4, 4.8].map((d) => d * 1000); // ms after loop start

    const tick = (now: number) => {
      const t = (now - start) % LOOP;
      // queue count (people whose delay has passed and that haven't disappeared yet)
      let count = 0;
      if (t < LOOP * 0.85) {
        for (let i = 0; i < PEOPLE.length; i++) {
          if (t > PEOPLE[i] + 600) count = i + 1; // +600ms for fade-in
        }
      } else {
        count = 0; // resolution phase — queue dissolves
      }
      if (queueRef.current && queueRef.current.textContent !== String(count)) {
        queueRef.current.textContent = String(count);
        // color shift when over limit
        const parent = queueRef.current.parentElement as unknown as SVGTextElement | null;
        if (parent) {
          (parent as any).setAttribute("fill", count > 5 ? "#F87171" : count > 3 ? "#FB923C" : "#00C2E0");
        }
      }

      // wait time grows linearly with queue
      const seconds = count * 47; // ~47s per person ahead
      const mm = Math.floor(seconds / 60);
      const ss = String(seconds % 60).padStart(2, "0");
      const txt = `${mm}:${ss}`;
      if (waitRef.current && waitRef.current.textContent !== txt) {
        waitRef.current.textContent = txt;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
