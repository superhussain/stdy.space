Meteor.methods({
  newMessage: function(message) {
    message.timestamp = Date.now();
    message.user = Meteor.userId();
    Messages.insert(message);
  },
  newUpload: function(upload) {
    upload.timestamp = Date.now();
    upload.user = Meteor.userId();
    Messages.insert(upload);
  }
});
