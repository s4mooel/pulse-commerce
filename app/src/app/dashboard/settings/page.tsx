'use client';

import { useState } from 'react';
import DashboardShell from '@/components/DashboardShell';
import { Save, Trash2, Plus, Shield } from 'lucide-react';
import { usePathname } from 'next/navigation';
import en from '@/dictionaries/en.json';
import es from '@/dictionaries/es.json';

const TABS = ['General', 'Notifications', 'Billing', 'Team', 'Danger zone'];

const TEAM = [
  { name: 'Samuel Zarate', email: 's4mooel@gmail.com', role: 'Owner', status: 'Active' },
  { name: 'Maria Rojas', email: 'maria.rojas@gmail.com', role: 'Admin', status: 'Active' },
  { name: 'Jordan Park', email: 'jordan.park@gmail.com', role: 'Editor', status: 'Active' },
  { name: 'Aanya Singh', email: 'aanya.singh@gmail.com', role: 'Viewer', status: 'Invited' },
];

export default function SettingsPage() {
  const pathname = usePathname();
  const lang = (pathname.split('/')[1] as 'en' | 'es') || 'es';
  const dict = lang === 'en' ? en : es;

  const [tab, setTab] = useState('General');
  const [storeName, setStoreName] = useState('Northland Outfitters');
  const [storeUrl, setStoreUrl] = useState('northland.pulsecommerce.io');
  const [timezone, setTimezone] = useState('America/New_York');
  const [currency, setCurrency] = useState('USD');
  const [orderEmail, setOrderEmail] = useState(true);
  const [lowStock, setLowStock] = useState(true);
  const [dailyReport, setDailyReport] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <DashboardShell title={dict.dashboard.settingsTitle} eyebrow={lang === 'es' ? 'Configuración de la tienda' : 'Store configuration'}>
      {/* Tabs */}
      <div className="flex flex-wrap gap-1 mb-8 border-b border-ink-150 dark:border-ink-800 pb-px">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm rounded-t-md transition-colors ${
              tab === t
                ? 'bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 border-b-white dark:border-b-ink-900 text-ink-900 dark:text-white font-medium -mb-px'
                : 'text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* General */}
      {tab === 'General' && (
        <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6 max-w-2xl">
          <h2 className="text-lg font-semibold text-ink-900 dark:text-white mb-6">Store details</h2>
          <div className="space-y-5">
            <Field label="Store name" value={storeName} onChange={setStoreName} />
            <Field label="Store URL" value={storeUrl} onChange={setStoreUrl} />
            <div className="grid grid-cols-2 gap-4">
              <SelectField label="Timezone" value={timezone} onChange={setTimezone}
                options={['America/New_York','America/Chicago','America/Denver','America/Los_Angeles','Europe/London','Europe/Berlin','Asia/Tokyo']}
              />
              <SelectField label="Currency" value={currency} onChange={setCurrency}
                options={['USD','EUR','GBP','CAD','AUD','JPY']}
              />
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <button onClick={handleSave} className="btn btn-primary"><Save size={14} /> Save changes</button>
            {saved && <span className="text-sm text-pulse-600 animate-fade-in">✓ Saved successfully</span>}
          </div>
        </div>
      )}

      {/* Notifications */}
      {tab === 'Notifications' && (
        <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6 max-w-2xl">
          <h2 className="text-lg font-semibold text-ink-900 dark:text-white mb-6">Email notifications</h2>
          <div className="space-y-1">
            <Toggle label="Order placed" desc="Get notified when a new order is placed" checked={orderEmail} onChange={setOrderEmail} />
            <Toggle label="Low stock alert" desc="Alert when a product drops below 10 units" checked={lowStock} onChange={setLowStock} />
            <Toggle label="Daily report" desc="Receive a daily summary at 9:00 AM" checked={dailyReport} onChange={setDailyReport} />
            <Toggle label="Weekly digest" desc="Weekly performance summary every Monday" checked={weeklyDigest} onChange={setWeeklyDigest} />
          </div>
        </div>
      )}

      {/* Billing */}
      {tab === 'Billing' && (
        <div className="space-y-6 max-w-2xl">
          <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-ink-900 dark:text-white mb-4">Current plan</h2>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold text-ink-900 dark:text-white">Scale</div>
                <div className="text-sm text-ink-500 dark:text-ink-400 mt-1">$8,500/mo · Billed monthly</div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-pulse-50 dark:bg-pulse-900/30 text-pulse-800 dark:text-pulse-200 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-pulse-600" /> Active
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-ink-900 dark:text-white mb-4">Usage this period</h2>
            <div className="space-y-4">
              <UsageBar label="API requests" used={6.2} total={10} unit="M" />
              <UsageBar label="Storefronts" used={3} total={99} unit="" />
              <UsageBar label="Team members" used={4} total={25} unit="" />
            </div>
          </div>
          <button className="btn btn-secondary"><Shield size={14} /> Upgrade to Enterprise</button>
        </div>
      )}

      {/* Team */}
      {tab === 'Team' && (
        <div className="max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-ink-900 dark:text-white">Team members</h2>
            <button className="btn btn-primary"><Plus size={14} /> Invite member</button>
          </div>
          <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-ink-50 dark:bg-ink-950 border-b border-ink-150 dark:border-ink-800">
                  {['Member', 'Role', 'Status', ''].map((h) => (
                    <th key={h} className="text-left text-xs font-medium text-ink-600 dark:text-ink-400 px-5 py-3 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TEAM.map((m) => (
                  <tr key={m.email} className="border-b border-ink-100 dark:border-ink-800 last:border-0">
                    <td className="px-5 py-4 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 text-xs flex items-center justify-center font-medium">
                          {m.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium text-ink-900 dark:text-white">{m.name}</div>
                          <div className="text-xs text-ink-500">{m.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-ink-600 dark:text-ink-300">{m.role}</td>
                    <td className="px-5 py-4 text-sm">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs ${
                        m.status === 'Active'
                          ? 'bg-pulse-50 dark:bg-pulse-900/30 text-pulse-800 dark:text-pulse-200'
                          : 'bg-warning-bg text-warning'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${m.status === 'Active' ? 'bg-pulse-600' : 'bg-warning'}`} />
                        {m.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-right">
                      <button className="text-ink-500 hover:text-ink-900 dark:hover:text-white text-xs transition-colors">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Danger Zone */}
      {tab === 'Danger zone' && (
        <div className="bg-white dark:bg-ink-900 border border-danger dark:border-danger rounded-lg p-6 max-w-2xl">
          <h2 className="text-lg font-semibold text-danger mb-2">Delete store</h2>
          <p className="text-sm text-ink-600 dark:text-ink-400 mb-6">
            Once you delete your store, all data will be permanently removed. This action cannot be undone.
          </p>
          <button className="btn bg-danger text-white hover:opacity-90"><Trash2 size={14} /> Delete this store</button>
        </div>
      )}
    </DashboardShell>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-1.5">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-10 px-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-white focus:outline-none focus:border-pulse-600 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.15)] transition-shadow"
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-10 px-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-white focus:outline-none focus:border-pulse-600"
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Toggle({ label, desc, checked, onChange }: { label: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-ink-100 dark:border-ink-800 last:border-0">
      <div>
        <div className="text-sm font-medium text-ink-900 dark:text-white">{label}</div>
        <div className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">{desc}</div>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors ${checked ? 'bg-pulse-600' : 'bg-ink-200 dark:bg-ink-700'}`}
      >
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-5' : ''}`} />
      </button>
    </div>
  );
}

function UsageBar({ label, used, total, unit }: { label: string; used: number; total: number; unit: string }) {
  const pct = Math.min((used / total) * 100, 100);
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-ink-700 dark:text-ink-300">{label}</span>
        <span className="numeric text-ink-500 dark:text-ink-400">{used}{unit} / {total}{unit}</span>
      </div>
      <div className="h-2 bg-ink-100 dark:bg-ink-800 rounded-full overflow-hidden">
        <div className="h-full bg-pulse-600 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
