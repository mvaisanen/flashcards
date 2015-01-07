if (Cards.find().count() === 0) {

    var today = moment().toDate();;

    var javascriptId = Decks.insert({
        name: 'Javascript',
        cardsCount: 3
    });

    var meteorId = Decks.insert({
        name: 'Meteor',
        cardsCount: 2
    });

    Cards.insert({
        deckName: javascriptId,
        due: today,
        front: 'What JS stands for?',
        back: 'JavaScript'
    });

    Cards.insert({
        deckName: javascriptId,
        due: today,
        front: 'var x = (10 > 5) ? true : false --> What is the value of x?',
        back: 'true'
    });

    Cards.insert({
        deckName: javascriptId,
        due: today,
        front: '"12" !== 12',
        back: 'true'
    });

    Cards.insert({
        deckName: meteorId,
        due: today,
        front: 'Meteor is cool?',
        back: 'true'
    });

    Cards.insert({
        deckName: meteorId,
        due: today,
        front: 'Meteor rules?',
        back: 'true'
    });
}