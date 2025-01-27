import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import AppLayout from './AppLayout'


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path='/ListPage' element={<ListPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  )
}

export default App
