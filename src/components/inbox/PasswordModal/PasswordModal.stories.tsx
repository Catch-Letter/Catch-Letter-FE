import type { Meta, StoryObj } from '@storybook/react'
import PasswordModal from './PasswordModal'

const meta = {
  title: 'component/PasswordModal',
  component: PasswordModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PasswordModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    password: '',
    onClickConfirmButton: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
    },
  },
}
