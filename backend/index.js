const http = require('http');
const morgan = require('morgan');
const app = require('./app');

app.use(morgan('tiny'));
const server = http.createServer(app);

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
