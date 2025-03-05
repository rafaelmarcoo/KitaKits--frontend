import logo from "../../assets/logo.png";
import { MapPin } from "lucide-react";

const Profile = () => {
   return (
      <div className="flex flex-col items-center justify-center bg-amber-50 border border-orange-300 rounded-lg p-10">
         <img 
            src={logo}
            className="w-24 h-24 hover:scale-110 transition-transform"
         />
         <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-5">Rafael Marco Manubay</h1>
         <h1 className="flex items-center justify-center text-lg sm:text-xl lg:text-2xl mt-3">
            <MapPin />
            <span className="ml-2">Auckland, New Zealand</span>
         </h1>
         <div className="mt-5 border rounded-lg p-3">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat ipsum accusantium iste sint debitis sunt, quae nemo minus quos?</h1>
            
         </div>
      </div>
   )
}

export default Profile