import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout, I18nProvider } from '#/app/ui'
import {
  CheckAnswer,
  ChoiceLetter,
  CreatePost,
  CreatePostForm,
  Drawing,
  Home,
  MyLetters,
  Test,
  TryAnswer,
} from '#/pages'
import { Loading } from '#/components'

const App = () => {
  const SendLetter = lazy(() => import('#/pages/letter-send/SendLetter'))
  const LetterWrite = lazy(() => import('#/pages/letter-write/LetterWrite'))
  const Success = lazy(() => import('#/pages/success/Success'))
  const Inbox = lazy(() => import('#/pages/inbox/Inbox'))

  return (
    <I18nProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<CreatePost />} />
              <Route path='/test' element={<Test />} />
              <Route path='/writeletter/:uuid/:id' element={<LetterWrite />} />
              <Route path='/choiceletter/:uuid/:id' element={<ChoiceLetter />} />
              <Route path='/sendletter' element={<SendLetter />} />
              <Route path='/myletters/:uuid' element={<MyLetters />} />
              <Route path='/postform' element={<CreatePostForm />} />
              <Route path='/success' element={<Success />} />
              <Route path='/inbox/:uuid' element={<Inbox />} />
              <Route path='/checkanswer' element={<CheckAnswer />} />
              <Route path='/tryAnswer/:uuid/:id' element={<TryAnswer />} />
              <Route path='/drawing/:uuid' element={<Drawing />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
