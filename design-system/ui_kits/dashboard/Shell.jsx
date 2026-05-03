// App shell: sidebar + topbar + content area.
const NAV = [
  { group: 'Operate', items: [
    { id: 'home',      label: 'Home',      icon: 'layout-dashboard' },
    { id: 'orders',    label: 'Orders',    icon: 'shopping-bag', count: '142' },
    { id: 'inventory', label: 'Inventory', icon: 'package' },
    { id: 'customers', label: 'Customers', icon: 'users' },
  ]},
  { group: 'Grow', items: [
    { id: 'analytics', label: 'Analytics', icon: 'bar-chart-3' },
    { id: 'discounts', label: 'Discounts', icon: 'tag' },
    { id: 'channels',  label: 'Channels',  icon: 'radio-tower' },
  ]},
  { group: 'Configure', items: [
    { id: 'settings',  label: 'Settings',  icon: 'settings' },
    { id: 'developers',label: 'Developers',icon: 'code-2' },
  ]},
];

const Sidebar = ({ active, onNav }) => (
  <aside className="dash-sidebar">
    <div className="dash-sidebar-head">
      <img src="../../assets/logo.svg" height="26" alt="Pulse" />
    </div>
    <div className="dash-store-switcher">
      <div className="swatch">NL</div>
      <div className="meta">
        <span className="name">Northland Goods</span>
        <span className="sub">3 stores · USD</span>
      </div>
      <Icon name="chevrons-up-down" size={14} />
    </div>
    <nav className="dash-nav">
      {NAV.map(g => (
        <div key={g.group}>
          <div className="dash-nav-group">{g.group}</div>
          {g.items.map(it => (
            <div key={it.id}
                 className={`dash-nav-item ${active === it.id ? 'active' : ''}`}
                 onClick={() => onNav(it.id)}>
              <Icon name={it.icon} size={16} />
              <span>{it.label}</span>
              {it.count && <span className="count">{it.count}</span>}
            </div>
          ))}
        </div>
      ))}
    </nav>
    <div className="dash-sidebar-foot">
      <div className="dash-avatar">EM</div>
      <div className="who">
        <span className="name">Elena Marsh</span>
        <span className="role">Owner</span>
      </div>
      <button className="dash-icon-btn"><Icon name="more-horizontal" size={16} /></button>
    </div>
  </aside>
);

const Topbar = ({ title, breadcrumb }) => (
  <header className="dash-topbar">
    {breadcrumb ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
        <span style={{ color: 'var(--fg-subtle)' }}>{breadcrumb}</span>
        <Icon name="chevron-right" size={12} />
        <span style={{ fontWeight: 600 }}>{title}</span>
      </div>
    ) : (
      <span className="dash-page-title">{title}</span>
    )}
    <div className="dash-topbar-search">
      <Icon name="search" size={14} />
      <span>Search orders, products, customers…</span>
      <kbd>⌘K</kbd>
    </div>
    <button className="dash-icon-btn"><Icon name="bell" size={16} /></button>
    <button className="dash-icon-btn"><Icon name="circle-help" size={16} /></button>
  </header>
);

const Shell = ({ active, onNav, title, breadcrumb, actions, children }) => (
  <div className="dash-shell">
    <Sidebar active={active} onNav={onNav} />
    <main className="dash-main">
      <Topbar title={title} breadcrumb={breadcrumb} />
      <div className="dash-content">
        {(title && !breadcrumb) || actions ? (
          <div className="dash-page-head">
            {!breadcrumb && <h1>{title}</h1>}
            {actions && <div className="actions">{actions}</div>}
          </div>
        ) : null}
        {children}
      </div>
    </main>
  </div>
);

Object.assign(window, { Shell });
