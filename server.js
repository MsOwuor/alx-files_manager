import express from 'express';
import routes from './routes/index';

const app = express();
const port = process.env.PORT || 5000;

app.set('port', port);

app.use(express.json());

app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;

