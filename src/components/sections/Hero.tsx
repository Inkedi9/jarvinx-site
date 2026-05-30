"use client";

import { ArrowRight } from "lucide-react";

const GitHubIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

export default function Hero() {
    return (
        <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-10 md:pb-14 flex flex-col items-center text-center">

            {/* Badge */}
            <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-8"
                style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                }}
            >
                <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                />
                Apache 2.0 · Go 1.23 · Local-first
            </div>

            {/* Titre */}
            <h1
                className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
                style={{ color: "var(--text-primary)" }}
            >
                Local AI Agent for
                <br />
                Your Homelab
            </h1>

            {/* Sous-titre */}
            <p
                className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
                style={{ color: "var(--text-secondary)" }}
            >
                JARVINx monitors your system, reasons with a local LLM, and acts —
                privately, without cloud dependency.
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                    href="#quickstart"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-opacity duration-150 hover:opacity-90"
                    style={{
                        backgroundColor: "var(--accent)",
                        color: "#000000",
                    }}
                >
                    Get Started
                    <ArrowRight size={16} />
                </a>

                <a
                    href="https://github.com/Inkedi9/jarvinx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-colors duration-150"
                    style={{
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border)")
                    }
                >
                    <GitHubIcon />
                    View on GitHub
                </a>
            </div>

            {/* Séparateur décoratif */}
            <div
                className="mt-10 w-full h-px"
                style={{ backgroundColor: "var(--border)" }}
            />
        </section>
    );
}