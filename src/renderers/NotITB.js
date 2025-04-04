import * as Blockly from 'blockly/core';

class CustomConstantProvider extends Blockly.geras.ConstantProvider {
    constructor() {
      // Set up all of the constants from the base provider.
      super();

      this.NOTCH_HEIGHT = 6
      this.NOTCH_WIDTH = 24
      this.NOTCH_OFFSET_LEFT = 6
      this.TAB_WIDTH = 6
      this.TAB_HEIGHT = 16
      this.JAGGED_TEETH_HEIGHT = 12
      this.JAGGED_TEETH_WIDTH = 4
      this.CORNER_RADIUS = 4
      this.FIELD_BORDER_RECT_RADIUS = 2
      this.FIELD_BORDER_RECT_COLOUR = '#fcfeff'
      this.FIELD_BORDER_RECT_X_PADDING = 4
      this.FIELD_TEXT_FONTSIZE = 11
      this.FIELD_TEXT_FONTWEIGHT = 'bold'
      this.FIELD_TEXT_FONTFAMILY = 'sans-serif, serif'
    }
  }

  class CustomRenderer extends Blockly.geras.Renderer {
    constructor() {
      super();
    };
    makeConstants_() {
      return new CustomConstantProvider();
    }
  }

Blockly.blockRendering.register('NotITB', CustomRenderer);