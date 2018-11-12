var admin = require('firebase-admin');

// var serviceAccount = require('fcm-push-example-e9f40-firebase-adminsdk-s9eam-4a53d259d6.json');

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'fcm-push-example-e9f40',
    clientEmail: 'firebase-adminsdk-s9eam@fcm-push-example-e9f40.iam.gserviceaccount.com',
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCMpa5g1TMjRnx4\nf+2LNV4mmjWEu51G5MKr8zC6T7NhtbEJcOyoVe8NPcSCmq3V74LwZ2/goQtKyt8I\nbtcCQ+fc3aenhmPD68eYQeeyV0J6V1Nt74k+ZwPPfaI5DXJaNXJOqr7Ly1At1C/h\nu5VrjhoebwcvnpT0hAvITvRiJG73RPd06Tk3Ty+dfNCoUd+kcsYyMIlm1dKlDpNo\nlFajop/XuF7PNbUFPeHKaHX4UvpxRQgY6JtyoMCfqeOnh0N78C1BDyVUca0TpFc8\nUKJE92vc1w3cTuqzhE3NYQRq2O6y5kVorJxKEuGRu2cWoB6w9tQMqltQ1PMznVuD\nLuZLu8RTAgMBAAECggEALRQJMNYEXuD/keuGqiB/vaWdU56CSS+WyV/XlU9oMf/2\n7wy3fTiVtsu+SRHkd3YdpImyjO9w3BbrpxtHZF15Wgvc6U+keC4AuecdqMZY8zc7\n8Tdd6JdB3GXq8ZhCt3D74wTMxCq01wt0EUh7Go7gBjMVvYh5O2l7EUdlAnOk8TE6\n583HpxB26hAvIFJOnmJV2JWHoQLsIcNmLp44fGU4Iz0CfVl+mvI2J7/6luNJqbY7\nzcPfARfhG5Apl6P2INzVlUWP8zXJn9iqtXvcgTCKZd+9vE/vVeDD/YNPSF4KLhzn\nv6KVt36yRezZdqo5cpMZzkvq5T92IA68Pbw/1NY2MQKBgQDCOL/DaNllKnpOJNuT\n+kUxyMKdL67hbasRCD0WYFLaIwk8I+JSZK8QWoJl0RoVnAgyXN10QI7bLA85+4pD\nZFRZn4mr6bp9Izx2EzHs5rMO8WKpZTe9uoAXW3RIZ1MLBlb/CoXCthNuudUvRrTv\nyEUqdZzgGH4s1vg72I16wHGXSwKBgQC5YmwufJhB7gesz3iAkyTjHsODcceiOGfv\nHRjZcOiu6/DXimhDXFWF6ULLUcVDfm1DFNu/Cn+OwYc4waBtJhaGl4zYViJLLspZ\nLpjwEz1ib4ea1VQw4yBX3CXia7XtFLzuZCsZXe3BTKR/dOfayvMa57/9ii+1iWZE\ny9wugfc6GQKBgEmB+PIYaM8lOI0C3igvfKjO9vlO5r1jKG+V0qj5Y+IziHc+jZXp\njWh/GQM4FMtA9sk45IfvNyI0lr63OSkwe8w/2Xc7St25zFRUB31GA1cQfOrn6CTi\nxUAR2PzePkvZ5ms4rE95YflyVAFEnY5zGdpsESevnXGTGvhriYB//X3pAoGASxLc\nlIbIcgqe+RCb0BXGnmNa8eQl4D/PdznlUkkzMYNC6UaXqo+94pjv/76BkC+mt7++\nrcLmnT0qMYXYHduKy76bvxBCmwe70hnYvYBNH4vi8oTpr1KLSolQnjzYU8ZOLIxM\nF9295sXO5/7D1grSIFcxnM9VOsMFs16LMBpZsCECgYEAkv/YtG0Thyj3t4g9HeGf\nvJj7n8wK3bn1cpoO1EhbHnUq0ZJpSzOw1pnh4jmur9YxNs/epYbyucjkLGJLyRi9\nD8CEK1/Au5y4x/z6NPDrEH6H3B6yJV4/B2k18rLX1bn4s6b4YCzgep5ytr8/tOFd\nOFx35RhBjXf5bXjWhkmEaUU=\n-----END PRIVATE KEY-----\n'
  }),
  databaseURL: 'https://fcm-push-example-e9f40.firebaseio.com/'
});

// This registration token comes from the client FCM SDKs.
// var registrationToken = 'fOi28Oq1BFs:APA91bFsuYxnw0Vd_t9t3JzUWEckHD1tiwWeP59CRWW_yF2zrkOVoQobWyeYoAVcY7UsktBZJaxKSDbdnqGSN3lZJ-4AvM_7rMjw_-H2jG9m-k88cAYNQ6cbm9chnBiizrFACH1ZneIq';
var registrationToken = 'c8pVzJgh5hc:APA91bEmVha20DHGQTDxUb7Tt8DBJj-iIHZe3ZoYOjpFKgyYfKTINfkaU070NcUNxYUu_gjX-faW5BnBCIuq6e-rSjAWJQa6SBrqSAYeJRZAwrHjDoCk8UuDhamdcVrXfpMduyajzQaM';

// See documentation on defining a message payload.
var message = {
	notification: {
		title: '오류상황 감지',
		body: '시편이 떨어져 충격이 감지되었습니다.'
	},
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });