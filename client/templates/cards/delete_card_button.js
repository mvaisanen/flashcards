Template.deleteCardButton.events({

    'click div .glyphicon-trash': function (event) {
        if (confirm("Yah sure wanna delete this card?")) {
            var currentCardId = this._id;
            var deckIdVar = Cards.findOne({_id: currentCardId}).deckId;
            Decks.update(deckIdVar, {$inc: {cardsCount: -1}});
            Cards.remove(currentCardId);
        }
    }
});