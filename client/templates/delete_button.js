Template.deleteCardButton.events({

    'click div .glyphicon-trash': function (event) {
        if (confirm("Yah sure wanna delete this card?")) {
            var currentCardId = this._id;
            Cards.remove(currentCardId);
        }
    }
});