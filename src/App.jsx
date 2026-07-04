import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/layout/CustomCursor";
import CommandPalette from "./components/layout/CommandPalette";
import Home from "./pages/Home";
import CaseStudyPage from "./pages/CaseStudyPage";

function App() {
  return (
    <Router>
      <div className="bg-primary text-text min-h-screen flex flex-col">
        <CustomCursor />
        <Navbar />

        <AnimatePresence mode="wait">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-study/:id" element={<CaseStudyPage />} />
              <Route
                path="*"
                element={
                  <div className="px-6 py-20 text-center text-text-muted">
                    404 Not Found
                  </div>
                }
              />
            </Routes>
          </main>
        </AnimatePresence>

        <Footer />
        <CommandPalette />
      </div>
    </Router>
  );
}

export default App;
