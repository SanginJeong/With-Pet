import { Routes, Route } from 'react-router'
import './App.css'
import AppLayout from './layout/AppLayout'
import StartPage from './pages/startPage/StartPage'
import HomePage from './pages/homePage/HomePage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import SignUpPage from './pages/signUpPage/SignUpPage'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/home' element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/home/signup' element={<SignUpPage/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
