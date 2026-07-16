import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import LandingPage from "@/pages/landing/LandingPage";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <BrowserRouter>
          <Routes>
            {/* Public Marketing Route */}
            <Route path="/" element={<LandingPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
