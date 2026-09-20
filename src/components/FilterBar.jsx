import React from 'react';
import { Search, Filter, Layers, CheckSquare } from 'lucide-react';

export function FilterBar({ 
  activeTab, 
  setActiveTab, 
  searchTerm, 
  setSearchTerm,
  selectedOutcome,
  setSelectedOutcome,
  statusFilter,
  setStatusFilter,
  counts
}) {
  return (
    <div className="filter-container">
      {/* Tab Navigation */}
      <div className="tabs-wrapper">
        <button
          className={`tab-btn ${activeTab === 'Easy' ? 'active' : ''}`}
          onClick={() => setActiveTab('Easy')}
        >
          Section A: Easy ({counts.Easy})
        </button>
        <button
          className={`tab-btn ${activeTab === 'Medium' ? 'active' : ''}`}
          onClick={() => setActiveTab('Medium')}
        >
          Section B: Medium ({counts.Medium})
        </button>
        <button
          className={`tab-btn ${activeTab === 'Advanced' ? 'active' : ''}`}
          onClick={() => setActiveTab('Advanced')}
        >
          Section C: Advanced ({counts.Advanced})
        </button>
        <button
          className={`tab-btn ${activeTab === 'All' ? 'active' : ''}`}
          onClick={() => setActiveTab('All')}
        >
          All Questions ({counts.All})
        </button>
      </div>

      {/* Search and Filters */}
      <div className="search-filter-row">
        <div className="search-box">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Search questions by topic, keyword, or concept (e.g. Matrix, Array, Constructor)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="select-box">
          <select 
            value={selectedOutcome} 
            onChange={(e) => setSelectedOutcome(e.target.value)}
          >
            <option value="ALL">All MAKAUT Outcomes</option>
            <option value="CO1">CO1 - Fundamentals & Data Types</option>
            <option value="CO2">CO2 - Arrays & Traversal Logic</option>
            <option value="CO3">CO3 - Classes & Encapsulation</option>
            <option value="CO4">CO4 - Algorithms & Optimization</option>
            <option value="CO5">CO5 - Architecture & Design Patterns</option>
            <option value="PO1">PO1 - Engineering Knowledge</option>
            <option value="PO2">PO2 - Problem Analysis</option>
            <option value="PO3">PO3 - Design & Development</option>
            <option value="PO4">PO4 - Conduct Investigations</option>
            <option value="PO5">PO5 - Modern Tool Usage</option>
          </select>
        </div>

        <div className="select-box">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="ALL">Status: All</option>
            <option value="PENDING">Status: Pending</option>
            <option value="COMPLETED">Status: Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}
