'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, currency } from '@/lib/data';
import { ShoppingBag, Search } from 'lucide-react';

export default function StorefrontPage() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-ink-950">
      <header className="border-b border-ink-150 dark:border-ink-800 sticky top-0 bg-white/95 dark:bg-ink-950/95 backdrop-blur z-50">
        <div className="max-w-wide mx-auto px-6 h-16 flex items-center gap-6">
          <Link href="/" className="font-display font-semibold tracking-tight text-xl no-underline text-ink-900 dark:text-white">
            Northland
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {['Men', 'Women', 'Footwear', 'Gear', 'Sale'].map((c) => (
              <a key={c} href="#" className="px-3 py-2 rounded-sm text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 no-underline">{c}</a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button className="w-9 h-9 rounded-md flex items-center justify-center text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800">
              <Search size={16} />
            </button>
            <button className="h-9 px-3 rounded-md flex items-center gap-2 text-sm text-ink-900 dark:text-white hover:bg-ink-100 dark:hover:bg-ink-800">
              <ShoppingBag size={16} />
              <span className="numeric">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-6">Spring '26 — In stock</div>
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-ink-900 dark:text-white mb-6">
              Made for the <em className="italic text-pulse-700">long</em> walk home.
            </h1>
            <p className="text-lg text-ink-600 dark:text-ink-300 max-w-md mb-8">
              Outerwear, footwear and gear, built in small batches in the Pacific Northwest.
            </p>
            <div className="flex gap-3">
              <a href="#shop" className="btn btn-primary">Shop spring</a>
              <a href="#shop" className="btn btn-secondary">Our story</a>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-pulse-100 to-pulse-300 flex items-end p-8">
            <div className="text-pulse-900 font-display font-semibold text-3xl tracking-tight">Cascade
              <br />Field Jacket
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="shop" className="max-w-wide mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="eyebrow mb-2">Catalog</div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">All products</h2>
          </div>
          <select className="h-9 px-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-sm">
            <option>Featured</option>
            <option>Newest</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.filter((p) => p.status === 'active').map((p) => (
            <article key={p.id} className="group">
              <button
                onClick={() => setCart((c) => ({ ...c, [p.id]: (c[p.id] ?? 0) + 1 }))}
                className="block w-full text-left"
              >
                <div
                  className="aspect-[4/5] rounded-lg flex items-end justify-start p-5 mb-4 transition-transform group-hover:scale-[1.01]"
                  style={{ background: `oklch(0.88 0.06 ${p.imageHue})` }}
                >
                  <span className="font-display font-semibold text-xl text-ink-900/40">{p.name.split(' ')[0]}</span>
                </div>
                <h3 className="text-sm font-medium text-ink-900 dark:text-white">{p.name}</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-ink-500">{p.category}</span>
                  <span className="numeric text-sm font-medium text-ink-900 dark:text-white">{currency(p.price)}</span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-500">
          <span>© 2026 Northland Outfitters</span>
          <span>Powered by <Link href="/" className="text-pulse-700 no-underline">Pulse Commerce</Link></span>
        </div>
      </footer>
    </div>
  );
}
