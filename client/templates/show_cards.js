Template.showCards.helpers({
    cards: function () {
        console.log(this);
        var end = moment().toDate();

        return Cards.findOne({
            deckName: this._id,
            due: {"$lt": end}
        });
    }
});

Template.showCards.events({
    // Show the answer
    'click .show-answer-btn': function (event) {
        $(event.target).prev().removeClass('hide');
        $(event.target).next().removeClass('hide');
        $(event.target).hide();
    },
    'click #difficulty button': function(event) {
        var incBy = parseInt(event.target.value);
        console.log(incBy);
        console.log(typeof incBy);
        var today = moment();
        var newDue = moment(today).add(incBy,'days').toDate();
        Cards.update(
            this._id, {
                $set: {due: newDue}
                }
            );
    }
});