Template.showCards.helpers({
    cards: function () {
        var end = moment().toDate();
        return Cards.findOne({deckId: this._id, due: {$lte: end}}, {sort: {due: -1}});
    },
    hard: function() {
        var step = Cards.findOne({_id: this._id}).step - 1;
        if (step < 0) { step = 0; }
        var days = Math.pow(2.5, step);
        return Math.round(days);
    },
    good: function() {
        var step = Cards.findOne({_id: this._id}).step + 1;
        if (step < 0) { step = 0; }
        var days = Math.pow(2.5, step);
        return Math.round(days);
    },
    easy: function() {
        var step = Cards.findOne({_id: this._id}).step + 2;
        if (step < 0) { step = 0; }
        var days = Math.pow(2.5, step);
        return Math.round(days);
    },
});

Template.showCards.events({
    // Show the answer
    'click .show-answer-btn': function (event) {
        $(event.target).prev().removeClass('hide');
        $(event.target).next().removeClass('hide');
        $(event.target).hide();
    },
    'click #difficulty button': function(event) {
        var step = Cards.findOne({_id: this._id}).step;
        var newStep = step + parseInt(event.target.value);
        if (newStep < 0) { newStep = 0; }
        var incBy = Math.pow(2.5, step);
        var today = moment();

        if (event.target.id == 'again-btn') {
            var newDue = moment(today).add(10, 'minutes').toDate()
        } else {
            var newDue = moment(today).add(incBy,'days').startOf('day').toDate();
        }

        Cards.update(
            this._id, {
                $set: {due: newDue, step: newStep}
                }
            );
    }
});