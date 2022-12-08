import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Nexis/istockphoto-1321277096-612x612 1.png';
import logo from '../../Nexis/ultimate hrm logo-05-02 2.png';

const Login2 = () => {
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
                        <input type="tel" id="phone" placeholder='+880' name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className=" input input-ghost w-full border-none" />
                        <hr className='inp' />
                        <input type="email" placeholder="Write Email Address" className=" input input-ghost w-full border-none " />
                        <hr className='inp' />
                        <div>
                            <button className='border ml-2'><Link to='/'>Back</Link></button>
                        <button className='bg-blue-600 mx-14 my-8 p-2 rounded-lg text-white'><Link to='/login3'>Next Step</Link></button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login2;