'use client';

import DashboardShell from '@/components/DashboardShell';
import {
  RevenueLineChart,
  OrdersByChannelBar,
  RegionDoughnut,
  TopProductsBar,
  AnalyticsKPIs,
} from '@/components/AnalyticsCharts';
import { Download } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <DashboardShell
      title="Analytics"
      eyebrow="Last 12 months"
      actions={
        <button className="btn btn-secondary"><Download size={14} /> Export report</button>
      }
    >
      <AnalyticsKPIs />

      <div className="mt-8 bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-ink-900 dark:text-white">Revenue over time</h2>
            <p className="text-sm text-ink-500 dark:text-ink-400 mt-1">Monthly revenue for the past 12 months</p>
          </div>
        </div>
        <div className="h-[320px]">
          <RevenueLineChart />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6">
          <h2 className="text-base font-semibold text-ink-900 dark:text-white mb-1">Orders by channel</h2>
          <p className="text-sm text-ink-500 dark:text-ink-400 mb-6">Distribution across sales channels</p>
          <div className="h-[260px]">
            <OrdersByChannelBar />
          </div>
        </div>

        <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6">
          <h2 className="text-base font-semibold text-ink-900 dark:text-white mb-1">Revenue by region</h2>
          <p className="text-sm text-ink-500 dark:text-ink-400 mb-6">Percentage distribution by geography</p>
          <div className="h-[260px]">
            <RegionDoughnut />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6">
        <h2 className="text-base font-semibold text-ink-900 dark:text-white mb-1">Top products by revenue</h2>
        <p className="text-sm text-ink-500 dark:text-ink-400 mb-6">Best performing products this period</p>
        <div className="h-[280px]">
          <TopProductsBar />
        </div>
      </div>
    </DashboardShell>
  );
}
