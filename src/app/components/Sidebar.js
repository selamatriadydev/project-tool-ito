// components/Sidebar.js
"use client";

import Link from "next/link";
import { useState } from "react";

// SidebarItem Component
function SidebarItem({ title, icon, href, children, badge, isActive }) {
  const [open, setOpen] = useState(isActive || false);
  const hasChildren = Array.isArray(children) && children.length > 0;

  const toggleOpen = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setOpen(!open);
    }
  };

  return (
    <li className={`nav-item ${hasChildren && open ? "menu-open" : ""}`}>
      {hasChildren ? (
        <>
          <a href="#" className={`nav-link ${isActive ? "active" : ""}`} onClick={toggleOpen}>
            {icon && <i className={`nav-icon ${icon}`}></i>}
            <p>
              {title} {badge && <span className="nav-badge badge text-bg-secondary me-3">{badge}</span>}
              <i className={`nav-arrow bi bi-chevron-right`}></i>
            </p>
          </a>
          <ul className={`nav nav-treeview ${open ? "d-block" : "d-none"}`}>
            {children.map((child, idx) => (
              <SidebarItem key={idx} {...child} />
            ))}
          </ul>
        </>
      ) : (
        <Link href={href || "#"} className={`nav-link ${isActive ? "active" : ""}`}>
          {icon && <i className={`nav-icon ${icon}`}></i>}
          <p>{title}</p>
        </Link>
      )}
    </li>
  );
}

// Sidebar Component
export default function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      icon: "bi bi-speedometer",
      isActive: true,
      children: [
        { title: "Dashboard Asset", href: "/", icon: "bi bi-circle" },
      ],
    },
    {
      title: "Asset",
      icon: "bi bi-box-seam-fill",
      badge: 5,
      children: [
        { title: "Berwujud", href: "/asset/berwujud", icon: "bi bi-circle" },
        { title: "Tidak Berwujud", href: "/asset/tidak-berwujud", icon: "bi bi-circle" },
        { title: "Sensus", href: "/asset/sensus", icon: "bi bi-circle" },
        { title: "Master Jenis", href: "/asset/master-jenis", icon: "bi bi-circle" },
        { title: "Master Ruang", href: "/asset/master-ruang", icon: "bi bi-circle" },
      ],
    },
    {
      title: "Tool",
      icon: "bi bi-clipboard-fill",
      badge: 2,
      children: [
        { title: "Master", href: "/tools/master", icon: "bi bi-circle" },
        { title: "Aktivitas", href: "/tools/aktivitas", icon: "bi bi-circle" },
      ],
    },
    {
      title: "Monitoring",
      icon: "bi bi-clipboard-fill",
      badge: 1,
      children: [
        { title: "Master", href: "/monitoring/masterr", icon: "bi bi-circle" },
      ],
    },
    {
      title: "App",
      icon: "bi bi-clipboard-fill",
      badge: 2,
      children: [
        { title: "Users", href: "/app/users", icon: "bi bi-circle" },
        { title: "Aplikasi", href: "/app/aplikasi", icon: "bi bi-circle" },
      ],
    },
    // bisa lanjutkan semua menu lain...
  ];

  return (
    <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="light">
      {/* Sidebar Brand */}
      <div className="sidebar-brand">
        <Link href="/" className="brand-link">
          {/* <img src="/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image opacity-75 shadow" /> */}
          <span className="brand-text fw-light">MSE</span>
        </Link>
      </div>

      {/* Sidebar Menu */}
      <div className="sidebar-wrapper">
        <nav className="mt-2">
          <ul
            className="nav sidebar-menu flex-column"
            data-lte-toggle="treeview"
            role="navigation"
            aria-label="Main navigation"
            data-accordion="false"
            id="navigation"
          >
            {menuItems.map((item, idx) => (
              <SidebarItem key={idx} {...item} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
