import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Intake from "./pages/Intake";
import HybridTrainingPage from "./pages/HybridTrainingPage";
import ProgressPage from "./pages/ProgressPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import NotFound from "./pages/NotFound";

// Scrolls to the top on every page change, or to the #section if the URL has one.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// Shared frame: navbar on top, footer on the bottom, page content in between.
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="intake" element={<Intake />} />
        <Route path="hybrid-training" element={<HybridTrainingPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route
          path="live-feed"
          element={
            <ComingSoonPage
              eyebrow="Farm Live Feed"
              title="A window into the farm"
              text="A future window into our micro-farm operations and growing activities."
            />
          }
        />
        <Route
          path="media-archive"
          element={
            <ComingSoonPage
              eyebrow="Media Archive"
              title="Workshops, resources, and highlights"
              text="Recorded workshops, educational resources, and project highlights will be added as they become available."
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
