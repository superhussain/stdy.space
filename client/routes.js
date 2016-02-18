Router.configure({
  layoutTemplate: 'app'
});

Router.route('/:course', function () {
	Session.set('course', this.params.course);
	this.render('messages');
});

Router.route('/', function () {
	this.redirect('/general');
});
