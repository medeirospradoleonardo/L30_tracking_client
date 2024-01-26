import type { Meta, StoryObj } from '@storybook/react'

import Sidebar from './index'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
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

export const Default = {
  render: (args) => <Sidebar elementsSidebar={args.elementsSidebar} />
} satisfies Story
