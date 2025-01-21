import { userEvent, within } from '@storybook/testing-library'

export const fireBlurToInputByName =
  (name: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole('textbox', { name })

    await userEvent.click(input)
    await userEvent.tab()
  }

export const fireTypeBylabel =
  (label: string, text: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByLabelText(label)

    await userEvent.type(input, text)
    await userEvent.tab()
  }
