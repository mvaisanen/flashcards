Template.deleteDeckButton.events({

    'click div .glyphicon-trash': function (event) {
        if (confirm("Yah sure wanna delete dis card?")) {
            Decks.remove(this._id);
        }
    }
});