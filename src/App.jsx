import React, { useState, useEffect } from 'react';
import { questionsData } from './data/questionsData';
import { Header } from './components/Header';
import { AlertBanner } from './components/AlertBanner';
import { ProgressTracker } from './components/ProgressTracker';
import { FilterBar } from './components/FilterBar';
import { QuestionCard } from './components/QuestionCard';
import { BookX, CheckCircle, Award } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('oops_theme') || 'light';
  });

  const [completedIds, setCompletedIds] = useState(() => {
    const saved = localStorage.getItem('oops_completed');
    return saved ? JSON.parse(saved) : [];
  });

  const [userNotes, setUserNotes] = useState(() => {
    const saved = localStorage.getItem('oops_notes');
    return saved ? JSON.parse(saved) : {};
  });

  const [activeTab, setActiveTab] = useState('Easy');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOutcome, setSelectedOutcome] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('oops_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('oops_completed', JSON.stringify(completedIds));
  }, [completedIds]);

  useEffect(() => {
    localStorage.setItem('oops_notes', JSON.stringify(userNotes));
  }, [userNotes]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleToggleComplete = (id) => {
    setCompletedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSaveNotes = (id, text) => {
    setUserNotes(prev => ({
      ...prev,
      [id]: text
    }));
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset your question progress?')) {
      setCompletedIds([]);
    }
  };

  // Section Counts
  const counts = {
    Easy: questionsData.filter(q => q.section === 'Easy').length,
    Medium: questionsData.filter(q => q.section === 'Medium').length,
    Advanced: questionsData.filter(q => q.section === 'Advanced').length,
    All: questionsData.length
  };

  // Filtered Questions Logic
  const filteredQuestions = questionsData.filter(q => {
    // Tab Filter
    if (activeTab !== 'All' && q.section !== activeTab) {
      return false;
    }

    // Search Filter
    if (searchTerm.trim() !== '') {
      const query = searchTerm.toLowerCase();
      const matchTitle = q.title.toLowerCase().includes(query);
      const matchQuestion = q.question.toLowerCase().includes(query);
      const matchTakeaway = q.takeaway.toLowerCase().includes(query);
      const matchDos = q.dos.toLowerCase().includes(query);
      if (!matchTitle && !matchQuestion && !matchTakeaway && !matchDos) {
        return false;
      }
    }

    // Outcome Filter (CO / PO)
    if (selectedOutcome !== 'ALL') {
      const matchCO = q.co && q.co.includes(selectedOutcome);
      const matchPO = q.po && q.po.includes(selectedOutcome);
      if (!matchCO && !matchPO) {
        return false;
      }
    }

    // Status Filter (Completed / Pending)
    if (statusFilter === 'COMPLETED' && !completedIds.includes(q.id)) {
      return false;
    }
    if (statusFilter === 'PENDING' && completedIds.includes(q.id)) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="app-container">
        {/* Important Notice Box */}
        <AlertBanner />

        {/* Overall Progress Tracker */}
        <ProgressTracker 
          completedIds={completedIds}
          totalQuestions={questionsData.length}
          questionsData={questionsData}
          onResetProgress={handleResetProgress}
        />

        {/* Tab & Filter Controls */}
        <FilterBar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedOutcome={selectedOutcome}
          setSelectedOutcome={setSelectedOutcome}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          counts={counts}
        />

        {/* Section Heading Banner */}
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)' }}>
            {activeTab === 'Easy' && 'Easy Level (Fundamentals & Basic Logic)'}
            {activeTab === 'Medium' && 'Medium Level (Complex Arrays & Object Interactions)'}
            {activeTab === 'Advanced' && 'Advanced Level (Algorithm Design & Architectural Patterns)'}
            {activeTab === 'All' && 'All Java Assignment Questions (Q1 to Q30)'}
          </h2>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>
            Showing {filteredQuestions.length} of {activeTab === 'All' ? questionsData.length : counts[activeTab]} questions
          </span>
        </div>

        {/* Questions List */}
        {filteredQuestions.length > 0 ? (
          <div className="questions-list">
            {filteredQuestions.map(q => (
              <QuestionCard 
                key={q.id}
                question={q}
                isCompleted={completedIds.includes(q.id)}
                onToggleComplete={handleToggleComplete}
                notes={userNotes[q.id] || ''}
                onSaveNotes={handleSaveNotes}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <BookX size={48} style={{ color: 'var(--text-muted)', margin: '0 auto' }} />
            <h3>No matching questions found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
              Try adjusting your search query, outcome filters, or status selection.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="app-footer">
          <p>
            <strong>Java Assignment Hub</strong> • Instructor: Soham Sengupta • Course: Object-Oriented Programming using Java
          </p>
          <p style={{ marginTop: '4px', fontSize: '0.8rem', opacity: 0.8 }}>
            Department of Computer Science & Engineering • MAKAUT Syllabus Aligned
          </p>
        </footer>
      </main>
    </div>
  );
}
