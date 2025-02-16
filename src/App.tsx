import { lazy } from 'react'
import { Home, Test, TryAnswer } from '#/pages'
import ChoiceLetter from '#/pages/letter-choice/ChoiceLetter'
import { BrowserRouter, Route, Routes } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n'

const SendLetter = lazy(() => import('#/pages/letter-send/SendLetter'))

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/choiceletter' element={<ChoiceLetter />} />
          <Route path='/sendletter' element={<SendLetter />} />
          <Route path='/tryAnswer' element={<TryAnswer />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
