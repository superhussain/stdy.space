Meteor.users.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

Schema = {};

Schema.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  birthday: {
    type: Date,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ['Not Specified', 'Male', 'Female'],
    optional: true
  },
  photoUrl: {
    type: String,
    defaultValue: 'placeholder-avatar.png',
    //regEx: SimpleSchema.RegEx.Url,
    optional: true,
    autoform: {
      afFieldInput: {
        // type: 'fileUpload',
        type: 'disabled',
        collection: 'Images',
        label: 'Choose File'
      },
      afFormGroup: {
        label: false
      }
    }
  },
  bio: {
    type: String,
    optional: true
  }
});

Schema.User = new SimpleSchema({
  username: {
    type: String,
    optional: true
  },
  emails: {
    type: Array,
    optional: true
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date,
    optional: true
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  heartbeat: {
    type: Date,
    optional: true
  }
});

Meteor.users.attachSchema(Schema.User);
