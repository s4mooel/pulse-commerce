import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Globe, Shield, Zap, Heart } from 'lucide-react';

const TIMELINE = [
  { year: '2021', title: 'Founded', desc: 'Two ex-Shopify engineers start building in a Brooklyn apartment.' },
  { year: '2022', title: 'First customer', desc: 'Northland Outfitters goes live. $12M GMV in the first quarter.' },
  { year: '2023', title: 'Series A', desc: '$24M raised. Berlin office opens. Edge checkout launches in 18 regions.' },
  { year: '2024', title: '20 retailers live', desc: 'Mariner & Co, Field Goods, and Atlas Outfit join the platform.' },
  { year: '2025', title: 'Series B', desc: '$68M raised. 32 edge regions. Ledger-grade orders reach 99.99% uptime.' },
  { year: '2026', title: 'Today', desc: '$2.4B GMV processed. 41 retailers. Building the future of commerce.' },
];

const VALUES = [
  { icon: <Zap size={22} />, title: 'Speed is a feature', desc: 'Every millisecond matters. We obsess over latency because your shoppers do.' },
  { icon: <Shield size={22} />, title: 'Trust by default', desc: 'SOC 2 Type II, PCI Level 1, GDPR compliant. Security is not optional.' },
  { icon: <Globe size={22} />, title: 'Global from day one', desc: 'Multi-currency, multi-region, multi-language. Built for the world, not just one market.' },
  { icon: <Heart size={22} />, title: 'Operators first', desc: 'We build for the people running the business, not just the developers integrating it.' },
];

const TEAM = [
  { name: 'Elena Voss', role: 'CEO & Co-founder', initials: 'EV', hue: 156 },
  { name: 'Marcus Chen', role: 'CTO & Co-founder', initials: 'MC', hue: 220 },
  { name: 'Priya Sharma', role: 'VP Engineering', initials: 'PS', hue: 280 },
  { name: 'Daniel Ortiz', role: 'VP Product', initials: 'DO', hue: 30 },
  { name: 'Sofia Lindqvist', role: 'Head of Design', initials: 'SL', hue: 340 },
  { name: 'James Okafor', role: 'Head of Sales', initials: 'JO', hue: 60 },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-ink-950">
      <Nav />

      {/* Hero */}
      <section className="border-b border-ink-150 dark:border-ink-800 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pulse-200/40 to-pulse-400/20 dark:from-pulse-600/10 dark:to-pulse-800/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-wide mx-auto px-8 pt-20 pb-16 relative">
          <div className="eyebrow mb-6 animate-fade-in-up">About Pulse</div>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight font-normal text-ink-900 dark:text-white mb-6 max-w-3xl animate-fade-in-up delay-100">
            We&apos;re building the operating system for <em className="italic text-pulse-700 dark:text-pulse-400">modern retail</em>.
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-xl animate-fade-in-up delay-200">
            Pulse Commerce was founded with a simple belief: retailers deserve infrastructure
            that&apos;s as ambitious as they are.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-ink-150 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/30">
        <div className="max-w-wide mx-auto px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '$2.4B', label: 'GMV processed' },
            { value: '41', label: 'Retailers' },
            { value: '85+', label: 'Team members' },
            { value: '2', label: 'Offices worldwide' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="numeric text-4xl font-semibold tracking-tight text-ink-900 dark:text-white mb-2">{s.value}</div>
              <div className="text-sm text-ink-500 dark:text-ink-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 py-24">
          <div className="eyebrow mb-4">Our journey</div>
          <h2 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white mb-16">From apartment to infrastructure.</h2>
          <div className="grid gap-0 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-ink-200 dark:bg-ink-700" />
            {TIMELINE.map((item, i) => (
              <div key={item.year} className="flex gap-6 pb-10 last:pb-0">
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold z-10 relative ${
                    i === TIMELINE.length - 1
                      ? 'bg-pulse-600 text-white'
                      : 'bg-white dark:bg-ink-900 border-2 border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-400'
                  }`}>
                    {item.year.slice(2)}
                  </div>
                </div>
                <div className="pt-2">
                  <div className="text-sm font-medium text-pulse-700 dark:text-pulse-400 mb-1">{item.year}</div>
                  <h3 className="text-lg font-semibold text-ink-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-ink-600 dark:text-ink-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-ink-150 dark:border-ink-800 bg-white dark:bg-ink-950">
        <div className="max-w-wide mx-auto px-8 py-24">
          <div className="eyebrow mb-4">Our values</div>
          <h2 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white mb-16">What drives us every day.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="border border-ink-150 dark:border-ink-800 rounded-lg p-6 bg-white dark:bg-ink-900 card-hover">
                <div className="w-10 h-10 rounded-md bg-pulse-50 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-400 flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink-900 dark:text-white mb-2 tracking-snug">{v.title}</h3>
                <p className="text-ink-600 dark:text-ink-300 leading-normal">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 py-24">
          <div className="eyebrow mb-4">Leadership</div>
          <h2 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white mb-16">The people behind Pulse.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TEAM.map((t) => (
              <div key={t.name} className="text-center group">
                <div
                  className="w-full aspect-square rounded-xl flex items-center justify-center mb-4 group-hover:scale-[1.03] transition-transform"
                  style={{ background: `oklch(0.85 0.06 ${t.hue})` }}
                >
                  <span className="font-display font-bold text-3xl text-ink-900/30">{t.initials}</span>
                </div>
                <div className="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</div>
                <div className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-900 dark:bg-ink-950 text-white">
        <div className="max-w-wide mx-auto px-8 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-5xl tracking-tight font-normal mb-3">Join the journey.</h2>
            <p className="text-ink-300 max-w-[480px]">We&apos;re hiring across engineering, design, and sales in Brooklyn and Berlin.</p>
          </div>
          <Link href="/contact" className="btn btn-primary no-underline">
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
