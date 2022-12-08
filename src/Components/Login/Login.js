import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Nexis/istockphoto-1321277096-612x612 1.png';
import logo from '../../Nexis/ultimate hrm logo-05-02 2.png';
import Login2 from './Login2';

const Login = () => {
    return (

        <div className='flex-col lg:flex-row-reverse'>
            <div className='flex justify-between '>
                <div className='justify-center mx-6 my-8'>
                    <img src={logo} alt="" />
                    <img src={image} className='' alt="" />
                </div>

                <div className='justify-center mx-16 mt-20'>
                    <h3 className='font-semibold ml-8 mt-16 justify-center text-2xl'>SignUp Form</h3>

                    <div className='mt-8 justify-center  '>
                        <input type="text" placeholder="Write  First Name" className=" input input-ghost w-full border-none" />
                        <hr className='inp' />
                        <input type="text" placeholder="Write  Last Name" className=" input input-ghost w-full border-none " />
                        <hr className='inp' />
                        <button className='bg-blue-600 mx-14 my-8 p-2 rounded-lg text-white'><Link to='/login2'>Next Step</Link></button>

                        <h4>Already Have an account?<span className='text-blue-700 font-semibold underline'><Link to='/log4'>LOGIN HERE</Link></span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;