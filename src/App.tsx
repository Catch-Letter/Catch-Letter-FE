import { I18nProvider, Layout } from '#/app/ui'
import { AuthGuard, Loading } from '#/components'
import ErrorBoundary from '#/components/ErrorBoundary'
import ProtectedRoute from '#/components/ProtectdRoute'
import {
  CheckAnswer,
  ChoiceLetter,
  CreatePost,
  CreatePostForm,
  Drawing,
  MyLetters,
  NotFound,
  TryAnswer,
} from '#/pages'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {
  const SendLetter = lazy(() => import('#/pages/letter-send/SendLetter'))
  const LetterWrite = lazy(() => import('#/pages/letter-write/LetterWrite'))
  const Success = lazy(() => import('#/pages/success/Success'))
  const Inbox = lazy(() => import('#/pages/inbox/Inbox'))

  return (
    <I18nProvider>
      <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASENAME || '/'}>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='/' element={<CreatePost />} />
                <Route path='/postform' element={<CreatePostForm />} />
                <Route path='/success' element={<Success />} />
                <Route element={<ProtectedRoute />}>
                  <Route path='drawing/:uuid' element={<Drawing />} />
                  <Route path='writeletter/:uuid/:id' element={<LetterWrite />} />
                  <Route path='choiceletter/:uuid/:id' element={<ChoiceLetter />} />
                  <Route path='sendletter/:uuid' element={<SendLetter />} />
                </Route>
                <Route path='/inbox/:uuid' element={<Inbox />} />
                <Route element={<AuthGuard />}>
                  <Route path='/myletters/:uuid' element={<MyLetters />} />
                  <Route path='/tryAnswer/:uuid/:id' element={<TryAnswer />} />
                  <Route path='/checkanswer/:uuid/:id' element={<CheckAnswer />} />
                </Route>
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
