import { useState } from 'react'


import './App.css'
import Four from './pages/Four'
import One from './pages/One'
import Two from './pages/Two'
import Three from './pages/Three'
import Five from './pages/Five'
import Six from './pages/Six'
import Seven from './pages/Seven'
import Eight from './pages/Eight'
import Nine from './pages/Nine'
import Ten from './pages/Ten'
import Eleven from './pages/Eleven'
import Twelve from './pages/Twelve'
import Thirteen from './pages/Thirteen'
import Fourteen from './pages/Fourteen'
import Fifteen from './pages/Fifteen'
import Sixteen from './pages/sixteen'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div dir='rtl' className=''>
    <One/>
    <Two/>
    <Three/>
    <Four/>
    <Five/>
    <Six/>
    <Seven/>
    <Eight/>
    <Nine/>
    <Ten/>
    <Eleven/>
    <Twelve/>
    {/* <Thirteen/> */}

    {/* <Fourteen/> */}
    {/* <Fifteen/> */}
    <Sixteen/>
 {/* < /> */}
   </div>
  )
}

export default App
