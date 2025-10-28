'use client';

import { Button, Modal } from 'react-bootstrap';
import HoverPrefetchLink from '@/app/components/ui/hover-prefetch-link';
import LinkLoadingIndicator from '@/app/components/ui/link-loading-indicator';
import { useState } from 'react';

export default function LinkActionComponent({
  href,
  children,
  action = 'link',
  onConfirmDelete,
  onSubmit,
  className = '',
  ...props
}) {
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // 🎨 Tentukan warna tombol berdasarkan action
  let variant = 'secondary';
  switch (action) {
    case 'detail': variant = 'info'; break;
    case 'update': variant = 'warning'; break;
    case 'delete': variant = 'danger'; break;
    case 'create': variant = 'success'; break;
    case 'save': variant = 'primary'; break;
    case 'back-primary': variant = 'primary'; break;
    case 'back':
    case 'kembali': variant = 'secondary'; break;
    default: variant = 'secondary';
  }

  // 💾 Action = save → tombol submit
  if (action === 'save') {
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!onSubmit) return;
      setSubmitting(true);
      try {
        await onSubmit();
      } finally {
        setSubmitting(false);
      }
    };

    return (
      <Button
        size="sm"
        variant={variant}
        className={`d-inline-flex align-items-center ${className}`}
        onClick={handleSubmit}
        disabled={submitting}
      >
        {submitting ? 'Menyimpan...' : children}
      </Button>
    );
  }

  // ❌ Action = delete → tampilkan modal konfirmasi
  if (action === 'delete') {
    return (
      <>
        <Button
          size="sm"
          variant={variant}
          className={className}
          onClick={() => setShowModal(true)}
        >
          {children}
        </Button>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Konfirmasi Hapus</Modal.Title>
          </Modal.Header>
          <Modal.Body>Apakah Anda yakin ingin menghapus data ini?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Batal
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setShowModal(false);
                if (onConfirmDelete) onConfirmDelete();
              }}
            >
              Hapus
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  // 🔗 Default: gunakan Link
  return (
    <div className="d-inline-flex align-items-center">
      <HoverPrefetchLink href={href} {...props}>
        <span className={`btn btn-sm btn-${variant} ${className}`}>
          {children}
        </span>
      </HoverPrefetchLink>
      <LinkLoadingIndicator />
    </div>
  );
}
