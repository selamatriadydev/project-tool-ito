import { useState } from "react";
import { Card, Badge, Collapse } from "react-bootstrap";
import '@/app/components/card/CardList.css';
export default function CardListInfo() {
  const [openId, setOpenId] = useState(null);
  const data = [
    {
      id: 1,
      title: "Quadratic Equations",
      subject: "Algebra - Core Competency 1",
      type: "document",
      date: "2025-10-20",
      subItems: [
        "Introduction to Quadratics",
        "Solving Quadratics"
      ],
    },
    {
      id: 2,
      title: "Trigonometric Functions",
      subject: "Geometry - Core Competency 2",
      type: "presentation",
      date: "2025-10-22",
      subItems: [
        "Basic Trig Ratios",
        "Graphs of Trig Functions"
      ],
    },
  ];

  const getBadgeColor = (type) => {
    switch (type) {
      case "document":
        return "#e0e7ff";
      case "presentation":
        return "#d1fae5";
      case "video":
        return "#f3e8ff";
      default:
        return "#e5e7eb";
    }
  };

  const toggleSubList = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container my-4">
      {data.map((item) => (
        <div key={item.id} className="mb-3">
          {/* Card Utama */}
          <Card
            className="border-0 shadow-sm resource-card p-3 rounded-4"
            onClick={() => toggleSubList(item.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              {/* Kiri */}
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-file-earmark-text fs-3 text-primary me-3"
                  style={{ flexShrink: 0 }}
                ></i>
                <div>
                  <h6 className="mb-1 fw-semibold">{item.title}</h6>
                  <small className="text-muted">{item.subject}</small>
                </div>
              </div>

              {/* Kanan */}
              <div className="d-flex align-items-center">
                <Badge
                  pill
                  className="text-capitalize me-3"
                  style={{
                    backgroundColor: getBadgeColor(item.type),
                    color: "#000",
                    fontWeight: "500",
                  }}
                >
                  {item.type}
                </Badge>
                <small className="text-muted me-3">{item.date}</small>
                <i className="bi bi-pencil-square text-secondary me-3" role="button"></i>
                <i className="bi bi-trash3 text-danger" role="button"></i>
                <i
                  className={`bi ms-2 ${
                    openId === item.id ? "bi-chevron-up" : "bi-chevron-down"
                  }`}
                ></i>
              </div>
            </div>
          </Card>

          {/* Sublist (Collapse) */}
          <Collapse in={openId === item.id}>
            <div className="bg-light rounded-bottom-4 px-5 py-3 border-top">
              {item.subItems.map((sub, idx) => (
                <div key={idx} className="d-flex align-items-center mb-2">
                  <i className="bi bi-dot fs-4 text-secondary me-2"></i>
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
