import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout, I18nProvider } from '#/app/ui'
import {
  Home,
  Test,
  CreatePost,
  CreatePostForm,
  Drawing,
  ChoiceLetter,
  LetterReceived,
  CheckAnswer,
  TryAnswer,
  MyLetters,
} from '#/pages'

const App = () => {
  const SendLetter = lazy(() => import('#/pages/letter-send/SendLetter'))
  const LetterWrite = lazy(() => import('#/pages/letter-write/LetterWrite'))
  const Success = lazy(() => import('#/pages/success/Success'))

  return (
    <I18nProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/test' element={<Test />} />
              <Route path='/writeletter/:uuid/:id' element={<LetterWrite />} />
              <Route path='/choiceletter/:uuid/:id' element={<ChoiceLetter />} />
              <Route path='/sendletter' element={<SendLetter />} />
              <Route path='/myletters/:uuid' element={<MyLetters />} />
              <Route path='/create' element={<CreatePost />} />
              <Route path='/postform' element={<CreatePostForm />} />
              <Route path='/success' element={<Success />} />
              <Route path='/receivedletter/:uuid' element={<LetterReceived />} />
              <Route path='/checkanswer' element={<CheckAnswer />} />
              <Route path='/tryAnswer' element={<TryAnswer />} />
              <Route path='/:uuid/drawing' element={<Drawing />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
