// src/components/LearningPathList.tsx
import { useState, useEffect } from 'react';
import { api } from '../services/api/api.service';
import './LearningPathList.css';

// TypeScript interfaces
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
  createdAt: string;
  lessons: Lesson[];
}

/**
 * LearningPathList Component
 * 
 * Displays all learning paths with their lessons
 * Features:
 * - Collapsible learning paths
 * - Delete functionality
 * - Visual indicators for published status
 */
const LearningPathList = () => {
  // State
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([]);
  const [expandedPaths, setExpandedPaths] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Load learning paths on component mount
   */
  useEffect(() => {
    loadLearningPaths();
  }, []);

  /**
   * Fetch all learning paths from API
   */
  const loadLearningPaths = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const paths = await api.getLearningPaths();
      setLearningPaths(paths);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load learning paths');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Toggle learning path expansion
   */
  const togglePath = (id: number) => {
    const newExpanded = new Set(expandedPaths);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedPaths(newExpanded);
  };

  /**
   * Delete a learning path
   */
  const deletePath = async (id: number, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This will also delete all lessons in this path.`)) {
      return;
    }

    try {
      await api.deleteLearningPath(id);
      // Refresh list
      await loadLearningPaths();
    } catch (err) {
      alert('Failed to delete learning path: ' + (err instanceof Error ? err.message : 'Unknown error'));
    }
  };

  /**
   * Delete a lesson
   */
  const deleteLesson = async (id: number, title: string) => {
    if (!confirm(`Are you sure you want to delete lesson "${title}"?`)) {
      return;
    }

    try {
      await api.deleteLesson(id);
      // Refresh list
      await loadLearningPaths();
    } catch (err) {
      alert('Failed to delete lesson: ' + (err instanceof Error ? err.message : 'Unknown error'));
    }
  };

  /**
   * Get file type icon
   */
  const getFileIcon = (fileType: 'PDF' | 'VIDEO') => {
    return fileType === 'PDF' ? '📄' : '🎥';
  };

  // Loading state
  if (loading) {
    return (
      <div className="learning-path-list">
        <div className="loading">⏳ Loading learning paths...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="learning-path-list">
        <div className="alert alert-error">❌ {error}</div>
        <button onClick={loadLearningPaths} className="btn btn-secondary">
          🔄 Retry
        </button>
      </div>
    );
  }

  // Empty state
  if (learningPaths.length === 0) {
    return (
      <div className="learning-path-list">
        <div className="empty-state">
          <p>📚 No learning paths yet.</p>
          <p>Create your first learning path to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="learning-path-list">
      <div className="list-header">
        <h2>All Learning Paths</h2>
        <button onClick={loadLearningPaths} className="btn btn-secondary btn-small">
          🔄 Refresh
        </button>
      </div>

      {/* Learning Paths */}
      <div className="paths-container">
        {learningPaths.map((path) => (
          <div key={path.id} className="path-card">
            {/* Path Header */}
            <div className="path-header" onClick={() => togglePath(path.id)}>
              <div className="path-title-section">
                <span className="expand-icon">
                  {expandedPaths.has(path.id) ? '▼' : '▶'}
                </span>
                <div>
                  <h3>
                    {path.title}
                    {path.published ? (
                      <span className="badge badge-published">✓ Published</span>
                    ) : (
                      <span className="badge badge-draft">Draft</span>
                    )}
                  </h3>
                  <p className="path-description">{path.description}</p>
                  <small className="lesson-count">
                    {path.lessons.length} lesson{path.lessons.length !== 1 ? 's' : ''}
                  </small>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent path expansion
                  deletePath(path.id, path.title);
                }}
                className="btn btn-danger btn-small"
              >
                🗑️ Delete
              </button>
            </div>

            {/* Lessons (shown when expanded) */}
            {expandedPaths.has(path.id) && (
              <div className="lessons-container">
                {path.lessons.length === 0 ? (
                  <p className="no-lessons">No lessons yet. Upload your first lesson!</p>
                ) : (
                  <ul className="lessons-list">
                    {path.lessons.map((lesson) => (
                      <li key={lesson.id} className="lesson-item">
                        <div className="lesson-info">
                          <span className="lesson-order">#{lesson.order}</span>
                          <span className="file-icon">{getFileIcon(lesson.fileType)}</span>
                          <div className="lesson-details">
                            <strong>{lesson.title}</strong>
                            {lesson.description && (
                              <p className="lesson-description">{lesson.description}</p>
                            )}
                            <small className="file-path">{lesson.fileUrl}</small>
                          </div>
                          {lesson.published ? (
                            <span className="badge badge-published-small">Published</span>
                          ) : (
                            <span className="badge badge-draft-small">Draft</span>
                          )}
                        </div>
                        <button
                          onClick={() => deleteLesson(lesson.id, lesson.title)}
                          className="btn btn-danger btn-small"
                        >
                          🗑️
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPathList;