// layout /ContentLayout
"use client";
import { Button } from "react-bootstrap";
import AdminLayout from "./AdminLayout";
import LinkActionComponent from "@/app/components/LinkActionComponent";

export default function ContentLayout({ children, breadcrumbTitle, breadcrumbItems, contentTitle, contentAction = {},extraHeader }) {
  return (
    <AdminLayout 
      breadcrumbTitle={breadcrumbTitle || "Dashboard"} 
      breadcrumbItems={breadcrumbItems || [
        { label: "Home", href: "/" },
        { label: breadcrumbTitle || "Dashboard", active: true },
      ]}
    >
      <div className="card card-danger card-outline mb-4">
        {/* Header */}
        <div className="card-header">
          <div className="card-title">{contentTitle || breadcrumbTitle}</div>
            <div className="card-tools">
                {contentAction?.create && (
                  <LinkActionComponent href={contentAction.url} action="create">
                    Tambah
                  </LinkActionComponent>
                )}
                {contentAction?.custom?.map((btn, index) => (
                  <LinkActionComponent
                    key={index}
                    href={btn.url || "#"}
                    action={btn.action}
                    variant={btn.variant}
                    onClick={btn.onClick}
                  >
                    {btn.label}
                  </LinkActionComponent>
                ))}
                {extraHeader && extraHeader}
            </div>
        </div>

        {/* Body */}
        <div className="card-body">
          {children}
        </div>
      </div>
    </AdminLayout>
  );
}


