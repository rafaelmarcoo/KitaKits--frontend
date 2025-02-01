import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./Login/LoginPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<LoginPage/>}
        />
        <Route 
          path="/signup"
          element
        />
      </Routes>
    </Router>
  )
}

export default App
