import { FontType } from '#/store/letterCreateStore'
import { colors } from '#/styles/color'
import { css } from '@emotion/react'

const patternColors = {
  violet: colors.violet[2],
  blue: colors.blue[100],
  pink: colors.pink[2],
  green: colors.green[2],
  grey: colors.grey[5],
} as const

const letterBackground = (color: keyof typeof patternColors) => ({
  default: 'inherit',
  line: `background-image: linear-gradient(to bottom, ${patternColors[color]} 1px, transparent 0);
          background-size: 30px 30px;`,
  dot: `background-image: radial-gradient(${patternColors[color]} 3px, transparent 3px), 
          radial-gradient(${patternColors[color]} 3px, transparent 3px);
          background-position: 0 0, 30px 30px;
          background-size: 50px 50px;
         `,
  grid: `background-image: linear-gradient(to bottom, ${patternColors[color]} 1px, transparent 0), linear-gradient(to right, ${patternColors[color]} 1px, transparent 0);
          background-size: 30px 30px;
         `,
})

type LetterBackgroundPatterns = ReturnType<typeof letterBackground>

export const LetterContentStyle = (
  pattern: keyof LetterBackgroundPatterns,
  color: keyof typeof patternColors,
  font: FontType
) => css`
  display: flex;
  min-width: 250px;
  width: 100%;
  height: 100%;
  font-family: ${font};
  font-size: ${font === 'NotoSansKR' ? '16px' : '20px'};

  .letter-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${colors.grey[13]};

    .to,
    .from {
      font-weight: 700;
    }

    .to {
      margin-bottom: 25px;
    }

    .from {
      margin-top: 25px;
    }

    .letter {
      position: relative;
      min-height: 293px;
      white-space: pre-wrap;
      overflow-y: auto;
      line-height: 30px;
      letter-spacing: 0.3px;
      background-attachment: local;
      ${letterBackground(color)[pattern]};

      scrollbar-width: thin;
      scrollbar-color: ${patternColors[color]} transparent;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${patternColors[color]};
        border-radius: 4px;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
    }
  }
`
