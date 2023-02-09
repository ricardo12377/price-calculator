import axios from 'axios';

const api = axios.create({
  baseURL: process.env.cmsPlans
});

export const strapiPriceCalculator = axios.create({
  baseURL: `${process.env.strapiPriceCalculator}`
});

export default api;
