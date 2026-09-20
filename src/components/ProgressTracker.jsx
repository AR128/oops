import React from 'react';
import { CheckCircle2, Trophy, RotateCcw } from 'lucide-react';

export function ProgressTracker({ completedIds, totalQuestions, questionsData, onResetProgress }) {
  const easyTotal = questionsData.filter(q => q.section === 'Easy').length;
  const mediumTotal = questionsData.filter(q => q.section === 'Medium').length;
  const advancedTotal = questionsData.filter(q => q.section === 'Advanced').length;

  const easyDone = questionsData.filter(q => q.section === 'Easy' && completedIds.includes(q.id)).length;
  const mediumDone = questionsData.filter(q => q.section === 'Medium' && completedIds.includes(q.id)).length;
  const advancedDone = questionsData.filter(q => q.section === 'Advanced' && completedIds.includes(q.id)).length;

  const totalDone = completedIds.length;
  const totalPercent = Math.round((totalDone / totalQuestions) * 100) || 0;

  return (
    <div className="progress-card">
      <div className="progress-header">
        <div className="progress-title">
          <Trophy size={20} className="text-yellow-500" />
          <span>Assignment Progress Tracker</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="progress-counter">{totalDone} / {totalQuestions} ({totalPercent}%)</span>
          {totalDone > 0 && (
            <button 
              onClick={onResetProgress}
              className="copy-btn"
              style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
              title="Reset progress"
            >
              <RotateCcw size={14} /> Reset
            </button>
          )}
        </div>
      </div>

      <div className="progress-bar-container">
        <div 
          className="progress-fill easy" 
          style={{ width: `${(easyDone / totalQuestions) * 100}%` }}
          title={`Easy: ${easyDone}/${easyTotal}`}
        />
        <div 
          className="progress-fill medium" 
          style={{ width: `${(mediumDone / totalQuestions) * 100}%` }}
          title={`Medium: ${mediumDone}/${mediumTotal}`}
        />
        <div 
          className="progress-fill advanced" 
          style={{ width: `${(advancedDone / totalQuestions) * 100}%` }}
          title={`Advanced: ${advancedDone}/${advancedTotal}`}
        />
      </div>

      <div className="progress-stats-grid">
        <div className="stat-item" style={{ borderLeft: '3px solid var(--easy-color)' }}>
          <span className="stat-label">Section A: Easy</span>
          <span className="stat-value">{easyDone} / {easyTotal}</span>
        </div>
        <div className="stat-item" style={{ borderLeft: '3px solid var(--medium-color)' }}>
          <span className="stat-label">Section B: Medium</span>
          <span className="stat-value">{mediumDone} / {mediumTotal}</span>
        </div>
        <div className="stat-item" style={{ borderLeft: '3px solid var(--advanced-color)' }}>
          <span className="stat-label">Section C: Advanced</span>
          <span className="stat-value">{advancedDone} / {advancedTotal}</span>
        </div>
      </div>
    </div>
  );
}
