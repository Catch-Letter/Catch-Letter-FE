import { Home, Test } from '#/pages'
import { CreatePost } from '#/pages/create-post'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/create' element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
