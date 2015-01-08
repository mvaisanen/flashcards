// Local (client-only) collections
Errors = new Mongo.Collection(null);

throwError = function (message) {
    Errors.insert({message: message});
};

Successes = new Mongo.Collection(null);

success = function (message) {
    Successes.insert({message: message});
};