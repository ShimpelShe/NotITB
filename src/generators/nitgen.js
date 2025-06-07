import * as Blockly from "blockly";

// Blocks Down Below

export const nitgGenerator = new Blockly.Generator("NITG");
const Order = {
  ATOMIC: 0,
};

nitgGenerator.scrub_ = function (block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + "\n" + nitgGenerator.blockToCode(nextBlock);
  }
  return code;
};

nitgGenerator.forBlock["ActorFrame"] = function (block, generator) {
  const statement_actorframe = generator.statementToCode(block, "ACTORFRAME");

  const code =
    "<ActorFrame><children>\n" +
    statement_actorframe +
    "\n</children></ActorFrame>";
  return code;
};

nitgGenerator.forBlock["Layer"] = function (block, generator) {
  const statement_layer = generator.statementToCode(block, "LAYER");

  const code = "<Layer\n" + statement_layer + "\n/>";
  return code;
};

nitgGenerator.forBlock["Command"] = function (block, generator) {
  const text_cmdname = block.getFieldValue("CMDNAME");
  const statement_cmd = generator.statementToCode(block, "Command");

  const code = text_cmdname + 'Command="' + statement_cmd + '"';
  return code;
};

nitgGenerator.forBlock["Function"] = function (block, generator) {
  const value_funclabel = generator.valueToCode(
    block,
    "FUNCLABEL",
    Order.ATOMIC
  );
  const statement_func = generator.statementToCode(block, "FUNC");

  const code =
    "%function(" + value_funclabel + ")\n" + statement_func + "\nend";
  return code;
};

nitgGenerator.forBlock["IFDO"] = function (block, generator) {
  const value_if = generator.valueToCode(block, "IF", Order.ATOMIC);
  const statement_do = generator.statementToCode(block, "DO");

  const code = "if " + value_if + " then\n" + statement_do + "\nend";
  return code;
};

nitgGenerator.forBlock["IFDOELSE"] = function (block, generator) {
  const value_if = generator.valueToCode(block, "IF", Order.ATOMIC);
  const statement_do = generator.statementToCode(block, "DO");
  const statement_else = generator.statementToCode(block, "ELSE");

  const code =
    "if " +
    value_if +
    " then\n" +
    statement_do +
    "\nelse\n" +
    statement_else +
    "\nend";
  return code;
};

