import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";

export default function Main() {
    return (
        <main className="container">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="inmuebles" replace />} />
                    <Route path="/inmuebles" element={<Home />} />
                    <Route path="*" element={<ErrorPage />} />

                </Routes>
            </HashRouter>
        </main>
    )

}