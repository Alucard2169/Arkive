import "./styles/loading.css";

export default function Loading() {
    return (
        <main className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
            <span className="loader"></span>
        </div>
    </main>
    );
}