Template.header.helpers({
    isCurrentPage: function(pageName){
      	var pathArr = window.location.pathname.split("/");
      	var firstLevelPath = pathArr[1];
        console.log(pageName);
        console.log(firstLevelPath);
        return firstLevelPath == pageName
    }
});

Template.header.events({
    'click #logout': function(event, template) {
        event.preventDefault();
        Meteor.logout();
    }
});


// var str = "path/deck/jea"
// undefined
// str
// "path/deck/jea"
// str.split("/")
// ["path", "deck", "jea"]
// str
// "path/deck/jea"
// str = str.split("/")[1]
// "deck"
// str
// "deck"