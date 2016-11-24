import express from 'express';
import bodyParser from 'body-parser';
import user from './router/user-router';
import usage from './router/usage-router';
import FirebaseManager from './firebase-util';
import install from './router/install-router';
import count from './router/count-router';
import reco from './router/reco-router';
const app = express();

// express config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({
    limit: '10mb'
}))

// express router
app.use('/user', user);
app.use('/usage', usage);
app.use('/count', count);
app.use('/install', install);
app.use('/reco', reco);

const port = process.env.PORT || 8080;

app.listen(port, (req, res, next) => {
   console.log(`server is listening ${port}`);
});
