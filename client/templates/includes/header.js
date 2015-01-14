Template.header.helpers({
    isCurrentPage: function(pageName){
      	var path = Iron.Location.get().path.split("/")[1];
        return path == pageName
    }
});

Template.header.events({
    'click #logout': function(event, template) {
        event.preventDefault();
        Meteor.logout();
    }
});