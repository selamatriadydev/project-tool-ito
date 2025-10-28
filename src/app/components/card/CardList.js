import { Card, Badge } from "react-bootstrap";
import '@/app/components/card/CardList.css';
export default function CardList() {
  const data = [
    {
      id: 1,
      title: "Quadratic Equations",
      subject: "Algebra - Core Competency 1",
      type: "document",
      date: "2025-10-20",
    },
    {
      id: 2,
      title: "Introduction to Quadratics",
      subject: "Algebra - Core Competency 1",
      type: "presentation",
      date: "2025-10-20",
    },
    {
      id: 3,
      title: "Solving Quadratics",
      subject: "Algebra - Core Competency 1",
      type: "video",
      date: "2025-10-21",
    },
  ];

  // Warna badge berdasarkan tipe
  const getBadgeVariant = (type) => {
    switch (type) {
      case "document":
        return "primary";
      case "presentation":
        return "success";
      case "video":
        return "info";
      default:
        return "secondary";
    }
  };

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

  return (
    <div className="container my-4">
      {data.map((item) => (
        <Card
          key={item.id}
          className="border-0 shadow-sm mb-3 resource-card p-3 rounded-4"
        >
          <div className="d-flex align-items-center justify-content-between">
            {/* Kiri: Icon + Text */}
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

            {/* Kanan: Type + Date + Action */}
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
              <i
                className="bi bi-pencil-square text-secondary me-3"
                role="button"
              ></i>
              <i
                className="bi bi-trash3 text-danger"
                role="button"
              ></i>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
