
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Main from './layout/Main';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
