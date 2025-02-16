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
  tags: ['autodocs'],
  parameters: {
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
  },
}
