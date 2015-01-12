Router.onBeforeAction(function () {
    // all properties available in the route function
    // are also available here such as this.params

    if (!Meteor.user()) {
        // if the user is not logged in, render the Login template
        this.render('loginPage');
    } else {
        // otherwise don't hold up the rest of hooks or our route/action function from running
        this.next();
    }

});

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    waitOn: function() {
        return [Meteor.subscribe('decks'), Meteor.subscribe('cards')];
    }
});

Router.route('/', {template: 'deckList'});
Router.route('/login', {template: 'loginPage', name: 'loginPage'});
Router.route('add', {name: 'addCards'});
Router.route('decks', {name: 'deckList'});
Router.route('browse', {name: 'browse'});
Router.route('/decks/:_id', {
    name: 'showCards',
    data: function() {
        var deckIdVar = this.params._id;
        return Decks.findOne({_id: deckIdVar});
    }
});