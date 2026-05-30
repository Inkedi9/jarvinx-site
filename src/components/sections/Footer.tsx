"use client";

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

export default function Footer() {
    return (
        <footer
            style={{ borderTop: "1px solid var(--border)" }}
            className="py-12"
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

                {/* Logo */}
                <a
                    href="#"
                    className="text-lg font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                >
                    JARVIN<span style={{ color: "var(--accent)" }}>x</span>
                </a>

                {/* Tagline */}
                <p
                    className="text-sm font-mono text-center"
                    style={{ color: "var(--text-secondary)" }}
                >
                    Local-first. Private. Open source.
                </p>

                {/* Liens */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Inkedi9/jarvinx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm transition-colors duration-150"
                        style={{ color: "var(--text-secondary)" }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--text-primary)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "var(--text-secondary)")
                        }
                    >
                        <GitHubIcon />
                        GitHub
                    </a>

                    <span style={{ color: "var(--border)" }}>·</span>

                    <a
                        href="https://github.com/Inkedi9/jarvinx/blob/main/LICENSE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors duration-150"
                        style={{ color: "var(--text-secondary)" }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--text-primary)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "var(--text-secondary)")
                        }
                    >
                        Apache 2.0 License
                    </a>
                </div>

                {/* Credit */}
                <p
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                >
                    JARVINx — Built by{" "}
                    <a
                        href="https://github.com/Inkedi9"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--accent)" }}
                    >
                        Inkedi9
                    </a>
                </p>
            </div>
        </footer>
    );
}