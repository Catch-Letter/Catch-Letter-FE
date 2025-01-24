import { Home, Test } from '#/pages'
import ChoiceLetter from '#/pages/letter-choice/ChoiceLetter'
import SendLetter from '#/pages/letter-send/SendLetter'
import { BrowserRouter, Route, Routes } from 'react-router'

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
