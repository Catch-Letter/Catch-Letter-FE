import { SendCardStyle } from './SendCard.styles'
import { LetterCard } from '#/components'

export interface SendCardProps {
  content: string
}

const SendCard = ({ content }: SendCardProps) => {
  return (
    <div css={SendCardStyle}>
      <div className='card-container'>
        <LetterCard type='violet' width='156px' height='230px'>
          <img src={content} alt={content} />
        </LetterCard>
      </div>
      <svg
        className='svg-1'
        xmlns='http://www.w3.org/2000/svg'
        width='373'
        height='138'
        viewBox='0 0 373 138'
        fill='none'
      >
        <g>
          <path
            d='M398 138C398 138 308.905 138 199 138C89.0953 138 0 138 0 138C0 61.7847 89.0953 0 199 0C308.905 0 398 61.7847 398 138Z'
            fill='url(#paint0_radial_609_8437)'
          />
        </g>
        <defs>
          <radialGradient
            id='paint0_radial_609_8437'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(185.788 141.325) rotate(-89.1593) scale(107.285 134.306)'
          >
            <stop stopColor='#CCFF1B' stopOpacity='0.6' />
            <stop offset='1' stopColor='#FFF' stopOpacity='0' />
          </radialGradient>
        </defs>
      </svg>
      <svg
        className='svg-2'
        xmlns='http://www.w3.org/2000/svg'
        width='342'
        height='24'
        viewBox='0 0 342 24'
        fill='none'
      >
        <g>
          <path
            d='M342 24C342 24 265.441 24 171 24C76.5593 24 0 24 0 24C0 10.7452 76.5593 0 171 0C265.441 0 342 10.7452 342 24Z'
            fill='url(#paint0_radial_609_8434)'
          />
        </g>
        <defs>
          <radialGradient
            id='paint0_radial_609_8434'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(159.647 24.5783) rotate(-85.8529) scale(18.7052 115.119)'
          >
            <stop stopColor='#CCFF1B' stopOpacity='0.6' />
            <stop offset='1' stopColor='#CCFF1B' stopOpacity='0' />
          </radialGradient>
        </defs>
      </svg>
      <div className='bar' />
    </div>
  )
}

export default SendCard
