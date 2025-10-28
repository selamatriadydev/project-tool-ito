"use client";

import { useEffect } from "react";

/**
 * Card
 * Komponen umum untuk AdminLTE Card
 *
 * Props:
 * - title: judul card (opsional)
 * - color: warna outline (primary, secondary, success, info, warning, danger)
 * - collapsible: apakah card bisa collapse (boolean)
 * - defaultCollapsed: apakah card tertutup di awal (boolean)
 * - children: isi card
 * - footer: isi bagian bawah card (opsional)
 */
export default function Card({
  title,
  color = "primary",
  collapsible = false,
  defaultCollapsed = false,
  children,
  footer,
}) {
  useEffect(() => {
    // Load AdminLTE script agar event collapse berfungsi
    import("/adminlte/js/adminlte.min.js").catch((err) =>
      console.warn("⚠️ AdminLTE JS not loaded:", err)
    );
  }, []);

  const cardClass = `card card-outline card-${color} ${
    defaultCollapsed ? "collapsed-card" : ""
  }`;

  return (
    <div className={cardClass}>
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {collapsible && (
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-lte-toggle="card-collapse"
              >
                <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                <i data-lte-icon="collapse" className="bi bi-dash-lg"></i>
              </button>
            </div>
          )}
        </div>
      )}

      <div className="card-body">{children}</div>

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
