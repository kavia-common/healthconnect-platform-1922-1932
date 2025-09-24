import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Section
 * Generic section wrapper with title and optional action area.
 */
export function Section({ title, subtitle, action, children }) {
  return (
    <section className="section">
      <div className="section-header">
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle ? <div className="muted">{subtitle}</div> : null}
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      {children}
    </section>
  );
}
