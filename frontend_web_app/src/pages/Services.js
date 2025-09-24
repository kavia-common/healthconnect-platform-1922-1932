import React from 'react';
import { Section } from '../components/Section';
import { ProviderCard } from '../components/ProviderCard';

/**
 * PUBLIC_INTERFACE
 * Services
 * Shows a grid of services available to users.
 */
export default function Services() {
  const services = [
    { title: 'General Consultation', specialty: 'Primary Care', meta: '30–45 mins • From $60' },
    { title: 'Cardiology Checkup', specialty: 'Heart Health', meta: '60 mins • From $120' },
    { title: 'Dermatology Visit', specialty: 'Skin Care', meta: '45 mins • From $90' },
    { title: 'Pediatric Visit', specialty: 'Child Care', meta: '30 mins • From $70' },
    { title: 'Nutrition Counseling', specialty: 'Wellness', meta: '45 mins • From $80' },
    { title: 'Mental Health Session', specialty: 'Behavioral Health', meta: '50 mins • From $110' },
  ];

  return (
    <div className="section">
      <Section title="Services" subtitle="Select a service to get started">
        <div className="grid grid-4">
          {services.map((s) => (
            <ProviderCard key={s.title} title={s.title} specialty={s.specialty} meta={s.meta} ctaText="Book Now" />
          ))}
        </div>
      </Section>
    </div>
  );
}
