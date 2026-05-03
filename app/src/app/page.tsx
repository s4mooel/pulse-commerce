import Link from 'next/link';
import { ArrowRight, Boxes, LineChart, ShieldCheck, Zap } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="border-b border-ink-150">
        <div className="max-w-wide mx-auto px-8 pt-24 pb-32">
          <div className="eyebrow mb-8 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-pulse-600" />
            Pulse Commerce — v3.4
          </div>
          <h1 className="font-serif text-[clamp(48px,7vw,96px)] leading-[0.98] tracking-[-0.035em] font-normal max-w-[960px] mb-6">
            Commerce infrastructure for brands that <em className="italic text-pulse-700">move</em>.
          </h1>
          <p className="text-xl leading-snug text-ink-600 max-w-[640px] mb-10">
            One system of record for orders, inventory, customers, and storefronts —
            across every channel and region you sell in.
          </p>
          <div className="flex gap-3">
            <Link href="/dashboard" className="btn btn-primary">
              See the dashboard <ArrowRight size={16} />
            </Link>
            <a href="#features" className="btn btn-secondary">Read the docs</a>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="border-b border-ink-150 bg-ink-50">
        <div className="max-w-wide mx-auto px-8 py-12 flex flex-wrap items-center justify-between gap-8">
          <p className="text-sm text-ink-500">Trusted by retailers doing $50M+ a year</p>
          <div className="flex flex-wrap gap-12 items-center text-ink-400 font-display font-semibold text-xl tracking-tight">
            <span>Northland</span>
            <span>Mariner&amp;Co</span>
            <span>Field Goods</span>
            <span>Atlas Outfit</span>
            <span>Heron</span>
            <span>Quill</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-ink-150">
        <div className="max-w-wide mx-auto px-8 py-24">
          <div className="eyebrow mb-4">The platform</div>
          <h2 className="text-4xl font-semibold tracking-tight max-w-[720px] mb-16">
            Everything you need to run commerce, in one ledger-grade system.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature
              icon={<Boxes size={20} />}
              title="Unified inventory"
              body="One source of truth across stores, warehouses, and 3PLs. Real-time, no nightly reconciliation."
            />
            <Feature
              icon={<Zap size={20} />}
              title="Sub-200ms checkout"
              body="Edge-rendered checkout in 32 regions. Same latency for the first shopper as the millionth."
            />
            <Feature
              icon={<LineChart size={20} />}
              title="Operator dashboards"
              body="Real numbers, refreshed every 30 seconds. Filter, drill, export — without a data team."
            />
            <Feature
              icon={<ShieldCheck size={20} />}
              title="Ledger-grade orders"
              body="Every order is double-entry. Refunds, exchanges, partial fulfillments — always reconciled."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-900 text-white">
        <div className="max-w-wide mx-auto px-8 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-5xl tracking-tight font-normal mb-3">
              Ready when you are.
            </h2>
            <p className="text-ink-300 max-w-[480px]">
              30-minute technical scoping. Migration team included for retailers above $100M GMV.
            </p>
          </div>
          <Link href="/dashboard" className="btn btn-primary">
            Open the dashboard <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="border border-ink-150 rounded-lg p-6 bg-white">
      <div className="w-10 h-10 rounded-md bg-pulse-50 text-pulse-700 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 tracking-snug">{title}</h3>
      <p className="text-ink-600 leading-normal">{body}</p>
    </div>
  );
}
