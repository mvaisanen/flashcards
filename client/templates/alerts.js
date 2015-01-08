Template.errors.helpers({
    errors: function () {
        return Errors.find();
    }
});

Template.error.rendered = function () {
    var error = this.data;
    Meteor.setTimeout(function () {
        Errors.remove(error._id);
    }, 3200);
};

Template.successes.helpers({
    successes: function () {
        return Successes.find();
    }
});

Template.success.rendered = function () {
    var success = this.data;
    Meteor.setTimeout(function () {
        Successes.remove(success._id);
    }, 3200);
};