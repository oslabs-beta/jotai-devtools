import React, { useRef } from 'react';
import { Tabs } from '@mantine/core';
import clsx from 'clsx';
import { useAtomValue } from 'jotai/react';
import { shellStylesAtom } from '../../../atoms/shell-styles';
import { TabKeys, shellStyleDefaults } from '../../../constants';
import { useDevtoolsJotaiStoreOptions } from '../../../internal-jotai-store';
import { useSelectedShellTab } from './atoms';
import { AtomGraph } from './components/AtomGraph';
import { AtomViewer } from './components/AtomViewer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { ShellResizeBar } from './components/ShellResizeBar';
import { TabsHeader } from './components/TabsHeader';
import { TimeTravel } from './components/TimeTravel';
import './Shell.css';

export const Shell = () => {
  const [selectedShellTab, setSelectedShellTab] = useSelectedShellTab();

  const shellRef = useRef<HTMLDivElement>(null);

  // TODO move this to a custom hook
  const { height } = useAtomValue(
    shellStylesAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  const handleOnTabChange = (value: string | null) =>
    setSelectedShellTab(value as TabKeys);

  return (
    <Tabs
      keepMounted={false}
      variant="default"
      defaultValue={TabKeys.AtomViewer}
      h={height}
      mah={shellStyleDefaults.maxHeight}
      ref={shellRef}
      className={clsx('internal-jotai-devtools-shell', 'jotai-devtools-shell')}
      data-testid="jotai-devtools-shell"
      id="jotai-devtools-shell"
      value={selectedShellTab}
      onChange={handleOnTabChange}
      color="dark"
    >
      <ShellResizeBar shellRef={shellRef} />
      <Header />
      <ErrorBoundary>
        <TabsHeader />
        <Tabs.Panel
          value={TabKeys.AtomViewer}
          h="100%"
          style={{
            overflow: 'hidden',
            // Hide the overlap of this div's bg
            borderBottomLeftRadius: '7px',
            borderBottomRightRadius: '7px',
          }}
        >
          <AtomViewer />
        </Tabs.Panel>
        <Tabs.Panel
          value={TabKeys.TimeTravel}
          h="100%"
          style={{
            overflow: 'hidden',
            // Hide the overlap of this div's bg
            borderBottomLeftRadius: '7px',
            borderBottomRightRadius: '7px',
          }}
        >
          <TimeTravel />
        </Tabs.Panel>
        <Tabs.Panel
          value={TabKeys.AtomGraph}
          h="100%"
          style={{
            overflow: 'hidden',
            // Hide the overlap of this div's bg
            borderBottomLeftRadius: '7px',
            borderBottomRightRadius: '7px',
          }}
        >
          <AtomGraph />
        </Tabs.Panel>
      </ErrorBoundary>
    </Tabs>
  );
};
