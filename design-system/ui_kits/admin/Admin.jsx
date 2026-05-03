const TENANTS = [
  { id: 'tnt_8Hf2',  name: 'Northland Goods',     plan: 'Scale',      mrr: '$4,900', gmv: '$48,290', status: 'success', statusLabel: 'Active' },
  { id: 'tnt_8Hf1',  name: 'Hayes & Co',          plan: 'Enterprise', mrr: '$12,400', gmv: '$1.4M', status: 'success', statusLabel: 'Active' },
  { id: 'tnt_8Hf0',  name: 'Maren Studio',        plan: 'Growth',     mrr: '$1,490', gmv: '$84,210', status: 'warn',    statusLabel: 'Past due' },
  { id: 'tnt_8Hef',  name: 'FIELD',               plan: 'Scale',      mrr: '$4,900', gmv: '$220K',  status: 'success', statusLabel: 'Active' },
  { id: 'tnt_8Hee',  name: 'BRASSWORKS',          plan: 'Enterprise', mrr: '$18,200', gmv: '$3.2M', status: 'success', statusLabel: 'Active' },
  { id: 'tnt_8Hed',  name: 'Studio Olive',        plan: 'Growth',     mrr: '$1,490', gmv: '$42,100', status: 'danger',  statusLabel: 'Suspended' },
];

const AdmShell = ({ children }) => (
  <div className="adm">
    <aside className="adm-side">
      <div className="adm-side-head">
        <span className="dot"></span>
        <div><div className="label">Pulse</div><div className="name">Internal</div></div>
      </div>
      <nav className="adm-nav">
        <div className="adm-nav-item active"><i data-lucide="building-2" style={{width:16,height:16}}></i>Tenants</div>
        <div className="adm-nav-item"><i data-lucide="life-buoy" style={{width:16,height:16}}></i>Support queue</div>
        <div className="adm-nav-item"><i data-lucide="credit-card" style={{width:16,height:16}}></i>Billing</div>
        <div className="adm-nav-item"><i data-lucide="alert-triangle" style={{width:16,height:16}}></i>Incidents</div>
        <div className="adm-nav-item"><i data-lucide="flag" style={{width:16,height:16}}></i>Feature flags</div>
        <div className="adm-nav-item"><i data-lucide="users" style={{width:16,height:16}}></i>Staff</div>
      </nav>
    </aside>
    <main className="adm-main">
      <header className="adm-top">
        <span className="crumb">Internal · <b>Tenants</b></span>
        <div style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--fg-subtle)' }}>Logged in as <b style={{ color: 'var(--fg)' }}>jules@pulsecommerce.com</b> · Read/write</div>
      </header>
      <div className="adm-content">{children}</div>
    </main>
  </div>
);

const AdminApp = () => (
  <AdmShell>
    <div className="dash-page-head" style={{ marginBottom: 16 }}>
      <h1 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>Tenants</h1>
      <div className="actions" style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
        <button className="btn secondary"><i data-lucide="download" style={{width:14,height:14}}></i>Export</button>
        <button className="btn primary"><i data-lucide="plus" style={{width:14,height:14}}></i>Provision tenant</button>
      </div>
    </div>
    <div className="adm-stats">
      <div className="adm-stat"><div className="l">Active tenants</div><div className="v">1,402</div></div>
      <div className="adm-stat"><div className="l">MRR</div><div className="v">$8.42M</div></div>
      <div className="adm-stat"><div className="l">Past due</div><div className="v" style={{ color: '#B45309' }}>14</div></div>
      <div className="adm-stat"><div className="l">Open tickets</div><div className="v">87</div></div>
    </div>
    <div className="dt-card">
      <div className="dt-toolbar">
        <div className="dt-search"><i data-lucide="search" style={{width:14,height:14}}></i><input placeholder="Search tenants by name, ID, plan…" /></div>
        <span className="dt-filter"><i data-lucide="plus" style={{width:12,height:12}}></i>Plan</span>
        <span className="dt-filter"><i data-lucide="plus" style={{width:12,height:12}}></i>Status</span>
        <span className="dt-filter"><i data-lucide="plus" style={{width:12,height:12}}></i>Region</span>
      </div>
      <table className="dt">
        <thead><tr><th>Tenant</th><th>ID</th><th>Plan</th><th>MRR</th><th>30d GMV</th><th>Status</th><th></th></tr></thead>
        <tbody>
          {TENANTS.map(t => (
            <tr key={t.id}>
              <td style={{ fontWeight: 500 }}>{t.name}</td>
              <td className="id">{t.id}</td>
              <td><span className="b neutral">{t.plan}</span></td>
              <td className="num">{t.mrr}</td>
              <td className="num">{t.gmv}</td>
              <td><span className={`b ${t.status}`}><span className="dot"></span>{t.statusLabel}</span></td>
              <td style={{ textAlign: 'right' }}><i data-lucide="more-horizontal" style={{width:16,height:16,color:'var(--fg-muted)'}}></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </AdmShell>
);

Object.assign(window, { AdminApp });
