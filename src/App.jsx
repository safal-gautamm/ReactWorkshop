import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Edit from '../pages/Edit'
import LearnUseState from '../pages/UseState'
import Single from '../pages/Single'

function App() {



  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/edit/blogs/:id' element={<Edit />}/>
          <Route path='/single/:id' element={<Single/>}/>
          <Route path='/usestate' element={<LearnUseState />}/>

        </Routes>
      </BrowserRouter>
      <link rel='icon' href='https://www.svgrepo.com/show/475174/avatar.svg' />
      </>
      
  )
}

export default App
