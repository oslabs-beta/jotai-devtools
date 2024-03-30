import { addons } from '@storybook/addons';
import { useEffect, createElement } from 'react';

// Set the data-mantine-color-scheme attribute to "light"
const setDataMantineColorSchemeLight = () => {
  const rootElement = document.documentElement;
  rootElement.setAttribute('data-mantine-color-scheme', 'light');
  // Removal of the data-mantine-color-scheme attribute
  // rootElement.removeAttribute('data-mantine-color-scheme')
};

// Add a decorator to set the data-mantine-color-scheme attribute on each story render
addons.getChannel().on('STORY_RENDERED', setDataMantineColorSchemeLight);

export const decorators = [
  (storyComponent, context) => {
    useEffect(() => {
      setDataMantineColorSchemeLight();
    }, []);

    return createElement(storyComponent, context.args);
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
