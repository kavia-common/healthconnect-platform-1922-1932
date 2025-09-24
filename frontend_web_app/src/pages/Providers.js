import React from 'react';
import { Section } from '../components/Section';
import { ProviderCard } from '../components/ProviderCard';

/**
 * PUBLIC_INTERFACE
 * Providers
 * Lists providers with specialties and short meta info.
 */
export default function Providers() {
  const providers = [
    { title: 'Dr. Aisha Patel', specialty: 'Cardiology', meta: '12 yrs • ★ 4.8 • City Hospital' },
    { title: 'Dr. Miguel Santos', specialty: 'Dermatology', meta: '9 yrs • ★ 4.7 • Downtown Clinic' },
    { title: 'Dr. Emily Chen', specialty: 'Pediatrics', meta: '10 yrs • ★ 4.9 • Children’s Care' },
    { title: 'Dr. Robert King', specialty: 'General Medicine', meta: '15 yrs • ★ 4.6 • Family Health' },
    { title: 'Dr. Sara Lee', specialty: 'Nutrition', meta: '7 yrs • ★ 4.7 • Wellness Center' },
    { title: 'Dr. Omar Farouk', specialty: 'Psychiatry', meta: '11 yrs • ★ 4.8 • MindCare' },
  ];

  return (
    <div className="section">
      <Section
        title="Providers"
        subtitle="Licensed professionals across multiple specialties"
        action={<a className="btn secondary" href="/services">See Services</a>}
      >
        <div className="grid grid-3">
          {providers.map((p) => (
            <ProviderCard key={p.title} title={p.title} specialty={p.specialty} meta={p.meta} ctaText="View Profile" />
          ))}
        </div>
      </Section>
    </div>
  );
}
