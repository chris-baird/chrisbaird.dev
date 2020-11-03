const app = require('./app');

// Starting server on given port
app.listen(process.env.PORT || 3001, () => {
  console.log('Server started');
});