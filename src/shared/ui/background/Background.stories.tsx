import { Meta, StoryObj } from '@storybook/react'
import Background from '#/shared/ui/background/Background'

export default {
  title: 'Component/Background',
  component: Background,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['green', 'blue', 'pink', 'violet', 'gradients'],
    },
    animated: {
      control: 'boolean',
    },
    gradientType: {
      control: 'select',
      options: ['default', 'blueGradient', 'halfGradient'],
    },
  },
} satisfies Meta<typeof Background>

type Story = StoryObj<typeof Background>

export const Default: Story = {
  args: {
    color: 'green',
    animated: false,
    gradientType: 'default',
  },
}

export const ColorAnimation: Story = {
  args: {
    color: 'blue',
    animated: true,
    gradientType: 'default',
  },
}

export const BlueGradient: Story = {
  args: {
    animated: true,
    gradientType: 'blueGradient',
  },
}

export const halfGradient: Story = {
  args: {
    gradientType: 'halfGradient',
  },
}
