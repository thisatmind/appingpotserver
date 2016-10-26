import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen('8000', (req, res, next) => {
   console.log('server is listening 8000');
});