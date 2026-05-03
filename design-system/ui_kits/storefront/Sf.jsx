const PRODUCTS = [
  { id: 1, name: 'Heritage Canvas Tote', price: '$84',  hue: '#4A524E', isNew: true },
  { id: 2, name: 'Field Notebook · A5',   price: '$24',  hue: '#6B7570' },
  { id: 3, name: 'Brass Pen · Olive',     price: '$116', hue: '#353B38' },
  { id: 4, name: 'Waxed Cardholder',      price: '$58',  hue: '#232826' },
  { id: 5, name: 'Linen Apron',           price: '$72',  hue: '#98A29D', isNew: true },
  { id: 6, name: 'Enamel Mug',            price: '$28',  hue: '#4A524E' },
  { id: 7, name: 'Workshop Tee',          price: '$48',  hue: '#14181A' },
  { id: 8, name: 'Olive Oil · 500ml',     price: '$32',  hue: '#6B7570' },
];

const Header = ({ cartCount, onCart }) => (
  <header className="sf-header">
    <span className="sf-brand">Northland</span>
    <nav className="sf-nav">
      <a href="#">Shop all</a><a href="#">New</a><a href="#">Workshop</a><a href="#">Journal</a>
    </nav>
    <div style={{ marginLeft: 'auto', display: 'flex', gap: 4, alignItems: 'center' }}>
      <button className="sf-icon"><i data-lucide="search" style={{width:18,height:18}}></i></button>
      <button className="sf-icon"><i data-lucide="user" style={{width:18,height:18}}></i></button>
      <button className="sf-icon" onClick={onCart}>
        <i data-lucide="shopping-bag" style={{width:18,height:18}}></i>
        {cartCount > 0 && <span className="sf-cart-count">{cartCount}</span>}
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section className="sf-hero">
    <div>
      <h1>Made to last a long time.</h1>
      <p>Small-batch goods for the workshop, the studio, and the kitchen. Built in New England, shipped worldwide.</p>
      <a className="sf-btn primary lg" href="#">Shop new arrivals</a>
    </div>
    <div className="sf-hero-img"></div>
  </section>
);

const ProductCard = ({ p, onAdd }) => (
  <div className="sf-card" onClick={() => onAdd(p)}>
    <div className="sf-card-img" style={{ background: p.hue }}>
      {p.isNew && <span className="badge-new">NEW</span>}
    </div>
    <span className="name">{p.name}</span>
    <span className="price">{p.price}</span>
  </div>
);

const Grid = ({ onAdd }) => (
  <section className="sf-grid-section">
    <div className="sf-section-head">
      <h2>Shop the collection</h2>
      <a href="#">View all 42 →</a>
    </div>
    <div className="sf-grid">
      {PRODUCTS.map(p => <ProductCard key={p.id} p={p} onAdd={onAdd} />)}
    </div>
  </section>
);

const CartDrawer = ({ items, onClose }) => {
  const subtotal = items.reduce((s, i) => s + parseFloat(i.price.replace('$','')) * i.qty, 0);
  return (
    <>
      <div className="sf-overlay" onClick={onClose}></div>
      <aside className="sf-drawer">
        <div className="sf-drawer-head">
          <h3>Your bag · {items.reduce((s,i)=>s+i.qty,0)} items</h3>
          <button className="sf-icon" onClick={onClose}><i data-lucide="x" style={{width:18,height:18}}></i></button>
        </div>
        <div className="sf-drawer-body">
          {items.length === 0 && <div style={{ textAlign: 'center', color: 'var(--fg-subtle)', padding: 40, fontSize: 14 }}>Your bag is empty.</div>}
          {items.map((it, i) => (
            <div className="sf-cart-item" key={i}>
              <div className="img" style={{ background: it.hue }}></div>
              <div className="info">
                <div className="n">{it.name}</div>
                <div className="v">Qty {it.qty}</div>
              </div>
              <span className="price">{it.price}</span>
            </div>
          ))}
        </div>
        <div className="sf-drawer-foot">
          <div className="row"><span>Subtotal</span><span className="num">${subtotal.toFixed(2)}</span></div>
          <div className="row" style={{ color: 'var(--fg-subtle)' }}><span>Shipping</span><span>Calculated at checkout</span></div>
          <div className="row total"><span>Total</span><span className="num">${subtotal.toFixed(2)}</span></div>
          <a className="sf-btn primary lg" style={{ display: 'block', textAlign: 'center', marginTop: 14 }} href="#">Checkout</a>
        </div>
      </aside>
    </>
  );
};

Object.assign(window, { Header, Hero, Grid, CartDrawer });
