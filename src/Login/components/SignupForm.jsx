import logo from "../../assets/logo.png";
import { useState } from "react";
import axios from "axios";

const SignupForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePassword = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if(formData.password != newConfirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "password" && confirmPassword && value !== confirmPassword) {
      setError("Passwords do not match!");
    } else if (name === "password" && confirmPassword && value === confirmPassword) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5144/api/user", formData);
      
      if(response.status === 200) {
        alert("You have successfully registed! Welcome to KitaKits!");
        props.toggleComponent("login");
      } else {
        alert("There was an error when registering!");
      }
    } catch(error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-amber-50 border border-orange-300 rounded-lg p-10">
      <img 
        src={logo}
        className="w-24 h-24 hover:scale-110 transition-transform"
      />
      <h1 className="text-xl mt-10 text-center bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent hover:text-red-600 transition-colors duration-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, corrupti!
      </h1>
      <div className="space-y-6 p-5 mt-8">
        <h2 className="text-2xl text-center font-medium">Join a vibrant, growing community!</h2>
        <form 
          className="flex flex-col min-w-sm"
          onSubmit={handleSubmit}
        >
          <label className="text-2xl py-2">Email:</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-orange-300 rounded-lg p-2 focus:border-3 focus:outline-none focus:outline-offset-4 transition-all"
          />
          {/* <label className="text-2xl py-2">First Name:</label>
          <input
            type="text"
            className="border border-orange-300 rounded-lg p-2 focus:border-3 focus:outline-none focus:outline-offset-4 transition-all"
          />
          <label className="text-2xl py-2">Last Name:</label>
          <input
            type="text"
            className="border border-orange-300 rounded-lg p-2 focus:border-3 focus:outline-none focus:outline-offset-4 transition-all"
          /> */}
          <label className="text-2xl py-2">Username:</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
            className="border border-orange-300 rounded-lg p-2 focus:border-3 focus:outline-none focus:outline-offset-4 transition-all"
          />
          <label className="text-2xl py-2">Password:</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-orange-300 rounded-lg p-2 focus:border-3 focus:outline-none focus:outline-offset-4 transition-all"
          />
          <label className="text-2xl py-2">Confirm Password:</label>
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handlePassword}
            required
            className="border border-orange-300 rounded-lg p-2 focus:border-3 focus:outline-none focus:outline-offset-4 transition-all"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            className="bg-amber-300 p-2 mt-10 rounded-lg text-2xl hover:scale-105 transition-transform cursor-pointer"
          >
            Sign up!
          </button>
        </form>
      </div>
      <div className="text-xl p-5 mt-10 flex items-center justify-between">
        <h2 className="mr-3">Already joined?</h2>
        <button 
          className="p-1 bg-orange-300 rounded-lg hover:scale-105 transition-transform cursor-pointer"
          onClick={() => props.toggleComponent("login")}
        >
          Log in!
        </button>
      </div>
      
    </div>
  )
}

export default SignupForm