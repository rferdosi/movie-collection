export const authToken = (username, password) =>
  fetch('https://imdb.hriks.com/user/auth-token', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {
      'Content-type': 'application/json',
    },
  });

export const getCategories = () => fetch('https://imdb.hriks.com/category');

export const getMovies = ({limit = 20, offset = 0} = {}) =>
  fetch(`https://imdb.hriks.com/movie/?limit=${limit}&offset=${offset}`);

export const getTagMovies = ({tag, limit = 20, offset = 0} = {}) =>
  fetch(
    `https://imdb.hriks.com/movie/?tags=${tag}&limit=${limit}&offset=${offset}`,
  );

export const searchMovies = ({
  search,
  selectedTags,
  limit = 20,
  offset = 0,
}) => {
  const tags = selectedTags.map((tag) => `tags=${tag}`).join('&');
  return fetch(
    `https://imdb.hriks.com/movie/?search=${search}&${tags}&limit=${limit}&offset=${offset}`,
  );
};
