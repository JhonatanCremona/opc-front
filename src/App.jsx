import { useState } from 'react'
import './App.css'
//Dependencias

import { Routes, Route } from 'react-router-dom';
import { Chart } from "./components/Chart"
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Footer } from "./components/footer/Footer"


function App() {
  const [count, setCount] = useState(0)
  const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
    { time: '2019-01-10', value: 22.69 }
  ];

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path='listar' element={<Chart data = {initialData}/>}/>
          <Route path="/" element={<Dashboard/>}/>
        </Route>
      </Routes>
      <Footer/>
    </>
      

  )
}

export default App
