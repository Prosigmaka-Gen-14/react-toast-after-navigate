import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Form from './pages/Form'
import List from './pages/List'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<List />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>
}

export default App
