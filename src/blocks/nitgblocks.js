import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
  "type": "object",
  "message0": "{ %1 %2 }",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "MEMBERS"
    }
  ],
  "output": null,
  "colour": 230,
},
{
  "type": "member",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "MEMBER_NAME",
      "text": ""
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
},
{
  "type": "ActorFrame",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Actor Frame %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "ACTORFRAME",
    }
  ],
  "colour": 0
},
{
  "type": "Layer",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Layer %1 %2",
  "args0": [
    {
      "type": "input_dummy",
      "name": "LAYERLABEL"
    },
    {
      "type": "input_statement",
      "name": "LAYER",
      "align": "CENTRE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
},
{
  "type": "ActorType",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Type: %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "ACTORTYPE",
      "text": "Quad"
    },
    {
      "type": "input_dummy",
      "name": "Type",
      "align": "CENTRE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270
},
{
  "type": "Command",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 Command %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "CMDNAME",
      "text": "Init"
    },
    {
      "type": "input_dummy",
      "name": "CommandLabel",
      "align": "CENTRE"
    },
    {
      "type": "input_statement",
      "name": "Command"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270
},
{
  "type": "Function",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Function %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "FUNCTION",
      "text": "self"
    },
    {
      "type": "input_dummy",
      "name": "FUNCLABEL",
      "align": "CENTRE"
    },
    {
      "type": "input_statement",
      "name": "FUNC"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150
},
{
  "type": "IFDO",
  "tooltip": "",
  "helpUrl": "",
  "message0": "if %1 do %2",
  "args0": [
    {
      "type": "input_value",
      "name": "IF",
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30
},
{
  "type": "IFDOELSE",
  "tooltip": "",
  "helpUrl": "",
  "message0": "if %1 do %2 else %3",
  "args0": [
    {
      "type": "input_value",
      "name": "IF",
    },
    {
      "type": "input_statement",
      "name": "DO"
    },
    {
      "type": "input_statement",
      "name": "ELSE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30
},
{
  "type": "Generic_Custom",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "CUSTOM",
      "text": "\"Custom Thing\""
    },
    {
      "type": "input_dummy",
      "name": "CUSTOM",
      "align": "CENTRE"
    }
  ],
  "output": null,
  "colour": 0
},
{
  "type": "Generic_CodeCustom",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "CUSTOM",
      "text": "\"Custom Code\""
    },
    {
      "type": "input_dummy",
      "name": "CUSTOM",
      "align": "CENTRE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},
{
  "type": "VARSET",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Variable %1 %2 : %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "VARTYPE",
      "options": [
        [
          "Global",
          "var"
        ],
        [
          "Local",
          "local"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "VAR",
      "text": "Variable"
    },
    {
      "type": "input_value",
      "name": "VARSET"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
},
{
  "type": "GameState",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Gamestate: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "GAMESTATE"
    }
  ],
  "output": null,
  "colour": 180
},
{
  "type": "JoinBlock",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Join %1 With %2 Space between? %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "Join"
    },
    {
      "type": "input_value",
      "name": "With"
    },
    {
      "type": "field_checkbox",
      "name": "Space",
      "checked": "FALSE"
    },
    {
      "type": "input_dummy",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 30,
  "inputsInline": true
}
]);