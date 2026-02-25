import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/tokens/index.css';

const preview: Preview = {
  globalTypes: {
    baseMode: {
      description: 'Base collection – colour palette',
      toolbar: {
        title: 'Base',
        icon: 'paintbrush',
        items: [
          { value: 'light',     title: 'Light' },
          { value: 'dark',      title: 'Dark' },
          { value: 'g42-light', title: 'G42 Light' },
          { value: 'g42-dark',  title: 'G42 Dark' },
          { value: 'pmo',       title: 'PMO' },
        ],
        dynamicTitle: true,
      },
    },
    interfaceMode: {
      description: 'Interface collection – light / dark semantic mapping',
      toolbar: {
        title: 'Interface',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark',  title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    typographyMode: {
      description: 'Typography collection – font family',
      toolbar: {
        title: 'Typography',
        icon: 'document',
        items: [
          { value: 'inter',     title: 'Inter' },
          { value: 'noto-sans', title: 'Noto Sans' },
          { value: 'sf-pro',    title: 'SF Pro' },
          { value: 'diatype',   title: 'Diatype' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    baseMode: 'light',
    interfaceMode: 'light',
    typographyMode: 'inter',
  },

  decorators: [
    (Story, context) => {
      const baseMode = context.globals.baseMode || 'light';
      const interfaceMode = context.globals.interfaceMode || 'light';
      const typographyMode = context.globals.typographyMode || 'inter';

      return React.createElement(
        'div',
        {
          'data-base-mode': baseMode,
          'data-interface-mode': interfaceMode,
          'data-typography-mode': typographyMode,
          style: {
            backgroundColor: 'var(--background-primary)',
            color: 'var(--content-primary)',
            transition: 'background-color 0.2s ease, color 0.2s ease',
          },
        },
        React.createElement(Story),
      );
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
};

export default preview;
