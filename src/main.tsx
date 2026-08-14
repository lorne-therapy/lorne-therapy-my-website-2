import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CouplesPage from "./CouplesPage.tsx";
import "./index.css";

const COUPLES_PATH = "/couples-therapy";

function getPathname() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

function Root() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const onChange = () => setPathname(getPathname());
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);

  if (pathname === COUPLES_PATH || pathname.endsWith(COUPLES_PATH)) {
    return <CouplesPage />;
  }

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
