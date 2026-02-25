import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { Button } from '../Button/Button';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stargate TextField. Figma: [**Stargate Components → Text Field**](https://www.figma.com/design/Skpva9mqnLcDkCmpACtEwL/Stargate-Components?node-id=6911-2754).\n\nMulti-state text input with optional label, caption, leading icon, and trailing action.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'focus', 'typing', 'typing-multiline', 'error', 'success', 'filled', 'disabled'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    caption: { control: 'text' },
    multiLine: { control: 'boolean' },
  },
  args: {
    placeholder: 'Ask anything',
    state: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: 'Email address', placeholder: 'dr.jamal@nmo.ae' },
};

export const Hover: Story = {
  args: { state: 'hover', placeholder: 'Ask anything' },
};

export const Pressed: Story = {
  args: { state: 'pressed', placeholder: 'Ask anything' },
};

export const Focus: Story = {
  args: { state: 'focus', placeholder: 'Ask anything' },
};

export const Typing: Story = {
  args: { state: 'typing', value: 'dr.jamal@nmo.ae', label: 'Email address' },
};

export const TypingMultiLine: Story = {
  args: {
    state: 'typing-multiline',
    value: "Key outtakes from the company's financial performance in 2024",
    label: 'Message',
    multiLine: true,
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    value: 'dr.jamal@nmo.ae',
    label: 'Email address',
    caption: 'This email is already in use',
  },
};

export const Success: Story = {
  args: {
    state: 'success',
    value: 'dr.jamal@nmo.ae',
    label: 'Email address',
    caption: 'Email verified',
  },
};

export const Filled: Story = {
  args: {
    state: 'filled',
    value: 'dr.jamal@nmo.ae',
    label: 'Email address',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    value: 'dr.jamal@nmo.ae',
    label: 'Email address',
  },
};

export const WithLeadingIcon: Story = {
  name: 'With Leading Icon',
  args: {
    placeholder: 'Search',
    leadingIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
};

export const WithTrailingAction: Story = {
  name: 'With Trailing Action (Send)',
  args: {
    placeholder: 'Ask anything',
    trailingAction: (
      <Button priority="primary-brand" size="M" iconOnly aria-label="Send">
        <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </Button>
    ),
  },
};

/* ── All states grid ─────────────────────────────────────────── */
export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
      <TextField placeholder="Ask anything" state="default" label="Default" />
      <TextField placeholder="Ask anything" state="hover" label="Hover" />
      <TextField placeholder="Ask anything" state="pressed" label="Pressed" />
      <TextField placeholder="Ask anything" state="focus" label="Focus" />
      <TextField value="dr.jamal@nmo.ae" state="typing" label="Typing" />
      <TextField value="Key outtakes from the company's performance in 2024" state="typing-multiline" label="Typing Multi-Line" multiLine />
      <TextField value="dr.jamal@nmo.ae" state="error" label="Error" caption="This email is already in use" />
      <TextField value="dr.jamal@nmo.ae" state="success" label="Success" caption="Email verified" />
      <TextField value="dr.jamal@nmo.ae" state="filled" label="Filled" />
      <TextField value="dr.jamal@nmo.ae" state="disabled" label="Disabled" />
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
