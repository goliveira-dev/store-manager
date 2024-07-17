import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './components/Layout'
import NotFound from './Pages/NotFound'
import AddNewProduct from './Pages/AddNewProduct'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route path='/' element={ <Home /> } />
        <Route path='/add-product' element={ <AddNewProduct /> } />
      </Route>
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  )
}

export default App
