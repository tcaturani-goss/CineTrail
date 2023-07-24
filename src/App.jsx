import { } from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  ThemeContextProvider from './contexts/ThemeContext/ThemeContext'
import './App.css'
import HomePage from './pages/HomePage/HomePage'

function App() {

  // const apiKey=import.meta.env.VITE_API_KEY;
  // const baseUrl=import.meta.env.VITE_BASE_URL;

  return (
    <>
      <BrowserRouter>
       <ThemeContextProvider>
         <Header/>
         <Routes>
           <Route path='/' element={<HomePage/>}/>
         </Routes>
       </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
