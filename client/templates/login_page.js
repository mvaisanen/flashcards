// trim helper
var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
};
// password validator helper
var isValidPassword = function(val) {
    return val.length >= 6 ? true : false;
};

Template.loginPage.events({

    'click #login' : function(event, template){
        event.preventDefault();

        // retrieve the input field values
        var username = template.find('#login-email').value
            , password = template.find('#login-password').value;

        // Trim and validate your fields here....
        username = trimInput(username);
        if (isValidPassword(password)) {
            // If validation passes, supply the appropriate fields to the
            Meteor.loginWithPassword(username, password, function (err) {
                if (err) throwError("OMG! Something went wrong.");
                else success("You have logged in.")
            });
        }
        else throwError("Password must be at least 6 digits.");

        return false;
    },
        'click #register' : function(event, template) {
            event.preventDefault();
            var username = template.find('#login-email').value
                , password = template.find('#login-password').value;

            // Trim and validate the input
            username = trimInput(username);
            if (isValidPassword(password)) {
                Accounts.createUser({username: username, password: password}, function (err) {
                    if (err) throwError("OMG! Something went wrong.");
                    else success("You are now one of us. How it feels?")
                });
            }
            else throwError("Password must be at least 6 digits.");

            return false;
        }
});