import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Code, 
  Copy, 
  Check, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  Terminal,
  Lightbulb
} from 'lucide-react';

export function QuestionCard({ 
  question, 
  isCompleted, 
  onToggleComplete, 
  notes, 
  onSaveNotes 
}) {
  const [showSolution, setShowSolution] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [copied, setCopied] = useState(false);
  const [localNote, setLocalNote] = useState(notes || '');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(question.solutionCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNotesChange = (e) => {
    const val = e.target.value;
    setLocalNote(val);
    onSaveNotes(question.id, val);
  };

  const sectionClass = question.section.toLowerCase();

  return (
    <div className={`question-card ${isCompleted ? 'completed' : ''}`}>
      {/* Top Bar: Section Badge & Completion Toggle */}
      <div className="card-top-bar">
        <div className="badge-group">
          <span className={`section-badge ${sectionClass}`}>
            {question.sectionLabel}
          </span>
          <span className="mapping-tag">
            {question.makaut}
          </span>
        </div>

        <label className={`complete-checkbox-label ${isCompleted ? 'checked' : ''}`}>
          <input 
            type="checkbox" 
            checked={isCompleted} 
            onChange={() => onToggleComplete(question.id)}
            style={{ width: '16px', height: '16px', cursor: 'pointer' }}
          />
          {isCompleted ? 'Completed' : 'Mark Complete'}
        </label>
      </div>

      {/* Question Title */}
      <h3 className="question-title">{question.title}</h3>

      {/* Question Full Text */}
      <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
        {question.question}
      </p>

      {/* Meta Details: Take-away, DOs, DONTs */}
      <div className="meta-details">
        <div className="takeaway-item">
          <strong>Take-away:</strong> {question.takeaway}
        </div>

        <div className="dos-box">
          <CheckCircle2 size={18} style={{ color: 'var(--do-color)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <span className="dos-title">DOs: </span>
            {question.dos}
          </div>
        </div>

        <div className="donts-box">
          <XCircle size={18} style={{ color: 'var(--dont-color)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <span className="donts-title">DONTs: </span>
            {question.donts}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="card-actions">
        <button 
          className="action-btn"
          onClick={() => setShowSolution(!showSolution)}
        >
          <Code size={16} />
          {showSolution ? 'Hide Solution & Output' : 'View Java Solution & Output'}
          {showSolution ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        <button 
          className="action-btn secondary"
          onClick={() => setShowNotes(!showNotes)}
        >
          <FileText size={16} />
          {localNote.trim() ? 'Edit Study Notes' : 'Add Notes'}
        </button>
      </div>

      {/* Solution Drawer */}
      {showSolution && (
        <div className="solution-box">
          <div className="solution-header">
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Code size={14} /> Reference Implementation (Java)
            </span>
            <button className="copy-btn" onClick={handleCopyCode}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
          <pre>
            <code>{question.solutionCode}</code>
          </pre>

          {/* Program Console Output */}
          {question.solutionOutput && (
            <div className="solution-output-box">
              <div className="output-header">
                <Terminal size={14} style={{ color: '#10b981' }} />
                <span>Program Console Output</span>
              </div>
              <pre className="output-content">
                <code>{question.solutionOutput}</code>
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Notes Drawer */}
      {showNotes && (
        <div className="notes-container" style={{ marginTop: '16px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Lightbulb size={14} /> Personal Learning Notes for {question.title.split('.')[0]}:
          </div>
          <textarea
            className="notes-input"
            placeholder="Write key observations, common syntax traps, or your solution thoughts here..."
            value={localNote}
            onChange={handleNotesChange}
          />
        </div>
      )}
    </div>
  );
}
