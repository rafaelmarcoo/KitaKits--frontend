import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./Login/LoginPage"
import ProfilePage from "./Profile/ProfilePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<LoginPage/>}
        />
        <Route 
          path="/profile"
          element={<ProfilePage/>}
        />
      </Routes>
    </Router>
  )
}

export default App
