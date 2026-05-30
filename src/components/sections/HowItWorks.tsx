"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
    {
        step: "01",
        label: "Observe",
        description:
            "Agents collect real-time data from your system — CPU, RAM, disk, containers, and file system — on a defined schedule.",
    },
    {
        step: "02",
        label: "Reason",
        description:
            "Collected metrics are structured into a dynamic prompt and sent to your local Ollama instance for LLM-powered analysis.",
    },
    {
        step: "03",
        label: "Act",
        description:
            "Based on the analysis, JARVINx triggers alerts, dispatches webhook notifications, or generates a daily report — automatically.",
    },
];

export default function HowItWorks() {
    return (
        <Section>
            <SectionHeader
                title="How it works"
                subtitle="Three steps. Fully local. No configuration overhead."
            />
            <div className="flex flex-col md:flex-row items-stretch gap-4">
                {steps.map((step) => (
                    <div
                        key={step.step}
                        className="flex-1 rounded-xl p-6 flex flex-col gap-4"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border)",
                        }}
                    >
                        <span
                            className="text-xs font-mono"
                            style={{ color: "var(--accent)" }}
                        >
                            {step.step}
                        </span>
                        <h3
                            className="text-lg font-bold tracking-tight"
                            style={{ color: "var(--text-primary)" }}
                        >
                            {step.label}
                        </h3>
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}