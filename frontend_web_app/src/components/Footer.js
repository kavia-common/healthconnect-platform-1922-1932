import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Footer
 * Minimal footer with contact and copyright.
 */
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <small>
          © {new Date().getFullYear()} HealthConnect. All rights reserved.
        </small>
        <div className="muted">
          <span className="hidden-mobile">Emergency? Call 911 • </span>
          Contact: support@healthconnect.example
        </div>
      </div>
    </footer>
  );
}
