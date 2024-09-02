import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}



// import React from 'react'

// export default function App() {
//   return (
//     <>
//     <div className="w-full h-screen  bg-zinc-900 ">
//         <h1 className='text-white'>Hi</h1>
//     </div>
//     </>
//   )
// }

