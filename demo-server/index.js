let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let localip = require('localip');

let pusher = require('./pusher.js');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/pusher/auth', (req, res) => {
  console.log('req.body', req.body);
  let socketId = req.body.socket_id;
  let channel = req.body.channel_name;
  let presenceData = {
    user_id: 'unique_user_id',
    user_info: {
      name: 'Mr Channels',
      twitter_id: '@pusher',
    },
  };
  let auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

if (require.main === module) {
  let port = process.env.PORT || 5000;
  app.listen(port, () => {
    let ip = localip();
    console.log(`Demo server started at http://${ip}:${port}`);
  });
}
