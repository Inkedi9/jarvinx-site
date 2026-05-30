"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const commands = [
    "git clone https://github.com/Inkedi9/jarvinx",
    "cd jarvinx/runtime",
    "cp .env.example .env",
    "make run",
];

export default function Quickstart() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(commands.join("\n"));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Section
            id="quickstart"
            style={{ backgroundColor: "var(--bg-surface)" }}
        >
            <SectionHeader
                title="Quickstart"
                subtitle="Up and running in under a minute."
            />

            <div className="max-w-2xl mx-auto">
                <div
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1px solid var(--border)" }}
                >
                    {/* Barre top du terminal */}
                    <div
                        className="flex items-center justify-between px-4 py-3"
                        style={{
                            backgroundColor: "var(--bg-base)",
                            borderBottom: "1px solid var(--border)",
                        }}
                    >
                        {/* Dots décoratifs */}
                        <div className="flex items-center gap-2">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: "#ff5f57" }}
                            />
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: "#febc2e" }}
                            />
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: "#28c840" }}
                            />
                        </div>

                        {/* Bouton copy */}
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors duration-150"
                            style={{
                                backgroundColor: "var(--bg-surface)",
                                border: "1px solid var(--border)",
                                color: copied ? "var(--accent)" : "var(--text-secondary)",
                            }}
                        >
                            {copied ? <Check size={12} /> : <Copy size={12} />}
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>

                    {/* Commandes */}
                    <div
                        className="px-6 py-6 flex flex-col gap-3"
                        style={{ backgroundColor: "var(--bg-base)" }}
                    >
                        {commands.map((cmd, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span
                                    className="text-sm font-mono select-none shrink-0"
                                    style={{ color: "var(--accent)" }}
                                >
                                    $
                                </span>
                                <code
                                    className="text-sm font-mono"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {cmd}
                                </code>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Note */}
                <p
                    className="text-xs text-center mt-4 font-mono"
                    style={{ color: "var(--text-secondary)" }}
                >
                    Requires{" "}
                    <a
                        href="https://ollama.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--accent)" }}
                    >
                        Ollama
                    </a>{" "}
                    running locally
                </p>
            </div>
        </Section>
    );
}