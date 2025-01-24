import { Home, Test } from '#/pages'
import { BrowserRouter, Route, Routes } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n'
const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
