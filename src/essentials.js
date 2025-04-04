import * as Blockly from '../node_modules/blockly';

import {blocks} from './blocks/nitgblocks.js';
import {nitgGenerator} from './generators/nitgen.js';
import {save, load} from './serialization.js';
import {toolbox} from './toolbox.js';
import './index.css';
import './renderers/NotITB.js';

//import plugins

import {shadowBlockConversionChangeListener} from '../node_modules/@blockly/shadow-block-converter';
import {Backpack} from '../node_modules/@blockly/workspace-backpack';
import {ZoomToFitControl} from '../node_modules/@blockly/zoom-to-fit';
import {
  ScrollOptions,
  ScrollBlockDragger,
  ScrollMetricsManager,
} from '../node_modules/@blockly/plugin-scroll-options';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox,
  grid:
      {spacing: 20,
       length: 3,
       colour: '#ccc',
       snap: true},
  trashcan: true,
  zoom:
         {controls: true, 
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true},
  renderer: 'NotITB',
  plugins: {
    blockDragger: ScrollBlockDragger,
    metricsManager: ScrollMetricsManager,
  },
});

// Start ze plugins :3

ws.addChangeListener(shadowBlockConversionChangeListener);

const backpackOptions = {
  allowEmptyBackpackOpen: false,
  useFilledBackpackImage: true,
  contextMenu: {
    emptyBackpack: true,
    removeFromBackpack: true,
    copyToBackpack: false,
  },
};

const backpack = new Backpack(ws, backpackOptions);
backpack.init();

const zoomToFit = new ZoomToFitControl(ws);
zoomToFit.init();

const scroller = new ScrollOptions(ws);
scroller.init();

// This function resets the code div and shows the
// generated code from the workspace.
const runCode = () => {
  const code = nitgGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
};	
// Load the initial state from storage and run the code.
load(ws);
runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});