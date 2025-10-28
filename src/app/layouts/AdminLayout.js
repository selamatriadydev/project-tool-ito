// layout /AdminLayout
"use client";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";

export default function AdminLayout({ children, breadcrumbTitle, breadcrumbItems }) {
  return (
    <div className="layout-fixed sidebar-expand-lg sidebar-open bg-body-tertiary">
        <div className="app-wrapper">
        <TopBar />
        <Sidebar />
        <main className="app-main">
            <Breadcrumb title={breadcrumbTitle} items={breadcrumbItems} />
            <div className="app-content">
              <div className="container-fluid">{children}</div>
            </div>
        </main>
        </div>
    </div>
  );
}
