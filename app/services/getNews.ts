import axios from 'axios';

export const getData = async () => {
  const res = await axios.get(
    'https://newsapi.org/v2/everything?pageSize=30&q=bitcoin&apiKey=d9898103dc804c6fa35419cc5db27a59',
  );
  return res.data.articles;
};

export const searchData = async (search: string) => {
  const res = await axios.get(
    `https://newsapi.org/v2/everything?pageSize=30&q=${search}&apiKey=d9898103dc804c6fa35419cc5db27a59`,
  );
  return res.data.articles;
};
