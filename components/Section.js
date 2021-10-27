export default function Section({ children, backgroundColor = "#ffffff00" }) {
    console.log(backgroundColor);

    return (
        <section style={{ backgroundColor: backgroundColor }}>
            {children}
        </section>
    );
}