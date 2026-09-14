import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CouplesPage from "./CouplesPage.tsx";
import TraumaEMDRPage from "./TraumaEMDRPage.tsx";
import "./index.css";

const COUPLES_PATH = "/couples-therapy";
const TRAUMA_PATH = "/trauma-emdr-therapy";

type RouteView = "main" | "couples" | "trauma";

function getRouteView(): RouteView {
  if (typeof window === "undefined") return "main";
  const path = window.location.pathname.toLowerCase().replace(/\/$/, "") || "/";
  const hash = window.location.hash.toLowerCase() || "";

  if (hash === "#trauma-emdr-therapy" || hash.startsWith("#trauma-emdr-therapy")) {
    try {
      window.history.replaceState(null, "", TRAUMA_PATH);
    } catch {}
    return "trauma";
  }

  if (hash === "#couples-therapy" || hash.startsWith("#couples-therapy")) {
    try {
      window.history.replaceState(null, "", COUPLES_PATH);
    } catch {}
    return "couples";
  }

  if (
    path === TRAUMA_PATH ||
    path.endsWith(TRAUMA_PATH) ||
    path.includes("trauma-emdr-therapy")
  ) {
    return "trauma";
  }

  if (
    path === COUPLES_PATH ||
    path.endsWith(COUPLES_PATH) ||
    path.includes("couples-therapy")
  ) {
    return "couples";
  }

  return "main";
}

function Root() {
  const [view, setView] = useState<RouteView>(getRouteView);

  useEffect(() => {
    const updateRoute = () => setView(getRouteView());

    window.addEventListener("popstate", updateRoute);
    window.addEventListener("hashchange", updateRoute);

    // Initial check to clean up legacy hashes if present
    if (window.location.hash === "#trauma-emdr-therapy" || window.location.hash.startsWith("#trauma-emdr-therapy")) {
      try {
        window.history.replaceState(null, "", TRAUMA_PATH);
      } catch {}
    }
    if (window.location.hash === "#couples-therapy" || window.location.hash.startsWith("#couples-therapy")) {
      try {
        window.history.replaceState(null, "", COUPLES_PATH);
      } catch {}
    }

    return () => {
      window.removeEventListener("popstate", updateRoute);
      window.removeEventListener("hashchange", updateRoute);
    };
  }, []);

  if (view === "trauma") return <TraumaEMDRPage />;
  if (view === "couples") return <CouplesPage />;
  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
