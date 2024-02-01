import type { Meta, StoryObj } from '@storybook/react'

import Dropdown from './index'

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'Click here',
    children: 'content'
  }
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: (args) => <Dropdown {...args} />
} satisfies Story
