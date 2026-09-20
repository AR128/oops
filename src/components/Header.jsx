import React from 'react';
import { BookOpen, User, Sun, Moon, Award, Layers } from 'lucide-react';

export function Header({ theme, toggleTheme }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-title-group">
          <h1>
            <BookOpen className="w-8 h-8 text-blue-600" size={30} />
            Java Assignment
          </h1>
          <div className="instructor-badge">
            <User size={14} />
            <span>Instructor: <strong>Soham Sengupta</strong></span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ textAlign: 'right', display: 'none', mdDisplay: 'block' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>
              Course: Object-Oriented Programming using Java
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Module: Fundamentals, Arrays, Classes, and Objects
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
