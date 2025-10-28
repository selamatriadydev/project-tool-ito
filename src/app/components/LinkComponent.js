'use client';

import HoverPrefetchLink from '@/app/components/ui/hover-prefetch-link';
import LinkLoadingIndicator from '@/app/components/ui/link-loading-indicator';

export default function LinkComponent({ href, children, className = '' }) {
  return (
    <div className={`d-inline-flex align-items-center`}>
      <HoverPrefetchLink href={href} className={className}>
        {children}
      </HoverPrefetchLink>
      <LinkLoadingIndicator />
    </div>
  );
}
