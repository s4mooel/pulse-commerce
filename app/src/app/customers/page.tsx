import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const STORIES = [
  {
    brand: 'Northland Outfitters',
    quote: 'We replaced six tools with Pulse and our ops team got their evenings back.',
    person: 'Maya Reeves, COO',
    metrics: [
      ['GMV growth', '+47%'],
      ['Refund processing', '−68%'],
      ['Tools eliminated', '6 → 1'],
    ],
    hue: 156,
  },
  {
    brand: 'Mariner & Co',
    quote: 'Sub-200ms checkout in Tokyo from a London admin. That is the product.',
    person: 'David Lim, Head of Eng',
    metrics: [
      ['Checkout p95', '184ms'],
      ['Regions live', '14'],
      ['Cart abandonment', '−22%'],
    ],
    hue: 220,
  },
  {
    brand: 'Field Goods',
    quote: 'The migration team finished in 9 weeks. We were braced for nine months.',
    person: 'Aanya Singh, CTO',
    metrics: [
      ['Migration', '9 weeks'],
      ['Downtime at cutover', '0min'],
      ['Engineering FTEs freed', '4'],
    ],
    hue: 30,
  },
];

export default function CustomersPage() {
  return (
    <>
      <Nav />
      <section className="border-b border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 pt-20 pb-12">
          <div className="eyebrow mb-6">Customers</div>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight font-normal text-ink-900 dark:text-white mb-6 max-w-3xl">
            The brands quietly running on <em className="italic text-pulse-700">Pulse</em>.
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-xl">
            $2.4B GMV processed last year across 41 retailers. A few of their stories below.
          </p>
        </div>
      </section>

      <section className="max-w-wide mx-auto px-8 py-20 grid gap-12">
        {STORIES.map((s, i) => (
          <article
            key={s.brand}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <div
              className="aspect-[4/3] rounded-2xl flex items-end p-8"
              style={{ background: `oklch(0.85 0.07 ${s.hue})` }}
            >
              <h2 className="font-display font-semibold text-3xl tracking-tight text-ink-900/70">{s.brand}</h2>
            </div>
            <div>
              <blockquote className="font-serif text-3xl tracking-tight text-ink-900 dark:text-white leading-snug mb-6">
                "{s.quote}"
              </blockquote>
              <div className="text-sm text-ink-600 dark:text-ink-400 mb-8">— {s.person}, {s.brand}</div>
              <div className="grid grid-cols-3 gap-4 border-t border-ink-150 dark:border-ink-800 pt-6">
                {s.metrics.map(([label, value]) => (
                  <div key={label}>
                    <div className="numeric text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">{value}</div>
                    <div className="text-xs text-ink-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </>
  );
}
