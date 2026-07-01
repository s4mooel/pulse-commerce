'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Mail, Github, Linkedin, Send, User, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import en from '@/dictionaries/en.json';
import es from '@/dictionaries/es.json';

const FAQS = [
  { q: '¿Qué tecnologías usaste para este proyecto?', a: 'El proyecto está construido principalmente con Next.js 14 (App Router), React, TypeScript y Tailwind CSS. Utilizo componentes funcionales de React y una arquitectura enfocada en la separación de intereses (UI vs Datos).' },
  { q: '¿El dashboard está conectado a un backend real?', a: 'No, este es un simulador enfocado en demostrar habilidades de Frontend. Toda la información que ves (órdenes, productos, clientes) proviene de un archivo de datos mock en la capa lógica (src/lib/data.ts).' },
  { q: '¿Estás disponible para trabajar?', a: '¡Sí! Actualmente estoy abierto a nuevas oportunidades como Desarrollador Frontend o Fullstack. Envíame un mensaje y platicamos.' },
  { q: '¿Dónde puedo ver más de tu código?', a: 'Puedes visitar mi perfil de GitHub donde subo otros proyectos, o revisar directamente el código fuente de este mismo simulador.' },
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pathname = usePathname();
  const lang = (pathname.split('/')[1] as 'en' | 'es') || 'es';
  const dict = lang === 'en' ? en : es;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-ink-950">
      <Nav lang={lang} dict={dict} />

      {/* Hero */}
      <section className="border-b border-ink-150 dark:border-ink-800 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-pulse-200/30 to-transparent dark:from-pulse-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-wide mx-auto px-8 pt-20 pb-16 relative">
          <div className="eyebrow mb-6 animate-fade-in-up">{dict.contact.eyebrow}</div>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight font-normal text-ink-900 dark:text-white mb-6 max-w-3xl animate-fade-in-up delay-100">
            {dict.contact.title1}<em className="italic text-pulse-700 dark:text-pulse-400">{dict.contact.titleEm}</em>{dict.contact.title2}
          </h1>
          <p className="text-lg text-ink-600 dark:text-ink-300 max-w-xl animate-fade-in-up delay-200">
            {dict.contact.desc}
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="border-b border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 py-20 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold text-ink-900 dark:text-white mb-8 tracking-tight">{dict.contact.msgTitle}</h2>
            {submitted ? (
              <div className="bg-pulse-50 dark:bg-pulse-900/20 border border-pulse-200 dark:border-pulse-800 rounded-lg p-8 text-center animate-scale-in">
                <div className="w-12 h-12 rounded-full bg-pulse-600 text-white flex items-center justify-center mx-auto mb-4">
                  <Send size={20} />
                </div>
                <h3 className="text-xl font-semibold text-ink-900 dark:text-white mb-2">{dict.contact.successTitle}</h3>
                <p className="text-ink-600 dark:text-ink-300">{dict.contact.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-1.5">{dict.contact.formName}</label>
                    <input
                      required value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-white focus:outline-none focus:border-pulse-600 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.15)] transition-shadow"
                      placeholder={dict.contact.formNamePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-1.5">{dict.contact.formEmail}</label>
                    <input
                      required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-white focus:outline-none focus:border-pulse-600 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.15)] transition-shadow"
                      placeholder={dict.contact.formEmailPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-1.5">{dict.contact.formSubject}</label>
                  <input
                    required value={subject} onChange={(e) => setSubject(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-white focus:outline-none focus:border-pulse-600 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.15)] transition-shadow"
                    placeholder={dict.contact.formSubjectPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-700 dark:text-ink-300 mb-1.5">{dict.contact.formMessage}</label>
                  <textarea
                    required value={message} onChange={(e) => setMessage(e.target.value)} rows={5}
                    className="w-full px-3 py-2.5 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-white focus:outline-none focus:border-pulse-600 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.15)] transition-shadow resize-none"
                    placeholder={dict.contact.formMessagePlaceholder}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <Send size={14} /> {dict.contact.formSubmit}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-ink-900 dark:text-white tracking-tight">{dict.contact.otherWays}</h2>
            <div className="space-y-6">
              <Link href="mailto:zaratesamu99@gmail.com" target="_blank" className="block no-underline">
                <InfoCard icon={<Mail size={18} />} title="Email" desc="zaratesamu99@gmail.com" sub={dict.contact.emailDesc} />
              </Link>
              <Link href="https://www.linkedin.com/in/s4m0l/" target="_blank" className="block no-underline">
                <InfoCard icon={<Linkedin size={18} />} title="LinkedIn" desc="in/s4m0l" sub={dict.contact.linkedinDesc} />
              </Link>
              <Link href="https://github.com/s4mooel" target="_blank" className="block no-underline">
                <InfoCard icon={<Github size={18} />} title="GitHub" desc="github.com/s4mooel" sub={dict.contact.githubDesc} />
              </Link>
              <div className="block no-underline">
                <InfoCard icon={<User size={18} />} title="Samuel Ibañez" desc="Desarrollador Frontend" sub={dict.contact.devDesc} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-ink-150 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/30">
        <div className="max-w-narrow mx-auto px-8 py-20">
          <div className="eyebrow mb-4 text-center">{dict.contact.faqEyebrow}</div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 dark:text-white mb-12 text-center">{dict.contact.faqTitle}</h2>
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
    <div className="flex gap-4 group">
      <div className="w-10 h-10 rounded-md bg-pulse-50 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-400 flex items-center justify-center flex-shrink-0 group-hover:bg-pulse-100 dark:group-hover:bg-pulse-900/50 transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-ink-900 dark:text-white group-hover:text-pulse-700 dark:group-hover:text-pulse-400 transition-colors">{title}</div>
        <div className="text-sm text-ink-700 dark:text-ink-300 mt-0.5">{desc}</div>
        <div className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
