import type { Meta, StoryObj } from '@storybook/react'

import Sidebar from './index'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    elementsSidebar: [
      {
        label: 'Home',
        icon: <AiOutlineHome />,
        to: '/',
        divider: true
      },
      {
        label: 'Meus Objetos',
        icon: <AiOutlineHome />,
        to: '/',
        quantity: 10,
        divider: true
      },
      {
        label: 'Meu Perfil',
        icon: <AiOutlineUser />,
        to: '/profile',
        divider: true
      }
    ]
  }
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default = {
  render: (args) => (
    <div style={{ height: '100vh' }}>
      <Sidebar elementsSidebar={args.elementsSidebar} />
    </div>
  )
} satisfies Story
