import * as Blockly from 'blockly';

export const nitgGenerator = new Blockly.Generator('NITG');
const Order = {
  ATOMIC: 0,
};

nitgGenerator.forBlock['logic_null'] = function(block) {
  return ['null', Order.ATOMIC];
};

nitgGenerator.forBlock['text'] = function(block) {
  const textValue = block.getFieldValue('TEXT');
  const code = `"${textValue}"`;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['math_number'] = function(block) {
  const code = String(block.getFieldValue('NUM'));
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['logic_boolean'] = function(block) {
  const code = (block.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['member'] = function(block, generator) {
  const name = block.getFieldValue('MEMBER_NAME');
  const value = generator.valueToCode(
      block, 'MEMBER_VALUE', Order.ATOMIC);
  const code = `"${name}": ${value}`;
  return code;
};

nitgGenerator.forBlock['lists_create_with'] = function(block, generator) {
  const values = [];
  for (let i = 0; i < block.itemCount_; i++) {
    const valueCode = generator.valueToCode(block, 'ADD' + i,
        Order.ATOMIC);
    if (valueCode) {
      values.push(valueCode);
    }
  }
  const valueString = values.join(',\n');
  const indentedValueString =
      generator.prefixLines(valueString, generator.INDENT);
  const codeString = '[\n' + indentedValueString + '\n]';
  return [codeString, Order.ATOMIC];
};

nitgGenerator.forBlock['object'] = function(block, generator) {
  const statementMembers =
      generator.statementToCode(block, 'MEMBERS');
  const code = '{\n' + statementMembers + '\n}';
  return [code, Order.ATOMIC];
};

// this "scrub_" thing has been messing my shit with commas (Fixed)

nitgGenerator.scrub_ = function(block, code, thisOnly) {
  const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + '\n' + nitgGenerator.blockToCode(nextBlock);
  }
  return code;
};

// custom blocks from here onward

nitgGenerator.forBlock['ActorFrame'] = function(block, generator) {
  const statement_actorframe = generator.statementToCode(block, 'ACTORFRAME');

  const code = '<ActorFrame><children>\n' + statement_actorframe + '\n</children></ActorFrame>';
  return code;
};

nitgGenerator.forBlock['Layer'] = function(block, generator) {
  const statement_layer = generator.statementToCode(block, 'LAYER');
  
  const code = '<Layer\n' + statement_layer + '\n/>';
  return code;
};

nitgGenerator.forBlock['ActorType'] = function(block, generator) {
  const text_actortype = block.getFieldValue('ACTORTYPE');
  
  const code = 'Type="' + text_actortype + '"';
  return code;
};

nitgGenerator.forBlock['Command'] = function(block, generator) {
  const text_cmdname = block.getFieldValue('CMDNAME');
  const statement_cmd = generator.statementToCode(block, 'Command');

  const code = text_cmdname + 'Command="' + statement_cmd + '"';
  return code;
};

nitgGenerator.forBlock['Function'] = function(block, generator) {
  const text_function = block.getFieldValue('FUNCTION');
  const statement_func = generator.statementToCode(block, 'FUNC');

  const code = '%function(' + text_function + ')\n' + statement_func + '\nend';
  return code;
};

nitgGenerator.forBlock['IFDO'] = function(block, generator) {
  const value_if = generator.valueToCode(block, 'IF', Order.ATOMIC);
  const statement_do = generator.statementToCode(block, 'DO');

  const code = 'if ' + value_if + ' then\n' + statement_do + '\nend';
  return code;
};

nitgGenerator.forBlock['IFDOELSE'] = function(block, generator) {
  const value_if = generator.valueToCode(block, 'IF', Order.ATOMIC);
  const statement_do = generator.statementToCode(block, 'DO');
  const statement_else = generator.statementToCode(block, 'ELSE');

  const code = 'if ' + value_if + ' then\n' + statement_do + '\nelse\n' + statement_else + '\nend';
  return code;
};

nitgGenerator.forBlock['Generic_Custom'] = function(block, generator) {
  const text_custom = block.getFieldValue('CUSTOM');

  const code = text_custom;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['Generic_CodeCustom'] = function(block, generator) {
  const text_custom = block.getFieldValue('CUSTOM');

  const code = text_custom;
  return code;
};

nitgGenerator.forBlock['VARSET'] = function(block, generator) {
  const dropdown_vartype = block.getFieldValue('VARTYPE');
  const text_var = block.getFieldValue('VAR');
  const value_varset = generator.valueToCode(block, 'VARSET', Order.ATOMIC);

  const code = dropdown_vartype + ' ' + text_var + ' = ' + value_varset;
  return code
};

nitgGenerator.forBlock['GameState'] = function(block, generator) {
  const value_gamestate = generator.valueToCode(block, 'GAMESTATE', Order.ATOMIC);

  const code = 'GAMESTATE:' + value_gamestate;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['JoinBlock'] = function(block, generator) {

  const value_join = generator.valueToCode(block, 'Join', Order.ATOMIC);

  const value_with = generator.valueToCode(block, 'With', Order.ATOMIC);

  const checkbox_space = block.getFieldValue('Space');

  if (checkbox_space === 'TRUE') {
    var endval_with = ' ' + value_with;
  }

  if (checkbox_space === 'FALSE') {
    var endval_with = value_with;
  }

  const code = value_join + endval_with;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['DO'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  const code = value_name;
  return code;
};

nitgGenerator.forBlock['Operation'] = function(block, generator) {
  const text_arg1 = block.getFieldValue('Arg1');
  const dropdown_sign = block.getFieldValue('Sign');
  const text_arg2 = block.getFieldValue('Arg2');

  const code = text_arg1 + ' ' + dropdown_sign + ' ' + text_arg2;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['SELF'] = function(block, generator) {
  const value_self = generator.valueToCode(block, 'SELF', Order.ATOMIC);

  const code = 'self:' + value_self;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['playCommand'] = function(block, generator) {
  const dropdown_mode = block.getFieldValue('MODE');
  const text_cmd = block.getFieldValue('CMD');

  const code = dropdown_mode + "command('" + text_cmd + "')";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['selfTween'] = function(block, generator) {
  const dropdown_tweentype = block.getFieldValue('TWEENTYPE');
  const number_time = block.getFieldValue('TIME');

  const code = dropdown_tweentype + '(' + number_time + ')';
  return [code, Order.ATOMIC];
}

nitgGenerator.forBlock['ApplyModifiers'] = function(block, generator) {
  const value_mods = generator.valueToCode(block, 'MODS', Order.ATOMIC);
  const dropdown_player = block.getFieldValue('PLAYER');

  if (dropdown_player === '-') {
    var aplmodplayer = '';
  } else if (dropdown_player === '1') {
    var aplmodplayer = ', 1';
  } else if (dropdown_player === '2') {
    var aplmodplayer = ', 2';
  }

  const code = "ApplyModifiers('" + value_mods + "'" + aplmodplayer + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['Mod'] = function(block, generator) {
  const text_mod = block.getFieldValue('MOD');
  const number_speed = block.getFieldValue('SPEED');
  const number_amp = block.getFieldValue('AMP');

  const value_arguments = generator.valueToCode(block, 'ARGUMENTS', Order.ATOMIC);

  const code = '*' + number_speed + ' ' + number_amp + ' ' + text_mod + ',' + value_arguments;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['forDo'] = function(block, generator) {
  const text_val = block.getFieldValue('VAL');
  const text_exp = block.getFieldValue('EXP');

  const statement_do = generator.statementToCode(block, 'Do');

  const code = 'for ' + text_val + ' = ' + text_exp + ' do\n' + statement_do + '\nend';
  return code;
};

nitgGenerator.forBlock['repeatUntil'] = function(block, generator) {
  const value_label = generator.valueToCode(block, 'Label', Order.ATOMIC);
  const statement_repeat = generator.statementToCode(block, 'Repeat');

  const code = 'repeat\n' + statement_repeat + '\nuntil ' + value_label;
  return code;
};

nitgGenerator.forBlock['whileDo'] = function(block, generator) {
  const value_while = generator.valueToCode(block, 'While', Order.ATOMIC);
  const statement_do = generator.statementToCode(block, 'Do');

  const code = 'while ' + value_while + ' do\n' + statement_do + '\nend';
  return code;
};

nitgGenerator.forBlock['freeuse_text'] = function(block, generator) {
  const text_txt = block.getFieldValue('TXT');
  const value_text = generator.valueToCode(block, 'TEXT', Order.ATOMIC);

  const code = text_txt + value_text;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['selfHidden'] = function(block, generator) {
  const checkbox_hidebool = block.getFieldValue('HIDEBOOL');
  if (checkbox_hidebool === 'TRUE') {
    var endval_hidebool = '1';
  } else if (checkbox_hidebool === 'FALSE') {
    var endval_hidebool = '0';
  }
  const code = 'hidden(' + endval_hidebool + ')';
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['selfXY'] = function(block, generator) {
  const dropdown_selfxy = block.getFieldValue('selfXY');
  const number_xy = block.getFieldValue('XY');

  const code =  dropdown_selfxy + '(' + number_xy + ')';
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['selfZoomto'] = function(block, generator) {
  const number_x = block.getFieldValue('X');
  const number_y = block.getFieldValue('Y');

  const code = 'zoomto(' + number_x + ', ' + number_y + ')';
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['selfDiffuse'] = function(block, generator) {
  const number_r = block.getFieldValue('R');
  const number_g = block.getFieldValue('G');
  const number_b = block.getFieldValue('B');
  const number_a = block.getFieldValue('A');

  const code = 'diffuse(' + number_r + ', ' + number_g + ', ' + number_b + ', ' + number_a + ')';
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['selfEffect'] = function(block, generator) {
  const dropdown_fxtype = block.getFieldValue('FXTYPE');
  const value_fx = generator.valueToCode(block, 'FX', Order.ATOMIC);

  const code = dropdown_fxtype + '(' + value_fx + ')';
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['selfEffectCFG'] = function(block, generator) {
  const dropdown_fxcfg = block.getFieldValue('FXCFG');
  const value_cfg = generator.valueToCode(block, 'CFG', Order.ATOMIC);

  const code = dropdown_fxcfg + '(' + value_cfg + ')';
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['selfBlend'] = function(block, generator) {
  const dropdown_type = block.getFieldValue('TYPE');
  const value_blend = generator.valueToCode(block, 'Blend', Order.ATOMIC);

  const code = dropdown_type + '(' + value_blend + ')';
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['actorNames'] = function(block, generator) {
  const dropdown_type = block.getFieldValue('TYPE');
  const text_name = block.getFieldValue('NAME');

  const code = dropdown_type + '(' + text_name + ')';
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock['actor'] = function(block, generator) {
  const text_actname = block.getFieldValue('ACTNAME');
  const value_actor = generator.valueToCode(block, 'actor', Order.ATOMIC);

  const code = text_actname + value_actor;
  return [code, Order.ATOMIC];
}