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

export const toolbox = {
  'kind': 'categoryToolbox',
  'contents': [
	{
	'kind': 'category',
	'name': 'Layout',
	'colour': '210',
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
      'type': 'Command'
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
	'colour': '60',
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
	'colour': '120',
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
]
},
{
	'kind': 'category',
	'name': 'Gamestate',
	'colour': '180',
	'contents': [
    {
      'kind': 'block',
      'type': 'DO'
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
      'type': 'gamestateBPX'
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
      'type': 'gsSetSongX'
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
	'colour': '180',
	'contents': [
    {
      'kind': 'block',
      'type': 'DO'
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
      'type': 'selfTween'
    },
    {
      'kind': 'block',
      'type': 'selfXY'
    },
    {
      'kind': 'block',
      'type': 'selfZoomto'
    },
    {
      'kind': 'block',
      'type': 'selfDiffuse'
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
      'type': 'selfBlend'
    },
    {
      'kind': 'block',
      'type': 'playCommand'
    },
  ]
},
{
  'kind': 'category',
  'name': 'User Custom',
  'colour': '0',
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