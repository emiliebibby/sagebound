const API_URL = import.meta.env.VITE_API_URL || '';

// Utility to call the backend API from the Vue app
export async function createUserInMongo({ name, email, passwordHash, avatarUrl, firebaseUid }) {
  const res = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, passwordHash, avatarUrl, firebaseUid })
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || 'Failed to create user in MongoDB');
  }
  return res.json();
}
