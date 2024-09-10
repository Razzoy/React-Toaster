import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Toast } from './components/Toast/Toast'

function App() {
  const [isShown, setIsShown] = useState(false)


  useEffect(() => {
    showToast() {
      setIsShown = true;
    }
  }, [])
  return (
    <>
      <button onClick={showToast()}></button>
      <Toast/>
    </>
  )
}

export default App
