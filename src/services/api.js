import axios from 'axios';

export const api = axios.create({
  baseURL: "https://trueway-geocoding.p.rapidapi.com",
  headers: {
    'X-RapidAPI-Key': '7526ae447fmsha0d84971429b2f7p13bff1jsn02644667261c',
    'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
  },
});