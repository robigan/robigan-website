export default function Section({ children, backgroundColor = "#ffffff00" }) {
    return (
        <section style={{ backgroundColor: backgroundColor }}>
            {children}
        </section>
    );
}