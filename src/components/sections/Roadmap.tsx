"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const milestones = [
    {
        version: "V1.3",
        status: "done",
        label: "Released",
        items: [
            "DockerAgent & FileAgent",
            "Multi-webhook support",
            "Log rotation",
            "Dry-run mode",
        ],
    },
    {
        version: "V1.4",
        status: "active",
        label: "In progress",
        items: [
            "Dashboard connected to V1.3 features",
            "Live metrics UI",
            "Agent status overview",
        ],
    },
    {
        version: "V1.5",
        status: "planned",
        label: "Planned",
        items: [
            "Production deployment",
            "Hardened configuration",
            "Systemd service support",
        ],
    },
    {
        version: "V1.6",
        status: "future",
        label: "Future",
        items: [
            "Long-term memory via Qdrant",
            "Contextual awareness across sessions",
            "Semantic search on past reports",
        ],
    },
];

const statusConfig: Record<
    string,
    { icon: string; accentColor: string; borderColor: string }
> = {
    done: {
        icon: "✅",
        accentColor: "#005BFF",
        borderColor: "#005BFF",
    },
    active: {
        icon: "🔄",
        accentColor: "#3b82f6",
        borderColor: "#3b82f6",
    },
    planned: {
        icon: "📋",
        accentColor: "#888888",
        borderColor: "#222222",
    },
    future: {
        icon: "🔮",
        accentColor: "#888888",
        borderColor: "#222222",
    },
};

export default function Roadmap() {
    return (
        <Section>
            <SectionHeader
                title="Roadmap"
                subtitle="Where JARVINx has been and where it's going."
            />

            <div className="max-w-2xl mx-auto flex flex-col">
                {milestones.map((milestone, index) => {
                    const config = statusConfig[milestone.status];
                    const isLast = index === milestones.length - 1;

                    return (
                        <div key={milestone.version} className="flex gap-6">

                            {/* Colonne gauche — dot + ligne */}
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-3 h-3 rounded-full shrink-0 mt-5"
                                    style={{
                                        backgroundColor: config.accentColor,
                                        boxShadow: `0 0 0 3px var(--bg-base), 0 0 0 4px ${config.accentColor}`,
                                    }}
                                />
                                {!isLast && (
                                    <div
                                        className="w-px flex-1 mt-2"
                                        style={{ backgroundColor: "var(--border)" }}
                                    />
                                )}
                            </div>

                            {/* Carte */}
                            <div className={`flex-1 ${isLast ? "pb-0" : "pb-8"}`}>
                                <div
                                    className="rounded-xl p-5 flex flex-col gap-3"
                                    style={{
                                        backgroundColor: "var(--bg-surface)",
                                        border: `1px solid ${config.borderColor}`,
                                    }}
                                >
                                    {/* Version + label */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-base">{config.icon}</span>
                                        <span
                                            className="text-sm font-bold font-mono"
                                            style={{ color: "var(--text-primary)" }}
                                        >
                                            {milestone.version}
                                        </span>
                                        <span
                                            className="text-xs px-2 py-0.5 rounded-full font-mono ml-auto"
                                            style={{
                                                backgroundColor: "var(--bg-base)",
                                                border: "1px solid var(--border)",
                                                color: config.accentColor,
                                            }}
                                        >
                                            {milestone.label}
                                        </span>
                                    </div>

                                    {/* Items */}
                                    <ul className="flex flex-col gap-1.5">
                                        {milestone.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-2 text-sm"
                                                style={{ color: "var(--text-secondary)" }}
                                            >
                                                <span
                                                    className="w-1 h-1 rounded-full shrink-0"
                                                    style={{ backgroundColor: config.accentColor }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}