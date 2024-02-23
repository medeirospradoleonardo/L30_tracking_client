import type { Meta, StoryObj } from '@storybook/react'

import AlertDropdown from './index'

const meta = {
  title: 'Components/AlertDropdown',
  component: AlertDropdown,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof AlertDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <AlertDropdown />
    </div>
  )
} satisfies Story
