import { useState, useEffect } from 'react';
import { api } from '../services/api/api.service';
import './StudentDashboard.css';

interface Lesson {
  id: number;
  title: string;
  description: string | null;
  fileUrl: string;
  fileType: 'PDF' | 'VIDEO';
  order: number;
  published: boolean;
}

interface LearningPath {
  id: number;
  title: string;
  description: string;
  published: boolean;
  lessons: Lesson[];
}

const StudentDashboard = () => {
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([]);
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadLearningPaths();
  }, []);

  const loadLearningPaths = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const paths = await api.getPublishedLearningPaths();
      // Only show published paths to students
      const publishedPaths = paths.filter((p: LearningPath) => p.published);
      setLearningPaths(publishedPaths);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load learning paths');
    } finally {
      setLoading(false);
    }
  };

  const handlePathClick = (path: LearningPath) => {
    setSelectedPath(path);
  };

  const handleBackToList = () => {
    setSelectedPath(null);
  };

  const getFileIcon = (fileType: 'PDF' | 'VIDEO') => {
    return fileType === 'PDF' ? '📄' : '🎥';
  };

  if (loading) {
    return (
      <div className="student-dashboard">
        <div className="loading">⏳ Loading learning paths...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="student-dashboard">
        <div className="alert alert-error">❌ {error}</div>
      </div>
    );
  }

  // Show selected path details
  if (selectedPath) {
    return (
      <div className="student-dashboard">
        <button onClick={handleBackToList} className="btn btn-secondary back-btn">
          ← Back to Learning Paths
        </button>

        <div className="path-detail">
          <h1>{selectedPath.title}</h1>
          <p className="path-description">{selectedPath.description}</p>
          
          <div className="lessons-grid">
            <h2>📚 Lessons ({selectedPath.lessons.length})</h2>
            {selectedPath.lessons.length === 0 ? (
              <p className="no-lessons">No lessons available yet.</p>
            ) : (
              <div className="lessons-list">
                {selectedPath.lessons
                  .filter(l => l.published)
                  .sort((a, b) => a.order - b.order)
                  .map((lesson) => (
                    <div key={lesson.id} className="lesson-card">
                      <div className="lesson-header">
                        <span className="lesson-number">#{lesson.order}</span>
                        <span className="file-icon">{getFileIcon(lesson.fileType)}</span>
                      </div>
                      <h3>{lesson.title}</h3>
                      {lesson.description && (
                        <p className="lesson-description">{lesson.description}</p>
                      )}
                      <a 
                        href={`http://localhost:3000${lesson.fileUrl}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        {lesson.fileType === 'PDF' ? '📖 Read' : '▶️ Watch'}
                      </a>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Show learning paths list
  return (
    <div className="student-dashboard">
      <div className="dashboard-header">
        <h1>🎓 Available Learning Paths</h1>
        <p>Choose a path to start your cybersecurity journey</p>
      </div>

      {learningPaths.length === 0 ? (
        <div className="empty-state">
          <p>📚</p>
          <p>No learning paths available yet.</p>
          <p>Check back soon!</p>
        </div>
      ) : (
        <div className="paths-grid">
          {learningPaths.map((path) => {
            const publishedLessons = path.lessons.filter(l => l.published);
            return (
              <div 
                key={path.id} 
                className="path-card"
                onClick={() => handlePathClick(path)}
              >
                <h2>{path.title}</h2>
                <p>{path.description}</p>
                <div className="path-meta">
                  <span>📚 {publishedLessons.length} Lessons</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;