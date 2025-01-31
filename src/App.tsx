import { Home, Test } from '#/pages'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {
  const LetterWrite = lazy(() => import('#/pages/letter-write/LetterWrite'))

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/writeletter' element={<LetterWrite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
