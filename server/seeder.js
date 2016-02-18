Meteor.startup(function() {

  Meteor.absoluteUrl.defaultOptions.rootUrl = "http://stdy.space";

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
    tmpDir: process.cwd() + '/../../../../../public/uploads/tmp',
    uploadDir: process.cwd() + '/../../../../../public/uploads/',
    checkCreateDirectories: true
  });

});
