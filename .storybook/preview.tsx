import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import GlobalStyles from '../src/styles/GlobalStyles.tsx'
import { I18nProvider } from '../src/app/ui'
import React from 'react'

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: '#444' },
        { name: 'light', value: '#F7F9F2' },
      ],
      default: 'dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [
  (Story) => (
    <I18nProvider>
      <Story />
    </I18nProvider>
  ),
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyles component to all stories
  }),
]

export default preview
