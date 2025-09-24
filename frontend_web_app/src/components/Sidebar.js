import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Sidebar
 * Quick links and helpful resources.
 */
export function Sidebar() {
  return (
    <div>
      <h3>Quick Links</h3>
      <div className="quick-links" role="navigation" aria-label="Quick Links">
        <a href="#book-appointment">Book Appointment</a>
        <a href="#find-provider">Find a Provider</a>
        <a href="#insurance">Insurance & Coverage</a>
        <a href="#telehealth">Telehealth</a>
        <a href="#support">Support</a>
      </div>

      <h3 className="mt-16">Contact</h3>
      <div className="card" role="contentinfo">
        <div className="card-body">
          <div className="mb-8">
            <strong>Phone:</strong> <span className="muted">+1 (555) 123-4567</span>
          </div>
          <div className="mb-8">
            <strong>Email:</strong> <span className="muted">care@healthconnect.example</span>
          </div>
          <div>
            <strong>Hours:</strong> <span className="muted">Mon–Fri 8am–6pm</span>
          </div>
        </div>
      </div>
    </div>
  );
}
