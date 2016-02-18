Meteor.subscribe('courses');
Meteor.subscribe('allUsernames');

Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('course'), function () {
    	self.autorun(function() {
			Messages.find({course: Session.get('course')}).count();
			Meteor.setTimeout(function () {
				$('.message-history').scrollTop(Number.MAX_VALUE);
			}, 100);
		});
    });
  });
});
