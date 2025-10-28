// components/TopInfo.js
export default function TopInfo({ title, description, content }) {
  return (
    <div className="app-content-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Kiri */}
          <div className="col-sm-6">
            <h2 className="mb-0">{title || 'Dashboard'}</h2>
            {description && <p className="mb-0">{description}</p>}
          </div>

          {/* Kanan */}
          <div className="col-sm-6 d-flex justify-content-end align-items-center py-5">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
