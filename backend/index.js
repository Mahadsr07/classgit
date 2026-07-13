const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const AuthRouter = require('./Routes/AuthRouter');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mahadsardar07:mahadsr07@cluster0.0zwslp7.mongodb.net/?appName=Cluster0')
.then(() => console.log('MongoDB Connected')) 
.catch(err => console.log(err));

app.use('/auth', AuthRouter);

app.listen(8000, () => {
    console.log('Server running on 8000');
});