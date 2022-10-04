const express = require('express')
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
const app = express();
const apiRoutes = require('./apiRoutes');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.json());
dotenv.config();
connectDB();
app.use(cors())


app.use('/api/v1',apiRoutes);
app.listen(port,()=>{
  console.log('Server working on port ',port);
 })



