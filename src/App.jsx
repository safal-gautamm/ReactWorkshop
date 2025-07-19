import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Edit from '../pages/Edit'
import Blog1 from '../pages/Blog1'
import LearnUseState from '../pages/UseState'

function App() {



  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/edit' element={<Edit />}/>
          <Route path='/blog/b1' element={<Blog1 />}/>
          <Route path='/usestate' element={<LearnUseState />}/>

        </Routes>
      </BrowserRouter>
      
  )
}

export default App
