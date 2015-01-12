Template.browseCardItem.events({
    'submit form': function(event, template) {
        event.preventDefault();

        var newProperties = {
            front: event.target.front.value,
            back: event.target.back.value,
            frontIsCode: $('input[name="frontIsCode"]:checked').length > 0,
            backIsCode: $('input[name="backIsCode"]:checked').length > 0
        };

        Cards.update(
            this._id, {$set: newProperties});

        success("Card is now changed.");
        template.$('#'+id + ' + div').toggleClass('hide');
        template.$('#'+id).toggle();
    }
});