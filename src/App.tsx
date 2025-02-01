import { Home, Test } from '#/pages'
import { CreatePost } from '#/pages/create-post'
import CreatePostForm from '#/pages/create-postfrom/CreatePostForm'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {
  const Success = lazy(() => import('#/pages/success/Success'))
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/postform' element={<CreatePostForm />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
