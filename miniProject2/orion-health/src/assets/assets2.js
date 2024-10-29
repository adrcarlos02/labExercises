// src/assets/assets2.js

// Function to get users from localStorage or return an empty array
const getUsersFromStorage = () => {
  const users = localStorage.getItem('mockUsers');
  return users ? JSON.parse(users) : [];
};

// Function to save users to localStorage
const saveUsersToStorage = (users) => {
  localStorage.setItem('mockUsers', JSON.stringify(users));
};

// Function to add new user profile
export const addUserProfile = (newUser) => {
  const mockUsers = getUsersFromStorage(); // Retrieve current users
  // Check if the user already exists
  const exists = mockUsers.find(user => user.email === newUser.email);
  if (!exists) {
    mockUsers.push(newUser); // Add new user to the array
    saveUsersToStorage(mockUsers); // Save updated users back to localStorage
    console.log('User added:', newUser);
    return true; // Indicate success
  } else {
    console.error('User already exists with this email:', newUser.email);
    return false; // Indicate failure
  }
};

// Function to check user credentials against stored users
export const checkUserCredentials = (email, password) => {
  const mockUsers = getUsersFromStorage(); // Retrieve current users
  return mockUsers.some(user => user.email === email && user.password === password);
};

// Function to get user profile (if needed)
export const getUserProfile = (email) => {
  const mockUsers = getUsersFromStorage(); // Retrieve current users
  return mockUsers.find(user => user.email === email);
};

// Optional: Initialize with mock data (only if localStorage is empty)
export const initializeMockUsers = () => {
  if (getUsersFromStorage().length === 0) {
    const initialUsers = [
      {
        email: 'user1@example.com',
        password: 'password1', // In real applications, use hashed passwords!
        name: 'User One',
      },
      {
        email: 'user2@example.com',
        password: 'password2',
        name: 'User Two',
      },
      {
        email: 'user3@example.com',
        password: 'password3',
        name: 'User Three',
      },
    ];
    saveUsersToStorage(initialUsers);
  }
};