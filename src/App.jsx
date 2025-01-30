import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import AppLayout from './layout/AppLayout'
import DetailPage from './pages/DetailPage'


function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path='/ListPage'>
                <Route index element={<ListPage />}></Route>
                <Route path=':id' element={<DetailPage />}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  )
}

export default App
