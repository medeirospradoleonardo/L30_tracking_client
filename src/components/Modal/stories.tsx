import type { Meta, StoryObj } from '@storybook/react'

import Modal from './index'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    isOpen: true,
    children: <h1>Dentro</h1>
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: (args) => (
    <div style={{ width: '100vh', height: '100vh' }}>
      <h1>Fora</h1>
      <Modal {...args} />
    </div>
  )
} satisfies Story
