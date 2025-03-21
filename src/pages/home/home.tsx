import { SeparatedInput } from '#/shared/ui'
import { LanguageSwitcher } from '#/shared/ui/languageSwitcher'
import { colors } from '#/styles/color'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <div className='exam'>{t('welcome')}</div>
      <div>{t('hello')}</div>
      <div>{t('correct')}</div>
      <LanguageSwitcher />
      <SeparatedInput length={4} label='Separated Input' />
    </Container>
  )
}

const Container = styled.div`
  .exam {
    color: ${colors.violet[5]};
  }
`

export default Home
