import type { Meta, StoryObj } from '@storybook/react'

import Header from './index'
import AlertIcon from './index'

const meta = {
  title: 'AlertIcon',
  component: AlertIcon,
  parameters: {},
  args: {}
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => <AlertIcon />
} satisfies Story

export const withItems = {
  args: {
    quantity: 3
  },
  render: (args) => <AlertIcon {...args} />
} satisfies Story
