import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import OfficeList from './components/OfficeList'

function App() {
  const [page, setPage] = useState('offices')

  return (
    <div>
      <nav className="page-nav">
        <button type="button" onClick={() => setPage('offices')}>Offices</button>
        <button type="button" onClick={() => setPage('login')}>Login</button>
      </nav>
      {page === 'offices' ? <OfficeList /> : <LoginPage />}
    </div>
  )
}

export default App
