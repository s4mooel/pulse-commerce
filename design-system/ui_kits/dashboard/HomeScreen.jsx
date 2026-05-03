// Home / overview screen.
const HomeScreen = () => (
  <>
    <div className="kpi-grid">
      <KPICard label="Revenue today" value="$48,290.10" delta="+ 12.4% vs yesterday" />
      <KPICard label="Orders" value="142" delta="+ 18 vs yesterday" />
      <KPICard label="Conversion" value="3.4%" delta="+ 0.2pp" />
      <KPICard label="Refund rate" value="2.1%" delta="+ 0.3pp" down />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
      <div className="od-card">
        <h3>Revenue · last 7 days</h3>
        <svg viewBox="0 0 600 180" style={{ width: '100%', height: 180 }}>
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 130 L 100 110 L 200 120 L 300 80 L 400 95 L 500 60 L 600 40 L 600 180 L 0 180 Z" fill="url(#g1)" />
          <path d="M 0 130 L 100 110 L 200 120 L 300 80 L 400 95 L 500 60 L 600 40" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {[0, 100, 200, 300, 400, 500, 600].map((x, i) => (
            <g key={i}>
              <line x1={x} x2={x} y1="160" y2="165" stroke="#DCE2DF" />
              <text x={x} y="178" fontSize="10" fontFamily="Geist Mono" fill="#6B7570" textAnchor="middle">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="od-card">
        <h3>Recent activity</h3>
        <div className="act">
          <div className="act-item">
            <div className="ico"><Icon name="shopping-bag" size={14} /></div>
            <div className="body"><div className="t"><b>Order #10428</b> from Ana Costa</div><div className="when">2 min ago · $248.00</div></div>
          </div>
          <div className="act-item">
            <div className="ico"><Icon name="refresh-ccw" size={14} /></div>
            <div className="body"><div className="t">Refund issued on <b>#10401</b></div><div className="when">14 min ago · -$48.20</div></div>
          </div>
          <div className="act-item">
            <div className="ico"><Icon name="package" size={14} /></div>
            <div className="body"><div className="t"><b>Heritage Tote</b> low stock (4 left)</div><div className="when">1 hr ago</div></div>
          </div>
          <div className="act-item">
            <div className="ico"><Icon name="user-plus" size={14} /></div>
            <div className="body"><div className="t">New customer <b>Marcus Wei</b></div><div className="when">2 hr ago</div></div>
          </div>
        </div>
      </div>
    </div>
  </>
);

Object.assign(window, { HomeScreen });
