// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default async function handler(req, res) {
  try {
    const { limit = 100, offset = 0 } = req.body;
    const response = await pokeApi.get(
      `/pokemon?limit=${limit}&offset=${offset}`
    );
    const { results } = response.data;
    res.status(200).json({ results });
  } catch (error) {
    console.error('Error fetching data from PokeAPI:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
