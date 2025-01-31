import { Home, Test } from '#/pages'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n'

const App = () => {
  const LetterWrite = lazy(() => import('./pages/letter-write/LetterWrite'))

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<Test />} />
            <Route path='/writeletter' element={<LetterWrite />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
