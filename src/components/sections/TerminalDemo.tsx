"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

type LogColor = "text-primary" | "text-secondary" | "accent";

interface LogLine {
    text: string;
    color: LogColor;
}

const LOGS: LogLine[] = [
    { text: '10:57:22 [ INFO  ] [ JARVINX ] Modèle : llama3.1:8b | Intervalle : 20s | CPU : 75% RAM : 90% Disk : 85%', color: "text-primary" },
    { text: "[ OLLAMA ] ✓ En ligne · modèle 'llama3.1:8b' disponible · 5 modèle(s) installé(s)", color: "accent" },
    { text: "10:57:22 [ INFO  ] [ SQLITE ] store actif : jarvinx.db", color: "text-primary" },
    { text: "10:57:22 [ INFO  ] [ NOTIFIER ] Canal enregistré : discord", color: "text-primary" },
    { text: "10:57:22 [ INFO  ] [ NOTIFIER ] Canal enregistré : ntfy", color: "text-primary" },
    { text: "10:57:22 [ INFO  ] [ REGISTRY ] Agent enregistré : system (schedule: 15s)", color: "accent" },
    { text: "10:57:22 [ INFO  ] [ REGISTRY ] Agent enregistré : alert (schedule: 15s)", color: "accent" },
    { text: "10:57:22 [ INFO  ] [ REGISTRY ] Agent enregistré : docker (schedule: 30s)", color: "accent" },
    { text: "10:57:22 [ INFO  ] [ REGISTRY ] Agent enregistré : file (schedule: 5m0s)", color: "accent" },
    { text: "10:57:22 [ INFO  ] [ REGISTRY ] Agent enregistré : qdrant (schedule: 15s)", color: "accent" },
    { text: "10:57:22 [ INFO  ] [ QDRANT ] mémoire sémantique activée : http://localhost:6333", color: "accent" },
    { text: "10:57:22 [ INFO  ] [ JARVINX ] Rapport quotidien activé — 08:00", color: "text-primary" },
    { text: "10:57:22 [ INFO  ] [ ORCHESTRATOR ] En écoute sur le bus...", color: "text-primary" },
    { text: "10:57:22 [ INFO  ] [ WEB ] Dashboard → http://localhost:8080", color: "accent" },
    { text: "10:57:22 [ INFO  ] [ SCHEDULER ] Starting — tick toutes les 20s", color: "text-primary" },
    { text: "╔══════════════════════════════════════════╗", color: "accent" },
    { text: "║        JARVINx — RUNTIME vdev            ║", color: "accent" },
    { text: "╚══════════════════════════════════════════╝", color: "accent" },
    { text: "  Modèle     : llama3.1:8b", color: "text-secondary" },
    { text: "  Intervalle : 20s", color: "text-secondary" },
    { text: "  Seuils     : CPU 75% · RAM 90% · Disk 85%", color: "text-secondary" },
    { text: "Status: runtime online. Awaiting tasks. ▊", color: "accent" },
];

const colorVar: Record<LogColor, string> = {
    "text-primary": "var(--text-primary)",
    "text-secondary": "var(--text-secondary)",
    accent: "var(--accent)",
};

export default function TerminalDemo() {
    const [visibleCount, setVisibleCount] = useState(0);
    const [key, setKey] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setVisibleCount(0);
        let i = 0;
        const id = setInterval(() => {
            i += 1;
            setVisibleCount(i);
            if (i >= LOGS.length) clearInterval(id);
        }, 120);
        return () => clearInterval(id);
    }, [key]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [visibleCount]);

    return (
        <Section>
            <SectionHeader
                title="Runtime en action"
                subtitle="Boot sequence réelle de JARVINx — observe, reason, act."
            />

            <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
            >
                {/* Terminal header bar */}
                <div
                    className="flex items-center gap-3 px-4 py-3"
                    style={{
                        backgroundColor: "var(--bg-surface)",
                        borderBottom: "1px solid var(--border)",
                    }}
                >
                    <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#ff5f57" }} />
                    <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#febc2e" }} />
                    <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#28c840" }} />
                    <span
                        className="ml-2 text-xs font-mono"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        jarvinx.runtime
                    </span>
                </div>

                {/* Log output */}
                <div
                    ref={scrollRef}
                    className="p-4 overflow-y-auto"
                    style={{
                        backgroundColor: "var(--bg-surface)",
                        maxHeight: "20rem",
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "0.8rem",
                        lineHeight: "1.6",
                    }}
                >
                    {LOGS.slice(0, visibleCount).map((line, idx) => (
                        <div key={idx} style={{ color: colorVar[line.color] }}>
                            {line.text}
                            {idx === visibleCount - 1 && visibleCount < LOGS.length && (
                                <span style={{ color: "var(--accent)" }} className="animate-pulse">█</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer with replay button */}
                <div
                    className="flex justify-end px-4 py-2"
                    style={{
                        backgroundColor: "var(--bg-surface)",
                        borderTop: "1px solid var(--border)",
                    }}
                >
                    <button
                        onClick={() => setKey((k) => k + 1)}
                        className="text-xs font-mono px-3 py-1 rounded transition-opacity hover:opacity-80 active:opacity-60"
                        style={{
                            color: "var(--accent)",
                            border: "1px solid var(--accent)",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                        }}
                    >
                        ↺ Rejouer
                    </button>
                </div>
            </div>
        </Section>
    );
}
