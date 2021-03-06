require('dotenv').config();

let Pusher = require('pusher');

let appId = process.env.PUSHER_APP_ID;
let key = process.env.PUSHER_APP_KEY;
let secret = process.env.PUSHER_APP_SECRET;
let cluster = process.env.PUSHER_APP_CLUSTER;
let useTLS = true;

if (!(appId && key && secret && cluster)) {
  throw new Error(
    'Set the env vars for PUSHER_APP_ID, PUSHER_APP_KEY, PUSHER_APP_SECRET, PUSHER_APP_CLUSTER'
  );
}

let pusherConfig = {
  appId,
  key,
  secret,
  cluster,
  useTLS,
};


let pusher = new Pusher(pusherConfig);

module.exports = pusher;
