import type { Meta, StoryObj } from '@storybook/react'
import Header from './header'
import { css } from '@emotion/react'
import { MobileSize } from '#/shared/utils/storybook'

const meta = {
  title: 'base/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MobileSize>
        <Story />
      </MobileSize>
    ),
  ],
  argTypes: {
    Right: {
      options: [null, undefined],
      control: 'radio',
    },
  },
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
    Left: 'left',
    Center: 'center',
  },
}

export const NoBack: Story = {}

const logoStyles = css`
  font-size: 24px;
  font-weight: 700;
`

export const WithLogo: Story = {
  args: {
    Left: <span css={logoStyles}>Catch Letter</span>,
  },
}
