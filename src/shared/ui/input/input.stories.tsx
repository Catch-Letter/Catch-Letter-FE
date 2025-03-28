import { fireBlurToInputByName } from '#/shared/utils/storybook'
import type { Meta, StoryObj } from '@storybook/react'
import Input from './input'

const meta = {
  title: 'base/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    isInvalid: { control: 'boolean' },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    controls: {
      exclude: ['type', 'aria-label'], // 'type'을 controls에서 숨깁니다.
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '이 그림의 정체는 무엇일까요?',
    type: 'text',
  },
}

export const Valid: Story = {
  args: {
    ...Default.args,
    isInvalid: false,
    'aria-label': 'valid-input',
  },
  play: fireBlurToInputByName('valid-input'),
}

export const Invalid: Story = {
  args: {
    ...Default.args,
    isInvalid: true,
    'aria-label': 'invalid-input',
  },
  play: fireBlurToInputByName('invalid-input'),
}

// export const Default: Story = {
//   args: {
//     placeholder: '이 그림의 정체는 무엇일까요?',
//   },
//   render: (args) => {
//     const [value, setValue] = useState('')
//     return (
//       <Input
//         {...args}
//         isInvalid={value.length < 8}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//     )
//   },
// }
