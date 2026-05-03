// Orders list.
const ORDERS = [
  { id: '#10428', sku: 'ord_8Hf2xQ91', customer: 'Ana Costa',     items: 3, status: 'success', statusLabel: 'Paid',    total: '$248.00',   date: 'Today, 14:02' },
  { id: '#10427', sku: 'ord_8Hf1bN44', customer: 'Marcus Wei',    items: 7, status: 'warn',    statusLabel: 'Pending', total: '$1,902.40', date: 'Today, 13:48' },
  { id: '#10426', sku: 'ord_8Hf0aZ12', customer: 'Sara Ngo',      items: 1, status: 'success', statusLabel: 'Paid',    total: '$84.00',    date: 'Today, 12:31' },
  { id: '#10425', sku: 'ord_8Hef9LM2', customer: 'Theo Reilly',   items: 4, status: 'danger',  statusLabel: 'Failed',  total: '$612.50',   date: 'Today, 11:15' },
  { id: '#10424', sku: 'ord_8Hef0Tc8', customer: 'Priya Anand',   items: 2, status: 'success', statusLabel: 'Paid',    total: '$156.20',   date: 'Today, 09:44' },
  { id: '#10423', sku: 'ord_8Hee2Bx5', customer: 'Owen Drake',    items: 6, status: 'info',    statusLabel: 'Shipped', total: '$487.00',   date: 'Yesterday' },
  { id: '#10422', sku: 'ord_8Hee1Ux3', customer: 'Lia Park',      items: 2, status: 'success', statusLabel: 'Paid',    total: '$94.00',    date: 'Yesterday' },
  { id: '#10421', sku: 'ord_8Hed4Ws0', customer: 'James Blake',   items: 5, status: 'success', statusLabel: 'Paid',    total: '$320.10',   date: 'Yesterday' },
];

const OrdersScreen = ({ onOpen }) => {
  const cols = [
    { key: 'id',       label: 'Order',    render: r => <span style={{ fontWeight: 500 }}>{r.id}</span> },
    { key: 'sku',      label: 'ID',       cellClass: 'id' },
    { key: 'customer', label: 'Customer' },
    { key: 'items',    label: 'Items', cellClass: 'num' },
    { key: 'status',   label: 'Status',   render: r => <Badge tone={r.status}>{r.statusLabel}</Badge> },
    { key: 'date',     label: 'Date' },
    { key: 'total',    label: 'Total', align: 'right', cellClass: 'num', render: r => <span style={{ fontWeight: 500 }}>{r.total}</span> },
  ];
  const toolbar = (
    <>
      <div className="dt-search">
        <Icon name="search" size={14} />
        <input placeholder="Search orders…" />
      </div>
      <span className="dt-filter"><Icon name="plus" size={12} />Status</span>
      <span className="dt-filter"><Icon name="plus" size={12} />Date range</span>
      <span className="dt-filter"><Icon name="plus" size={12} />Channel</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
        <Button icon="download">Export</Button>
        <Button variant="primary" icon="plus">Create order</Button>
      </div>
    </>
  );
  return <DataTable columns={cols} rows={ORDERS} toolbar={toolbar} onRowClick={onOpen} />;
};

Object.assign(window, { OrdersScreen, ORDERS });
