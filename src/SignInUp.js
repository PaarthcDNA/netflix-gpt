import { useState } from "react"

const SignInUp = () => {
    const[ToggleSign,setToggleSign] = useState(true)

    const ToggleSignUp = () => {
            setToggleSign(!ToggleSign)
            console.log(ToggleSign)
    }

   return( <div className="absolute  w-full my-40">
        <div className="bg-black opacity-70 w-4/12 flex justify-center mx-auto h-[500px]">
        <div className="flex flex-col justify-center w-6/12">
        {!ToggleSign ? <p className="m-auto text-white  font-bold text-3xl my-4">Sign In</p> : <p className="m-auto text-white  font-bold text-3xl my-4">Sign Up</p>}

      
        <form className="flex justify-center flex-col">

        {(!ToggleSign)?<input type="hidden" placeholder="Name " className="p-2 my-4 bg-gray-700 text-white"></input>:<input type="text" placeholder="Name " className="p-2 my-4 bg-gray-700 text-white"></input>}
        <input type="email" placeholder="Email " className="p-2 my-4 bg-gray-700 text-white"></input>
        <input type="password" placeholder="Password" className="p-2 my-4 bg-gray-700 text-white"></input>
        <input type="submit"value="Submit" className="p-2 mt-4   text-white bg-red-600 w-full"></input>
        </form>
        div
        <p className="mx-auto mb-8 text-white  font-bold text-sm hover:cursor-pointer" onClick={ToggleSignUp}>Not a user ? Sign Up</p>


        

        </div>

        </div>
    </div>)
}
export default SignInUp;