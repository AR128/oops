import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function AlertBanner() {
  return (
    <div className="alert-banner">
      <AlertTriangle size={24} style={{ color: '#d97706', flexShrink: 0 }} />
      <div>
        <div className="alert-title">IMPORTANT NOTICE</div>
        <div style={{ fontSize: '0.93rem', lineHeight: '1.5' }}>
          Students must progress incrementally. Please complete the Easy and Medium sections before moving forward. 
          The Advanced section questions are complex and intended for Advanced Learners only.
        </div>
      </div>
    </div>
  );
}
