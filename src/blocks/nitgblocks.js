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
  "colour": 320
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
  "colour": 60
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
  "colour": 60
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
  "colour": 120
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
  "colour": 120,
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
  "colour": 180
},
{
  "type": "Operation",
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
          "+",
          "+"
        ],
        [
          "-",
          "-"
        ],
        [
          "/",
          "/"
        ],
        [
          "*",
          "*"
        ],
        [
          "^",
          "^"
        ],
        [
          "and",
          "and"
        ],
        [
          "not",
          "not"
        ],
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
        ],
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
  "colour": 120
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
  "colour": 225
},
{
  "type": "selfTween",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "TWEENTYPE",
      "options": [
        [
          "Sleep",
          "sleep"
        ],
        [
          "Linear",
          "linear"
        ],
        [
          "Accelerate",
          "accelerate"
        ],
        [
          "Decelerate",
          "decelerate"
        ],
        [
          "Spring",
          "spring"
        ],
        [
          "Bounce Begin",
          "bouncebegin"
        ],
        [
          "Bounce End",
          "bounceend"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "TweenNum"
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
  "colour": 0
},
{
  "type": "forDo",
  "tooltip": "",
  "helpUrl": "",
  "message0": "For %1 = %2 Do %3 %4",
  "args0": [
    {
      "type": "field_input",
      "name": "VAL",
      "text": "Value"
    },
    {
      "type": "field_input",
      "name": "EXP",
      "text": "1, 2, 3"
    },
    {
      "type": "input_dummy",
      "name": "For"
    },
    {
      "type": "input_statement",
      "name": "Do"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "repeatUntil",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Repeat until %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "Label",
      "check": "Boolean"
    },
    {
      "type": "input_statement",
      "name": "Repeat"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "whileDo",
  "tooltip": "",
  "helpUrl": "",
  "message0": "While %1 Do %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "While"
    },
    {
      "type": "input_dummy",
      "name": "While2"
    },
    {
      "type": "input_statement",
      "name": "Do"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "freeuse_text",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "TXT",
      "text": "Text"
    },
    {
      "type": "input_value",
      "name": "TEXT",
      "align": "CENTRE"
    }
  ],
  "output": null,
  "colour": 120
},
{
  "type": "selfHidden",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Hidden %1 %2",
  "args0": [
    {
      "type": "field_checkbox",
      "name": "HIDEBOOL",
      "checked": "TRUE"
    },
    {
      "type": "input_end_row",
      "name": "Hidden"
    }
  ],
  "output": null,
  "colour": 225
},
{
  "type": "selfXY",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1  = %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "selfXY",
      "options": [
        [
          "X",
          "x"
        ],
        [
          "Y",
          "y"
        ],
        [
          "Z",
          "z"
        ],
        [
          "Add X",
          "addx"
        ],
        [
          "Add Y",
          "addy"
        ],
        [
          "Add Z",
          "addz"
        ],
        [
          "Rotation X",
          "rotx"
        ],
        [
          "Rotation Y",
          "roty"
        ],
        [
          "Rotation Z",
          "rotz"
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
      "type": "input_value",
      "name": "Value"
    }
  ],
  "output": null,
  "colour": 225
},
{
  "type": "selfZoomto",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Zoom To %1",
  "args0": [
    {
      "type": "input_value",
      "name": "ZoomTo",
      "align": "CENTER"
    }
  ],
  "output": null,
  "colour": 225,
  "inputsInline": true
},
{
  "type": "selfDiffuse",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Diffuse [RGBA] %1",
  "args0": [
    {
      "type": "input_value",
      "name": "RGBA",
      "align": "CENTRE"
    },
  ],
  "output": null,
  "colour": 225,
  "inputsInline": false
},
{
  "type": "selfEffect",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Effect %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FXTYPE",
      "options": [
        [
          "Bob",
          "bob"
        ],
        [
          "Bounce",
          "bounce"
        ],
        [
          "Diffuse Blink",
          "diffuseblink"
        ],
        [
          "Diffuse Ramp",
          "diffuseramp"
        ],
        [
          "Diffuse Shift",
          "diffuseshift"
        ],
        [
          "Glow Blink",
          "glowblink"
        ],
        [
          "Glow Shift",
          "glowshift"
        ],
        [
          "Pulse",
          "pulse"
        ],
        [
          "Rainbow",
          "rainbow"
        ],
        [
          "Spin",
          "spin"
        ],
        [
          "Vibrate",
          "vibrate"
        ],
        [
          "Wag",
          "wag"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "FX"
    }
  ],
  "output": null,
  "colour": 225
},
{
  "type": "selfEffectCFG",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "FXCFG",
      "options": [
        [
          "Effect Color 1",
          "effectcolor1"
        ],
        [
          "Effect Color 2",
          "effectcolor2"
        ],
        [
          "Glow Color",
          "glow"
        ],
        [
          "Effect Clock",
          "effectclock"
        ],
        [
          "Effect Delay",
          "effectdelay"
        ],
        [
          "Effect Amplitude",
          "effectmagnitude"
        ],
        [
          "Effect Offset",
          "effectoffset"
        ],
        [
          "Effect Period",
          "effectperiod"
        ],
        [
          "Stop Effect",
          "stopeffect"
        ],
        [
          "Get seconds into Effect",
          "getsecsintoeffect"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "CFG"
    }
  ],
  "output": null,
  "colour": 225
},
{
  "type": "selfBlend",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Blend Type %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "Normal",
          "normal"
        ],
        [
          "Add",
          "add"
        ],
        [
          "Subtract",
          "subtract"
        ],
        [
          "Modulate",
          "modulate"
        ],
        [
          "Copy Source",
          "copysrc"
        ],
        [
          "Alpha Mask",
          "alphamask"
        ],
        [
          "Alpha Knockout",
          "alphaknockout"
        ],
        [
          "Alpha Multiply",
          "alphamultiply"
        ],
        [
          "Weighted Multiply",
          "weightedmultiply"
        ],
        [
          "Invert Destination",
          "invertdest"
        ],
        [
          "No Effect",
          "noeffect"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "Blend"
    }
  ],
  "output": null,
  "colour": 225
},
{
  "type": "actorNames",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 name %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "Set",
          "setname"
        ],
        [
          "Get",
          "getname"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "NAME",
      "text": "actor"
    },
    {
      "type": "input_end_row",
      "name": "GETSET"
    }
  ],
  "output": null,
  "colour": 180
},
{
  "type": "actor",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Actor %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "ACTNAME",
      "text": "Actor Name"
    },
    {
      "type": "input_value",
      "name": "actor"
    }
  ],
  "output": null,
  "colour": 180
},
{
  "type": "finishSong",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Finish Song %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "finishSong"
    }
  ],
  "output": null,
  "colour": 0
},
{
  "type": "gamestateBPX",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Get Beats Per Second %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "label"
    }
  ],
  "output": null,
  "colour": 0
},
{
  "type": "gsGetsongX",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Get Song %1 Visible? %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "Beat",
          "beat"
        ],
        [
          "Time",
          "time"
        ]
      ]
    },
    {
      "type": "field_checkbox",
      "name": "vis",
      "checked": "TRUE"
    },
    {
      "type": "input_end_row",
      "name": "label"
    }
  ],
  "output": null,
  "colour": 0
},
{
  "type": "gsReloadSteps",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Reload Steps %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "label"
    }
  ],
  "output": null,
  "colour": 0
},
{
  "type": "gsSetSongX",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Set Song %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "Beat",
          "beat"
        ],
        [
          "Position",
          "position"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "label"
    }
  ],
  "output": null,
  "colour": 0,
  "inputsInline": true
},
{
  "type": "file",
  "tooltip": "",
  "helpUrl": "",
  "message0": "File: %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "fileName",
      "text": "./image.png"
    },
    {
      "type": "input_end_row",
      "name": "file"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270
},
{
  "type": "screenCenterXY",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Screen Center %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "Type",
      "options": [
        [
          "X",
          "_X"
        ],
        [
          "Y",
          "_Y"
        ]
      ]
    },
    {
      "type": "input_end_row",
      "name": "label"
    }
  ],
  "output": null,
  "colour": 120
},
{
  "type": "_2vector",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 , %2 %3",
  "args0": [
    {
      "type": "field_number",
      "name": "val1",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "val2",
      "value": 0
    },
    {
      "type": "input_end_row",
      "name": "nums"
    }
  ],
  "output": null,
  "colour": 225
},
{
  "type": "_3vector",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 , %2 , %3 %4",
  "args0": [
    {
      "type": "field_number",
      "name": "val1",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "val2",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "val3",
      "value": 0
    },
    {
      "type": "input_end_row",
      "name": "nums"
    }
  ],
  "output": null,
  "colour": 225
},
{
  "type": "_4vector",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 , %2 , %3 , %4 %5",
  "args0": [
    {
      "type": "field_number",
      "name": "val1",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "val2",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "val3",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "val4",
      "value": 0
    },
    {
      "type": "input_end_row",
      "name": "nums"
    }
  ],
  "output": null,
  "colour": 225
},
{
  "type": "number",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_number",
      "name": "num",
      "value": 0
    },
    {
      "type": "input_end_row",
      "name": "num"
    }
  ],
  "output": null,
  "colour": 225
},
{
  "type": "messageCommand",
  "tooltip": "",
  "helpUrl": "",
  "message0": "%1 MSG Command %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "msgName",
      "text": "Name"
    },
    {
      "type": "input_dummy",
      "name": "label"
    },
    {
      "type": "input_statement",
      "name": "blocks"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270
},
{
  "type": "messageBroadcast",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Broadcast Message %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "MSGNAME",
      "text": "Name"
    },
    {
      "type": "input_end_row",
      "name": "mb"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270
},
{
  "type": "rageDisplay",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Display %1",
  "args0": [
    {
      "type": "input_value",
      "name": "Value",
      "align": "CENTRE"
    }
  ],
  "output": null,
  "colour": 180
}
]);
