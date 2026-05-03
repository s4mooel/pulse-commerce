import DashboardShell from '@/components/DashboardShell';
import { orders, currency, relativeDate } from '@/lib/data';
import { StatusPill } from '../page';
import { Filter, Download } from 'lucide-react';

export default function OrdersPage() {
  return (
    <DashboardShell
      title="Orders"
      eyebrow={`${orders.length} orders · last 30 days`}
      actions={
        <>
          <button className="btn btn-secondary"><Filter size={14} /> Filter</button>
          <button className="btn btn-secondary"><Download size={14} /> Export</button>
          <button className="btn btn-primary">New order</button>
        </>
      }
    >
      <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg overflow-hidden">
        <div className="flex flex-wrap gap-1 px-3 py-3 border-b border-ink-150 dark:border-ink-800">
          {['All', 'Paid', 'Pending', 'Refunded', 'Wholesale', 'POS'].map((t, i) => (
            <button
              key={t}
              className={`px-3 py-1.5 rounded-sm text-sm ${
                i === 0
                  ? 'bg-ink-100 dark:bg-ink-800 text-ink-900 dark:text-white font-medium'
                  : 'text-ink-600 dark:text-ink-400 hover:bg-ink-50 dark:hover:bg-ink-800'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-ink-50 dark:bg-ink-950 border-b border-ink-150 dark:border-ink-800">
                {['Order', 'Customer', 'Channel', 'Region', 'Items', 'Total', 'Status', 'When'].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-ink-600 dark:text-ink-400 px-5 py-3 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b border-ink-100 dark:border-ink-800 last:border-0 hover:bg-ink-50 dark:hover:bg-ink-950">
                  <td className="px-5 py-3.5 text-sm"><span className="numeric font-medium">{o.id}</span></td>
                  <td className="px-5 py-3.5 text-sm">
                    <div>{o.customer.name}</div>
                    <div className="text-xs text-ink-500">{o.customer.email}</div>
                  </td>
                  <td className="px-5 py-3.5 text-sm capitalize text-ink-600 dark:text-ink-400">{o.channel}</td>
                  <td className="px-5 py-3.5 text-sm text-ink-600 dark:text-ink-400">{o.region}</td>
                  <td className="px-5 py-3.5 text-sm"><span className="numeric">{o.items}</span></td>
                  <td className="px-5 py-3.5 text-sm"><span className="numeric font-medium">{currency(o.total)}</span></td>
                  <td className="px-5 py-3.5 text-sm"><StatusPill status={o.status} /></td>
                  <td className="px-5 py-3.5 text-sm text-ink-600 dark:text-ink-400">{relativeDate(o.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
