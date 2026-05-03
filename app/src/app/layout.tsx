import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pulse Commerce — Commerce infrastructure for brands that move',
  description:
    'Pulse Commerce is the operating system for modern retail. One system of record for orders, inventory, customers, and storefronts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
