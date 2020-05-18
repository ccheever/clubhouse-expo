let Pusher = require('pusher');

let appId = process.env.PUSHER_APP_ID || '1002754';
let key = process.env.PUSHER_APP_KEY || 'c8ecb3047849cea1c0a7';
let secret = process.env.PUSHER_APP_SECRET || '6c63a325354b86d9b058';
let cluster = process.env.PUSHER_APP_CLUSTER || 'us3';
let useTLS = true;

let pusher = new Pusher({
  appId,
  key,
  secret,
  cluster,
  useTLS,
});

module.exports = pusher;
