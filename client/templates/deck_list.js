Template.deckList.helpers({
    decks: function () {
        return Decks.find();
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
    'submit form': function(event) {
        event.preventDefault();
        var deckNameVar = event.target.deckName.value;
        $(event.target.deckName).val('');
        Decks.insert({
            name: deckNameVar,
            cardsCount: 0
        });
    }
});