import { lazy, Suspense } from 'react'
import { Layout } from '#/app/ui'
import { Home, Test } from '#/pages'
import ChoiceLetter from '#/pages/letter-choice/ChoiceLetter'
import { BrowserRouter, Route, Routes } from 'react-router'
import { I18nProvider } from '#/app/ui'

const App = () => {
  const SendLetter = lazy(() => import('#/pages/letter-send/SendLetter'))
  const LetterWrite = lazy(() => import('#/pages/letter-write/LetterWrite'))

  return (
    <I18nProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/test' element={<Test />} />
              <Route path='/writeletter' element={<LetterWrite />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
