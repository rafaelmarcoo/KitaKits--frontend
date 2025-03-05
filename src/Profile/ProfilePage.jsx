import Profile from "./components/Profile"

const ProfilePage = () => {
   return (
      <div className="w-full py-6">
         <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {<Profile />}
         </div>
      </div>
   )
}

export default ProfilePage