import LoginForm from "./components/LoginForm";
import { useState } from "react";
import SignupForm from "./components/SignupForm";

const LoginPage = () => {
  const [activeComponent, setActiveComponent] = useState("login");
  const toggleComponent = (component) => {
    setActiveComponent(component)
  }

  return (
    <div className="w-full py-6">
        <div className="max-w-2xl mx-auto p-10 px-4 sm:px-6 lg:px-8">
          {activeComponent === "login" && <LoginForm toggleComponent={toggleComponent}/>}
          {activeComponent === "signup" && <SignupForm toggleComponent={toggleComponent}/>}
        </div>
    </div>
  )
}

export default LoginPage