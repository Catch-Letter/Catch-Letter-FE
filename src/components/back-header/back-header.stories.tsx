import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router'
import BackHeader from './back-header'
import { css } from '@emotion/react'
import { MobileSize } from '#/shared/utils/storybook'

const meta = {
  title: 'component/BackHeader',
  component: BackHeader,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <MobileSize>
          <Story />
        </MobileSize>
      </BrowserRouter>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BackHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

const titleStyles = css`
  font-size: 18px;
  font-weight: 700;
`

export const WithItems: Story = {
  args: {
    Center: <h1 css={titleStyles}>우체통발급</h1>,
    Right: <button>한/영</button>,
  },
}
