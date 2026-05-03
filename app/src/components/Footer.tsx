export default function Footer() {
  return (
    <footer className="border-t border-ink-150 bg-white">
      <div className="max-w-wide mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-pulse-600" />
            <span className="font-display font-semibold tracking-tight">Pulse</span>
          </div>
          <p className="text-sm text-ink-500 max-w-[320px]">
            Commerce infrastructure for brands that move. Built in Brooklyn and Berlin.
          </p>
        </div>
        <FooterCol title="Product" items={['Orders', 'Inventory', 'Customers', 'Storefronts']} />
        <FooterCol title="Company" items={['About', 'Careers', 'Press', 'Contact']} />
        <FooterCol title="Resources" items={['Docs', 'Status', 'Changelog', 'Security']} />
      </div>
      <div className="border-t border-ink-150">
        <div className="max-w-wide mx-auto px-8 py-6 flex justify-between text-xs text-ink-500">
          <span>© 2026 Pulse Commerce, Inc.</span>
          <span>Privacy · Terms · DPA</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="eyebrow mb-4 text-2xs">{title}</div>
      <ul className="space-y-2 list-none p-0 m-0">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-sm text-ink-700 no-underline hover:text-pulse-700">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
