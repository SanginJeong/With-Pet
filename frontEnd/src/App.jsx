import { Routes, Route } from 'react-router'
import './App.css'
import AppLayout from './layout/AppLayout'
import StartPage from './pages/startPage/StartPage'
// axios, dotenv, router, react-query 다운완료
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/home' element={<AppLayout/>}></Route>
      </Routes>
    </>
  )
}

export default App
