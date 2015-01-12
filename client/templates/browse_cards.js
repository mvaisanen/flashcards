Template.browse.helpers({
    decks: function () {
        //There must a better way to set the initial value for filter deck
        Session.set('deckName', Decks.findOne().name);
        return Decks.find();
    },
    cards: function () {
        var deckName = Session.get('deckName');
        var deckIdVar = Decks.findOne({name: deckName})._id;
        return Cards.find({deckId: deckIdVar});
    },
    due: function () {
        var dueVar = Cards.findOne({_id: this._id}).due;
        dueVar = moment(dueVar);
        var now = moment();
        var ms = dueVar.diff(now, 'milliseconds', true);
        ms = moment.duration(ms).asDays();
        dueVar = ms;
        if (dueVar < 0) {
            dueVar = "Today"
        } else if (dueVar < 2) {
            dueVar = "Tomorrow"
        } else {
            dueVar = Math.round(dueVar) + " days"}
        return dueVar;
    }
});

Template.browse.events({
    'click div .glyphicon-pencil': function (event, template) {
        id = this._id;
        template.$('#'+id + ' + div').toggleClass('hide');
        template.$('#'+id).toggle();
    },
    'change form': function(event, template) {
        Session.set('deckName', template.find('select').value);
    }

});