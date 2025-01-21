import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import GlobalStyles from '../src/styles/GlobalStyles.tsx'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Dark',
      values: [
        // 👇 Default values
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' },
      ],
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
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyles component to all stories
  }),
]

export default preview
