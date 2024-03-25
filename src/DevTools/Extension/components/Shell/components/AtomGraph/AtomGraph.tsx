import React from 'react';
import { Flex } from '@mantine/core';
import { Panel, PanelGroup } from 'react-resizable-panels';
import { PanelResizeHandle } from '../PanelResizeHandle';
import classes from './AtomGraph.module.css';
import { AtomGraphList } from './components/AtomGraphList/AtomGraphList';
import { AtomGraphVisual } from './components/AtomGraphVisual/AtomGraphVisual';

export const AtomGraph = React.memo(() => {
  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={50} minSize={30} className={classes.panel}>
        <Flex
          p={10}
          pt={0}
          h="100%"
          direction="column"
          className={classes.atomListWrapper}
        >
          <AtomGraphList />
        </Flex>
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={50} minSize={30} className={classes.panel}>
        <AtomGraphVisual />
      </Panel>
    </PanelGroup>
  );
});
