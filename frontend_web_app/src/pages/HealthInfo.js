import React from 'react';
import { Section } from '../components/Section';

/**
 * PUBLIC_INTERFACE
 * HealthInfo
 * Health knowledge hub with article cards.
 */
export default function HealthInfo() {
  const articles = [
    { title: 'Understanding Blood Pressure', meta: 'Heart Health • 6 min read' },
    { title: 'Daily Skin Care Routine', meta: 'Dermatology • 5 min read' },
    { title: 'Child Vaccine Schedule', meta: 'Pediatrics • 7 min read' },
    { title: 'Healthy Eating Basics', meta: 'Nutrition • 8 min read' },
    { title: 'Managing Anxiety', meta: 'Mental Health • 9 min read' },
    { title: 'Staying Active at Home', meta: 'Wellness • 5 min read' },
  ];

  return (
    <div className="section">
      <Section
        title="Health Information"
        subtitle="Evidence-based content to help you make informed decisions"
      >
        <div className="grid grid-3">
          {articles.map((a) => (
            <article key={a.title} className="item" aria-label={a.title}>
              <div className="item-cover" aria-hidden="true" />
              <div className="item-content">
                <h4 className="item-title">{a.title}</h4>
                <div className="item-meta">{a.meta}</div>
                <div className="mt-8">
                  <button className="btn secondary" aria-label={`Read ${a.title}`}>Read</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
