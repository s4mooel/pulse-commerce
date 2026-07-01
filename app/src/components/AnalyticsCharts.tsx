'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Title, Tooltip, Legend, Filler
);

// ─── Shared Colors ───────────────────────────────
const PULSE = {
  50: '#ECFDF5', 100: '#D1FAE5', 200: '#A7F3D0', 300: '#6EE7B7',
  400: '#34D399', 500: '#10B981', 600: '#059669', 700: '#047857',
};
const INK = {
  100: '#F1F4F2', 200: '#DCE2DF', 300: '#C2CAC6', 400: '#98A29D',
  500: '#6B7570', 600: '#4A524E', 700: '#353B38', 800: '#232826',
  900: '#14181A', 950: '#0A0C0D',
};
const CHART_COLORS = ['#059669', '#34D399', '#047857', '#10B981', '#6EE7B7'];
const REGION_COLORS = ['#059669', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];

// ─── Mock analytics data ─────────────────────────
const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const REVENUE_DATA = [42000, 48000, 55000, 51000, 62000, 68000, 71000, 75000, 82000, 78000, 91000, 98000];
const ORDERS_DATA = [180, 210, 240, 220, 270, 290, 310, 330, 360, 340, 400, 430];
const CHANNEL_DATA = { Web: 520, POS: 180, Wholesale: 140, Marketplace: 90 };
const REGION_DATA = { 'US-East': 35, 'US-West': 25, EU: 20, UK: 12, CA: 8 };
const TOP_PRODUCTS = [
  { name: 'Cascade Field Jacket', revenue: 38600 },
  { name: 'Trail Runner — Slate', revenue: 29400 },
  { name: 'Field Watch — Black', revenue: 25600 },
  { name: 'Heavyweight Tee', revenue: 22100 },
  { name: 'Canvas Daypack 22L', revenue: 18900 },
];

function useIsDark() {
  if (typeof window === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
}

// ─── Revenue Line Chart ──────────────────────────
export function RevenueLineChart() {
  const dark = useIsDark();
  const gridColor = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = dark ? INK[400] : INK[600];

  return (
    <Line
      data={{
        labels: MONTHS,
        datasets: [
          {
            label: 'Ingresos',
            data: REVENUE_DATA,
            borderColor: PULSE[600],
            backgroundColor: dark
              ? 'rgba(5,150,105,0.08)'
              : 'rgba(5,150,105,0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: PULSE[600],
            pointBorderColor: dark ? INK[900] : '#fff',
            pointBorderWidth: 2,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: dark ? INK[800] : '#fff',
            titleColor: dark ? '#fff' : INK[900],
            bodyColor: dark ? INK[300] : INK[600],
            borderColor: dark ? INK[700] : INK[200],
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: (ctx) => `$${(ctx.parsed.y ?? 0).toLocaleString()}`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { size: 11 } },
          },
          y: {
            grid: { color: gridColor },
            ticks: {
              color: textColor,
              font: { size: 11 },
              callback: (val) => `$${Number(val) / 1000}k`,
            },
          },
        },
      }}
    />
  );
}

// ─── Orders by Channel Bar Chart ─────────────────
export function OrdersByChannelBar() {
  const dark = useIsDark();
  const gridColor = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = dark ? INK[400] : INK[600];

  return (
    <Bar
      data={{
        labels: Object.keys(CHANNEL_DATA),
        datasets: [
          {
            label: 'Órdenes',
            data: Object.values(CHANNEL_DATA),
            backgroundColor: [PULSE[600], PULSE[400], PULSE[700], PULSE[300]],
            borderRadius: 6,
            barThickness: 40,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: dark ? INK[800] : '#fff',
            titleColor: dark ? '#fff' : INK[900],
            bodyColor: dark ? INK[300] : INK[600],
            borderColor: dark ? INK[700] : INK[200],
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: textColor, font: { size: 11 } },
          },
          y: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { size: 11 } },
          },
        },
      }}
    />
  );
}

// ─── Region Doughnut Chart ───────────────────────
export function RegionDoughnut() {
  const dark = useIsDark();

  return (
    <Doughnut
      data={{
        labels: Object.keys(REGION_DATA),
        datasets: [
          {
            data: Object.values(REGION_DATA),
            backgroundColor: REGION_COLORS,
            borderColor: dark ? INK[900] : '#fff',
            borderWidth: 3,
            hoverOffset: 8,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: dark ? INK[300] : INK[700],
              font: { size: 12 },
              padding: 16,
              usePointStyle: true,
              pointStyleWidth: 8,
            },
          },
          tooltip: {
            backgroundColor: dark ? INK[800] : '#fff',
            titleColor: dark ? '#fff' : INK[900],
            bodyColor: dark ? INK[300] : INK[600],
            borderColor: dark ? INK[700] : INK[200],
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: (ctx) => `${ctx.label}: ${ctx.parsed}%`,
            },
          },
        },
      }}
    />
  );
}

// ─── Top Products Horizontal Bar ─────────────────
export function TopProductsBar() {
  const dark = useIsDark();
  const gridColor = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = dark ? INK[400] : INK[600];

  return (
    <Bar
      data={{
        labels: TOP_PRODUCTS.map((p) => p.name),
        datasets: [
          {
            label: 'Ingresos',
            data: TOP_PRODUCTS.map((p) => p.revenue),
            backgroundColor: CHART_COLORS,
            borderRadius: 6,
            barThickness: 24,
          },
        ],
      }}
      options={{
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: dark ? INK[800] : '#fff',
            titleColor: dark ? '#fff' : INK[900],
            bodyColor: dark ? INK[300] : INK[600],
            borderColor: dark ? INK[700] : INK[200],
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: (ctx) => `$${(ctx.parsed.x ?? 0).toLocaleString()}`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: {
              color: textColor,
              font: { size: 11 },
              callback: (val) => `$${Number(val) / 1000}k`,
            },
          },
          y: {
            grid: { display: false },
            ticks: { color: textColor, font: { size: 11 } },
          },
        },
      }}
    />
  );
}

// ─── Analytics KPIs ──────────────────────────────
export function AnalyticsKPIs() {
  const kpis = [
    { label: 'Ingresos Totales', value: '$821,000', delta: '+18.2%', up: true },
    { label: 'Órdenes Totales', value: '3,580', delta: '+12.5%', up: true },
    { label: 'Tasa de Conversión', value: '3.8%', delta: '+0.4%', up: true },
    { label: 'Sesión Promedio', value: '4m 32s', delta: '-0.2%', up: false },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((k) => (
        <div key={k.label} className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-5">
          <div className="text-sm text-ink-600 dark:text-ink-400 mb-2">{k.label}</div>
          <div className="numeric text-3xl font-semibold tracking-tight text-ink-900 dark:text-white mb-1">{k.value}</div>
          <div className={`text-xs ${k.up ? 'text-pulse-700 dark:text-pulse-400' : 'text-danger'}`}>
            <span className="numeric">{k.delta}</span>
            <span className="text-ink-500 ml-1">vs periodo anterior</span>
          </div>
        </div>
      ))}
    </div>
  );
}
