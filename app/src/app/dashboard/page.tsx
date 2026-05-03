import DashboardShell from '@/components/DashboardShell';
import { StatusPill } from '@/components/StatusPill';
import { kpis, orders, currency, relativeDate } from '@/lib/data';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Link from 'next/link';

export default function OverviewPage() {
  const recent = orders.slice(0, 6);
  return (
    <DashboardShell
      title="Good morning, Samuel."
      eyebrow="Today · Mar 14, 2026"
      actions={
        <>
          <button className="btn btn-secondary">Export</button>
          <button className="btn btn-primary">New order</button>
        </>
      }
    >
      <KPIGrid />
      <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg overflow-hidden mt-8">
        <div className="px-5 py-4 border-b border-ink-150 dark:border-ink-800 flex items-center justify-between">
          <h2 className="text-base font-semibold text-ink-900 dark:text-white">Recent orders</h2>
          <Link href="/dashboard/orders" className="text-sm text-pulse-700 no-underline">View all →</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="bg-ink-50 dark:bg-ink-950 border-b border-ink-150 dark:border-ink-800">
                {['Order', 'Customer', 'Items', 'Total', 'Status', 'When'].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-ink-600 dark:text-ink-400 px-5 py-3 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recent.map((o) => (
                <tr key={o.id} className="border-b border-ink-100 dark:border-ink-800 last:border-0 hover:bg-ink-50 dark:hover:bg-ink-950">
                  <td className="px-5 py-4 text-sm"><span className="numeric font-medium">{o.id}</span></td>
                  <td className="px-5 py-4 text-sm">{o.customer.name}</td>
                  <td className="px-5 py-4 text-sm"><span className="numeric text-ink-600 dark:text-ink-400">{o.items}</span></td>
                  <td className="px-5 py-4 text-sm"><span className="numeric font-medium">{currency(o.total)}</span></td>
                  <td className="px-5 py-4 text-sm">
                    <StatusPill status={o.status} />
                  </td>
                  <td className="px-5 py-4 text-sm text-ink-600 dark:text-ink-400">{relativeDate(o.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}

function KPIGrid() {
  const items = [
    { label: 'Gross sales', value: currency(kpis.grossSales.value), delta: kpis.grossSales.delta, good: true },
    { label: 'Orders', value: kpis.orders.value.toLocaleString(), delta: kpis.orders.delta, good: true },
    { label: 'Avg order value', value: currency(kpis.avgOrder.value), delta: kpis.avgOrder.delta, good: true },
    { label: 'Refund rate', value: `${kpis.refundRate.value}%`, delta: kpis.refundRate.delta, good: true },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((k) => {
        const up = k.delta >= 0;
        return (
          <div key={k.label} className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-5">
            <div className="text-sm text-ink-600 dark:text-ink-400 mb-2">{k.label}</div>
            <div className="numeric text-3xl font-semibold tracking-tight mb-1 text-ink-900 dark:text-white">{k.value}</div>
            <div className="flex items-center gap-1 text-xs text-pulse-700">
              {up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
              <span className="numeric">{up ? '+' : ''}{k.delta}%</span>
              <span className="text-ink-500 ml-1">vs last week</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}



