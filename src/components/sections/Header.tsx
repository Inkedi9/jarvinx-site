"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

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

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Agents", href: "#agents" },
    { label: "Quickstart", href: "#quickstart" },
    { label: "GitHub", href: "https://github.com/Inkedi9/jarvinx" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            style={{
                borderBottom: "1px solid var(--border)",
                backgroundColor: "var(--bg-base)",
            }}
            className="sticky top-0 z-50"
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#"
                    className="text-xl font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                >
                    JARVIN<span style={{ color: "var(--accent)" }}>x</span>
                </a>

                {/* Nav desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm transition-colors duration-150"
                            style={{ color: "var(--text-secondary)" }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "var(--text-primary)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "var(--text-secondary)")
                            }
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA desktop */}
                <a
                    href="https://github.com/Inkedi9/jarvinx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150"
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

                {/* Hamburger mobile */}
                <button
                    className="md:hidden"
                    style={{ color: "var(--text-secondary)" }}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Nav mobile */}
            {menuOpen && (
                <div
                    className="md:hidden px-6 pb-4 flex flex-col gap-4"
                    style={{ borderTop: "1px solid var(--border)" }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm pt-3"
                            style={{ color: "var(--text-secondary)" }}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://github.com/Inkedi9/jarvinx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium"
                        style={{ color: "var(--accent)" }}
                    >
                        <GitHubIcon />
                        View on GitHub
                    </a>
                </div>
            )}
        </header>
    );
}