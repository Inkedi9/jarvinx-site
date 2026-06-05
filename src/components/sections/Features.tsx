"use client";

import { Cpu, Container, FolderSearch, Bell, FileText, Zap } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
    {
        icon: Cpu,
        title: "System Monitoring",
        description:
            "Real-time tracking of CPU usage, RAM consumption, and disk space across your entire system.",
    },
    {
        icon: Container,
        title: "Docker Surveillance",
        description:
            "Monitors container states, restarts, and resource usage. Know when something goes wrong before it escalates.",
    },
    {
        icon: FolderSearch,
        title: "File System Analysis",
        description:
            "Scans directories for anomalies, large files, and unexpected changes on your homelab storage.",
    },
    {
        icon: Bell,
        title: "Multi-Webhook Alerts",
        description:
            "Sends alerts to Discord, Slack, Ntfy, or Gotify. Configure multiple endpoints simultaneously.",
    },
    {
        icon: FileText,
        title: "Daily Automated Reports",
        description:
            "Generates and delivers a structured daily summary of your system health — no manual checks needed.",
    },
    {
        icon: Zap,
        title: "Adaptive Prompting",
        description:
            "Dynamically builds LLM prompts based on current system context for sharper, more relevant analysis.",
    },
];

export default function Features() {
    return (
        <Section id="features">
            <SectionHeader
                title="Features"
                subtitle="Everything you need to keep your homelab observable and intelligent."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={feature.title}
                            className="rounded-xl p-6 flex flex-col gap-4"
                            style={{
                                backgroundColor: "var(--bg-surface)",
                                border: "1px solid var(--border)",
                            }}
                        >
                            <Icon size={24} style={{ color: "var(--accent)" }} />
                            <h3
                                className="text-sm font-semibold"
                                style={{ color: "var(--text-primary)" }}
                            >
                                {feature.title}
                            </h3>
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}