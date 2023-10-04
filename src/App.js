import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './Components/checkout/Checkout'
import Login from './Components/Login/Login'
import { useEffect } from 'react'
import { useStateValue } from './Components/contexts/StateProvider'
import { auth } from './firebase'

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
