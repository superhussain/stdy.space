// if Server
if (window.location.href.indexOf("stdy.space") > -1) {
  Meteor.absoluteUrl.defaultOptions.rootUrl = "http://stdy.space";
} else {
  Meteor.absoluteUrl.defaultOptions.rootUrl = "http://localhost:3000";
}

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

Template.registerHelper('currentCourse', function() {
  return Session.get('course');
});

Template.registerHelper("timestampToTime", function(timestamp) {
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(minutes.length - 2) + ':' + seconds.substr(seconds.length - 2);
});

Template.registerHelper("usernameFromId", function(userId) {
  var user = Meteor.users.findOne({
    _id: userId
  });
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

Template.registerHelper("userPhoto", function(userId) {
  var user = Meteor.users.findOne({
    _id: userId
  });
  return user.profile.photoUrl;
});

Template.listings.helpers({
  courses: function() {
    return Courses.find();
  }
});

Template.course.helpers({
  active: function() {
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
  'click .course': function(e) {
    Session.set('course', this.name);
  }
});


Template.Profile.helpers({
  users: function() {
    return Meteor.users;
  },
  userSchema: function() {
    return Schema.User;
  },
  profile: function() {
    if (Meteor.user())
      return Meteor.user()
  }
});

Template.drop.helpers({
  postImg: function() {
    return {
        finished: function(index, fileInfo, context) {
          Meteor.call('newUpload', {
            img: fileInfo,
            course: Session.get('course')
          });
          console.log(index);
          console.log(fileInfo);
          console.log(context);
        }
    }
  }
});

Template.drop.events({
  'click .btn-upload': function(e) {
    $('.upload-bar').slideToggle(500);
  }
});


(function ($) {
  jQuery(document).ready(function ($) {
    mobile();
  });
})(jQuery);

var mobile = function() {
  if ($('body').width() < 560) {
    $('.course-menu').prepend('<img src="hamburger.png" class="hamburger">')
  }
}
