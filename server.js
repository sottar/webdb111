const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 8008);

app.use((req, res, next) => {
  const host = req.get('host');
  const protocol = host.startsWith('localhost') ? 'http' : 'https';
  const origin = `${protocol}://${host}`;
  res.set('Access-Control-Allow-Origin', origin);
  res.set('AMP-Access-Control-Allow-Source-Origin', origin); // AMP で動くことを証明するためにつける必要がある
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(app.get('port'), function() {
  console.log(`Running on http://localhost:${app.get('port')}`);
});
