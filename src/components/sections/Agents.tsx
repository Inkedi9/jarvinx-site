"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const agents = [
    {
        name: "SystemAgent",
        tag: "core",
        description:
            "The backbone of JARVINx. Collects CPU, RAM, and disk metrics at regular intervals and feeds structured data to the LLM for reasoning.",
        metrics: ["CPU usage", "RAM consumption", "Disk space"],
    },
    {
        name: "AlertAgent",
        tag: "notifications",
        description:
            "Watches for threshold breaches and system anomalies. Dispatches formatted alerts to your configured webhook endpoints instantly.",
        metrics: ["Discord", "Slack", "Ntfy", "Gotify"],
    },
    {
        name: "DockerAgent",
        tag: "containers",
        description:
            "Interfaces with the Docker daemon to track container health, detect unexpected stops, and report resource consumption per container.",
        metrics: ["Container state", "Restarts", "Resource usage"],
    },
    {
        name: "FileAgent",
        tag: "filesystem",
        description:
            "Performs scheduled scans of configured directories. Identifies large files, unusual growth patterns, and unexpected modifications.",
        metrics: ["Directory scans", "File size tracking", "Change detection"],
    },
];

export default function Agents() {
    return (
        <Section id="agents">
            <SectionHeader
                title="Agents"
                subtitle="Four specialized agents, each with a single responsibility."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agents.map((agent) => (
                    <div
                        key={agent.name}
                        className="rounded-xl p-6 flex flex-col gap-4"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border)",
                        }}
                    >
                        {/* Name + tag */}
                        <div className="flex items-center gap-3">
                            <span
                                className="text-base font-semibold font-mono"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {agent.name}
                            </span>
                            <span
                                className="text-xs px-2 py-0.5 rounded-full font-mono"
                                style={{
                                    backgroundColor: "var(--bg-base)",
                                    border: "1px solid var(--border)",
                                    color: "var(--accent)",
                                }}
                            >
                                {agent.tag}
                            </span>
                        </div>

                        {/* Description */}
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {agent.description}
                        </p>

                        {/* Metrics pills */}
                        <div className="flex flex-wrap gap-2 mt-auto pt-2">
                            {agent.metrics.map((metric) => (
                                <span
                                    key={metric}
                                    className="text-xs px-2 py-1 rounded-md font-mono"
                                    style={{
                                        backgroundColor: "var(--bg-base)",
                                        border: "1px solid var(--border)",
                                        color: "var(--text-secondary)",
                                    }}
                                >
                                    {metric}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}