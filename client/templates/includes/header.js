Template.header.helpers({
    isCurrentPage: function(pageName){
        return Router.current().route.path().slice(1) == pageName
    }
});

Template.header.events({
    'click #logout': function(event, template) {
        event.preventDefault();
        Meteor.logout();
    }
});
