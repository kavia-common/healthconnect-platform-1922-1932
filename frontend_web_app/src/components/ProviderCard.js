import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ProviderCard
 * Displays a provider or service with accent badge.
 */
export function ProviderCard({ title, specialty, meta, ctaText = 'View Details', onAction }) {
  return (
    <div className="item" role="article" aria-label={title}>
      <div className="item-cover" aria-hidden="true" />
      <div className="item-content">
        <div className="badge" aria-label={`Specialty ${specialty}`}>● {specialty}</div>
        <h4 className="item-title">{title}</h4>
        <div className="item-meta">{meta}</div>
        <div className="mt-8">
          <button className="btn" onClick={onAction} aria-label={`${ctaText} for ${title}`}>
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
}
