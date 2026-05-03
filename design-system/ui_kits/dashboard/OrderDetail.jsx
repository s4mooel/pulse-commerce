// Order detail.
const OrderDetail = ({ order, onBack }) => (
  <>
    <div className="dash-page-head">
      <button className="btn ghost" onClick={onBack}><Icon name="arrow-left" size={14} />Back</button>
      <h1 style={{ marginLeft: 4 }}>{order.id}</h1>
      <Badge tone={order.status}>{order.statusLabel}</Badge>
      <div className="actions">
        <Button icon="printer">Print</Button>
        <Button icon="refresh-ccw">Refund</Button>
        <Button variant="primary" icon="truck">Mark fulfilled</Button>
      </div>
    </div>
    <div className="od-grid">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="od-card">
          <h3>Items</h3>
          <div className="od-product">
            <div className="img"><Icon name="image" size={18} /></div>
            <div className="info"><div className="name">Heritage Canvas Tote · Forest</div><div className="sku">SKU PCT-104-FRG · Qty 1</div></div>
            <div className="price">$84.00</div>
          </div>
          <div className="od-product">
            <div className="img"><Icon name="image" size={18} /></div>
            <div className="info"><div className="name">Field Notebook · Ruled, A5</div><div className="sku">SKU PFN-A5-RUL · Qty 2</div></div>
            <div className="price">$48.00</div>
          </div>
          <div className="od-product">
            <div className="img"><Icon name="image" size={18} /></div>
            <div className="info"><div className="name">Brass Pen · Olive</div><div className="sku">SKU PBP-OLV · Qty 1</div></div>
            <div className="price">$116.00</div>
          </div>
        </div>
        <div className="od-card">
          <h3>Timeline</h3>
          <div className="act">
            <div className="act-item"><div className="ico" style={{ background: 'var(--pulse-100)', color: 'var(--pulse-700)' }}><Icon name="check" size={14} /></div><div className="body"><div className="t">Payment captured · Stripe</div><div className="when">Today, 14:02:47 · $248.00</div></div></div>
            <div className="act-item"><div className="ico"><Icon name="shopping-bag" size={14} /></div><div className="body"><div className="t">Order placed by customer</div><div className="when">Today, 14:02:31</div></div></div>
            <div className="act-item"><div className="ico"><Icon name="mail" size={14} /></div><div className="body"><div className="t">Confirmation email sent</div><div className="when">Today, 14:02:32</div></div></div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="od-card">
          <h3>Customer</h3>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <div className="dash-avatar" style={{ width: 36, height: 36, fontSize: 13 }}>AC</div>
            <div><div style={{ fontWeight: 500 }}>{order.customer}</div><div style={{ fontSize: 12, color: 'var(--fg-subtle)' }}>ana@costa.studio</div></div>
          </div>
          <div className="od-line"><span className="k">Lifetime spend</span><span className="v num">$1,402.10</span></div>
          <div className="od-line"><span className="k">Orders</span><span className="v num">12</span></div>
        </div>
        <div className="od-card">
          <h3>Summary</h3>
          <div className="od-line"><span className="k">Subtotal</span><span className="v num">$232.00</span></div>
          <div className="od-line"><span className="k">Shipping</span><span className="v num">$8.00</span></div>
          <div className="od-line"><span className="k">Tax</span><span className="v num">$8.00</span></div>
          <div className="od-line" style={{ borderTop: '1px solid var(--border)', paddingTop: 12, marginTop: 4 }}><span className="k" style={{ fontWeight: 500, color: 'var(--fg)' }}>Total</span><span className="v num" style={{ fontSize: 16 }}>$248.00</span></div>
        </div>
        <div className="od-card">
          <h3>Shipping</h3>
          <div style={{ fontSize: 13, lineHeight: 1.6 }}>
            Ana Costa<br />
            142 Carmine St, Apt 4B<br />
            Brooklyn, NY 11211<br />
            United States
          </div>
        </div>
      </div>
    </div>
  </>
);

Object.assign(window, { OrderDetail });
