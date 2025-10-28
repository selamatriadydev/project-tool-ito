// layout /AdminLayout
"use client";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
// import Breadcrumb from "../components/Breadcrumb";
import TopInfo from "@/app/components/TopInfo";

export default function AdminLayout({ children, infoTitle, infoDesc,infoContent }) {
  return (
    <div className="layout-fixed sidebar-expand-lg sidebar-open bg-body-tertiary">
        <div className="app-wrapper">
        <TopBar />
        <Sidebar />
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
