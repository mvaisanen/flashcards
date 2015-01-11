Template.deleteBtn.rendered = function(){

    $('.open-modal').on('click', function(e){
        $('#confirm').modal()
            .on('click', '#delete', function (e) {
                // Remove selected player
                Players.remove(Session.get("selectedPlayer"));

            });
    });
}