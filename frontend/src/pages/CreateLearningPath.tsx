// src/components/CreateLearningPath.tsx
import { useState, type FormEvent } from 'react';
import { api } from '../services/api.service';
import './CreateLearningPath.css';

/**
 * CreateLearningPath Component
 * 
 * Form to create a new learning path
 * Fields:
 * - Title (required)
 * - Description (required)
 * - Published (checkbox)
 */
const CreateLearningPath = () => {
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [published, setPublished] = useState(false);
  
  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent page reload
    
    // Reset messages
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      // Call API to create learning path
      const result = await api.createLearningPath({
        title,
        description,
        published,
      });

      // Show success message
      setSuccess(`✅ Learning path "${result.title}" created successfully!`);
      
      // Clear form
      setTitle('');
      setDescription('');
      setPublished(false);
    } catch (err) {
      // Show error message
      setError(err instanceof Error ? err.message : 'Failed to create learning path');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-learning-path">
      <h2>Create New Learning Path</h2>
      
      {/* Success Message */}
      {success && (
        <div className="alert alert-success">
          {success}
        </div>
      )}
      
      {/* Error Message */}
      {error && (
        <div className="alert alert-error">
          ❌ {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="form-group">
          <label htmlFor="title">
            Title <span className="required">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Web Application Security"
            required
            disabled={loading}
          />
        </div>

        {/* Description Textarea */}
        <div className="form-group">
          <label htmlFor="description">
            Description <span className="required">*</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what students will learn in this path..."
            rows={5}
            required
            disabled={loading}
          />
        </div>

        {/* Published Checkbox */}
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              disabled={loading}
            />
            <span>Publish immediately (make visible to users)</span>
          </label>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? '⏳ Creating...' : '✨ Create Learning Path'}
        </button>
      </form>
    </div>
  );
};

export default CreateLearningPath;