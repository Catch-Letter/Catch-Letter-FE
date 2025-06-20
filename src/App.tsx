import { I18nProvider, Layout } from '#/app/ui'
import { AuthGuard, Loading } from '#/components'
import ErrorBoundary from '#/components/ErrorBoundary'
import PageViewTracker from '#/components/PageViewTracker'
import ProtectedRoute from '#/components/ProtectdRoute'
import { CreatePost, CreatePostForm, Drawing, NotFound } from '#/pages'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {
  const SendLetter = lazy(() => import('#/pages/letter-send/SendLetter'))
  const LetterWrite = lazy(() => import('#/pages/letter-write/LetterWrite'))
  const ChoiceLetter = lazy(() => import('#/pages/letter-choice/ChoiceLetter'))
  const Success = lazy(() => import('#/pages/success/Success'))
  const Inbox = lazy(() => import('#/pages/inbox/Inbox'))
  const CheckAnswer = lazy(() => import('#/pages/check-answer/CheckAnswer'))
  const TryAnswer = lazy(() => import('#/pages/tryAnswer/TryAnswer'))
  const MyLetters = lazy(() => import('#/pages/my-letters/MyLetters'))

  return (
    <I18nProvider>
      <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASENAME || '/'}>
        <PageViewTracker />
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route path='/' element={<CreatePost />} />
                <Route path='postform' element={<CreatePostForm />} />
                <Route path='success' element={<Success />} />
                <Route element={<ProtectedRoute />}>
                  <Route path='drawing/:uuid' element={<Drawing />} />
                  <Route path='writeletter/:uuid/:id' element={<LetterWrite />} />
                  <Route path='choiceletter/:uuid/:id' element={<ChoiceLetter />} />
                  <Route path='sendletter/:uuid' element={<SendLetter />} />
                  <Route path='inbox/:uuid' element={<Inbox />} />
                  <Route element={<AuthGuard />}>
                    <Route path='myletters/:uuid' element={<MyLetters />} />
                    <Route path='tryAnswer/:uuid/:id' element={<TryAnswer />} />
                    <Route path='checkanswer/:uuid/:id' element={<CheckAnswer />} />
                  </Route>
                </Route>
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
