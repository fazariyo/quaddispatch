import siteConfig from '@/lib/siteConfig';

export default function Topbar() {
  const { email, phone, supportBadge } = siteConfig;

  return (
    <div className="topbar">
      <div className="wrap">
        <a className="tb-item" href={email.href}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          {email.display}
        </a>
        <div className="tb-right">
          <a className="tb-item" href={phone.href}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            {phone.display}
          </a>
          <span className="tb-badge">{supportBadge}</span>
        </div>
      </div>
    </div>
  );
}
