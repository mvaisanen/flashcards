if (Cards.find().count() === 0) {

    var today = moment().toDate();

    var javascript = Decks.insert({
        name: 'Javascript',
        cardsCount: 3
    });

    var meteor = Decks.insert({
        name: 'Meteor',
        cardsCount: 2
    });

    Cards.insert({
        deckId: javascript,
        due: today,
        step: 0,
        delay: 0,
        front: 'What JS stands for?',
        back: 'JavaScript'
    });

    Cards.insert({
        deckId: javascript,
        due: today,
        step: 1,
        delay: 0,
        front: 'var x = (10 > 5) ? true : false --> What is the value of x?',
        back: 'true'
    });

    Cards.insert({
        deckId: javascript,
        due: today,
        step: 2,
        delay: 0,
        front: '"12" !== 12',
        back: 'true'
    });

    Cards.insert({
        deckId: meteor,
        due: today,
        step: 3,
        delay: 0,
        front: 'Meteor is cool?',
        back: 'true'
    });

    Cards.insert({
        deckId: meteor,
        due: today,
        step: 4,
        delay: 0,
        front: 'Meteor rules?',
        back: 'true'
    });
}