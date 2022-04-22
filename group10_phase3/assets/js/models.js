var characters = [],
    tools = [];

function ARModel(name, dialogue) {
    this.name = name;
    this.dialogue = dialogue;
}

ARModel.prototype.speak = function() {
    return this.dialogue;
}


//Character model
function Character(name, dialogue, tool, successDialogue, failedDialogue) {
    ARModel.call(this, name, dialogue);
    this.tool = tool;
    this.successDialogue = successDialogue;
    this.failedDialogue = failedDialogue;
}
Character.prototype = Object.create(ARModel.prototype);


//Tool model
function Tool(name, dialogue) {
    ARModel.call(this, name, dialogue);
}
Tool.prototype = Object.create(ARModel.prototype);

// we would repeat an intialization step for each character we have
// so the parts between { }, in the charactersArray = []
// for example if I had a second character, `chocobo` I would add like so:
function initiateModels() {
    var charactersArray = [
      {
        name: 'Monster',
        dialogue: 'RAAUUUH(You heard the roar sound of the monster, see the scary appearance of the craws, you decides to pick up your sword )',
        tool: new Tool('Sword', 'You pulled out the sword and ready to swing to the monster'),
        successDialogue: 'You killed the monster! Congratulations ! You can keep going now !',
        failedDialogue: 'You have been killed! Too bad!'
      },
      {
        name: 'Witch',
        dialogue: 'Don\' be scared, I\' not a bad person, I just need someone to talk with! If you trust me, then drink my magic potion, and I will tell everything you want!',
        tool: new Tool('Potion', 'Mysterious potion made by witch, you don\'t know what\'s contained inside, if you drink it, gods know what will happened next, alikely, no one knows what will happens if you drink it.'),
        successDialogue: 'You are realy a trustworthy person, I will tell you where the treasure is!',
        failedDialogue:'You ruthless villain, you don\'t deserve my reward ! (In a harsh tinnitus, you were turned into a ugly frog!)'
      },
      {
        name: 'Chest',
        dialogue: 'You finally reached to the chest, now is the time to claim your rewards!',
        tool: new Tool('someCoins', 'You are not greedy at all, so you choose to pick up some coins instead of all.'),
        tool :new Tool('allCoins','You decides to pick up all the coins, because they looks so shinny!'),
        successDialogue: 'You choose to pick up some coins, nothing happened, with these valuable gold coins, you lives for a long and happy life',
        failedDialogue:'You choose to pick up all the coins, and as the moment you pick the last piece, a dazzling light suddenly appears and shrouded you, nothing happened at first, but then you find that your greedy increased tremendously, and this leads your death with infinite insatisfied.'
      },
    ];

    charactersArray.forEach(function(character){
        characters.push(new Character(character.name, character.dialogue, character.tool, character.successDialogue, character.failedDialogue));
        if (character.tool) tools.push(character.tool);
    });

    console.log('characters', characters);
    console.log('tools', tools)
}

initiateModels();
