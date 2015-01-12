Template.deckList.helpers({
    decks: function () {
        return Decks.find();
    },
    cardsDue: function() {
        var end = moment().toDate();
        // How many cards are due today. This will also be shown on deck list page.
        var deckId = this._id;
        return Cards.find({deckId: this._id, due: {$lte: end}}).count();
    }
});

Template.deckList.events({
    'click #create-btn': function(event) {
        $('form').removeClass('hide');
        $(event.target).hide();
    },
    'click #cancel-btn': function (event) {
        event.preventDefault();
        $('form').addClass('hide');
        $('#create-btn').show();
    },
    'submit .add-deck': function(event) {
        event.preventDefault();
        var currentUserId = Meteor.userId();
        var deckNameVar = event.target.deckName.value;
        $(event.target.deckName).val('');
        Decks.insert({
            name: deckNameVar,
            cardsCount: 0,
            userId: currentUserId
        });
    },
    'click .edit-btn': function (event, template) {
        id = this._id;
        console.log(id);
        template.$('.'+id).toggleClass('hide');
    },
    'submit .edit-deckname': function (event, template) {
        event.preventDefault();
        var newDeckName = event.target.deckName.value;
        console.log(newDeckName);
        Decks.update(this._id, {$set: {name: newDeckName}});
        template.$('.'+id).toggleClass('hide');
    }
});