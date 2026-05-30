interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <div className="mb-12 text-center">
            <h2
                className="text-2xl md:text-3xl font-bold tracking-tight mb-3"
                style={{ color: "var(--text-primary)" }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className="text-sm md:text-base max-w-xl mx-auto"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}