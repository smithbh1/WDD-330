const captainAmerica = {
    objName: 'captainAmerica',
    Heroname: 'Captain America',
    realName: 'Steve Rogers',
    race: 'Human',
    power: 'Superstrength',
    description: 'Captain America was once a regular soldier, then was given a super-soldier serum that enhanced his strength and entire physical body. After saving everyone from the power of the Tesaract, he was frozen in an iceberg for 70 years. Upon returning, he faced many enemies including Ultron, Thanos, and others. He chose to go back in time and spend his days with Peggy Carter and retired as "Captain America", giving the namesake to "Falcon".'
}

const spiderMan = {
    objName: 'spiderMan',
    Heroname: 'Spider-Man',
    realName: 'Peter Parker',
    race: 'Hybrid',
    power: 'Superstrength, Extra Senses, Web Creation, Stickypads',
    description: 'Peter was bitten by a radioactive spider while touring the medical super-corporation Oscorp and soon found himself equipped with incredible powers. He is super strong, super agile, capable of sensing danger, and able to shoot webs out of his hands'
}

const ironMan = {
    objName: 'ironMan',
    Heroname: 'Iron Man',
    realName: 'Tony Stark',
    race: 'Human',
    power: 'Money, Intelligence',
    description: 'An extremely wealthy business magnate and philanthropist who owns a company that deals with advance weapon and defence technologies. Best known for creating technology to save the planet.'
}

const hulk = {
    objName: 'hulk',
    Heroname: 'Hulk',
    realName: 'Bruce Banner',
    race: 'Hybrid',
    power: ' Nearly infinite superhuman strength, Durability, and Healing Factor.',
    description: 'As Banner, possesses a genius-level intellect & is an expert in multiple scientific fields, particularly the studies of physics & radiation. The Hulk is a skillful and capable warrior, demonstrating vast versatility and intuition in the battle.'
}
const blackWidow = {
    objName: 'blackWidow',
    Heroname: 'Black Widow',
    realName: 'Natasha Romanoff',
    race: 'Human',
    power: 'Martial Artist, Gymnast, Superhuman strength, Speed, Agility, and Endurance.',
    description: 'Black Widow is a deadly one-woman fighting force. An expert in many forms of martial arts, she is also a skilled gymnast and possesses superhuman strength, speed, agility, and endurance.'
}
const hawkeye = {
    objName: 'hawkeye',
    Heroname: 'Hawkeye',
    realName: 'Clint Barton',
    race: 'Human',
    power: 'Deadly Accuracy',
    description: 'For his extraordinary abilities, he was recruited by Nick Fury to be part of the Avengers Initiative. '
}

const thor = {
    objName: 'thor',
    Heroname: 'Thor',
    realName: 'Thor Odinson',
    race: 'Norse God',
    power: 'Super Strength, Power Over Lightning, Warrior',
    description: 'Thor is an Asgardian warrior-prince, the God of Thunder, and a self-proclaimed protector of Earth. Only Avenger not from Earth'
}

let heroes = [captainAmerica, spiderMan, ironMan, hulk, blackWidow, hawkeye, thor];

for (let i = 0; i < heroes.length; i++) {

    let obj = heroes.map(object => object.objName);
    let objIndex = obj[i];
    let text = heroes.map(object => object.Heroname);
    let option = document.createElement("button");
    option.innerHTML = text[i];
    option.value = objIndex;
    document.querySelector('#buttonList').appendChild(option);
}

$("button").click(function () {
    let heroValue = $(this).val();
    displayHeroes(heroValue);
});


function displayHeroes(value) {
    if (value === 'captainAmerica') {
        document.querySelector('.heroInfo').textContent = `${captainAmerica.Heroname}, also known as ${captainAmerica.realName}, is a ${captainAmerica.race} with 
    ${captainAmerica.power}. ${captainAmerica.description}`;
    }
    if (value === 'spiderMan') {
        document.querySelector('.heroInfo').textContent = `${spiderMan.Heroname}, also known as ${spiderMan.realName}, is a ${spiderMan.race} with 
    ${spiderMan.power}. ${spiderMan.description}`;
    }
    if (value === 'ironMan') {
        document.querySelector('.heroInfo').textContent = `${ironMan.Heroname}, also known as ${ironMan.realName}, is a ${ironMan.race} with 
    ${ironMan.power}. ${ironMan.description}`;
    }
    if (value === 'hulk') {
        document.querySelector('.heroInfo').textContent = `${hulk.Heroname}, also known as ${hulk.realName}, is a ${hulk.race} with 
    ${hulk.power}. ${hulk.description}`;
    }
    if (value === 'blackWidow') {
        document.querySelector('.heroInfo').textContent = `${blackWidow.Heroname}, also known as ${blackWidow.realName}, is a ${blackWidow.race} with 
    ${blackWidow.power}. ${blackWidow.description}`;
    }
    if (value === 'hawkeye') {
        document.querySelector('.heroInfo').textContent = `${hawkeye.Heroname}, also known as ${hawkeye.realName}, is a ${hawkeye.race} with 
    ${spiderMan.power}. ${spiderMan.description}`;
    }
    if (value === 'thor') {
        document.querySelector('.heroInfo').textContent = `${thor.Heroname}, also known as ${thor.realName}, is a ${thor.race} with 
    ${thor.power}. ${thor.description}`;
    }
}
