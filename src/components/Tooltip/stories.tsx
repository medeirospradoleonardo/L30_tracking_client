import type { Meta, StoryObj } from '@storybook/react'

import Tooltip from './index'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    content: 'Content Tooltip',
    limit: 'left',
    position: 'bottom',
    children: <span>Tooltip</span>
  }
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: (args) => <Tooltip {...args} />
} satisfies Story
