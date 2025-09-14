import React from "react";
import { useAppContext } from "../context/AppContext";
const Login = () => {
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
        // get setShowLogin from context
        const {setShowLogin, setUser}= useAppContext();  
        
        // setting form submit function
        const onSubmitHandler= async(event)=> {
                event.preventDefault();
                setUser(
                        {
                                name: 'Prince Kumar',
                                email: 'prince@gmail.com',
                                password: 'Prince@7870'
                        }
                )
                setShowLogin(false)
        }

    return (
        <div className="fixed z-50 left-1/2 top-[10rem] transform -translate-x-1/2 bg-[white] dark:bg-[black] rounded-xl">
                <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 m-auto items-start p-8 py-10 w-80 sm:w-[352px] dark:text-[white] text-[black] shadow-xl">
                        <div className="flex w-full items-center justify-between">
                                <p className="text-3xl font-semibold tracking-[3px]">
                                        <span className="text-[black] dark:text-[white]">User</span><span className="text-[red]"> {state === "login" ? "Login" : "Sign Up"}</span>
                                </p>
                                <button type="button" className="text-xl cursor-pointer" onClick={()=>setShowLogin(false)}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        {state === "register" && (
                                <div className="w-full">
                                <p className="text-[#000000cf] dark:text-[#ffffffc2] tracking-[3px]">Name</p>
                                <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter your name" className="border border-gray-200 rounded w-full p-2 mt-1 text-[#000000cf] dark:text-[#ffffffc2] outline-0" type="text" required />
                                </div>
                        )}
                        <div className="w-full ">
                                <p className="text-[#000000cf] dark:text-[#ffffffc2] tracking-[3px]">Email</p>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email" className="border border-gray-200 rounded w-full p-2 mt-1 text-[#000000cf] dark:text-[#ffffffc2] outline-0" type="email" required />
                        </div>
                        <div className="w-full ">
                                <p className="text-[#000000cf] dark:text-[#ffffffc2] tracking-[3px]">Password</p>
                                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="enter password" className="border border-gray-200 rounded w-full p-2 mt-1 text-[#000000cf] dark:text-[#ffffffc2] outline-0" type="password" required />
                        </div>
                        {state === "register" ? (
                                <p className="text-[#000000cf] dark:text-[#ffffffc2] tracking-[1px]">
                                Already have account? <span onClick={() => setState("login")} className="text-indigo-500 cursor-pointer">click here</span>
                                </p>
                        ) : (
                                <p className="text-[#000000cf] dark:text-[#ffffffc2] tracking-[1px] cursor-default">
                                Create an account? <span onClick={() => setState("register")} className="text-indigo-500 cursor-pointer">click here</span>
                                </p>
                        )}
                        <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                                {state === "register" ? "Create Account" : "Login"}
                        </button>
                </form> 
        </div>
    );
};

export default Login;