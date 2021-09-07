const API = {
  getScores: async () => {
    const res = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GoxUFqOCbZrFouDav9Ij/scores/',
      { method: 'GET' },
    );
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.json();
      return data;
    }
  },
  postScore: async (user, score) => {
    const res = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GoxUFqOCbZrFouDav9Ij/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.json();
      return data;
    }
  },
};

export default API;
