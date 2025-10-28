// components/Breadcrumb.js
import Link from "next/link";

export default function Breadcrumb({ title, items = [] }) {
  return (
    <div className="app-content-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="mb-0">{title}</h2>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-end">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className={`breadcrumb-item ${item.active ? "active" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.href && !item.active ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
