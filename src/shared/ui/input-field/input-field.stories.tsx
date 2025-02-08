import InputField from '#/shared/ui/input-field/input-field'
import { fireTypeBylabel } from '#/shared/utils/storybook'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'base/InputField',
  component: InputField,
  argTypes: {
    placeholder: { control: 'text' },
    isInvalid: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['type'],
    },
  },
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '아이디',
    helpMessage: '아이디는 4자 이상만 가능해요.',
    validMessage: '멋진 아이디네요',
    invalidMessage: '4자 이상이라구요ㅡㅡ',
    placeholder: '원하시는 아이디를 입력하세요.',
    type: 'text',
  },
}

export const Valid: Story = {
  args: {
    ...Default.args,
    isInvalid: false,
  },
  play: fireTypeBylabel('아이디', '대충멋진아이디'),
}

export const Invalid: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
  },
  play: fireTypeBylabel('아이디', '세글자'),
}

export const WithoutHelpMessage: Story = {
  args: {
    ...Default.args,
    helpMessage: undefined,
  },
}

export const WithoutLabel: Story = {
  args: {
    ...Default.args,
    label: undefined,
  },
}
