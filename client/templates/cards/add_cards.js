Template.addCards.helpers({
    decks: function () {
        return Decks.find();
    }
});

Template.addCards.events({
    'submit form': function (event) {
        event.preventDefault();
        var currentUserId = Meteor.userId();
        var deckName = event.target.deckName.value;
        var deckIdVar = Decks.findOne({name: deckName})._id;
        var frontVar = event.target.front.value;
        $(event.target.front).val('');
        var backVar = event.target.back.value;
        var frontIsCodeVar = $('input[name="frontIsCode"]:checked').length > 0;
        var backIsCodeVar = $('input[name="backIsCode"]:checked').length > 0;
        $(event.target.back).val('');
        // Let's use Moment.js to deal with dates.
        var today = moment().toDate();
        Cards.insert({
            deckId: deckIdVar,
            due: today,
            step: 0,
            front: frontVar,
            frontIsCode: frontIsCodeVar,
            back: backVar,
            backIsCode: backIsCodeVar,
            userId: currentUserId
        });
        //update the deck with the number of comments
        Decks.update(deckIdVar, {$inc: {cardsCount: 1}});

        success("You added one new card.");
    }
});

