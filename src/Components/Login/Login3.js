import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Nexis/istockphoto-1321277096-612x612 1.png';
import logo from '../../Nexis/ultimate hrm logo-05-02 2.png';

const Login3 = () => {
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
                        <input type="password" id="pass" placeholder='Write Password' className=" input input-ghost w-full border-none" />
                        <hr className='inp' />
                        <p className='text-slate-400'>Your Password Must be 8 Characters</p>
                        
                        <div>
                            <button className='border ml-2'><Link to='/login2'>Back</Link></button>
                        <button className='bg-blue-600 mx-14 my-8 p-2 rounded-lg text-white'><Link to=''>Sign Up</Link></button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login3;