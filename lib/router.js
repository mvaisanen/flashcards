Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('/', {template: 'deckList'});
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