import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <div className='flex'>
        {/* Navigation bar */}
        <NavigationBar />

        {/* Main component  */}
        <main className='grow'>
          <Dashboard />
        </main>
     </div>
    </>
  )
}

export default App
