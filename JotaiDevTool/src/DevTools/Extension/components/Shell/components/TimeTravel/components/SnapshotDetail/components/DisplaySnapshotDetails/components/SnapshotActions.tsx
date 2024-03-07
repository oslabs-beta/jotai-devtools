import React, { useEffect, useState } from 'react';
import { Box, Button, ButtonProps, Title } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';
import { IconCircleCheck, IconRotate2 } from '@tabler/icons-react';
import { AtomsSnapshot } from '../../../../../../../../../../../types';
import { useGotoAtomsSnapshot } from '../../../../../../../../../../../utils';
import { useUserStoreOptions } from '../../../../../../../../../../hooks/useUserStore';
import { useIsTimeTravelingValue } from '../../../../../atoms';

const commonStyles: ButtonProps['styles'] = {
  leftIcon: {
    marginRight: '0.325rem',
  },
};

const rotateButtonStyles: ButtonProps['styles'] = {
  ...commonStyles,
  leftIcon: {
    ...commonStyles.leftIcon,
    // There isn't a suitable icon for "undo" in @tabler/icons, so we rotate it slightly to our needs
    transform: 'rotate(130deg)',
  },
};

type SnapshotActionsProps = {
  snapshotToGoTo: AtomsSnapshot;
  isRestorable: boolean;
};

export const SnapshotActions = (props: SnapshotActionsProps) => {
  const [justRestored, setJustRestored] = useState(false);
  const gotoSnapshot = useGotoAtomsSnapshot(useUserStoreOptions());
  const isTimeTraveling = useIsTimeTravelingValue();
  const { start, clear } = useTimeout(() => setJustRestored(false), 1750);

  useEffect(() => {
    return clear;
  }, [clear]);

  const handleOnRestoreClick = () => {
    setJustRestored(true);
    start();
    gotoSnapshot(props.snapshotToGoTo);
  };

  return (
    <Box>
      <Title size="h5" mb={10}>
        Actions
      </Title>
      <Button
        title="Restore this state"
        onClick={handleOnRestoreClick}
        variant="default"
        styles={justRestored ? commonStyles : rotateButtonStyles}
        leftIcon={
          justRestored ? (
            <IconCircleCheck size="0.8rem" />
          ) : (
            <IconRotate2 size="0.8rem" />
          )
        }
        disabled={!props.isRestorable || isTimeTraveling || justRestored}
        size="xs"
      >
        {justRestored ? 'Restored' : 'Restore'}
      </Button>
    </Box>
  );
};
