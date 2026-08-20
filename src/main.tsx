import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CouplesPage from "./CouplesPage.tsx";
import "./index.css";

const COUPLES_PATH = "/couples-therapy";

function isCouplesView() {
  if (typeof window === "undefined") return false;
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const hash = window.location.hash || "";
  return (
    path === COUPLES_PATH ||
    path.endsWith(COUPLES_PATH) ||
    hash === "#couples-therapy" ||
    hash.startsWith("#couples-therapy")
  );
}

function Root() {
  const [isCouples, setIsCouples] = useState(isCouplesView);

  useEffect(() => {
    const updateRoute = () => {
      setIsCouples(isCouplesView());
    };

    window.addEventListener("popstate", updateRoute);
    window.addEventListener("hashchange", updateRoute);
    return () => {
      window.removeEventListener("popstate", updateRoute);
      window.removeEventListener("hashchange", updateRoute);
    };
  }, []);

  if (isCouples) {
    return <CouplesPage />;
  }

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
