import { Routes, Route } from 'react-router'
import './App.css'
import AppLayout from './layout/AppLayout'
import StartPage from './pages/startPage/StartPage'
import HomePage from './pages/homePage/HomePage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/home' element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
