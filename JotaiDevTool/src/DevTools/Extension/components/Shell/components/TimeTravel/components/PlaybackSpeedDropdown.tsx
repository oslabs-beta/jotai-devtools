import React from 'react';
import { Select } from '@mantine/core';
import { defaultPlaybackOptions, usePlaybackSpeedOption } from '../atoms';

const options = Object.keys(
  defaultPlaybackOptions,
) as (keyof typeof defaultPlaybackOptions)[];

const isValidPlaybackOption = (
  value: string | null,
): value is keyof typeof defaultPlaybackOptions => {
  return options.includes(value as keyof typeof defaultPlaybackOptions);
};

export const PlaybackSpeedDropdown = () => {
  const [value, setOption] = usePlaybackSpeedOption();

  const handleOnChange = (value: string | null) => {
    if (isValidPlaybackOption(value)) {
      return setOption(value);
    }
    throw new Error(`[jotai-devtools]: invalid playback option: ${value}`);
  };

  return (
    <Select
      value={value}
      dropdownPosition="top"
      data={options}
      onChange={handleOnChange}
      size="xs"
      maw={80}
      color="dark"
      id="jotai-devtools-playback-speed-dropdown"
      data-testid="jotai-devtools-playback-speed-dropdown"
    />
  );
};
