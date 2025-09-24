import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Card
 * Generic card with header and body sections.
 */
export function Card({ icon, title, subtitle, children, footer }) {
  return (
    <div className="card">
      {(title || subtitle) && (
        <div className="card-header">
          <h3 className="card-title">
            {icon ? <span aria-hidden="true">{icon}</span> : null}
            {title}
          </h3>
          {subtitle ? <div className="card-subtitle">{subtitle}</div> : null}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
      {footer}
    </div>
  );
}
