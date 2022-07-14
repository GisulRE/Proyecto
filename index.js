const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors(
 {
  application: {
    cors: {
      server: [
        {
          origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
          credentials: true,
        },
      ],
    },
  },
}
));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');    
     next();
   });

app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000);
console.log('server on port 3000 listening!');