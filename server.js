import express from 'express';
import config from 'dotenv/config';
import { homeRouter } from './routes/homePage.js';
import { resultRouter } from "./routes/result.js"
import { engine } from 'express-handlebars';

const app = express();

app.use(
    express.urlencoded({
        extended: true
    }),
    express.json()
);

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/', homeRouter);
app.use('/result', resultRouter);

app.listen(process.env.ROUTE, (req, res) => {
    console.log(`Server listening on port ${process.env.ROUTE}`);
})
