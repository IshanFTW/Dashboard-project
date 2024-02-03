import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Products from './components/Products'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Layout/>}>
            <Route index element = {<Dashboard/>}/>
            <Route path='products' element = {<Products/>} />
          </ Route>
          <Route path='login' element = {<div>This is a login page</div>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
