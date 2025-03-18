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
      'type': 'Equality'
    },
    {
      'kind': 'block',
      'type': 'JoinBlock'
    },
  ]
},
{
	'kind': 'category',
	'name': 'Actor CMDs',
	'colour': '180',
	'contents': [
    {
      'kind': 'block',
      'type': 'DO'
    },
    {
      'kind': 'block',
      'type': 'VARSET'
    },
    {
      'kind': 'block',
      'type': 'GameState'
    },
    {
      'kind': 'block',
      'type': 'SELF'
    },
    {
      'kind': 'block',
      'type': 'ApplyModifiers'
    },
    {
      'kind': 'block',
      'type': 'Mod'
    },
    {
      'kind': 'block',
      'type': 'sleep'
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