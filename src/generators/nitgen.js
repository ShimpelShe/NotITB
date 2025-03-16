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
  const text_var = block.getFieldValue('VAR');
  const value_varset = generator.valueToCode(block, 'VARSET', Order.ATOMIC);

  const code = 'local ' + text_var + ' = ' + value_varset;
  return code;
}