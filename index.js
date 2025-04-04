/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from './node_modules/blockly';

import {blocks} from './blocks/nitgblocks';
import {nitgGenerator} from './generators/nitgen';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';
import './renderers/NotITB';

//import plugins

import {shadowBlockConversionChangeListener} from './node_modules/@blockly/shadow-block-converter';
import {Backpack} from './node_modules/@blockly/workspace-backpack';
import {ZoomToFitControl} from './node_modules/@blockly/zoom-to-fit';
import {
  ScrollOptions,
  ScrollBlockDragger,
  ScrollMetricsManager,
} from './node_modules/@blockly/plugin-scroll-options';

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

/*

Note to self: Actual colors in nitgblocks.js
Pointer Variables in both nitgen.js and nitgblocks.js

*/

// down here is the 10000th time AI has saved my lazy ### from coding things i don't know :3

document.getElementById('saveButton').addEventListener('click', () => {
  const state = Blockly.serialization.workspaces.save(ws);
  const blockState = {
    blocks: state.blocks,
  };
  const blob = new Blob([JSON.stringify(blockState)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'blocks.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

document.getElementById('loadButton').addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';

  input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          Blockly.serialization.workspaces.load(jsonData, ws);
        } catch (error) {
          console.error('Error loading or parsing JSON:', error);
        }
      };
      reader.readAsText(file);
    }
  });

  input.click(); // Trigger the file selection dialog
});

document.getElementById('copyButton').addEventListener('click', () => {
  // Get the code element (the <code> inside the <pre>)
  const codeElement = document.getElementById('generatedCode').firstChild;
  
  if (!codeElement) {
    console.error('Code element not found.');
    return;
  }
  
  // Extract text content, preserving any line breaks
  let textContent = '';
  for (const node of codeElement.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      textContent += node.textContent;
    } else if (node.nodeName === 'BR') {
      textContent += '\n';
    }
  }
  
  // Create a blob with the text content
  const blob = new Blob([textContent], { type: 'text/xml' });
  
  // Create a URL for the blob
  const url = URL.createObjectURL(blob);
  
  // Create a temporary anchor element to trigger the download
  const a = document.createElement('a');
  a.href = url;
  a.download = 'modfile.xml'; // Set the filename for the download
  
  // Append to the body, click to download, then remove
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  // Clean up by revoking the URL
  URL.revokeObjectURL(url);
});