const url = require('url');
const express = require('express')
const router = express.Router()
const needle = require('needle');

//Env vars
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const GEO_API_KEY = process.env.GEO_API_KEY;
router.get('/', async (req, res)=>{
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: GEO_API_KEY,
            ...url.parse(req.url, true).query
        })
            const apiRes = await needle('get', `${API_BASE_URL}?${params}`)
    const data = apiRes.body;
    res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:"bad data"});
    }

})
module.exports = router