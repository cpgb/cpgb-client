import * as React from 'react';

export default function CropIcon(
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" {...props}>
      <path d="M7 17V1H5v4H1v2h4v10a2 2 0 0 0 2 2h10v4h2v-4h4v-2m-6-2h2V7a2 2 0 0 0-2-2H9v2h8v8z" />
    </svg>
  );
}
