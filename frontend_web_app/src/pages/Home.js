import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { ProviderCard } from '../components/ProviderCard';

/**
 * PUBLIC_INTERFACE
 * Home
 * Landing page that highlights services and providers with Ocean Professional styling.
 */
export default function Home() {
  return (
    <div className="section">
      <Hero />

      <div className="mt-16">
        <Section
          title="Popular Services"
          subtitle="Browse our most used healthcare services"
          action={<a className="btn secondary" href="/services">Explore Services</a>}
        >
          <div className="grid grid-4">
            {[
              { title: 'General Consultation', specialty: 'Primary Care', meta: 'Available in-person & telehealth' },
              { title: 'Pediatrics', specialty: 'Child Care', meta: 'Child wellness & checkups' },
              { title: 'Cardiology', specialty: 'Heart Health', meta: 'Diagnostics & treatment' },
              { title: 'Dermatology', specialty: 'Skin Care', meta: 'Skin conditions & cosmetic' },
            ].map((s) => (
              <ProviderCard key={s.title} title={s.title} specialty={s.specialty} meta={s.meta} ctaText="Book Now" />
            ))}
          </div>
        </Section>
      </div>

      <div className="mt-16">
        <Section
          title="Featured Providers"
          subtitle="Experienced professionals ready to help"
          action={<a className="btn secondary" href="/providers">Find Providers</a>}
        >
          <div className="grid grid-3">
            {[
              { title: 'Dr. Aisha Patel', specialty: 'Cardiologist', meta: '12 yrs • ★ 4.8' },
              { title: 'Dr. Miguel Santos', specialty: 'Dermatologist', meta: '9 yrs • ★ 4.7' },
              { title: 'Dr. Emily Chen', specialty: 'Pediatrician', meta: '10 yrs • ★ 4.9' },
            ].map((p) => (
              <ProviderCard key={p.title} title={p.title} specialty={p.specialty} meta={p.meta} />
            ))}
          </div>
        </Section>
      </div>

      <div className="mt-16">
        <Card
          title="Health Information"
          subtitle="Trusted articles and guidance for your well-being"
          icon="📚"
        >
          <div className="grid grid-3">
            {[
              { title: 'Heart Health Basics', meta: 'Understanding blood pressure' },
              { title: 'Skin Care 101', meta: 'Daily routines and tips' },
              { title: 'Children’s Vaccines', meta: 'Schedules and safety' },
            ].map((a) => (
              <div key={a.title} className="item">
                <div className="item-cover" />
                <div className="item-content">
                  <h4 className="item-title">{a.title}</h4>
                  <div className="item-meta">{a.meta}</div>
                  <div className="mt-8">
                    <a className="btn secondary" href="/health-info" aria-label={`Read ${a.title}`}>Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="card" role="region" aria-label="Welcome">
      <div className="card-header">
        <h3 className="card-title">
          <span aria-hidden="true">🌊</span> Welcome to HealthConnect
        </h3>
        <div className="card-subtitle">
          Your gateway to quality care — appointments, providers, and health information, in one place.
        </div>
      </div>
      <div className="card-body">
        <div className="mb-16">
          <div className="muted">Ocean Professional theme • Clean, modern, accessible</div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a className="btn" href="/services">Book a Service</a>
          <a className="btn secondary" href="/providers">Find a Provider</a>
        </div>
      </div>
    </div>
  );
}
