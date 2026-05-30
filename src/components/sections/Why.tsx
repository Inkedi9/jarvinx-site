"use client";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { Shield, Zap, Brain } from "lucide-react";

const cards = [
    {
        icon: <Shield size={24} className="text-green-500" />,
        title: "Private by design",
        description:
            "Runs entirely on your machine. No telemetry, no cloud calls, no data leaving your homelab.",
    },
    {
        icon: <Zap size={24} className="text-green-500" />,
        title: "One binary",
        description:
            "Single executable, one external dependency (gopsutil). Drop it in, run it — no complex setup.",
    },
    {
        icon: <Brain size={24} className="text-green-500" />,
        title: "LLM-powered",
        description:
            "Connects to Ollama and reasons about your system state. Not just alerts — actual analysis.",
    },
];

export default function Why() {
    return (
        <Section>
            <SectionHeader
                title="Why JARVINx?"
                subtitle="Built for homelabbers who want intelligence without compromise."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card) => (
                    <div
                        key={card.title}
                        className="rounded-xl p-6 flex flex-col gap-4"
                        style={{
                            backgroundColor: "var(--bg-surface)",
                            border: "1px solid var(--border)",
                        }}
                    >
                        <span className="text-2xl">{card.icon}</span>
                        <h3
                            className="text-base font-semibold"
                            style={{ color: "var(--text-primary)" }}
                        >
                            {card.title}
                        </h3>
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}