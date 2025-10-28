// layout /ContentLayout
"use client";
import { Button } from "react-bootstrap";
import AdminLayout from "./AdminLayout";
import LinkActionComponent from "@/app/components/LinkActionComponent";

export default function ContentLayout({ children, info, contentTitle }) {
  return (
    <AdminLayout 
      infoTitle={info?.title || "Dashboard"} infoDesc={info?.desc || "Manage Dashboard"} infoContent= {info?.content || ""}
    >
      <div className="card ">
        {/* Header */}
        <div className="card-header">
          <div className="card-title">{contentTitle || "Data"}</div>
            {/* <div className="card-tools">
                {extraHeader && extraHeader}
            </div> */}
        </div>

        {/* Body */}
        <div className="card-body">
          {children}
        </div>
      </div>
    </AdminLayout>
  );
}


