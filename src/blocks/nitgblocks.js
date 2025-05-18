import * as Blockly from 'blockly';
import {MColors}  from '../MColors';

// Colors now in MColors.js!

// Blocks Down Below

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
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
  "colour": MColors.red,
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
  "colour": MColors.blue
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
  "colour": MColors.purple
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
  "colour": MColors.purple
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
  "colour": MColors.pink
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
  "colour": MColors.yellow
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
  "colour": MColors.yellow
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
  "colour": MColors.red
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
  "colour": MColors.red
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
          "global"
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
  "colour": MColors.green
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
  "colour": MColors.cyan
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
  "colour": MColors.green,
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
  "colour": MColors.yellow
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
  "colour": MColors.green
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
  "colour": MColors.cyan
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
  "colour": MColors.purple
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
  "colour": MColors.purple
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
  "colour": MColors.red,
  "inputsInline": true
},
{
  "type": "Mod",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Mod %1 Speed %2 Amplitude %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "MOD"
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
  "colour": MColors.red,
  "inputsInline": true
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
  "colour": MColors.yellow
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
  "colour": MColors.yellow
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
  "colour": MColors.yellow
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
  "colour": MColors.green
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
  "colour": MColors.purple
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
          "rotationx"
        ],
        [
          "Rotation Y",
          "rotationy"
        ],
        [
          "Rotation Z",
          "rotationz"
        ],
        [
          "Add Rotation X",
          "addrotationx"
        ],
        [
          "Add Rotation Y",
          "addrotationy"
        ],
        [
          "Add Rotation Z",
          "addrotationz"
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
  "colour": MColors.purple
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
  "colour": MColors.purple,
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
  "colour": MColors.purple,
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
  "colour": MColors.purple
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
  "colour": MColors.purple
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
  "colour": MColors.purple
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
          "SetName"
        ],
        [
          "Get",
          "GetName"
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
  "colour": MColors.cyan
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
  "colour": MColors.cyan
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
  "colour": MColors.red
},
{
  "type": "gamestateBPX",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Get Beats Per %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "Minute",
          "M"
        ],
        [
          "Second",
          "S"
        ]
      ]
    },
    {
      "type": "input_end_row",
      "name": "label"
    }
  ],
  "output": null,
  "colour": MColors.red
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
          "Beat"
        ],
        [
          "Time",
          "Time"
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
  "colour": MColors.red
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
  "colour": MColors.red
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
          "Beat"
        ],
        [
          "Position",
          "Position"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "label"
    }
  ],
  "output": null,
  "colour": MColors.red,
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
  "colour": MColors.green
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
  "colour": MColors.purple
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
  "colour": MColors.purple
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
  "colour": MColors.purple
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
  "colour": MColors.purple
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
  "colour": MColors.cyan
},
{
  "type": "changeCentering",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Change Centering %1",
  "args0": [
    {
      "type": "input_value",
      "name": "Centering"
    }
  ],
  "output": null,
  "colour": MColors.yellow
},
{
  "type": "getCFPS",
  "tooltip": "It would've been better if they didn't shorten it..",
  "helpUrl": "",
  "message0": "Get Cumulative FPS %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "label"
    }
  ],
  "output": null,
  "colour": MColors.yellow
},
{
  "type": "getFPS",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Get FPS %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "label"
    }
  ],
  "output": null,
  "colour": MColors.yellow
},
{
  "type": "getDisplayHeight",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Get Display Width %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "label"
    }
  ],
  "output": null,
  "colour": MColors.yellow
},
{
  "type": "getDisplayWidth",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Get Display Width %1",
  "args0": [
    {
      "type": "input_end_row",
      "name": "label"
    }
  ],
  "output": null,
  "colour": MColors.yellow
},
{
  "type": "modSelector",
  "tooltip": "I don't know if they'll work",
  "helpUrl": "",
  "message0": "Mod: %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "modlist",
      "options": [
          [
          "alternate",
          "alternate"
          ],
          [
          "approachtype",
          "approachtype"
          ],
          [
          "arrowcull",
          "arrowcull"
          ],
          [
          "arrowpath",
          "arrowpath"
          ],
          [
          "arrowpath",
          "arrowpath"
          ],
          [
          "arrowpathdrawsize",
          "arrowpathdrawsize"
          ],
          [
          "arrowpathdrawsizefront",
          "arrowpathdrawsizefront"
          ],
          [
          "arrowpathdrawdistance",
          "arrowpathdrawdistance"
          ],
          [
          "arrowpathdrawdistancefront",
          "arrowpathdrawdistancefront"
          ],
          [
          "arrowpathdrawsizeback",
          "arrowpathdrawsizeback"
          ],
          [
          "arrowpathdrawdistanceback",
          "arrowpathdrawdistanceback"
          ],
          [
          "arrowpathgrain",
          "arrowpathgrain"
          ],
          [
          "arrowpathgranulate",
          "arrowpathgranulate"
          ],
          [
          "arrowpathwidth",
          "arrowpathwidth"
          ],
          [
          "arrowpathsize",
          "arrowpathsize"
          ],
          [
          "arrowpathgirth",
          "arrowpathgirth"
          ],
          [
          "asymptote",
          "asymptote"
          ],
          [
          "asymptoteoffset",
          "asymptoteoffset"
          ],
          [
          "asymptotescale",
          "asymptotescale"
          ],
          [
          "asymptotesize",
          "asymptotesize"
          ],
          [
          "attenuatex",
          "attenuatex"
          ],
          [
          "attenuate",
          "attenuate"
          ],
          [
          "attenuatexoffset",
          "attenuatexoffset"
          ],
          [
          "attenuateoffset",
          "attenuateoffset"
          ],
          [
          "attenuatey",
          "attenuatey"
          ],
          [
          "attenuateyoffset",
          "attenuateyoffset"
          ],
          [
          "attenuatez",
          "attenuatez"
          ],
          [
          "attenuatezoffset",
          "attenuatezoffset"
          ],
          [
          "beat",
          "beat"
          ],
          [
          "beatmult",
          "beatmult"
          ],
          [
          "beatoffset",
          "beatoffset"
          ],
          [
          "beatperiod",
          "beatperiod"
          ],
          [
          "beatsize",
          "beatsize"
          ],
          [
          "beaty",
          "beaty"
          ],
          [
          "beatyca",
          "beatyca"
          ],
          [
          "beatymult",
          "beatymult"
          ],
          [
          "beatyoffset",
          "beatyoffset"
          ],
          [
          "beatyperiod",
          "beatyperiod"
          ],
          [
          "beatysize",
          "beatysize"
          ],
          [
          "beatz",
          "beatz"
          ],
          [
          "beatzca",
          "beatzca"
          ],
          [
          "beatzmult",
          "beatzmult"
          ],
          [
          "beatzoffset",
          "beatzoffset"
          ],
          [
          "beatzperiod",
          "beatzperiod"
          ],
          [
          "beatzsize",
          "beatzsize"
          ],
          [
          "blink",
          "blink"
          ],
          [
          "blinkr",
          "blinkr"
          ],
          [
          "blinkg",
          "blinkg"
          ],
          [
          "blinkb",
          "blinkb"
          ],
          [
          "boomerang",
          "boomerang"
          ],
          [
          "boost",
          "boost"
          ],
          [
          "bounce",
          "bounce"
          ],
          [
          "bounceoffset",
          "bounceoffset"
          ],
          [
          "bounceperiod",
          "bounceperiod"
          ],
          [
          "bouncez",
          "bouncez"
          ],
          [
          "bouncezoffset",
          "bouncezoffset"
          ],
          [
          "bouncezperiod",
          "bouncezperiod"
          ],
          [
          "brake",
          "brake"
          ],
          [
          "land",
          "land"
          ],
          [
          "bumpy",
          "bumpy"
          ],
          [
          "bumpyz",
          "bumpyz"
          ],
          [
          "bumpyoffset",
          "bumpyoffset"
          ],
          [
          "bumpyzoffset",
          "bumpyzoffset"
          ],
          [
          "bumpyperiod",
          "bumpyperiod"
          ],
          [
          "bumpysize",
          "bumpysize"
          ],
          [
          "bumpyzperiod",
          "bumpyzperiod"
          ],
          [
          "bumpyzsize",
          "bumpyzsize"
          ],
          [
          "bumpyz",
          "bumpyz"
          ],
          [
          "bumpyxoffset",
          "bumpyxoffset"
          ],
          [
          "bumpyxperiod",
          "bumpyxperiod"
          ],
          [
          "bumpyxsize",
          "bumpyxsize"
          ],
          [
          "bumpyy",
          "bumpyy"
          ],
          [
          "bumpyyoffset",
          "bumpyyoffset"
          ],
          [
          "bumpyyperiod",
          "bumpyyperiod"
          ],
          [
          "bumpyysize",
          "bumpyysize"
          ],
          [
          "centered",
          "centered"
          ],
          [
          "converge",
          "converge"
          ],
          [
          "centeredpath",
          "centeredpath"
          ],
          [
          "centered2",
          "centered2"
          ],
          [
          "confusion",
          "confusion"
          ],
          [
          "confusionz",
          "confusionz"
          ],
          [
          "confusionoffset",
          "confusionoffset"
          ],
          [
          "confusionzoffset",
          "confusionzoffset"
          ],
          [
          "confusionx",
          "confusionx"
          ],
          [
          "confusionxoffset",
          "confusionxoffset"
          ],
          [
          "confusiony",
          "confusiony"
          ],
          [
          "confusionyoffset",
          "confusionyoffset"
          ],
          [
          "cosclip",
          "cosclip"
          ],
          [
          "cosecant",
          "cosecant"
          ],
          [
          "cosec",
          "cosec"
          ],
          [
          "glitchytan",
          "glitchytan"
          ],
          [
          "cover",
          "cover"
          ],
          [
          "cross",
          "cross"
          ],
          [
          "cubicx",
          "cubicx"
          ],
          [
          "cubicxoffset",
          "cubicxoffset"
          ],
          [
          "cubicy",
          "cubicy"
          ],
          [
          "cubicyoffset",
          "cubicyoffset"
          ],
          [
          "cubicz",
          "cubicz"
          ],
          [
          "cubiczoffset",
          "cubiczoffset"
          ],
          [
          "dark",
          "dark"
          ],
          [
          "digital",
          "digital"
          ],
          [
          "digitaloffset",
          "digitaloffset"
          ],
          [
          "digitalperiod",
          "digitalperiod"
          ],
          [
          "digitalsteps",
          "digitalsteps"
          ],
          [
          "digitalz",
          "digitalz"
          ],
          [
          "digitalzoffset",
          "digitalzoffset"
          ],
          [
          "digitalzperiod",
          "digitalzperiod"
          ],
          [
          "digitalzsteps",
          "digitalzsteps"
          ],
          [
          "disablemines",
          "disablemines"
          ],
          [
          "distant",
          "distant"
          ],
          [
          "dizzy",
          "dizzy"
          ],
          [
          "dizzyholds",
          "dizzyholds"
          ],
          [
          "drawsize",
          "drawsize"
          ],
          [
          "drawsizefront",
          "drawsizefront"
          ],
          [
          "drawdistance",
          "drawdistance"
          ],
          [
          "drawdistancefront",
          "drawdistancefront"
          ],
          [
          "drawsizeback",
          "drawsizeback"
          ],
          [
          "drawdistanceback",
          "drawdistanceback"
          ],
          [
          "drunk",
          "drunk"
          ],
          [
          "drunkoffset",
          "drunkoffset"
          ],
          [
          "drunkperiod",
          "drunkperiod"
          ],
          [
          "drunksize",
          "drunksize"
          ],
          [
          "drunkspacing",
          "drunkspacing"
          ],
          [
          "drunkspeed",
          "drunkspeed"
          ],
          [
          "drunky",
          "drunky"
          ],
          [
          "drunkyoffset",
          "drunkyoffset"
          ],
          [
          "drunkyperiod",
          "drunkyperiod"
          ],
          [
          "drunkysize",
          "drunkysize"
          ],
          [
          "drunkyspacing",
          "drunkyspacing"
          ],
          [
          "drunkyspeed",
          "drunkyspeed"
          ],
          [
          "drunkz",
          "drunkz"
          ],
          [
          "drunkzoffset",
          "drunkzoffset"
          ],
          [
          "drunkzperiod",
          "drunkzperiod"
          ],
          [
          "drunkzsize",
          "drunkzsize"
          ],
          [
          "drunkzspacing",
          "drunkzspacing"
          ],
          [
          "drunkzspeed",
          "drunkzspeed"
          ],
          [
          "expand",
          "expand"
          ],
          [
          "expandperiod",
          "expandperiod"
          ],
          [
          "expandsize",
          "expandsize"
          ],
          [
          "flip",
          "flip"
          ],
          [
          "grain",
          "grain"
          ],
          [
          "granulate",
          "granulate"
          ],
          [
          "hallway",
          "hallway"
          ],
          [
          "hidden",
          "hidden"
          ],
          [
          "hiddenoffset",
          "hiddenoffset"
          ],
          [
          "hiddenr",
          "hiddenr"
          ],
          [
          "hiddeng",
          "hiddeng"
          ],
          [
          "hiddenb",
          "hiddenb"
          ],
          [
          "hiddenro",
          "hiddenro"
          ],
          [
          "hiddengo",
          "hiddengo"
          ],
          [
          "hiddenbo",
          "hiddenbo"
          ],
          [
          "hideholdjudge",
          "hideholdjudge"
          ],
          [
          "noholdjudge",
          "noholdjudge"
          ],
          [
          "halgun",
          "halgun"
          ],
          [
          "hidenoteflash",
          "hidenoteflash"
          ],
          [
          "hidenoteflashes",
          "hidenoteflashes"
          ],
          [
          "holdcull",
          "holdcull"
          ],
          [
          "holdtiny",
          "holdtiny"
          ],
          [
          "holdgirth",
          "holdgirth"
          ],
          [
          "holdtype",
          "holdtype"
          ],
          [
          "spiralholds",
          "spiralholds"
          ],
          [
          "incoming",
          "incoming"
          ],
          [
          "invert",
          "invert"
          ],
          [
          "judgescale",
          "judgescale"
          ],
          [
          "timing",
          "timing"
          ],
          [
          "extendholds",
          "extendholds"
          ],
          [
          "longholds",
          "longholds"
          ],
          [
          "longboy",
          "longboy"
          ],
          [
          "longboys",
          "longboys"
          ],
          [
          "mini",
          "mini"
          ],
          [
          "globalmodtimer",
          "globalmodtimer"
          ],
          [
          "globalmodtimermult",
          "globalmodtimermult"
          ],
          [
          "globalmodtimeroffset",
          "globalmodtimeroffset"
          ],
          [
          "timer",
          "timer"
          ],
          [
          "timermult",
          "timermult"
          ],
          [
          "timeroffset",
          "timeroffset"
          ],
          [
          "modtimer",
          "modtimer"
          ],
          [
          "modtimermult",
          "modtimermult"
          ],
          [
          "modtimeroffset",
          "modtimeroffset"
          ],
          [
          "movex",
          "movex"
          ],
          [
          "movey",
          "movey"
          ],
          [
          "movez",
          "movez"
          ],
          [
          "tapstealth",
          "tapstealth"
          ],
          [
          "hidetaps",
          "hidetaps"
          ],
          [
          "noteskewx",
          "noteskewx"
          ],
          [
          "noteskew",
          "noteskew"
          ],
          [
          "noteskewy",
          "noteskewy"
          ],
          [
          "orient",
          "orient"
          ],
          [
          "orientz",
          "orientz"
          ],
          [
          "orientoffset",
          "orientoffset"
          ],
          [
          "orientzoffset",
          "orientzoffset"
          ],
          [
          "orientx",
          "orientx"
          ],
          [
          "orientxoffset",
          "orientxoffset"
          ],
          [
          "orienty",
          "orienty"
          ],
          [
          "orientyoffset",
          "orientyoffset"
          ],
          [
          "overhead",
          "overhead"
          ],
          [
          "parabolax",
          "parabolax"
          ],
          [
          "parabolaxoffset",
          "parabolaxoffset"
          ],
          [
          "parabolay",
          "parabolay"
          ],
          [
          "parabolayoffset",
          "parabolayoffset"
          ],
          [
          "parabolaz",
          "parabolaz"
          ],
          [
          "parabolazoffset",
          "parabolazoffset"
          ],
          [
          "passmark",
          "passmark"
          ],
          [
          "pulse",
          "pulse"
          ],
          [
          "pulseinner",
          "pulseinner"
          ],
          [
          "pulseouter",
          "pulseouter"
          ],
          [
          "pulseoffset",
          "pulseoffset"
          ],
          [
          "pulseperiod",
          "pulseperiod"
          ],
          [
          "randomize",
          "randomize"
          ],
          [
          "randomizeoffset",
          "randomizeoffset"
          ],
          [
          "randomspeed",
          "randomspeed"
          ],
          [
          "randomvanish",
          "randomvanish"
          ],
          [
          "randomvanishoffset",
          "randomvanishoffset"
          ],
          [
          "receptorzbuffer",
          "receptorzbuffer"
          ],
          [
          "reverse",
          "reverse"
          ],
          [
          "roll",
          "roll"
          ],
          [
          "sawtooth",
          "sawtooth"
          ],
          [
          "sawtoothoffset",
          "sawtoothoffset"
          ],
          [
          "sawtoothperiod",
          "sawtoothperiod"
          ],
          [
          "sawtoothsize",
          "sawtoothsize"
          ],
          [
          "sawtoothz",
          "sawtoothz"
          ],
          [
          "sawtoothzoffset",
          "sawtoothzoffset"
          ],
          [
          "sawtoothzperiod",
          "sawtoothzperiod"
          ],
          [
          "sawtoothzsize",
          "sawtoothzsize"
          ],
          [
          "screenfilter",
          "screenfilter"
          ],
          [
          "scrollspeedmult",
          "scrollspeedmult"
          ],
          [
          "plannedomspeed",
          "plannedomspeed"
          ],
          [
          "shrinklinear",
          "shrinklinear"
          ],
          [
          "shrinklinearx",
          "shrinklinearx"
          ],
          [
          "shrinklineary",
          "shrinklineary"
          ],
          [
          "shrinklinearz",
          "shrinklinearz"
          ],
          [
          "shrinkmult",
          "shrinkmult"
          ],
          [
          "shrinkmultx",
          "shrinkmultx"
          ],
          [
          "shrinkmulty",
          "shrinkmulty"
          ],
          [
          "shrinkmultz",
          "shrinkmultz"
          ],
          [
          "sinclip",
          "sinclip"
          ],
          [
          "space",
          "space"
          ],
          [
          "spiralx",
          "spiralx"
          ],
          [
          "spiralxoffset",
          "spiralxoffset"
          ],
          [
          "spiralxperiod",
          "spiralxperiod"
          ],
          [
          "spiraly",
          "spiraly"
          ],
          [
          "spiralyoffset",
          "spiralyoffset"
          ],
          [
          "spiralyperiod",
          "spiralyperiod"
          ],
          [
          "spiralzperiod",
          "spiralzperiod"
          ],
          [
          "spiralzperiod",
          "spiralzperiod"
          ],
          [
          "spiralzperiod",
          "spiralzperiod"
          ],
          [
          "split",
          "split"
          ],
          [
          "square",
          "square"
          ],
          [
          "squareoffset",
          "squareoffset"
          ],
          [
          "squareperiod",
          "squareperiod"
          ],
          [
          "squarez",
          "squarez"
          ],
          [
          "squarezoffset",
          "squarezoffset"
          ],
          [
          "squarezperiod",
          "squarezperiod"
          ],
          [
          "stealth",
          "stealth"
          ],
          [
          "stealthr",
          "stealthr"
          ],
          [
          "stealthgr",
          "stealthgr"
          ],
          [
          "stealthg",
          "stealthg"
          ],
          [
          "stealthgg",
          "stealthgg"
          ],
          [
          "stealthb",
          "stealthb"
          ],
          [
          "stealthgb",
          "stealthgb"
          ],
          [
          "stealthpastreceptors",
          "stealthpastreceptors"
          ],
          [
          "stealthtype",
          "stealthtype"
          ],
          [
          "straightholds",
          "straightholds"
          ],
          [
          "gayholds",
          "gayholds"
          ],
          [
          "sudden",
          "sudden"
          ],
          [
          "suddenoffset",
          "suddenoffset"
          ],
          [
          "suddenred",
          "suddenred"
          ],
          [
          "suddenr",
          "suddenr"
          ],
          [
          "suddenredoffset",
          "suddenredoffset"
          ],
          [
          "suddenro",
          "suddenro"
          ],
          [
          "tanbumpy",
          "tanbumpy"
          ],
          [
          "tanbumpyz",
          "tanbumpyz"
          ],
          [
          "tanbumpyoffset",
          "tanbumpyoffset"
          ],
          [
          "tanbumpyzoffset",
          "tanbumpyzoffset"
          ],
          [
          "tanbumpyperiod",
          "tanbumpyperiod"
          ],
          [
          "tanbumpysize",
          "tanbumpysize"
          ],
          [
          "tanbumpyzperiod",
          "tanbumpyzperiod"
          ],
          [
          "tanbumpyzsize",
          "tanbumpyzsize"
          ],
          [
          "tanbumpyz",
          "tanbumpyz"
          ],
          [
          "tanbumpyxoffset",
          "tanbumpyxoffset"
          ],
          [
          "tanbumpyxperiod",
          "tanbumpyxperiod"
          ],
          [
          "tanbumpyxsize",
          "tanbumpyxsize"
          ],
          [
          "tanbumpyy",
          "tanbumpyy"
          ],
          [
          "tanbumpyyoffset",
          "tanbumpyyoffset"
          ],
          [
          "tanbumpyyperiod",
          "tanbumpyyperiod"
          ],
          [
          "tanbumpyysize",
          "tanbumpyysize"
          ],
          [
          "tanclip",
          "tanclip"
          ],
          [
          "tandigital",
          "tandigital"
          ],
          [
          "tandigitaloffset",
          "tandigitaloffset"
          ],
          [
          "tandigitalperiod",
          "tandigitalperiod"
          ],
          [
          "tandigitalsteps",
          "tandigitalsteps"
          ],
          [
          "tandigitalz",
          "tandigitalz"
          ],
          [
          "tandigitalzoffset",
          "tandigitalzoffset"
          ],
          [
          "tandigitalzperiod",
          "tandigitalzperiod"
          ],
          [
          "tandigitalzsteps",
          "tandigitalzsteps"
          ],
          [
          "tandrunk",
          "tandrunk"
          ],
          [
          "tandrunkoffset",
          "tandrunkoffset"
          ],
          [
          "tandrunkperiod",
          "tandrunkperiod"
          ],
          [
          "tandrunksize",
          "tandrunksize"
          ],
          [
          "tandrunkspacing",
          "tandrunkspacing"
          ],
          [
          "tandrunkyspeed",
          "tandrunkyspeed"
          ],
          [
          "tandrunky",
          "tandrunky"
          ],
          [
          "tandrunkyoffset",
          "tandrunkyoffset"
          ],
          [
          "tandrunkyperiod",
          "tandrunkyperiod"
          ],
          [
          "tandrunkysize",
          "tandrunkysize"
          ],
          [
          "tandrunkyspacing",
          "tandrunkyspacing"
          ],
          [
          "tandrunkyspeed",
          "tandrunkyspeed"
          ],
          [
          "tandrunkz",
          "tandrunkz"
          ],
          [
          "tandrunkzoffset",
          "tandrunkzoffset"
          ],
          [
          "tandrunkzperiod",
          "tandrunkzperiod"
          ],
          [
          "tandrunkzsize",
          "tandrunkzsize"
          ],
          [
          "tandrunkzspacing",
          "tandrunkzspacing"
          ],
          [
          "tandrunkzspeed",
          "tandrunkzspeed"
          ],
          [
          "tanexpand",
          "tanexpand"
          ],
          [
          "tanexpandperiod",
          "tanexpandperiod"
          ],
          [
          "tanexpandsize",
          "tanexpandsize"
          ],
          [
          "tanpulse",
          "tanpulse"
          ],
          [
          "tanpulseinner",
          "tanpulseinner"
          ],
          [
          "tanpulseouter",
          "tanpulseouter"
          ],
          [
          "tanpulseoffset",
          "tanpulseoffset"
          ],
          [
          "tanpulseperiod",
          "tanpulseperiod"
          ],
          [
          "tantipsy",
          "tantipsy"
          ],
          [
          "tantipsyoffset",
          "tantipsyoffset"
          ],
          [
          "tantipsyspacing",
          "tantipsyspacing"
          ],
          [
          "tantipsyspeed",
          "tantipsyspeed"
          ],
          [
          "tantornado",
          "tantornado"
          ],
          [
          "tantornadooffset",
          "tantornadooffset"
          ],
          [
          "tantornadoperiod",
          "tantornadoperiod"
          ],
          [
          "tantornadoz",
          "tantornadoz"
          ],
          [
          "tantornadozoffset",
          "tantornadozoffset"
          ],
          [
          "tantornadozperiod",
          "tantornadozperiod"
          ],
          [
          "texturefiltering",
          "texturefiltering"
          ],
          [
          "texturefilteroff",
          "texturefilteroff"
          ],
          [
          "tiny",
          "tiny"
          ],
          [
          "tinyx",
          "tinyx"
          ],
          [
          "tinyy",
          "tinyy"
          ],
          [
          "tinyz",
          "tinyz"
          ],
          [
          "tipsy",
          "tipsy"
          ],
          [
          "tipsyoffset",
          "tipsyoffset"
          ],
          [
          "tipsyspacing",
          "tipsyspacing"
          ],
          [
          "tinyspeed",
          "tinyspeed"
          ],
          [
          "tornado",
          "tornado"
          ],
          [
          "tornadooffset",
          "tornadooffset"
          ],
          [
          "tornadoperiod",
          "tornadoperiod"
          ],
          [
          "tornadoz",
          "tornadoz"
          ],
          [
          "tornadozoffset",
          "tornadozoffset"
          ],
          [
          "tornadozperiod",
          "tornadozperiod"
          ],
          [
          "twirl",
          "twirl"
          ],
          [
          "unboundedreverse",
          "unboundedreverse"
          ],
          [
          "reversetype",
          "reversetype"
          ],
          [
          "vanish",
          "vanish"
          ],
          [
          "vanishoffset",
          "vanishoffset"
          ],
          [
          "vanishsize",
          "vanishsize"
          ],
          [
          "wave",
          "wave"
          ],
          [
          "waveoffset",
          "waveoffset"
          ],
          [
          "waveperiod",
          "waveperiod"
          ],
          [
          "wavesize",
          "wavesize"
          ],
          [
          "wireframe",
          "wireframe"
          ],
          [
          "wireframewidth",
          "wireframewidth"
          ],
          [
          "wireframegirth",
          "wireframegirth"
          ],
          [
          "zbuffer",
          "zbuffer"
          ],
          [
          "zigzag",
          "zigzag"
          ],
          [
          "zigzagoffset",
          "zigzagoffset"
          ],
          [
          "zigzagperiod",
          "zigzagperiod"
          ],
          [
          "zigzagsize",
          "zigzagsize"
          ],
          [
          "zigzagz",
          "zigzagz"
          ],
          [
          "zigzagzoffset",
          "zigzagzoffset"
          ],
          [
          "zigzagzperiod",
          "zigzagzperiod"
          ],
          [
          "zigzagzsize",
          "zigzagzsize"
          ],
          [
          "hide",
          "hide"
          ],
          [
          "skewx",
          "skewx"
          ],
          [
          "skewy",
          "skewy"
          ],
          [
          "rotationx",
          "rotationx"
          ],
          [
          "rotationy",
          "rotationy"
          ],
          [
          "rotationz",
          "rotationz"
          ],
          [
          "x",
          "x"
          ],
          [
          "y",
          "y"
          ],
          [
          "z",
          "z"
          ],
          [
          "zoom",
          "zoom"
          ],
          [
          "zoomx",
          "zoomx"
          ],
          [
          "zoomy",
          "zoomy"
          ],
          [
          "zoomz",
          "zoomz"
          ],
          
          [
          "xmod",
          "xmod"
          ],
          [
          "cmod",
          "cmod"
          ],
          [
          "mmod",
          "mmod"
          ]
      ]
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "output": null,
  "colour": MColors.red
}
]);