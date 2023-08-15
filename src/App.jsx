import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Concert from './components/concerts/Concert'

import './index.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Navbar />
      
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:concertId" element={<Concert />} />
      </Routes>

    </div>
  )
}

export default App