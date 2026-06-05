import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */

interface ProgressMetric {
    kind: "progress";
    label: string;
    value: number;      // percentage 0-100
    threshold: number;
    display: string;
}

interface StatusMetric {
    kind: "status";
    label: string;
    display: string;
    status: string;
    detail: string[];
    icon?: "docker";
}

type Metric = ProgressMetric | StatusMetric;

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const metrics: Metric[] = [
    { kind: "progress", label: "CPU Usage",  value: 42, threshold: 75, display: "42%" },
    { kind: "progress", label: "RAM Usage",  value: 71, threshold: 90, display: "71%" },
    { kind: "progress", label: "Disk Usage", value: 58, threshold: 85, display: "58%" },
    {
        kind: "status",
        label: "Containers actifs",
        display: "9 / 9",
        status: "All running",
        detail: [],
        icon: "docker",
    },
    {
        kind: "status",
        label: "Agents actifs",
        display: "5 / 5",
        status: "Online",
        detail: ["system", "alert", "docker", "file", "qdrant"],
    },
    {
        kind: "status",
        label: "Dernier rapport",
        display: "aujourd'hui 08:00",
        status: "Delivered",
        detail: ["discord", "ntfy"],
    },
];

/* ------------------------------------------------------------------ */
/* Sub-components                                                       */
/* ------------------------------------------------------------------ */

function StatusBadge({ label }: { label: string }) {
    const config: Record<string, { bg: string; color: string }> = {
        Normal:      { bg: "rgba(34,197,94,0.12)",  color: "#22c55e" },
        Warning:     { bg: "rgba(251,146,60,0.12)", color: "#fb923c" },
        Critical:    { bg: "rgba(239,68,68,0.12)",  color: "#ef4444" },
        "All running": { bg: "rgba(34,197,94,0.12)", color: "#22c55e" },
        Online:      { bg: "rgba(34,197,94,0.12)",  color: "#22c55e" },
        Delivered:   { bg: "rgba(34,197,94,0.12)",  color: "#22c55e" },
    };
    const { bg, color } = config[label] ?? { bg: "rgba(136,136,136,0.12)", color: "#888888" };
    return (
        <span
            className="text-xs font-mono px-2 py-0.5 rounded-full"
            style={{ backgroundColor: bg, color }}
        >
            {label}
        </span>
    );
}

function DockerIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="11" width="3" height="3" rx="0.5" fill="var(--accent)" />
            <rect x="6.5" y="11" width="3" height="3" rx="0.5" fill="var(--accent)" />
            <rect x="11" y="11" width="3" height="3" rx="0.5" fill="var(--accent)" />
            <rect x="6.5" y="6.5" width="3" height="3" rx="0.5" fill="var(--accent)" />
            <rect x="11" y="6.5" width="3" height="3" rx="0.5" fill="var(--accent)" />
            <path
                d="M21.5 11.5c-.4-.3-1.3-.4-2-.3-.1-.7-.5-1.3-1.1-1.7l-.4-.2-.3.4c-.4.6-.5 1.5-.2 2.2-.3.1-.9.3-1.7.3H2.1c-.2 1.1.1 2.5.9 3.5.8.9 2 1.4 3.5 1.4 3.3 0 5.8-1.5 7-4.2.5 0 1.5 0 2-.9.1-.1.3-.4.3-.5z"
                fill="var(--accent)"
            />
        </svg>
    );
}

function ProgressCard({ metric }: { metric: ProgressMetric }) {
    const overThreshold = metric.value >= metric.threshold;
    const barColor = overThreshold ? "#ef4444" : "var(--accent)";
    const statusLabel = overThreshold
        ? metric.value >= metric.threshold + 10 ? "Critical" : "Warning"
        : "Normal";

    return (
        <div
            className="rounded-xl p-5 flex flex-col gap-4"
            style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
        >
            <div className="flex items-center justify-between">
                <span
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {metric.label}
                </span>
                <StatusBadge label={statusLabel} />
            </div>

            <span className="text-3xl font-bold tabular-nums" style={{ color: "var(--text-primary)" }}>
                {metric.display}
            </span>

            {/* Progress bar */}
            <div className="flex flex-col gap-1.5">
                <div
                    className="w-full rounded-full overflow-hidden"
                    style={{ height: "6px", backgroundColor: "var(--border)" }}
                >
                    <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${metric.value}%`, backgroundColor: barColor }}
                    />
                </div>
                <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                    seuil alerte : {metric.threshold}%
                </span>
            </div>

            <p className="text-xs mt-auto" style={{ color: "var(--text-secondary)", opacity: 0.5 }}>
                Données représentatives — intégration live prévue
            </p>
        </div>
    );
}

function StatusCard({ metric }: { metric: StatusMetric }) {
    return (
        <div
            className="rounded-xl p-5 flex flex-col gap-4"
            style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
        >
            <div className="flex items-center justify-between">
                <span
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {metric.label}
                </span>
                <StatusBadge label={metric.status} />
            </div>

            <div className="flex items-center gap-3">
                {metric.icon === "docker" && <DockerIcon />}
                <span className="text-3xl font-bold tabular-nums" style={{ color: "var(--text-primary)" }}>
                    {metric.display}
                </span>
            </div>

            {metric.detail.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                    {metric.detail.map((item) => (
                        <span
                            key={item}
                            className="text-xs font-mono px-2 py-0.5 rounded"
                            style={{
                                backgroundColor: "var(--bg-base)",
                                border: "1px solid var(--border)",
                                color: "var(--text-secondary)",
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            )}

            <p className="text-xs mt-auto" style={{ color: "var(--text-secondary)", opacity: 0.5 }}>
                Données représentatives — intégration live prévue
            </p>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Section                                                              */
/* ------------------------------------------------------------------ */

export default function Metrics() {
    return (
        <Section>
            <SectionHeader
                title="Métriques système"
                subtitle="Données collectées par JARVINx en conditions réelles — homelab Linux Mint, GTX 1060."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {metrics.map((m) =>
                    m.kind === "progress"
                        ? <ProgressCard key={m.label} metric={m} />
                        : <StatusCard  key={m.label} metric={m} />
                )}
            </div>
        </Section>
    );
}
