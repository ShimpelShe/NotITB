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

nitgGenerator.scrub_ = function(block, code, thisOnly) {
  const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + ',\n' + nitgGenerator.blockToCode(nextBlock);
  }
  return code;
};

// custom blocks from here onward

nitgGenerator.forBlock['ActorFrame'] = function(block, generator) {
  const statement_actorframe = generator.statementToCode(block, 'ACTORFRAME');

  const code = '<ActorFrame><children>\n' + statement_actorframe + '\n</ActorFrame></children>';
  return code;
};

nitgGenerator.forBlock['Layer'] = function(block, generator) {
  const statement_layer = generator.statementToCode(block, 'LAYER');
  
  const code = '<Layer\n' + statement_layer + '\n/>';
  return code;
};

nitgGenerator.forBlock['ActorType'] = function(block, generator) {
  const text_actortype = block.getFieldValue('ACTORTYPE');
  
  const code = 'Type=' + text_actortype;
  return code;
};

nitgGenerator.forBlock['Command'] = function(block, generator) {
  const text_cmdname = block.getFieldValue('CMDNAME');
  const statement_cmd = generator.statementToCode(block, 'Command');

  const code = text_cmdname + 'Command="\n' + statement_cmd + '\n"';
  return code;
}