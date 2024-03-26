import React from 'react';
import { Box, Title } from '@mantine/core';
import { MetaInfo } from '../../../../../../MetaInfo';
import classes from './SnapshotMetaDetails.module.css';

type SnapshotMetaDetailsProps = {
  timestamp: string;
};

export const SnapshotMetaDetails = (props: SnapshotMetaDetailsProps) => {
  return (
    <Box>
      <Title size="h5" mb={10} className={classes.metaText}>
        Meta
      </Title>
      <MetaInfo label="Timestamp" value={props.timestamp} />
    </Box>
  );
};
