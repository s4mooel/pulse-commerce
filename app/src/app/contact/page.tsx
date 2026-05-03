'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Mail, MapPin, Clock, Send, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  { q: 'How long does migration take?', a: 'For most retailers, migration takes 4-9 weeks depending on complexity. Our dedicated migration team handles the heavy lifting, including data transfer, integration setup, and testing.' },
  { q: 'Do you offer a free trial?', a: 'Yes! We offer a 14-day free trial on our Growth and Scale plans. No credit card required. You get full access to all features during the trial period.' },
  { q: 'What integrations do you support?', a: 'We support 200+ integrations out of the box, including Stripe, PayPal, ShipStation, NetSuite, SAP, and all major 3PLs. Custom integrations are available on Enterprise plans.' },
  { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. No lock-in contracts.' },
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-ink-950">
      <Nav />

      {/* Hero */}
      <section className="border-b border-ink-150 dark:border-ink-800 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-pulse-200/30 to-transparent dark:from-pulse-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-wide mx-auto px-8 pt-20 pb-16 relative">
          <div className="eyebrow mb-6 animate-fade-in-up">Contact</div>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight font-normal text-ink-900 dark:text-white mb-6 max-w-3xl animate-fade-in-up delay-100">
            Let&apos;s talk about your <em className="italic text-pulse-700 dark:text-pulse-400">commerce</em>.
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-xl animate-fade-in-up delay-200">
            Whether you&apos;re exploring a migration or want a technical scoping call, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="border-b border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 py-20 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold text-ink-900 dark:text-white mb-8 tracking-tight">Send us a message</h2>
            {submitted ? (
              <div className="bg-pulse-50 dark:bg-pulse-900/20 border border-pulse-200 dark:border-pulse-800 rounded-lg p-8 text-center animate-scale-in">
                <div className="w-12 h-12 rounded-full bg-pulse-600 text-white flex items-center justify-center mx-auto mb-4">
                  <Send size={20} />
                </div>
                <h3 className="text-xl font-semibold text-ink-900 dark:text-white mb-2">Message sent!</h3>
                <p className="text-ink-600 dark:text-ink-300">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-1.5">Name</label>
                    <input
                      required value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-white focus:outline-none focus:border-pulse-600 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.15)] transition-shadow"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-1.5">Email</label>
                    <input
                      required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-white focus:outline-none focus:border-pulse-600 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.15)] transition-shadow"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-1.5">Subject</label>
                  <input
                    required value={subject} onChange={(e) => setSubject(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-white focus:outline-none focus:border-pulse-600 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.15)] transition-shadow"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-1.5">Message</label>
                  <textarea
                    required value={message} onChange={(e) => setMessage(e.target.value)} rows={5}
                    className="w-full px-3 py-2.5 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-white focus:outline-none focus:border-pulse-600 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.15)] transition-shadow resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <Send size={14} /> Send message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-ink-900 dark:text-white tracking-tight">Other ways to reach us</h2>
            <div className="space-y-6">
              <InfoCard icon={<Mail size={18} />} title="Email" desc="hello@pulsecommerce.io" sub="We respond within 24 hours" />
              <InfoCard icon={<MessageSquare size={18} />} title="Sales" desc="sales@pulsecommerce.io" sub="For enterprise and custom plans" />
              <InfoCard icon={<MapPin size={18} />} title="Offices" desc="Brooklyn, NY & Berlin, DE" sub="Available for in-person meetings" />
              <InfoCard icon={<Clock size={18} />} title="Hours" desc="Mon-Fri 9AM-6PM EST" sub="Weekend support for Enterprise plans" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-ink-150 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/30">
        <div className="max-w-narrow mx-auto px-8 py-20">
          <div className="eyebrow mb-4 text-center">FAQ</div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 dark:text-white mb-12 text-center">Frequently asked questions</h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium text-ink-900 dark:text-white">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={16} className="text-ink-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-ink-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-ink-600 dark:text-ink-300 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function InfoCard({ icon, title, desc, sub }: { icon: React.ReactNode; title: string; desc: string; sub: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-md bg-pulse-50 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-400 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-ink-900 dark:text-white">{title}</div>
        <div className="text-sm text-ink-700 dark:text-ink-300 mt-0.5">{desc}</div>
        <div className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
