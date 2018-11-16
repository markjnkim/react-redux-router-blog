import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = `?key=WTF80085`;

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  // Navigates back to index upon post creation
  .then( () => callback() );

  return {
    type: CREATE_POST,
    payload: request
  };
}

// PostsShow needs ID
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  // Return the ACTION Object
  return {
    type: FETCH_POST,
    payload: request
  };
}

// deletePost needs ID
// Needs to navigate back to index using callback
export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(() => callback());
              

  return {
    type: DELETE_POST,
    payload: id
  };
}