import { lazy } from 'react'
import { Home, Test } from '#/pages'
import ChoiceLetter from '#/pages/letter-choice/ChoiceLetter'
import { BrowserRouter, Route, Routes } from 'react-router'

const SendLetter = lazy(() => import('#/pages/letter-send/SendLetter'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/choiceletter' element={<ChoiceLetter />} />
        <Route path='/sendletter' element={<SendLetter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
