// Marketing nav.
const Nav = () => (
  <nav className="mk-nav">
    <div className="mk-container mk-nav-inner">
      <img src="../../assets/logo.svg" height="28" alt="Pulse" />
      <div className="mk-nav-links">
        <a href="#">Platform</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
        <a href="#">Customers</a>
        <a href="#">Docs</a>
      </div>
      <div className="mk-nav-spacer"></div>
      <a className="mk-btn ghost" href="#">Sign in</a>
      <a className="mk-btn primary" href="#">Talk to sales</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="mk-hero">
    <div className="mk-container mk-hero-inner">
      <span className="mk-eyebrow"><span className="tag">New</span>Pulse 4.2 — multi-region inventory</span>
      <h1>Commerce infrastructure for brands that <em>move</em>.</h1>
      <p className="sub">One platform for orders, inventory, customers, and storefronts — across every region you sell in. Built for retailers doing $50M+ a year.</p>
      <div className="mk-hero-cta">
        <a className="mk-btn accent lg" href="#">Talk to sales</a>
        <a className="mk-btn ghost lg" href="#"><i data-lucide="play" style={{width:14,height:14}}></i>Watch demo · 2 min</a>
      </div>
    </div>
  </section>
);

const LogoCloud = () => (
  <section className="mk-logos">
    <div className="mk-container">
      <div className="mk-logos-label">Powering 1,400+ enterprise brands</div>
      <div className="mk-logos-row">
        <span>Northland</span><span>Hayes &amp; Co</span><span>Maren</span><span>FIELD</span><span>Studio Olive</span><span>BRASSWORKS</span>
      </div>
    </div>
  </section>
);

const FeatureGrid = () => (
  <section className="mk-section">
    <div className="mk-container">
      <div className="mk-section-head">
        <div className="eyebrow">Platform</div>
        <h2>The whole operation, in one window.</h2>
        <p>No more reconciling data across six tools. Pulse is the system of record for orders, inventory, and customers — with the speed of a modern app.</p>
      </div>
      <div className="mk-features">
        {[
          { icon: 'shopping-bag', title: 'Orders, ledger-grade.', body: 'Every transaction logged, traceable, and reconciled in real time. Refund, edit, and re-fulfill without breaking history.' },
          { icon: 'package', title: 'Multi-region inventory.', body: 'Track stock across warehouses and 3PLs from one view. Automatic reorder points, transfers, and low-stock alerts.' },
          { icon: 'users', title: 'Customer 360.', body: 'Lifetime spend, channel attribution, support history. Built for the operator, not the marketer.' },
          { icon: 'bar-chart-3', title: 'Analytics that earn trust.', body: 'Cohort revenue, attribution, and forecasts. Numbers reconcile to your accounting tool, every time.' },
          { icon: 'radio-tower', title: 'Channels, unified.', body: 'Direct, wholesale, marketplaces, retail. One inventory, one customer record, one report.' },
          { icon: 'code-2', title: 'API-first.', body: 'Every action in the dashboard is in the API. Stable contracts, deep webhooks, OpenAPI spec.' },
        ].map((f) => (
          <div className="mk-feature" key={f.title}>
            <div className="icon"><i data-lucide={f.icon} style={{width:18,height:18,strokeWidth:1.75}}></i></div>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
            <span className="link">Learn more <i data-lucide="arrow-right" style={{width:12,height:12}}></i></span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="mk-stats-band">
    <div className="mk-container">
      <div className="mk-stats">
        <div className="mk-stat"><span className="num">$48B</span><span className="label">Processed in 2025</span></div>
        <div className="mk-stat"><span className="num">1,400+</span><span className="label">Enterprise brands</span></div>
        <div className="mk-stat"><span className="num">99.99%</span><span className="label">API uptime, last 12 mo</span></div>
        <div className="mk-stat"><span className="num">142ms</span><span className="label">Median checkout latency</span></div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="mk-section" style={{ background: 'var(--bg-subtle)' }}>
    <div className="mk-container">
      <div className="mk-section-head">
        <div className="eyebrow">Pricing</div>
        <h2>Built for operators. Priced like infrastructure.</h2>
        <p>Volume-based, transparent. No revenue share. No surprise overage on your busiest day.</p>
      </div>
      <div className="mk-pricing">
        <div className="mk-tier">
          <span className="name">Growth</span>
          <span className="price">$1,490<small>/mo</small></span>
          <p className="desc">For brands ramping past $5M/yr.</p>
          <ul>
            {['Up to $10M GMV/year','3 storefronts · 5 channels','Standard analytics','Email support · 24h'].map(t => <li key={t}><i data-lucide="check" style={{width:14,height:14,strokeWidth:2.2}}></i>{t}</li>)}
          </ul>
          <a className="mk-btn ghost" href="#">Start trial</a>
        </div>
        <div className="mk-tier featured">
          <span className="name">Scale</span>
          <span className="price">$4,900<small>/mo</small></span>
          <p className="desc">For mid-market &amp; enterprise.</p>
          <ul>
            {['Up to $100M GMV/year','Unlimited storefronts &amp; channels','Cohort &amp; attribution analytics','Dedicated CSM · 4h SLA','SOC 2 Type II · SSO/SAML'].map(t => <li key={t}><i data-lucide="check" style={{width:14,height:14,strokeWidth:2.2}}></i><span dangerouslySetInnerHTML={{__html:t}}/></li>)}
          </ul>
          <a className="mk-btn accent" href="#">Talk to sales</a>
        </div>
        <div className="mk-tier">
          <span className="name">Enterprise</span>
          <span className="price">Custom</span>
          <p className="desc">Global brands, custom contracts.</p>
          <ul>
            {['$100M+ GMV / multi-region','Custom integrations &amp; SLAs','24/7 priority support','Dedicated solutions team','Annual security review'].map(t => <li key={t}><i data-lucide="check" style={{width:14,height:14,strokeWidth:2.2}}></i><span dangerouslySetInnerHTML={{__html:t}}/></li>)}
          </ul>
          <a className="mk-btn ghost" href="#">Contact us</a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="mk-footer">
    <div className="mk-container">
      <div className="mk-footer-grid">
        <div>
          <img src="../../assets/logo.svg" height="28" alt="Pulse" />
          <p style={{ fontSize: 13, color: 'var(--fg-muted)', maxWidth: 280, marginTop: 14, lineHeight: 1.5 }}>Commerce infrastructure for brands that move. Built in New York &amp; Lisbon.</p>
        </div>
        <div><h4>Platform</h4><ul><li><a href="#">Orders</a></li><li><a href="#">Inventory</a></li><li><a href="#">Analytics</a></li><li><a href="#">API</a></li></ul></div>
        <div><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Customers</a></li><li><a href="#">Careers</a></li><li><a href="#">Press</a></li></ul></div>
        <div><h4>Resources</h4><ul><li><a href="#">Docs</a></li><li><a href="#">Changelog</a></li><li><a href="#">Status</a></li><li><a href="#">Security</a></li></ul></div>
        <div><h4>Legal</h4><ul><li><a href="#">Terms</a></li><li><a href="#">Privacy</a></li><li><a href="#">DPA</a></li><li><a href="#">SOC 2</a></li></ul></div>
      </div>
      <div className="mk-footer-bottom">
        <span>© 2026 Pulse Commerce, Inc.</span>
        <span>All systems operational</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Nav, Hero, LogoCloud, FeatureGrid, Stats, Pricing, Footer });
