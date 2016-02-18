Meteor.startup(function() {

if (window.location.href.indexOf("stdy.space") > -1) {
  Meteor.absoluteUrl.defaultOptions.rootUrl = "http://stdy.space";  
} else {
  Meteor.absoluteUrl.defaultOptions.rootUrl = "http://localhost:3000";
}

  Meteor.users.remove({});
  Accounts.createUser({
    username: "admin",
    email: "test@test.com",
    password: "password"
  });

  // Factory.define('message', Messages, {
  //   text: function() {
  //   	return Fake.sentence();
  //   },
  //   user: Meteor.users.findOne()._id,
  //   timestamp: Date.now(),
  //   course: 'EECS1001'
  // });

  // Add this if you want to remove all messages before seeding
  // Messages.remove({});
  //
  // if (Messages.find({}).count() === 0) {
  //   _(10).times(function(n) {
  //     Factory.create('message');
  //   });
  // }

  Courses.remove({});
  Courses.insert({
    name: "EECS1001"
  });
  Courses.insert({
    name: "EECS1011"
  });
  Courses.insert({
    name: "EECS1012"
  });
  Courses.insert({
    name: "EECS1019"
  });
  Courses.insert({
    name: "EECS1021"
  });
  Courses.insert({
    name: "EECS1022"
  });
  Courses.insert({
    name: "EECS1028"
  });
  Courses.insert({
    name: "EECS1030"
  });

  // Upload to Server

  UploadServer.init({
    tmpDir: process.env.PWD + '/public/tmp',
    uploadDir: process.env.PWD + '/public/uploads',
    checkCreateDirectories: true
  });


});
