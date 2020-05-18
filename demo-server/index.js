let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let localip = require('localip');

let pusher = require('./pusher.js');
let userdata = require('./userdata.js');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', async (req, res) => {
  res.send(
    `<pre><b>Clubhouse Expo Pusher Presence Demo Server</b>

<a href="/pusher/auth">/push/auth</a> - auth endpoint</pre>
`
  );
});

let users = {};
let currentUser = {};

app.post('/users', (req, res) => {
  let name = req.body.name;
  let matchedUsers = Object.keys(users).filter((id) => users[id].name === name);

  if (matchedUsers.length === 0) {
    let id = generate_random_id();
    users[id] = currentUser = { id, name };
  } else {
    currentUser = users[matchedUsers[0]];
  }

  res.json({ currentUser, users });
});

app.post('/pusher/auth', (req, res) => {
  // console.log('Got an auth request with', {
  //   'req.body': req.body,
  //   'req.query': req.query,
  // });

  let username = req.query.username;
  let user = userdata[username];
  let presenceData = {
    user_id: 'noone',
    user_info: {
      firstName: 'Nowhere',
      lastName: 'Man',
      avatar: 'https://i.imgur.com/vNhUvtb.jpg',
    },
  };
  if (user) {
    presenceData = {
      user_id: username,
      user_info: user,
    };
  } else {
    console.error(`No user for username ${username}. Using unknown.`);
  }
  let socketId = req.body.socket_id;
  let channel = req.body.channel_name;
  let auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

module.exports = {
  app,
};

if (require.main === module) {
  let port = process.env.PORT || 5000;
  app.listen(port, () => {
    let ip = localip();
    console.log(`Demo server started at http://${ip}:${port}`);
  });
}
