/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

// Color vars here too to avoid explosion

var CustomRed = '%{BKY_CRED}'
var CustomBlue = '%{BKY_CBLU}'
var CustomCyan = '%{BKY_CCYA}'
var CustomPurple = '%{BKY_CPUR}'
var CustomPink = '%{BKY_CPNK}'
var CustomYellow = '%{BKY_CYLW}'
var CustomGreen = '%{BKY_CGRN}'

export const toolbox = {
  'kind': 'categoryToolbox',
  'contents': [
	{
	'kind': 'category',
	'name': 'Layout',
	'colour': CustomBlue,
	'contents': [
{
      'kind': 'block',
      'type': 'ActorFrame'
    },
	  {
      'kind': 'block',
      'type': 'Layer'
    },
	  {
      'kind': 'block',
      'type': 'ActorType'
    },
    {
      'kind': 'block',
      'type': 'file'
    },
	  {
      'kind': 'block',
      'type': 'Command'
    },
    {
      'kind': 'block',
      'type': 'messageCommand'
    },
    {
      'kind': 'block',
      'type': 'messageBroadcast'
    },
    {
      'kind': 'block',
      'type': 'Function'
    },
  ]
},
{
	'kind': 'category',
	'name': 'Flow',
	'colour': CustomYellow,
	'contents': [
    {
      'kind': 'block',
      'type': 'IFDO'
    },
    {
      'kind': 'block',
      'type': 'IFDOELSE'
    },
    {
      'kind': 'block',
      'type': 'forDo'
    },
    {
      'kind': 'block',
      'type': 'DO'
    },
    {
      'kind': 'block',
      'type': 'repeatUntil'
    },
    {
      'kind': 'block',
      'type': 'whileDo'
    },
  ]
},
{
	'kind': 'category',
	'name': 'Values and Strings',
	'colour': CustomGreen,
  'contents': [
    {
      'kind': 'block',
      'type': 'VARSET'
    },
    {
      'kind': 'block',
      'type': 'Operation'
    },
    {
      'kind': 'block',
      'type': 'JoinBlock'
    },
    {
      'kind': 'block',
      'type': 'freeuse_text'
    },
    {
      'kind': 'block',
      'type': 'screenCenterXY'
    },
    {
      'kind': 'block',
      'type': 'number'
    },
    {
      'kind': 'block',
      'type': '_2vector'
    },
    {
      'kind': 'block',
      'type': '_3vector'
    },
    {
      'kind': 'block',
      'type': '_4vector'
    },
]
},
{
	'kind': 'category',
	'name': 'Gamestate',
	'colour': CustomRed,
	'contents': [
    {
      'kind': 'block',
      'type': 'DO',
      'inputs': {
        'NAME': {
          'block': {
            'type': 'GameState'
          },
        },
      }
    },
    {
      'kind': 'block',
      'type': 'GameState'
    },
    {
      'kind': 'block',
      'type': 'finishSong'
    },
    {
      'kind': 'block',
      'type': 'gsGetsongX'
    },
    {
      'kind': 'block',
      'type': 'gsReloadSteps'
    },
    {
      'kind': 'block',
      'type': 'gsSetSongX',
      'inputs': {
        'label': {
          'shadow': {
            'type': 'number',
            'fields': {
              'num': 10
            },
          },
        },
      }
    },
    {
      'kind': 'block',
      'type': 'ApplyModifiers'
    },
    {
      'kind': 'block',
      'type': 'Mod'
    },
  ]
},
{
	'kind': 'category',
	'name': 'Self',
	'colour': CustomPurple,
	'contents': [
    {
      'kind': 'block',
      'type': 'DO',
      'inputs': {
        'NAME': {
          'block': {
            'type': 'SELF'
          },
        },
      }
    },
    {
      'kind': 'block',
      'type': 'SELF'
    },
    {
      'kind': 'block',
      'type': 'actor'
    },
    {
      'kind': 'block',
      'type': 'actorNames'
    },
    {
      'kind': 'block',
      'type': 'selfTween',
      'inputs': {
        'TweenNum': {
          'shadow': {
            'type': 'number',
            'fields': {
              'num': 1
            },
          },
        },
      }
    },
    {
      'kind': 'block',
      'type': 'selfXY',
      'inputs': {
        'Value': {
          'shadow': {
            'type': 'number'
          },
        },
      }
    },
    {
      'kind': 'block',
      'type': 'selfZoomto',
      'inputs': {
        'ZoomTo': {
          'shadow': {
            'type': '_2vector',
            'fields': {
              'val1': 200,
              'val2': 300
            },
          },
        },
      }
    },
    {
      'kind': 'block',
      'type': 'selfDiffuse',
      'inputs': {
        'RGBA': {
          'shadow': {
            'type': '_4vector',
            'fields': {
              'val1': 1,
              'val2': 0.75,
              'val3': 0.1,
              'val4': 1
            },
          },
        },
      }
    },
    {
      'kind': 'block',
      'type': 'selfEffect'
    },
    {
      'kind': 'block',
      'type': 'selfEffectCFG'
    },
    {
      'kind': 'block',
      'type': 'selfHidden'
    },
    {
      'kind': 'block',
      'type': 'selfBlend',
      'inputs': {
        'Blend': {
          'shadow': {
            'type': 'number',
            'fields': {
              'num': 1
            }
          },
        },
      }
    },
    {
      'kind': 'block',
      'type': 'playCommand'
    },
  ]
},
{
  'kind': 'category',
  'name': 'Display',
  'colour': CustomYellow,
  'contents': [
    {
      'kind': 'block',
      'type': 'DO',
      'inputs': {
        'NAME': {
          'block': {
            'type': 'rageDisplay'
          },
        },
      }
    },
    {
      'kind': 'block',
      'type': 'rageDisplay'
    },
    {
      'kind': 'block',
      'type': 'changeCentering',
      'inputs': {
        'Centering': {
          'shadow': {
            'type': '_4vector',
            'fields': {
              'val1': 5,
              'val2': 10,
              'val3': -10,
              'val4': -20
            },
          },
        },
      }
    },
    {
      'kind': 'block',
      'type': 'getCFPS'
    },
    {
      'kind': 'block',
      'type': 'getFPS'
    },
    {
      'kind': 'block',
      'type': 'getDisplayHeight'
    },
    {
      'kind': 'block',
      'type': 'getDisplayWidth'
    },
  ]
},
{
  'kind': 'category',
  'name': 'User Custom',
  'colour': CustomRed,
  'contents': [
    {
      'kind': 'block',
      'type': 'Generic_Custom'
    },
    {
      'kind': 'block',
      'type': 'Generic_CodeCustom'
    },
  ]
}
  ]
};