const express = require('express');
const cors = require("cors");
const rateLimit = require('express-rate-limit');

require('dotenv').config();
const PORT = process.env.PORT || 8000

const app = express();
// Enable cors
app.use(cors({
    origin: 'http://localhost:3000'
}));


// rate limiting
const limiter = rateLimit({
    windowMs: 10*60*1000,
    max: 100
})
app.use(limiter);
app.set('trust proxy', 1)
//Routes
app.use('/api', require('./routes'))


app.listen(PORT, ()=>{console.log(`Server is running on ${PORT}`)})