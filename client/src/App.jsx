import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  )
}
