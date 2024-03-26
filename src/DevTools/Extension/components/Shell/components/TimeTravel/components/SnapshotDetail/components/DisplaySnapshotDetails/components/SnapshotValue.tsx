import React, { useCallback } from 'react';
import { Box, Tabs, Title } from '@mantine/core';
import { IconFileCode, IconFileDiff } from '@tabler/icons-react';
import { JSONTree } from '../../../../../../JSONTree';
import { SelectedSnapshotDetail } from '../../../atoms';
import {
  SnapshotValueViewer,
  snapshotValueViewer,
  useSnapshotValueViewer,
} from '../atoms';
import classes from './SnapshotValue.module.css';
import { TreeView } from './TreeView';

type SnapshotValueProps = {
  state: SelectedSnapshotDetail;
};

export const SnapshotValue = (props: SnapshotValueProps): JSX.Element => {
  const [snapshotValueViewer, setSnapshotValueViewer] =
    useSnapshotValueViewer();

  const handleOnTabChange = useCallback(
    (value: string | null) => {
      if (value) {
        setSnapshotValueViewer(value as SnapshotValueViewer);
      }
    },
    [setSnapshotValueViewer],
  );
  return (
    <Box>
      <Title size="h5" mb={10} className={classes.valueText}>
        Value
      </Title>

      <Tabs
        defaultValue="state"
        keepMounted={false}
        id="jotai-devtools-time-travel-value-tabs"
        value={snapshotValueViewer}
        onChange={handleOnTabChange}
      >
        <Tabs.List>
          <Tabs.Tab
            className={classes.stateText}
            value="state"
            leftSection={<IconFileCode size="0.9rem" stroke="1.75" />}
          >
            State
          </Tabs.Tab>
          <Tabs.Tab
            className={classes.diffText}
            value="diff"
            leftSection={<IconFileDiff size="0.9rem" stroke="1.75" />}
          >
            Diff
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="state" pt="xs">
          <JSONTree data={props.state.displayValues} />
        </Tabs.Panel>

        <Tabs.Panel
          value="diff"
          pt="xs"
          data-testid="jotai-devtools-diff-panel"
        >
          <TreeView diff={props.state.diff} />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};
