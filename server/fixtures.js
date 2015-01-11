/*
if (Cards.find().count() === 0) {

    var today = moment().toDate();

    var mikaId = Accounts.createUser({
        'username': 'admin',
        'password': 'admin'
    });

    var mika = Meteor.users.findOne(mikaId);

    var javascript = Decks.insert({
        name: 'Javascript',
        cardsCount: 3,
        userId: mika._id
    });

    var meteor = Decks.insert({
        name: 'Meteor',
        cardsCount: 2,
        userId: mika._id
    });

    Cards.insert({
        deckId: javascript,
        due: today,
        step: 0,
        delay: 0,
        front: 'What JS stands for?',
        back: 'JavaScript',
        userId: mika._id
    });

    Cards.insert({
        deckId: javascript,
        due: today,
        step: 1,
        delay: 0,
        front: 'var x = (10 > 5) ? true : false --> What is the value of x?',
        back: 'true',
        userId: mika._id
    });

    Cards.insert({
        deckId: javascript,
        due: today,
        step: 2,
        delay: 0,
        front: '"12" !== 12',
        back: 'true',
        userId: mika._id
    });

    Cards.insert({
        deckId: meteor,
        due: today,
        step: 3,
        delay: 0,
        front: 'Meteor is cool?',
        back: 'true',
        userId: mika._id
    });

    Cards.insert({
        deckId: meteor,
        due: today,
        step: 4,
        delay: 0,
        front: 'Meteor rules?',
        back: 'true',
        userId: mika._id
    });
}*/
