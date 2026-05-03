// Mock data layer for the Pulse Commerce app.
// Replace with real API calls — types stay the same.

export type OrderStatus = 'paid' | 'refunded' | 'pending' | 'failed';
export type FulfillmentStage = 'picking' | 'packed' | 'in_transit' | 'fulfilled' | 'returned' | 'none';

export type Order = {
  id: string;
  customer: { name: string; email: string };
  items: number;
  total: number;
  status: OrderStatus;
  stage: FulfillmentStage;
  channel: 'web' | 'pos' | 'wholesale' | 'marketplace';
  createdAt: string;
  region: string;
};

export type Product = {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  reserved: number;
  status: 'active' | 'draft' | 'archived';
  imageHue: number; // 0-360, used to render a placeholder swatch
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  orders: number;
  ltv: number;
  lastOrder: string;
  region: string;
  tier: 'new' | 'returning' | 'loyal' | 'vip';
};

const NAMES = [
  'Maria Rojas', 'Jordan Park', 'Aanya Singh', 'Tom Becker', 'Lina Cho',
  'Diego Morales', 'Sara Khan', 'Ben Whitfield', 'Yuki Tanaka', 'Kara Holm',
  'Omar Idris', 'Helen Voss', 'Felix Arenas', 'Priya Menon', 'Noah Lindqvist',
];

export const orders: Order[] = Array.from({ length: 24 }, (_, i) => {
  const idx = 10248 - i;
  const name = NAMES[i % NAMES.length];
  const stages: FulfillmentStage[] = ['picking', 'packed', 'in_transit', 'fulfilled', 'fulfilled', 'fulfilled'];
  const statuses: OrderStatus[] = ['paid', 'paid', 'paid', 'paid', 'paid', 'refunded', 'pending'];
  return {
    id: `#NL-${idx}`,
    customer: { name, email: name.toLowerCase().replace(' ', '.') + '@gmail.com' },
    items: 1 + ((i * 7) % 6),
    total: Math.round((40 + (i * 23.7) % 480) * 100) / 100,
    status: statuses[i % statuses.length],
    stage: i % 7 === 5 ? 'none' : stages[i % stages.length],
    channel: (['web', 'web', 'web', 'pos', 'wholesale', 'marketplace'] as const)[i % 6],
    createdAt: new Date(Date.now() - i * 1000 * 60 * 47).toISOString(),
    region: (['US-East', 'US-West', 'EU', 'UK', 'CA'] as const)[i % 5],
  };
});

const PRODUCTS = [
  ['Cascade Field Jacket', 'Outerwear', 248, 156],
  ['Northland Wool Beanie', 'Accessories', 32, 412],
  ['Trail Runner — Slate', 'Footwear', 168, 88],
  ['Heavyweight Tee', 'Tops', 42, 1240],
  ['Canvas Daypack 22L', 'Bags', 96, 64],
  ['Merino Crew Sock 3-pk', 'Accessories', 28, 980],
  ['Storm Shell Pant', 'Bottoms', 184, 42],
  ['Field Watch — Black', 'Accessories', 320, 18],
  ['Insulated Bottle 32oz', 'Gear', 38, 320],
  ['Camp Mug Enamel', 'Gear', 18, 540],
  ['Ridgeline Flannel', 'Tops', 88, 110],
  ['Trail Runner — Bone', 'Footwear', 168, 6],
];

export const products: Product[] = PRODUCTS.map(([name, cat, price, stock], i) => ({
  id: `prod_${i + 1}`,
  sku: `NL-${String(i + 1).padStart(4, '0')}`,
  name: name as string,
  category: cat as string,
  price: price as number,
  stock: stock as number,
  reserved: Math.floor((stock as number) * 0.08),
  status: i === 9 ? 'draft' : 'active',
  imageHue: (i * 47) % 360,
}));

export const customers: Customer[] = NAMES.map((name, i) => {
  const orderCount = 1 + ((i * 11) % 32);
  return {
    id: `cust_${i + 1}`,
    name,
    email: name.toLowerCase().replace(' ', '.') + '@gmail.com',
    orders: orderCount,
    ltv: Math.round((orderCount * (180 + (i * 27) % 320)) * 100) / 100,
    lastOrder: new Date(Date.now() - i * 1000 * 60 * 60 * 24 * 3).toISOString(),
    region: (['US-East', 'US-West', 'EU', 'UK', 'CA'] as const)[i % 5],
    tier: orderCount >= 20 ? 'vip' : orderCount >= 10 ? 'loyal' : orderCount >= 3 ? 'returning' : 'new',
  };
});

export const kpis = {
  grossSales: { value: 284529.20, delta: 12.4 },
  orders: { value: 1284, delta: 8.1 },
  avgOrder: { value: 221.51, delta: 3.9 },
  refundRate: { value: 1.8, delta: -0.4 },
};

export const currency = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

export const relativeDate = (iso: string) => {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return `${Math.floor(days / 30)}mo ago`;
};
