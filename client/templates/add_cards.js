Template.addCards.helpers({
    decks: function () {
        return Decks.find();
    }
});

Template.addCards.events({
    'submit form': function (event) {
        event.preventDefault();
        var deckName = event.target.deckName.value;
        var deckIdVar = Decks.findOne({name: deckName})._id;
        var frontVar = event.target.front.value;
        $(event.target.front).val('');
        var backVar = event.target.back.value;
        $(event.target.back).val('');
        var today = moment().toDate();
        Cards.insert({
            deckId: deckIdVar,
            due: today,
            step: 0,
            front: frontVar,
            back: backVar
        });
        success("You added one new card.");
    }
});

