const app = require('./app');
app.set('port', process.env.NODE_ENV || 3001);

app.listen(app.get('port'), () => {
  console.log(`App is running on http://localhost:${app.get('port')}.`)
});

