import app from './app.js'

// Starting server on given port
app.listen(process.env.PORT || 3001, () => {
  console.log('Server started');
});