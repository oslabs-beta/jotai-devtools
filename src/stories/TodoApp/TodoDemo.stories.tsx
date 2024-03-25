import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'jotai/react';
import { DevTools, DevToolsProps } from '../../../';
import { TodoApp } from './TodoApp';

export default {
  component: DevTools,
  title: 'Devtools + TodoApp',
} as Meta<typeof DevTools>;

type CustomStorybookProps = DevToolsProps & {
  'options.shouldShowPrivateAtoms': boolean;
};

type Story = StoryObj<CustomStorybookProps>;

export const Default: Story = {
  render: ({ ...args }) => {
    const nextOptions = {
      ...args.options,
      shouldShowPrivateAtoms: args['options.shouldShowPrivateAtoms'],
    };
    const props = {
      ...args,
      options: nextOptions,
    };
    return <TodoApp {...props} />;
  },
  args: {
    isInitialOpen: false,
    'options.shouldShowPrivateAtoms': false,
  },
  argTypes: {
    store: {
      control: {
        type: false,
      },
    },
    options: {
      control: {
        type: false,
      },
    },
  },
};
