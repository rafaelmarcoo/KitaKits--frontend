import logo from "../../assets/logo.png";

const LoginForm = (props) => {
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
        {/* <h2 className="text-4xl text-center font-medium">Login</h2> */}
        <form className="flex flex-col min-w-sm">
          <label className="text-2xl pb-2">Username:</label>
          <input
            type="text"
            className="border border-orange-300 rounded-lg p-2 focus:border-3 focus:outline-none focus:outline-offset-4 transition-all"
          />
          <label className="text-2xl pb-2 pt-2">Password:</label>
          <input
            type="password"
            className="border border-orange-300 rounded-lg p-2 focus:border-3 focus:outline-none focus:outline-offset-4 transition-all"
          />
          <button
            type="submit"
            className="bg-amber-300 p-2 mt-10 rounded-lg text-2xl hover:scale-105 transition-transform cursor-pointer"
          >
            Log in
          </button>
        </form>
      </div>
      <div className="text-xl p-5 mt-10 flex items-center justify-between">
        <h2 className="mr-3">New to 'KitaKits!' ?</h2>
        <button 
          className="p-1 bg-orange-300 rounded-lg hover:scale-105 transition-transform cursor-pointer"
          onClick={() => props.toggleComponent("signup")}
        >
          Sign up now!
        </button>
      </div>
    </div>
  )
}

export default LoginForm