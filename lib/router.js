Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('/', {template: 'deckList'});
Router.route('add', {name: 'addCards'});
Router.route('decks', {name: 'deckList'});
Router.route('browse', {name: 'browse'});
Router.route('/decks/:name', {
    name: 'showCards',
    data: function() {
        var deckNameVar = this.params.name;
        return Decks.findOne({name: deckNameVar});
    }
});