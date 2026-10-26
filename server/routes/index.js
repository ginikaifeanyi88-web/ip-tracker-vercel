const url = require('url');
const express = require('express')
const router = express.Router()
const needle = require('needle');

//Env vars
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const GEO_API_KEY = process.env.GEO_API_KEY;
router.get('/', async (req, res) => {
  const query = { ...req.query };
  if (!query.ipAddress && !query.domain) query.ipAddress = req.ip;
  const params = new URLSearchParams({ [API_KEY_NAME]: GEO_API_KEY, ...query });

  try {
    const apiRes = await needle('get', `${API_BASE_URL}?${params}`);
    res.status(apiRes.statusCode).json(apiRes.body);
  } catch {
    res.status(502).json({ message: "Couldn't reach the geolocation service" });
  }
})
module.exports = router