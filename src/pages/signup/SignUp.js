import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router';
import { auth } from '../../firebase';
import { login } from '../../features/userSlice';


const SignUp = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const signUp = (e) => {
        e.preventDefault();
        if(!fname) {
            alert('please enter your firstname😎')
        }
        if(!lname) {
            alert('please enter a lastname😎')
        }
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((userauth) => {
            userauth.user.updateProfile({
                displayName: fname
            })
            .then(() => {
                dispatch(
                    login({
                        email: userauth.user.email,
                        uid: userauth.user.uid,
                        displayName: fname
                    })
                )
                history.push('/tesla-account')
            })
        })
        .catch(error => alert(error.message));
    }
    return (
        <>
            <section class="h-screen">
                <nav class="flex justify-between py-4 px-6 sm:px-14">
                    <Link to='/'>
                    <img class="object-contain w-32 pt-3" src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"/>
                    </Link>
                    <div class="flex items-end gap-3 hover:bg-gray-200 px-9 py-2 cursor-pointer rounded-full transition">
                        <svg class="w-7" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <h5 class="text-xl font-semibold text-gray-700">en-US</h5>
                    </div>
                </nav>
                <div class="grid place-items-center mt-16 md:mt-32">
                    <div class="w-11/12 sm:w-8/12 md:w-1/2 lg:w-5/12 xl:w-3/12">
                        <h1 class="text-4xl text-gray-700 font-semibold mb-9">Create Account</h1>
                        <form>
                            <label class="block font-semibold text-gray-600 ml-2">First Name</label>
                            <input class="block w-full bg-gray-100 p-2 rounded-full focus:outline-none border focus:bg-gray-200 focus:shadow-inner mb-5" type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
                            <label class="block text-gray-600 font-semibold ml-2">Last Name</label>
                            <input class="block w-full bg-gray-100 p-2 rounded-full border focus:bg-gray-200 focus:shadow-inner mb-5 focus:outline-none" type="text"  value={lname} onChange={(e) => setLname(e.target.value)}/>
                            <label class="block text-gray-600 font-semibold ml-2">Email Adress</label>
                            <input class="block w-full bg-gray-100 p-2 rounded-full border focus:bg-gray-200 focus:shadow-inner mb-5 focus:outline-none" type="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <label class="block text-gray-600 font-semibold ml-2">Password</label>
                            <input class="block w-full bg-gray-100 p-2 rounded-full border focus:bg-gray-200 focus:shadow-inner mb-5 focus:outline-none" type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button onClick={signUp} class="text-center w-full rounded-full text-white font-semibold bg-green-500 p-2 mt-3 hover:bg-green-600 transition">CREATE ACCOUNT</button>
                        </form>
                        <div class="flex justify-between items-center mt-7">
                            <hr class="w-2/5 border border-gray-500 "/> <span class="font-semibold">OR</span> <hr class="w-2/5 border border-gray-500"/>
                        </div>
                        <Link to='/login' class="block text-center w-full rounded-full text-gray-800 hover:text-white border-4 border-gray-800 font-semibold bg-transparent p-2 mt-7 hover:bg-gray-900 transition">SIGN IN</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;
