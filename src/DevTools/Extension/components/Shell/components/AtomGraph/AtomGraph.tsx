import * as React from 'react';
import { Flex } from '@mantine/core';
import { Panel, PanelGroup } from 'react-resizable-panels';
import ReactFlow, { ReactFlowProvider } from 'reactflow';
import { PanelResizeHandle } from '../PanelResizeHandle';
import './AtomGraph.css';
import { AtomGraphList } from './components/AtomGraphList/AtomGraphList';
import { AtomGraphVisual } from './components/AtomGraphVisual/AtomGraphVisual';

export const AtomGraph = React.memo(() => {
  return (
    <PanelGroup direction="horizontal">
      <Panel
        defaultSize={50}
        minSize={30}
        className="internal-jotai-devtools-atom-graph-panel"
      >
        <Flex
          p={10}
          pt={0}
          h="100%"
          direction="column"
          className="internal-jotai-devtools-atom-list-wrapper"
        >
          <AtomGraphList />
        </Flex>
      </Panel>
      <PanelResizeHandle />
      <Panel
        defaultSize={50}
        minSize={30}
        className="internal-jotai-devtools-atom-graph-panel"
      >
        <ReactFlowProvider>
          <AtomGraphVisual />
        </ReactFlowProvider>
      </Panel>
    </PanelGroup>
  );
});
