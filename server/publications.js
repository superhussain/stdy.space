Meteor.publish('messages', function (course) {
	return Messages.find({course: course});
});

Meteor.publish('courses', function () {
	return Courses.find();
});

Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
  	"username": 1,
  	"services.facebook.username": 1,
    "services.twitter.username": 1,
    "services.google.username": 1
  }});
});

//temporary
Meteor.publish('profile', function() {
  return Meteor.users.find();
});
