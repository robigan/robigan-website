export default function Section({ children, backgroundColor = "#ffffff00", overflower = false}) {
    return (
        <section style={{ backgroundColor: backgroundColor }}>
            {children}
        </section>
    );
}