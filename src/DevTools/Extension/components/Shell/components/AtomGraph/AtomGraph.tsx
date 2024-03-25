import React from 'react';
import 'reactflow/dist/style.css';
import 'reactflow/dist/base.css';
import { Flex } from 'antd';
import { Panel, PanelGroup } from 'react-resizable-panels';
import { AtomGraphVisual } from './components/AtomGraphVisual/AtomGraphVisual';

export const AtomGraph = React.memo(() => {
  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={50} minSize={30}>
        <Flex
          p={10}
          pt={0}
          h="100%"
          direction="column"
          // className={classes.atomListWrapper}
        >
          Hi
          {/* <AtomList /> */}
        </Flex>
      </Panel>
      <Panel defaultSize={50} minSize={30}>
        <AtomGraphVisual />
      </Panel>
    </PanelGroup>
  );
});
