// Inventory list.
const INVENTORY = [
  { sku: 'PCT-104-FRG', name: 'Heritage Canvas Tote · Forest',    stock: 4,    status: 'warn',    statusLabel: 'Low stock', price: '$84.00' },
  { sku: 'PCT-104-CRM', name: 'Heritage Canvas Tote · Cream',     stock: 47,   status: 'success', statusLabel: 'In stock',  price: '$84.00' },
  { sku: 'PFN-A5-RUL',  name: 'Field Notebook · Ruled, A5',       stock: 312,  status: 'success', statusLabel: 'In stock',  price: '$24.00' },
  { sku: 'PFN-A5-PLN',  name: 'Field Notebook · Plain, A5',       stock: 0,    status: 'danger',  statusLabel: 'Out',       price: '$24.00' },
  { sku: 'PBP-OLV',     name: 'Brass Pen · Olive',                stock: 28,   status: 'success', statusLabel: 'In stock',  price: '$116.00' },
  { sku: 'PCC-WAX',     name: 'Waxed Canvas Cardholder',          stock: 91,   status: 'success', statusLabel: 'In stock',  price: '$58.00' },
];

const InventoryScreen = () => {
  const cols = [
    { key: 'sku',  label: 'SKU', cellClass: 'id' },
    { key: 'name', label: 'Product', render: r => <span style={{ fontWeight: 500 }}>{r.name}</span> },
    { key: 'stock', label: 'Stock', cellClass: 'num', render: r => <span>{r.stock.toLocaleString()}</span> },
    { key: 'status', label: 'Status', render: r => <Badge tone={r.status}>{r.statusLabel}</Badge> },
    { key: 'price', label: 'Price', align: 'right', cellClass: 'num' },
  ];
  const toolbar = (
    <>
      <div className="dt-search">
        <Icon name="search" size={14} />
        <input placeholder="Search products, SKUs…" />
      </div>
      <span className="dt-filter"><Icon name="plus" size={12} />Status</span>
      <span className="dt-filter"><Icon name="plus" size={12} />Collection</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
        <Button icon="upload">Import CSV</Button>
        <Button variant="primary" icon="plus">Add product</Button>
      </div>
    </>
  );
  return <DataTable columns={cols} rows={INVENTORY} toolbar={toolbar} />;
};

Object.assign(window, { InventoryScreen });
