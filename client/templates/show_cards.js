Template.showCards.helpers({
    cards: function () {

        var end = moment().endOf('day').toDate();
        console.log(end);

        return Cards.findOne({deckId: this._id, due: {$lte: end}}, {sort: {due: -1}});
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

        var today = moment();
        var newDue = moment(today).add(incBy,'days').toDate();
        Cards.update(
            this._id, {
                $set: {due: newDue}
                }
            );
    }
});