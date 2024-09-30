const API_URL = 'https://api.github.com/users/samamrani/repos';

export const fetchGithubRepos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
};

