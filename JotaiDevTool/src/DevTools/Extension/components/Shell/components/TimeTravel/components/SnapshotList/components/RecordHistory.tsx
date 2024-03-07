import React from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconPlayerRecordFilled } from '@tabler/icons-react';
import { useThemeMode } from '../../../../../../../../hooks/useThemeMode';
import { useShouldRecordSnapshotHistory } from '../../../atoms';

export const RecordHistory = () => {
  const [shouldRecord, setShouldRecord] = useShouldRecordSnapshotHistory();
  const handleOnClick = () => {
    setShouldRecord((prev) => !prev);
  };
  const label = shouldRecord
    ? 'Stop recording snapshot history'
    : 'Record snapshot history';
  return (
    <Tooltip label={label} openDelay={750}>
      <ActionIcon
        variant="outline"
        color={useThemeMode(
          shouldRecord ? 'red.7' : 'dark',
          shouldRecord ? 'red.7' : 'gray',
        )}
        onClick={handleOnClick}
        aria-label={label}
      >
        <IconPlayerRecordFilled size={18} />
      </ActionIcon>
    </Tooltip>
  );
};
