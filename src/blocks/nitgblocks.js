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
},
{
  "type": "DO",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Do %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},
{
  "type": "Equality",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "field_input",
      "name": "Arg1",
      "text": "Value 1"
    },
    {
      "type": "field_dropdown",
      "name": "Sign",
      "options": [
        [
          ">",
          ">"
        ],
        [
          ">=",
          ">="
        ],
        [
          "~=",
          "~="
        ],
        [
          "==",
          "=="
        ],
        [
          "<=",
          "<="
        ],
        [
          "<",
          "<"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "Arg2",
      "text": "Value 2"
    },
    {
      "type": "input_dummy",
      "name": "EqualityDo"
    }
  ],
  "output": null,
  "colour": 30
},
{
  "type": "MoveArrow",
  "tooltip": "Put after a Gamestate connector to move an arrow",
  "helpUrl": "",
  "message0": "Mod %1 %2 Arrow %3 Speed %4 Magnitude %5 %6",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Type",
      "options": [
        [
          "Move X",
          "movex"
        ],
        [
          "Move Y",
          "movey"
        ],
        [
          "Move Z",
          "movez"
        ],
        [
          "Rotate X",
          "rotationx"
        ],
        [
          "Rotate Y",
          "rotationy"
        ],
        [
          "Rotate Z",
          "rotationz"
        ],
        [
          "Zoom X",
          "zoomx"
        ],
        [
          "Zoom Y",
          "zoomy"
        ],
        [
          "Zoom Z",
          "zoomz"
        ],
        [
          "Skew X",
          "skewx"
        ],
        [
          "Skew Y",
          "skewy"
        ]
      ]
    },

    {
      "type": "input_end_row",
      "name": "Label",
      "align": "CENTRE"
    },
    {
      "type": "field_dropdown",
      "name": "Num",
      "options": [
        [
          "Arrow 1",
          "0"
        ],
        [
          "Arrow 2",
          "1"
        ],
        [
          "Arrow 3",
          "2"
        ],
        [
          "Arrow 4",
          "3"
        ],
        [
          "Arrow 5",
          "4"
        ],
        [
          "Arrow 6",
          "5"
        ],
        [
          "Arrow 7",
          "6"
        ],
        [
          "Arrow 8",
          "7"
        ],
        [
          "All",
          ""
        ]
      ]

    },
    {
      "type": "field_number",
      "name": "Spd",
      "value": 1
    },
    {
      "type": "field_number",
      "name": "Amp",
      "value": 50
    },
    {
      "type": "input_end_row",
      "name": "Params",
      "align": "CENTRE"
    }
  ],
  "output": null,
  "colour": 0
},
{
  "type": "SELF",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Self: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "SELF"
    }
  ],
  "output": null,
  "colour": 180
},
{
  "type": "playCommand",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 command %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MODE",
      "options": [
        [
          "Queue",
          "queue"
        ],
        [
          "Play",
          "play"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "CMD",
      "text": "Some"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": 0
},
{
  "type": "sleep",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Sleep %1 %2",
  "args0": [
    {
      "type": "field_number",
      "name": "TIME",
      "value": 1
    },
    {
      "type": "input_end_row",
      "name": "SLEEP"
    }
  ],
  "output": null,
  "colour": 225
},
{
  "type": "ApplyModifiers",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Apply Modifiers: %1 To Player: %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "MODS"
    },
    {
      "type": "field_dropdown",
      "name": "PLAYER",
      "options": [
        [
          "Both",
          "-"
        ],
        [
          "Player 1",
          "1"
        ],
        [
          "Player 2",
          "2"
        ]
      ]
    },
    {
      "type": "input_end_row",
      "name": "PLYR"
    }
  ],
  "output": null,
  "colour": 0,
  "inputsInline": true
},
{
  "type": "Mod",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Mod %1 Speed %2 Amplitude %3 %4",
  "args0": [
    {
      "type": "field_input",
      "name": "MOD",
      "text": "Drunk"
    },
    {
      "type": "field_number",
      "name": "SPEED",
      "value": 3
    },
    {
      "type": "field_number",
      "name": "AMP",
      "value": 100
    },
    {
      "type": "input_value",
      "name": "ARGUMENTS"
    }
  ],
  "output": null,
  "colour": 90
}
]);