import { useRef, useState } from "react";
import {useApp} from "../context/AppContext";
import { useNavigate } from "react-router";
import {getErrorMessage} from '../FireBase/firebaseErrors';
import { Link } from "react-router";



const Login = () => {

    const [isSignup , setIsSignup] = useState(false);

    const {login, signup} = useApp();

    const name = useRef("")
    const email = useRef("");
    const password = useRef("");

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        
        try{
            await login(email.current.value, password.current.value);
            navigate("/");
        }
        catch(error){
            setErrorMessage(getErrorMessage(error.code));
        }
    };


    const handleEmailSignup = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        try{
            const user = await signup(email.current.value, password.current.value, name.current.value);

            navigate("/");
        }
        catch(error){
            setErrorMessage(getErrorMessage(error.code));
        }
    };



  return (
    <div className='min-h-screen flex items-center justify-center bg-indigo-50'>
      <div className='bg-white shadow-xl shadow-indigo-100 rounded-2xl p-8 w-full max-w-md'>
        {
            isSignup ? (
                <h2 className='text-3xl font-extrabold text-center mb-6 text-indigo-600'>Create Account</h2>
            ) : (
                <h2 className='text-3xl font-extrabold text-center mb-6 text-indigo-600'>Login</h2>
            )
        }
        <div className='space-y-5'>

            {isSignup && (
                <div className='flex flex-col space-y-1'>
                <label className='text-sm font-medium text-gray-700'>Full Name</label>
                <input required type="text" className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-indigo-500 bg-gray-50'
                    ref={name}  
                />
                
                </div>
            )}

          <div className='flex flex-col space-y-1'>
              <label className='text-sm font-medium text-gray-700'>Email</label>
              <input required type="email" className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-indigo-500 bg-gray-50'
                ref={email}
              />
              
          </div>
          <div className='flex flex-col space-y-1'>
              <label className='text-sm font-medium text-gray-700'>Password</label>
              <input required type="password" className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-indigo-500 bg-gray-50'
                ref={password}  
              />
              
          </div>
          
            {
              errorMessage && (
                <p className='text-red-600 text-sm font-medium text-center'>{errorMessage}</p>  
              )
            }
            {
                isSignup ? (
                    <>
                        <button className='w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm font-semibold'
                            onClick={handleEmailSignup}
                        
                        >
                            Signup
                        </button>
                        <p className='text-sm text-center mt-4'>
                            Already have an account?{" "}
                            <Link className='text-indigo-600 hover:underline font-medium' onClick={() => setIsSignup(false)}>
                            Login
                            </Link>
                        </p>
                    </>
                ) : (
                    <>
                        <button className='w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition shadow-sm font-semibold'
                            onClick={handleEmailLogin}
                        
                        >
                            Login
                        </button>
                        <p className='text-sm text-center mt-4'>
                            Don't have an account?{" "}
                            <Link className='text-indigo-600 hover:underline font-medium' onClick={() => setIsSignup(true)}>
                            Signup
                            </Link>
                        </p>
                    </>
                )
            }

          
          
        </div>
      </div>
    </div>
  )
}

export default Login;