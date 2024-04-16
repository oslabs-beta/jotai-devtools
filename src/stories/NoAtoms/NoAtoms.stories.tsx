import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'jotai/react';
import { DevTools, DevToolsProps } from '../../';
import { NoAtoms } from './NoAtoms';

export default {
  component: DevTools,
  title: 'NoAtoms',
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
    return (
      <Provider>
        <DevTools {...props} />
        <NoAtoms />
      </Provider>
    );
  },
  args: {
    isInitialOpen: true,
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
