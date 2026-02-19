// src/pages/AdminDashboard.tsx
import { useState } from 'react';
import CreateLearningPath from '../components/CreateLearningPath';
import UploadLesson from '../components/UploadLesson';
import LearningPathList from './LearningPathList';
import './AdminDashboard.css';

/**
 * Admin Dashboard Page
 * 
 * Main admin panel with tabs for different operations:
 * 1. Create Learning Paths
 * 2. Upload Lessons
 * 3. View All Content
 */
const AdminDashboard = () => {
  // Track active tab (which component to display)
  const [activeTab, setActiveTab] = useState<'paths' | 'lessons' | 'view'>('paths');

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>🔒 Admin Panel</h1>
        <p>Manage learning paths and lessons</p>
      </header>

      {/* Tab Navigation */}
      <nav className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'paths' ? 'active' : ''}`}
          onClick={() => setActiveTab('paths')}
        >
          📚 Create Learning Path
        </button>
        <button
          className={`tab-button ${activeTab === 'lessons' ? 'active' : ''}`}
          onClick={() => setActiveTab('lessons')}
        >
          📄 Upload Lesson
        </button>
        <button
          className={`tab-button ${activeTab === 'view' ? 'active' : ''}`}
          onClick={() => setActiveTab('view')}
        >
          👁️ View All
        </button>
      </nav>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'paths' && <CreateLearningPath />}
        {activeTab === 'lessons' && <UploadLesson />}
        {activeTab === 'view' && <LearningPathList />}
      </div>
    </div>
  );
};

export default AdminDashboard;