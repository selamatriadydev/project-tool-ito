// layout /AdminLayout
"use client";
import { useEffect, useRef } from "react";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
// import Breadcrumb from "../components/Breadcrumb";
import TopInfo from "@/app/components/TopInfo";
import PushMenu from "../assets/PushMenu";

export default function AdminLayout({ children, infoTitle, infoDesc,infoContent }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && sidebarRef.current) {
      const pushMenu = new PushMenu(sidebarRef.current);
      pushMenu.init();

      const toggleBtn = document.querySelector('[data-lte-toggle="sidebar"]');
      if (toggleBtn) {
        toggleBtn.addEventListener("click", () => pushMenu.toggle());
      }

      // Cleanup
      return () => {
        toggleBtn?.removeEventListener("click", () => pushMenu.toggle());
      };
    }
  }, []);
  return (
    <div className="layout-fixed sidebar-expand-lg sidebar-open bg-body-tertiary">
        <div className="app-wrapper">
        <TopBar />
        <Sidebar sidebarRef={sidebarRef} />
        <main className="app-main">
            <TopInfo title={infoTitle} description={infoDesc} content={infoContent} />
            <div className="app-content">
              <div className="container-fluid">{children}</div>
            </div>
        </main>
        </div>
    </div>
  );
}
