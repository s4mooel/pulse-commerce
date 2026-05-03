import Link from 'next/link';

const PRODUCT_LINKS = [
  { label: 'Orders', href: '/dashboard/orders' },
  { label: 'Inventory', href: '/dashboard/inventory' },
  { label: 'Customers', href: '/dashboard/customers' },
  { label: 'Storefronts', href: '/store' },
];

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Contact', href: '/contact' },
];

const RESOURCE_LINKS = [
  { label: 'Docs', href: '#' },
  { label: 'Status', href: '#' },
  { label: 'Changelog', href: '#' },
  { label: 'Security', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-150 dark:border-ink-800 bg-white dark:bg-ink-950">
      <div className="max-w-wide mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-pulse-600" />
            <span className="font-display font-semibold tracking-tight text-ink-900 dark:text-white">Pulse</span>
          </div>
          <p className="text-sm text-ink-500 dark:text-ink-400 max-w-[320px]">
            Commerce infrastructure for brands that move. Built in Brooklyn and Berlin.
          </p>
        </div>
        <FooterCol title="Product" links={PRODUCT_LINKS} />
        <FooterCol title="Company" links={COMPANY_LINKS} />
        <FooterCol title="Resources" links={RESOURCE_LINKS} />
      </div>
      <div className="border-t border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 py-6 flex justify-between text-xs text-ink-500 dark:text-ink-400">
          <span>© 2026 Pulse Commerce, Inc.</span>
          <span>Privacy · Terms · DPA</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="eyebrow mb-4 text-2xs">{title}</div>
      <ul className="space-y-2 list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-ink-700 dark:text-ink-300 no-underline hover:text-pulse-700 dark:hover:text-pulse-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
