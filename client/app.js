//temporary
Meteor.subscribe('profile');
SimpleSchema.debug = true

Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('course'));
  });
});

Template.messages.helpers({
  messages: Messages.find({})
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Template.registerHelper('currentCourse', function () {
	return Session.get('course');
});

Template.registerHelper("timestampToTime", function (timestamp) {
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.registerHelper("usernameFromId", function (userId) {
	var user = Meteor.users.findOne({_id: userId});
	if (typeof user === "undefined") {
		return "Anonymous";
	}
	if (typeof user.services.facebook !== "undefined") {
		return user.services.facebook.username;
	} else if (typeof user.services.twitter !== "undefined") {
		return user.services.twitter.username;
	} else if (typeof user.services.google !== "undefined") {
		return user.services.google.username;
	}
	return user.username;
});

Template.listings.helpers({
	courses: function () {
		return Courses.find();
	}
});

Template.course.helpers({
	active: function () {
		if (Session.get('course') === this.name) {
			return "active";
		} else {
			return "";
		}
	},
  messageCount: function() {
		return Messages.find().count();
	}
});

Template.course.events({
    'click .course': function (e) {
        Session.set('course', this.name);
    }
<<<<<<< HEAD
});
=======
});


Template.Profile.helpers({
  users: function () {
    return Meteor.users;
  },
  userSchema: function () {
    return Schema.User;
  },
  profile: function () {
    if (Meteor.user())
      return Meteor.user()
  }
});
>>>>>>> a87893d4396c5e7710565d6b6e227c64d4712887
