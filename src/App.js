import "./App.css";

function App() {
    return (
        <div className="App text-slate-200 bg-slate-800 min-h-screen">
            <nav className="max-w-5xl mx-auto my-0 py-2 px-1 flex justify-between items-center">
                <h1 className="font-semibold text-2xl">Tailwind Setup</h1>
                <ul className="flex gap-6">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
