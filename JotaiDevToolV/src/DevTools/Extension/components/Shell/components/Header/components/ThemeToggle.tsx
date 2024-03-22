import React from 'react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const switchTheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ActionIcon
      variant="filled"
      color={dark ? 'dark' : 'gray'}
      onClick={() => switchTheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size={16} /> : <IconMoonStars size={16} />}
    </ActionIcon>
  );
};
