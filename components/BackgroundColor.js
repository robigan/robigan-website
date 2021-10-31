export default function BackgroundColor({ backgroundColor = "#ffffff00" }) {
    return (
        <div style={{ zIndex: "-10",backgroundColor: backgroundColor }} className="fixed w-screen h-screen top-0 left-0">
        </div>
    );
}