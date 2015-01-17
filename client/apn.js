var note = new apn.Notification()
var myDevice = new apn.Device(token);

// expires 1 hour from now
note.expiry = Math.floor(Date.now() / 1000) + 3600
note.sound = "ping.aiff";
note.badge = 3;
note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
note.payload = {'messageFrom': 'Caroline'};

apnConnection.pushNotification(note, myDevice);