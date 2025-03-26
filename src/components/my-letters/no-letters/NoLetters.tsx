import bubbleImgae from '#/assets/myLetters/bubbles.svg'
import { LettersContainer } from '#/components/my-letters/no-letters/NoLetters.styles'
import { useTranslation } from 'react-i18next'

const NoLetters = () => {
  const { t } = useTranslation()

  return (
    <div css={LettersContainer}>
      <img src={bubbleImgae} alt='bubble' />
      <h1>{t('noLetters.title')}</h1>
      <span dangerouslySetInnerHTML={{ __html: t('noLetters.desc') }}></span>
    </div>
  )
}

export default NoLetters
