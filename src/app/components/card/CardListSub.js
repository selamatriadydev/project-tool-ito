import { useState } from "react";
import { Card, Badge, Collapse } from "react-bootstrap";
import '@/app/components/card/CardListSub.css';
export default function CardListSub() {
  const [openId, setOpenId] = useState(null);

  const data = [
    {
      id: 1,
      title: "Quadratic Equations",
      subject: "Algebra - Core Competency 1",
      type: "document",
      date: "2025-10-20",
      subItems: [
        {
          title: "Introduction to Quadratics",
          subject: "Algebra - Core Competency 1",
          type: "presentation",
          date: "2025-10-20",
        },
        {
          title: "Solving Quadratics",
          subject: "Algebra - Core Competency 1",
          type: "video",
          date: "2025-10-21",
        },
      ],
    },
    {
      id: 2,
      title: "Trigonometric Functions",
      subject: "Geometry - Core Competency 2",
      type: "presentation",
      date: "2025-10-22",
      subItems: [
        {
          title: "Basic Trig Ratios",
          subject: "Geometry - Core Competency 2",
          type: "document",
          date: "2025-10-23",
        },
        {
          title: "Graphs of Trig Functions",
          subject: "Geometry - Core Competency 2",
          type: "video",
          date: "2025-10-24",
        },
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
          {/* CARD UTAMA */}
          <Card
            className="border-0 shadow-sm resource-card p-3 rounded-4"
            onClick={() => toggleSubList(item.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              {/* Kiri */}
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-folder-fill fs-3 text-primary me-3"
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

          {/* SUB CARD (COLLAPSE) */}
          <Collapse in={openId === item.id}>
            <div className="mt-2 ps-5">
              {item.subItems.map((sub, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-sm sub-card p-3 rounded-4 mb-2"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    {/* Kiri */}
                    <div className="d-flex align-items-center">
                      <i
                        className="bi bi-file-earmark-text fs-4 text-secondary me-3"
                        style={{ flexShrink: 0 }}
                      ></i>
                      <div>
                        <h6 className="mb-1 fw-normal">{sub.title}</h6>
                        <small className="text-muted">{sub.subject}</small>
                      </div>
                    </div>

                    {/* Kanan */}
                    <div className="d-flex align-items-center">
                      <Badge
                        pill
                        className="text-capitalize me-3"
                        style={{
                          backgroundColor: getBadgeColor(sub.type),
                          color: "#000",
                          fontWeight: "500",
                        }}
                      >
                        {sub.type}
                      </Badge>
                      <small className="text-muted me-3">{sub.date}</small>
                      <i className="bi bi-pencil-square text-secondary me-3" role="button"></i>
                      <i className="bi bi-trash3 text-danger" role="button"></i>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
