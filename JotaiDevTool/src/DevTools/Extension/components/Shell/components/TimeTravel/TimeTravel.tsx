import * as React from 'react';
import { Flex, Sx } from '@mantine/core';
import { Panel, PanelGroup } from 'react-resizable-panels';
import { PanelResizeHandle } from '../PanelResizeHandle';
import { PlayBar } from './components/PlayBar';
import { SnapshotDetail } from './components/SnapshotDetail';
import { SnapshotList } from './components/SnapshotList';

const panelStyles = { overflow: 'auto' };

// 56px is the height of the playbar
const panelGroupStyles = { height: 'calc(100% - 56px)' };
const atomListWrapperStyles: Sx = (theme) => ({
  background:
    theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
});

export const TimeTravel = React.memo(() => {
  return (
    <>
      <PanelGroup
        direction="horizontal"
        style={panelGroupStyles}
        id="jotai-devtools-time-travel-panel-group"
      >
        <Panel
          defaultSize={45}
          minSize={30}
          style={panelStyles}
          id="jotai-devtools-time-travel-panel-left"
        >
          <Flex
            p={10}
            pt={0}
            h="100%"
            direction="column"
            sx={atomListWrapperStyles}
            data-testid="jotai-devtools-time-travel-panel-left-content"
          >
            <SnapshotList />
          </Flex>
        </Panel>
        <PanelResizeHandle />
        <Panel
          defaultSize={55}
          minSize={40}
          style={panelStyles}
          id="jotai-devtools-time-travel-panel-right"
        >
          <Flex p={10} h="100%" direction="column" pos="relative">
            <SnapshotDetail />
          </Flex>
        </Panel>
      </PanelGroup>
      <PlayBar />
    </>
  );
});
