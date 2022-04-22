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
        dialogue: 'RAAUUUH(You heard the roar sound of the monster, see the scary appearance of the craws, you decides to )',
        tool: new Tool('Chest', 'You have found Bowser\'s skull!'),
        successDialogue: 'Thanks for my skull!'
      },
      {
        name: 'Witch',
        dialogue: 'sqauak squaaak SQUAKKKKK',
        tool: new Tool('seeds', 'You have found Chocobo\'s bird seed!'),
        successDialogue: 'Squeek! Yum!'
      },
      {
        name: 'demo',
        dialogue: 'Building Interactive Systems!',
      }
    ];

    charactersArray.forEach(function(character){
        characters.push(new Character(character.name, character.dialogue, character.tool, character.successDialogue));
        if (character.tool) tools.push(character.tool);
    });

    console.log('characters', characters);
    console.log('tools', tools)
}

initiateModels();
