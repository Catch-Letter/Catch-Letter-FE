import { lazy, Suspense } from 'react'
import { Home, Test } from '#/pages'
import ChoiceLetter from '#/pages/letter-choice/ChoiceLetter'
import { CreatePost } from '#/pages/create-post'
import CreatePostForm from '#/pages/create-postfrom/CreatePostForm'
import { BrowserRouter, Route, Routes } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n'

const App = () => {
  const SendLetter = lazy(() => import('#/pages/letter-send/SendLetter'))
  const LetterWrite = lazy(() => import('#/pages/letter-write/LetterWrite'))
  const Success = lazy(() => import('#/pages/success/Success'))
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<Test />} />
            <Route path='/writeletter' element={<LetterWrite />} />
            <Route path='/choiceletter' element={<ChoiceLetter />} />
            <Route path='/sendletter' element={<SendLetter />} />
            <Route path='/create' element={<CreatePost />} />
            <Route path='/postform' element={<CreatePostForm />} />
            <Route path='/success' element={<Success />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
