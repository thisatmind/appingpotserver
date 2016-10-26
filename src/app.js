import express from 'express';
import bodyParser from 'body-parser';
import user from './router/user-router';

const app = express();

// express config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// express router
app.use('/user', user);

app.listen('8000', (req, res, next) => {
   console.log('server is listening 8000');
});