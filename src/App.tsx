import { lazy, Suspense } from 'react'
import { Layout } from '#/app/layout'
import { Home, Test } from '#/pages'
import ChoiceLetter from '#/pages/letter-choice/ChoiceLetter'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router'
import i18n from './utils/i18n'

const App = () => {
  const SendLetter = lazy(() => import('#/pages/letter-send/SendLetter'))
  const LetterWrite = lazy(() => import('#/pages/letter-write/LetterWrite'))

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/test' element={<Test />} />
              <Route path='/writeletter' element={<LetterWrite />} />
              <Route path='/choiceletter' element={<ChoiceLetter />} />
              <Route path='/sendsuccess' element={<SendLetter />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
