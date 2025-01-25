import { Home, Test } from '#/pages'
import { CreatePost } from '#/pages/create-post'
import CreatePostForm from '#/pages/create-postfrom/CreatePostForm'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/postform' element={<CreatePostForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
