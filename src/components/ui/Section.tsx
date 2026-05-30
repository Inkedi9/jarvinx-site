interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}

export default function Section({
    children,
    id,
    className = "",
    style,
}: SectionProps) {
    return (
        <section id={id} style={style} className={`w-full py-20 ${className}`}>
            <div className="max-w-6xl mx-auto px-6 w-full">{children}</div>
        </section>
    );
}