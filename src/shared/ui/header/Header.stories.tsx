import type { Meta, StoryObj } from '@storybook/react'
import Header from './header'
import { css } from '@emotion/react'

const meta = {
  title: 'base/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    Left: <div>left</div>,
    Center: <div>center</div>,
    Right: <div>right</div>,
  },
}

export const NoBack: Story = {
  args: {
    Right: <button>한/영</button>,
  },
}

const logoStyles = css`
  font-size: 24px;
  font-weight: 700;
`

export const WithLogo: Story = {
  args: {
    Left: <span css={logoStyles}>Catch Letter</span>,
    Right: <button>한/영</button>,
  },
}
