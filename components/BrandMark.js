/** Quad mark: four squares. Shared by the header and footer brand lockups. */
export default function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
      <rect x="2" y="2" width="16" height="16" rx="3.5" fill="#f4731f" />
      <rect x="22" y="2" width="16" height="16" rx="3.5" fill="#2a3440" />
      <rect x="2" y="22" width="16" height="16" rx="3.5" fill="#2a3440" />
      <rect x="22" y="22" width="16" height="16" rx="3.5" fill="none" stroke="#f4731f" strokeWidth="2.5" />
    </svg>
  );
}