nitgGenerator.forBlock["Generic_Custom"] = function (block, generator) {
  const text_custom = block.getFieldValue("CUSTOM");

  const code = text_custom;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["Generic_CodeCustom"] = function (block, generator) {
  const text_custom = block.getFieldValue("CUSTOM");

  const code = text_custom;
  return code;
};

nitgGenerator.forBlock["VARSET"] = function (block, generator) {
  const dropdown_vartype = block.getFieldValue("VARTYPE");
  const text_var = block.getFieldValue("VAR");
  const value_varset = generator.valueToCode(block, "VARSET", Order.ATOMIC);

  if (dropdown_vartype === "global") {
    var vartype = "";
  } else {
    var vartype = "local";
  }

  const code = vartype + " " + text_var + " = " + value_varset;
  return code;
};

nitgGenerator.forBlock["GameState"] = function (block, generator) {
  const value_gamestate = generator.valueToCode(
    block,
    "GAMESTATE",
    Order.ATOMIC
  );

  const code = "GAMESTATE:" + value_gamestate;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["DO"] = function (block, generator) {
  const value_name = generator.valueToCode(block, "NAME", Order.ATOMIC);
  const code = value_name;
  return code;
};

nitgGenerator.forBlock["SELF"] = function (block, generator) {
  const value_self = generator.valueToCode(block, "SELF", Order.ATOMIC);

  const code = "self:" + value_self;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["playCommand"] = function (block, generator) {
  const dropdown_mode = block.getFieldValue("MODE");
  const text_cmd = block.getFieldValue("CMD");

  const code = dropdown_mode + "command('" + text_cmd + "')";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["selfTween"] = function (block, generator) {
  const dropdown_tweentype = block.getFieldValue("TWEENTYPE");
  const number_time = generator.valueToCode(block, "TweenNum", Order.ATOMIC);

  const code = dropdown_tweentype + "(" + number_time + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["ApplyModifiers"] = function (block, generator) {
  const value_mods = generator.valueToCode(block, "MODS", Order.ATOMIC);
  const dropdown_player = block.getFieldValue("PLAYER");

  if (dropdown_player === "-") {
    var aplmodplayer = "";
  } else if (dropdown_player === "1") {
    var aplmodplayer = ", 1";
  } else if (dropdown_player === "2") {
    var aplmodplayer = ", 2";
  }

  const code = "ApplyModifiers('" + value_mods + "'" + aplmodplayer + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["Mod"] = function (block, generator) {
  const number_speed = block.getFieldValue("SPEED");
  const number_amp = block.getFieldValue("AMP");

  const value_mod = generator.valueToCode(block, "MOD", Order.ATOMIC);
  const value_arguments = generator.valueToCode(
    block,
    "ARGUMENTS",
    Order.ATOMIC
  );

  const code =
    "*" +
    number_speed +
    " " +
    number_amp +
    " " +
    value_mod +
    "," +
    value_arguments;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["forDo"] = function (block, generator) {
  const text_val = block.getFieldValue("VAL");
  const text_exp = block.getFieldValue("EXP");

  const statement_do = generator.statementToCode(block, "Do");

  const code =
    "for " + text_val + " = " + text_exp + " do\n" + statement_do + "\nend";
  return code;
};

nitgGenerator.forBlock["repeatUntil"] = function (block, generator) {
  const value_label = generator.valueToCode(block, "Label", Order.ATOMIC);
  const statement_repeat = generator.statementToCode(block, "Repeat");

  const code = "repeat\n" + statement_repeat + "\nuntil " + value_label;
  return code;
};

nitgGenerator.forBlock["whileDo"] = function (block, generator) {
  const value_while = generator.valueToCode(block, "While", Order.ATOMIC);
  const statement_do = generator.statementToCode(block, "Do");

  const code = "while " + value_while + " do\n" + statement_do + "\nend";
  return code;
};

nitgGenerator.forBlock["freeuse_text"] = function (block, generator) {
  const text_txt = block.getFieldValue("TXT");
  const value_text = generator.valueToCode(block, "TEXT", Order.ATOMIC);

  const code = text_txt + value_text;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["selfHidden"] = function (block, generator) {
  const checkbox_hidebool = block.getFieldValue("HIDEBOOL");
  if (checkbox_hidebool === "TRUE") {
    var endval_hidebool = "1";
  } else if (checkbox_hidebool === "FALSE") {
    var endval_hidebool = "0";
  }
  const code = "hidden(" + endval_hidebool + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["selfXY"] = function (block, generator) {
  const dropdown_selfxy = block.getFieldValue("selfXY");
  const number_xy = generator.valueToCode(block, "Value", Order.ATOMIC);

  const code = dropdown_selfxy + "(" + number_xy + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["selfZoomto"] = function (block, generator) {
  const number_xy = generator.valueToCode(block, "ZoomTo", Order.ATOMIC);

  const code = "zoomto(" + number_xy + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["selfDiffuse"] = function (block, generator) {
  const number_rgba = generator.valueToCode(block, "RGBA", Order.ATOMIC);

  const code = "diffuse(" + number_rgba + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["selfEffect"] = function (block, generator) {
  const dropdown_fxtype = block.getFieldValue("FXTYPE");
  const value_fx = generator.valueToCode(block, "FX", Order.ATOMIC);

  const code = dropdown_fxtype + "(" + value_fx + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["selfEffectCFG"] = function (block, generator) {
  const dropdown_fxcfg = block.getFieldValue("FXCFG");
  const value_cfg = generator.valueToCode(block, "CFG", Order.ATOMIC);

  const code = dropdown_fxcfg + "(" + value_cfg + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["selfBlend"] = function (block, generator) {
  const dropdown_type = block.getFieldValue("TYPE");
  const value_blend = generator.valueToCode(block, "Blend", Order.ATOMIC);

  const code = dropdown_type + "(" + value_blend + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["actorNames"] = function (block, generator) {
  const dropdown_type = block.getFieldValue("TYPE");
  const text_name = block.getFieldValue("NAME");

  if (dropdown_type === "SetName") {
    var actorname_text = text_name;
  } else {
    var actorname_text = "";
  }

  const code = dropdown_type + "(" + actorname_text + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["actor"] = function (block, generator) {
  const text_actname = block.getFieldValue("ACTNAME");
  const value_actor = generator.valueToCode(block, "actor", Order.ATOMIC);

  const code = text_actname + value_actor;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["finishSong"] = function (block, generator) {
  const code = "FinishSong()";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["gamestateBPX"] = function (block, generator) {
  const dropdown_type = block.getFieldValue("type");

  const code = "GetCurBP" + dropdown_type + "()";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["gsGetsongX"] = function (block, generator) {
  const dropdown_type = block.getFieldValue("type");
  const checkbox_vis = block.getFieldValue("vis");

  if (checkbox_vis === "TRUE") {
    var gsgsongvis = "Visible";
  } else if (checkbox_vis === "FALSE") {
    var gsgsongvis = "";
  }

  const code = "GetSong" + dropdown_type + gsgsongvis + "()";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["gsReloadSteps"] = function (block, generator) {
  const code = "ReloadSteps()";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["gsSetSongX"] = function (block, generator) {
  const dropdown_name = block.getFieldValue("NAME");
  const value_label = generator.valueToCode(block, "label", Order.ATOMIC);

  const code = "SetSong" + dropdown_name + "(" + value_label + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["screenCenterXY"] = function (block, generator) {
  const dropdown_type = block.getFieldValue("Type");

  const code = "SCREEN_CENTER" + dropdown_type;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["_2vector"] = function (block, generator) {
  const number_val1 = block.getFieldValue("val1");
  const number_val2 = block.getFieldValue("val2");

  const code = number_val1 + ", " + number_val2;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["_3vector"] = function (block, generator) {
  const number_val1 = block.getFieldValue("val1");
  const number_val2 = block.getFieldValue("val2");
  const number_val3 = block.getFieldValue("val3");

  const code = number_val1 + ", " + number_val2 + ", " + number_val3;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["_4vector"] = function (block, generator) {
  const number_val1 = block.getFieldValue("val1");
  const number_val2 = block.getFieldValue("val2");
  const number_val3 = block.getFieldValue("val3");
  const number_val4 = block.getFieldValue("val4");

  const code =
    number_val1 + ", " + number_val2 + ", " + number_val3 + ", " + number_val4;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["number"] = function (block, generator) {
  const number_num = block.getFieldValue("num");

  if (number_num === 0) {
    var num = "0";
  } else {
    var num = number_num;
  }

  const code = num;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["messageCommand"] = function (block, generator) {
  const text_msgname = block.getFieldValue("msgName");
  const statement_blocks = generator.statementToCode(block, "blocks");

  const code = text_msgname + 'MessageCommand"' + statement_blocks + '"';
  return code;
};

nitgGenerator.forBlock["messageBroadcast"] = function (block, generator) {
  const text_msgname = block.getFieldValue("MSGNAME");

  const code = "MESSAGEMAN:Broadcast('" + text_msgname + "'";
  return code;
};

nitgGenerator.forBlock["rageDisplay"] = function (block, generator) {
  const value_value = generator.valueToCode(block, "Value", Order.ATOMIC);

  const code = "DISPLAY:" + value_value;
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["changeCentering"] = function (block, generator) {
  const value_centering = generator.valueToCode(
    block,
    "Centering",
    Order.ATOMIC
  );

  const code = "ChangeCentering(" + value_centering + ")";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["getCFPS"] = function (block, generator) {
  const code = "GetCumFps()";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["getFPS"] = function (block, generator) {
  const code = "GetFPS()";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["getDisplayHeight"] = function (block, generator) {
  const code = "GetDisplayHeight()";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["getDisplayWidth"] = function (block, generator) {
  const code = "GetDisplayWidth()";
  return [code, Order.ATOMIC];
};

nitgGenerator.forBlock["modSelector"] = function (block, generator) {
  const dropdown_modlist = block.getFieldValue("modlist");

  const code = dropdown_modlist;
  return [code, Order.ATOMIC];
};
