Template.addCards.helpers({
    decks: function () {
        return Decks.find();
    }
});

Template.addCards.events({
    'submit form': function (event, template) {
        event.preventDefault();
        var deckNameVar = event.target.deckName.value;
        var frontVar = event.target.front.value;
        var backVar = event.target.back.value;
        Cards.insert({
            deckName: deckNameVar,
            front: frontVar,
            back: backVar
        });
    }
});