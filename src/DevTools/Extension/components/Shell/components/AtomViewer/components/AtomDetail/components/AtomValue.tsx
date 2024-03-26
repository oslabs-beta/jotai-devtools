import React, { useCallback } from 'react';
import { Box, Tabs, Text } from '@mantine/core';
import { IconBinaryTree2, IconSourceCode } from '@tabler/icons-react';
import { AnyAtomValue } from 'src/types';
import {
  ErrorSymbol,
  getTypeOfAtomValue,
  stringifyAtomValue,
} from '../../../../../../../../utils';
import { ErrorMessage } from '../../../../ErrorMessage';
import { JSONTree } from '../../../../JSONTree';
import { AtomValueViewer, useAtomValueViewer } from '../atoms';
import classes from './AtomValue.module.css';
import { MemoizedValueRenderer } from './MemoizedValueRenderer';

type AtomParseRawValueValueProps = {
  atomValue: AnyAtomValue;
};

const supportedTreeValueTypes: ReturnType<typeof getTypeOfAtomValue>[] = [
  'object',
  'array',
  'atom',
];

export const AtomValue = ({
  atomValue,
}: AtomParseRawValueValueProps): JSX.Element => {
  const [atomValueViewer, setSelectedValueViewer] = useAtomValueViewer();
  const parsedValue = stringifyAtomValue(atomValue);

  const handleOnTabChange = useCallback(
    (value: string | null) => {
      if (value) {
        setSelectedValueViewer(value as AtomValueViewer);
      }
    },
    [setSelectedValueViewer],
  );

  if (parsedValue === ErrorSymbol) {
    return (
      <Box>
        <Text
          component="span"
          fw="bold"
          mb="sm"
          className={classes.RawValueText}
        >
          Raw value
        </Text>
        <ErrorMessage message="Failed to parse the value of the atom" />
      </Box>
    );
  }

  const typeOfValue = getTypeOfAtomValue(atomValue);
  const isJsonTreeCompatible = supportedTreeValueTypes.includes(typeOfValue);

  if (!isJsonTreeCompatible) {
    return (
      <Box>
        <Text
          component="div"
          fw="bold"
          mb="sm"
          className={classes.RawValueText}
        >
          Raw value
        </Text>
        <MemoizedValueRenderer value={parsedValue} />
      </Box>
    );
  }

  return (
    <Box>
      <Text component="span" fw="bold" mb="sm" className={classes.valueText}>
        Value
      </Text>
      <Tabs
        defaultValue="raw-value"
        keepMounted={false}
        id="jotai-devtools-atom-viewer-value-tabs"
        value={atomValueViewer}
        onChange={handleOnTabChange}
      >
        <Tabs.List>
          <Tabs.Tab
            className={classes.RawValue}
            value="raw-value"
            leftSection={<IconSourceCode size="0.9rem" stroke="1.75" />}
          >
            Raw value
          </Tabs.Tab>
          <Tabs.Tab
            className={classes.TreeView}
            value="json-tree"
            leftSection={<IconBinaryTree2 size="0.9rem" stroke="1.75" />}
          >
            Tree view
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="raw-value" pt="xs">
          <MemoizedValueRenderer value={parsedValue} />
        </Tabs.Panel>

        <Tabs.Panel value="json-tree" pt="xs" data-testid="json-tree-panel">
          <JSONTree data={atomValue} />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};
