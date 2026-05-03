import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const TIERS = [
  {
    name: 'Growth',
    blurb: 'For brands doing $5–25M GMV',
    price: '$2,500',
    period: '/mo',
    features: [
      'Unlimited orders & products',
      '5 storefronts',
      '24-hour email support',
      'Standard checkout (sub-300ms)',
      'Stripe & PayPal',
    ],
  },
  {
    name: 'Scale',
    blurb: 'For brands doing $25–100M GMV',
    price: '$8,500',
    period: '/mo',
    features: [
      'Everything in Growth',
      'Unlimited storefronts & regions',
      '4-hour SLA, dedicated CSM',
      'Edge checkout (sub-200ms, 32 regions)',
      'Custom payment routing',
      'API quota: 10M req/mo',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    blurb: 'For brands above $100M GMV',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Scale',
      '15-min SLA, white-glove migration',
      'On-prem ledger replicas',
      'SOC 2 + HIPAA + PCI Level 1',
      'Custom MSA & DPA',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-ink-950">
      <Nav />
      <section className="border-b border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 pt-20 pb-12 text-center">
          <div className="eyebrow mb-6 animate-fade-in-up">Pricing</div>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight font-normal text-ink-900 dark:text-white mb-4 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Priced like infrastructure, <em className="italic text-pulse-700 dark:text-pulse-400">not</em> like a tax on growth.
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-xl mx-auto animate-fade-in-up delay-200">
            Flat platform fee plus low transaction costs. No revenue share, no GMV tax.
          </p>
        </div>
      </section>

      <section className="border-b border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-xl p-8 border card-hover animate-fade-in-up ${
                t.featured
                  ? 'bg-ink-900 dark:bg-ink-800 text-white border-ink-900 dark:border-ink-700 ring-2 ring-pulse-600/30'
                  : 'bg-white dark:bg-ink-900 border-ink-150 dark:border-ink-800 text-ink-900 dark:text-white'
              } delay-${(i + 2) * 100}`}
            >
              <h2 className="font-display text-2xl font-semibold tracking-tight">{t.name}</h2>
              <p className={`mt-2 text-sm ${t.featured ? 'text-ink-300' : 'text-ink-600 dark:text-ink-400'}`}>{t.blurb}</p>
              <div className="mt-8 mb-8 flex items-baseline gap-1">
                <span className="numeric text-5xl font-semibold tracking-tight">{t.price}</span>
                <span className={t.featured ? 'text-ink-400' : 'text-ink-500 dark:text-ink-400'}>{t.period}</span>
              </div>
              <button
                className={`btn w-full justify-center ${
                  t.featured ? 'bg-pulse-600 text-white hover:bg-pulse-500' : 'btn-secondary'
                }`}
              >
                {t.name === 'Enterprise' ? 'Contact sales' : 'Start free trial'}
              </button>
              <ul className="mt-8 space-y-3 list-none p-0">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={14} className={`mt-0.5 flex-shrink-0 ${t.featured ? 'text-pulse-400' : 'text-pulse-600'}`} />
                    <span className={t.featured ? 'text-ink-200' : 'text-ink-700 dark:text-ink-300'}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
