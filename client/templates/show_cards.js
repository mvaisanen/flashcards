Template.showCards.helpers({
    cards: function () {
        var end = moment().toDate();
        // Finding the next card to show by due date
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
        $('#hidden-answer').toggleClass('hide');
        $('#difficulty').toggleClass('hide');
        $(event.currentTarget).toggle();
    },
    'click #difficulty button': function(event) {
        $('#hidden-answer').toggleClass('hide');
        $('#difficulty').toggleClass('hide');
        $('.show-answer-btn').toggle();

        var step = Cards.findOne({_id: this._id}).step;
        var newStep = parseInt(step) + parseInt(event.currentTarget.value);
        if (newStep < 0) { newStep = 0; }
        var incBy = Math.pow(2.5, newStep);
        var today = moment();

        if (event.currentTarget.id == 'again-btn') {
            var newDue = moment(today).add(10, 'minutes').toDate();
        } else {
            var newDue = moment(today).add(incBy,'days').toDate();
            console.log(newDue);
        }

        Cards.update(
            this._id, {
                $set: {due: newDue, step: newStep}
            }
        );

        if (isNaN(newStep)) {
            console.log("ERROR");
        } else {
            console.log("Success!");
        }

        }
    });