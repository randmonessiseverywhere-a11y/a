/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/services/api.service.ts
/**
 * API Service
 *
 * Centralized API client for communicating with backend
 * Handles:
 * - JWT token attachment
 * - Error handling
 * - Base URL configuration
 */

const API_BASE_URL = 'http://localhost:3000'; // Change this to your backend URL

/**
 * Get JWT token from localStorage
 * Assumes token is stored after login
 */
const getAuthToken = (): string | null => {
  return localStorage.getItem('jwt_token');
};

/**
 * Base fetch wrapper with authentication
 */
const apiFetch = async (url: string, options: RequestInit = {}) => {
  const token = getAuthToken();
  // eslint-disable-next-line prettier/prettier
  
  const headers: HeadersInit = {
    ...options.headers,
  };

  // Add JWT token to Authorization header if available
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Add Content-Type for JSON requests (unless uploading files)
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  // Handle errors
  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: 'Request failed' }));
    throw new Error(
      error.message || `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  return response.json();
};

/**
 * API methods for admin operations
 */
export const api = {
  // ==================== LEARNING PATHS ====================
  /**
   * Create a new learning path
   */
  createLearningPath: async (data: {
    title: string;
    description: string;
    published?: boolean;
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return apiFetch('/admin/learning-paths', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Get all learning paths
   */
  getLearningPaths: async () => {
    return apiFetch('/admin/learning-paths');
  },

  /**
   * Get a specific learning path by ID
   */
  getLearningPathById: async (id: number) => {
    return apiFetch(`/admin/learning-paths/${id}`);
  },

  /**
   * Update a learning path
   */
  updateLearningPath: async (
    id: number,
    data: Partial<{
      title: string;
      description: string;
      published: boolean;
    }>,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return apiFetch(`/admin/learning-paths/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * Delete a learning path
   */
  deleteLearningPath: async (id: number) => {
    return apiFetch(`/admin/learning-paths/${id}`, {
      method: 'DELETE',
    });
  },

  // ==================== LESSONS ====================

  /**
   * Upload a lesson with file
   */
  createLesson: async (data: {
    title: string;
    description?: string;
    learningPathId: number;
    order: number;
    published?: boolean;
    file: File;
  }) => {
    // Create FormData for file upload
    const formData = new FormData();
    formData.append('title', data.title);
    if (data.description) formData.append('description', data.description);
    formData.append('learningPathId', data.learningPathId.toString());
    formData.append('order', data.order.toString());
    formData.append('published', (data.published ?? false).toString());
    formData.append('file', data.file);

    return apiFetch('/admin/lessons', {
      method: 'POST',
      body: formData, // Don't set Content-Type, browser will set it with boundary
    });
  },

  /**
   * Get all lessons, optionally filtered by learning path
   */
  getLessons: async (learningPathId?: number) => {
    const query = learningPathId ? `?learningPathId=${learningPathId}` : '';
    return apiFetch(`/admin/lessons${query}`);
  },

  /**
   * Delete a lesson
   */
  deleteLesson: async (id: number) => {
    return apiFetch(`/admin/lessons/${id}`, {
      method: 'DELETE',
    });
  },
};

/**
 * Helper function to save JWT token after login
 */
/**
 * Helper function to save JWT token after login
 */
export const saveAuthToken = (token: string) => {
  console.log('💾 Saving token...', token.substring(0, 20) + '...');
  localStorage.setItem('jwt_token', token);
  
  // Verify it was saved
  const saved = localStorage.getItem('jwt_token');
  console.log('✅ Token saved:', saved ? 'YES' : 'NO');
};
/**
 * Helper function to remove JWT token on logout
 */
export const clearAuthToken = () => {
  localStorage.removeItem('jwt_token');
};
