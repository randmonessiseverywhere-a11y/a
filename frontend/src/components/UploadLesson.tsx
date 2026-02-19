// src/components/UploadLesson.tsx
import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { api } from '../services/api/api.service';
//import './UploadLesson.css';

// TypeScript interface for Learning Path
interface LearningPath {
  id: number;
  title: string;
  description: string;
  published: boolean;
}

/**
 * UploadLesson Component
 * 
 * Form to upload a lesson with file (PDF or video)
 * Features:
 * - Dropdown to select learning path
 * - File upload with validation
 * - Order number input
 * - Auto-incremented order suggestion
 */
const UploadLesson = () => {
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [learningPathId, setLearningPathId] = useState<number | ''>('');
  const [order, setOrder] = useState<number>(1);
  const [published, setPublished] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  
  // Data state
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([]);
  
  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

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
    try {
      const paths = await api.getLearningPaths();
      setLearningPaths(paths);
    } catch (err) {
      setError('Failed to load learning paths');
    }
  };

  /**
   * Handle file selection
   * Validates file type and size
   */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'video/mp4', 'video/webm', 'video/ogg'];
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Invalid file type. Only PDF and video files (MP4, WebM, OGG) are allowed.');
      setFile(null);
      return;
    }

    // Validate file size (max 100MB)
    const maxSize = 100 * 1024 * 1024; // 100MB in bytes
    if (selectedFile.size > maxSize) {
      setError('File size exceeds 100MB limit.');
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setError(null);
  };

  /**
   * Automatically suggest next order number when learning path is selected
   */
  const handleLearningPathChange = async (pathId: number) => {
    setLearningPathId(pathId);
    
    // Fetch lessons for this path to suggest next order
    try {
      const lessons = await api.getLessons(pathId);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const maxOrder = lessons.reduce((max: number, lesson: any) => 
        lesson.order > max ? lesson.order : max, 0
      );
      setOrder(maxOrder + 1); // Suggest next order
    } catch (err) {
      // If fetch fails, keep current order
      console.error('Failed to fetch lessons:', err);
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!file) {
      setError('Please select a file to upload');
      return;
    }
    
    if (!learningPathId) {
      setError('Please select a learning path');
      return;
    }

    // Reset messages
    setError(null);
    setSuccess(null);
    setLoading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress (real implementation would use XMLHttpRequest)
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      // Upload lesson
      const result = await api.createLesson({
        title,
        description,
        learningPathId: learningPathId as number,
        order,
        published,
        file,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      // Show success message
      setSuccess(`✅ Lesson "${result.title}" uploaded successfully!`);
      
      // Clear form
      setTitle('');
      setDescription('');
      setFile(null);
      setPublished(false);
      
      // Reset file input
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload lesson');
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="upload-lesson">
      <h2>Upload New Lesson</h2>
      
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
        {/* Learning Path Dropdown */}
        <div className="form-group">
          <label htmlFor="learning-path">
            Learning Path <span className="required">*</span>
          </label>
          <select
            id="learning-path"
            value={learningPathId}
            onChange={(e) => handleLearningPathChange(Number(e.target.value))}
            required
            disabled={loading}
          >
            <option value="">-- Select a learning path --</option>
            {learningPaths.map((path) => (
              <option key={path.id} value={path.id}>
                {path.title} {!path.published && '(Draft)'}
              </option>
            ))}
          </select>
        </div>

        {/* Title Input */}
        <div className="form-group">
          <label htmlFor="title">
            Lesson Title <span className="required">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Introduction to SQL Injection"
            required
            disabled={loading}
          />
        </div>

        {/* Description Textarea */}
        <div className="form-group">
          <label htmlFor="description">
            Description (optional)
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of what this lesson covers..."
            rows={3}
            disabled={loading}
          />
        </div>

        {/* Order Number */}
        <div className="form-group">
          <label htmlFor="order">
            Order <span className="required">*</span>
          </label>
          <input
            type="number"
            id="order"
            value={order}
            onChange={(e) => setOrder(Number(e.target.value))}
            min="1"
            required
            disabled={loading}
          />
          <small>Order of this lesson in the learning path (e.g., 1, 2, 3...)</small>
        </div>

        {/* File Upload */}
        <div className="form-group">
          <label htmlFor="file-input">
            File (PDF or Video) <span className="required">*</span>
          </label>
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            accept=".pdf,video/mp4,video/webm,video/ogg"
            required
            disabled={loading}
          />
          {file && (
            <div className="file-info">
              📎 {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </div>
          )}
        </div>

        {/* Upload Progress */}
        {loading && uploadProgress > 0 && (
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${uploadProgress}%` }}
            >
              {uploadProgress}%
            </div>
          </div>
        )}

        {/* Published Checkbox */}
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              disabled={loading}
            />
            <span>Publish immediately</span>
          </label>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? '⏳ Uploading...' : '📤 Upload Lesson'}
        </button>
      </form>
    </div>
  );
};

export default UploadLesson;