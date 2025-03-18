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
	'name': 'UNUSED',
	'colour': '0',
	'contents': [
    {
      'kind': 'block',
      'type': 'object'
    },
    {
      'kind': 'block',
      'type': 'member'
    },
    {
      'kind': 'block',
      'type': 'math_number'
    },
    {
      'kind': 'block',
      'type': 'text'
    },
    {
      'kind': 'block',
      'type': 'logic_boolean'
    },
    {
      'kind': 'block',
      'type': 'logic_null'
    },
    {
      'kind': 'block',
      'type': 'lists_create_with'
	}]},
  // Here are the custom blocks
	{
	'kind': 'category',
	'name': 'NotITG',
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
      'type': 'Generic_Custom'
    },
    {
      'kind': 'block',
      'type': 'Generic_CodeCustom'
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
      'type': 'JoinBlock'
    },
  ]}
  ]
};