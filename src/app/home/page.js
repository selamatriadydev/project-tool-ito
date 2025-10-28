// home/index
// import DashboardLayout from '@/app/layouts/DashboardLayout';
import AdminLayout from '@/app/layouts/AdminLayout';

export default function Home() {
  return (
    <AdminLayout breadcrumbTitle="Dashboard v2"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Dashboard v2", active: true },
      ]}>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box">
            <span className="info-box-icon text-bg-primary shadow-sm">
              <i className="bi bi-gear-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">CPU Traffic</span>
              <span className="info-box-number">
                10
                <small>%</small>
              </span>
            </div>
          </div>
        </div>
        </div>
    </AdminLayout>
  );
}