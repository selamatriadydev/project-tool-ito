import { Button } from 'react-bootstrap';

export default function ButtonTableComponent({ action, onClick }) {
  // Tentukan ikon dan warna berdasarkan action
  let icon, label, variant;

  switch (action) {
    case 'add':
      icon = <i className="bi bi-plus fw-bold me-1"></i>;
      label = 'Add';
      variant = 'success';
      break;
    case 'edit':
      icon = <i className="bi bi-pencil-square"></i>;
      label = 'Edit';
      variant = 'warning';
      break;
    case 'delete':
      icon = <i className="bi bi-trash3"></i>;
      label = 'Delete';
      variant = 'danger';
      break;
    case 'detail':
      icon = <i className="bi bi-info-circle"></i>;
      label = 'Detail';
      variant = 'info';
      break;
    default:
      icon = null;
      label = 'Action';
      variant = 'secondary';
  }

  return (
    <Button
      size="sm"
      variant={variant}
      className="me-1 align-items-center justify-content-center"
      onClick={onClick}
    >
      {icon}
    </Button>
  );
}
