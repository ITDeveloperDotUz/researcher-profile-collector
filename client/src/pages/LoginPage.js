import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useHttp} from "../hooks/http.hook";
import {toast} from "react-toastify";

export const LoginPage = () => {
    const {loading, error, clearError, request} = useHttp()
    const [form, setForm] = useState({email: '', password: ''})

    useEffect(() => {
        toast.error(error)
        clearError()
    }, [error, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', form)
            if (!data.token) {
                throw new Error(data.message || 'Something went wrong. Please try again later.')
            }

            toast.success(data.message)
        } catch (e) {}
    }

    return (
        <div>
            <section className="">
                <div className="container items-center px-5 py-12 lg:px-20">
                    <div
                        className="flex text-center flex-col w-full p-10 mx-auto my-6 dark:bg-gray-800 transition duration-500 ease-in-out transform bg-white rounded-lg lg:w-3/6 xl:w-2/6 md:w-1/2 md:mt-0">
                        <h2 className="font-bold text-lg mb-3">Sign in</h2>
                        <div className="relative ">
                            <label htmlFor="email" className="text-base leading-7 text-blueGray-500">Email</label>
                            <input onChange={changeHandler} type="name" id="email" name="email" placeholder="email"
                                   className="form-input text-center" />
                        </div>
                        <div className="relative mt-4">
                            <label htmlFor="password" className="text-base leading-7 text-blueGray-500">Password</label>
                            <input onChange={changeHandler} type="password" id="password" name="password" placeholder="password"
                                   className="form-input text-center" />
                        </div>
                        <div className="inline-flex flex-wrap items-center justify-between ">
                            <button onClick={loginHandler} disabled={loading}
                                className="w-full px-4 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800">
                                Sign in
                            </button>
                        </div>
                        <p className="mx-auto mt-3 text-xs text-blueGray-500"><Link to="/register">Do not have an account?</Link></p>
                    </div>
                </div>
            </section>

        </div>
     );
}
 
