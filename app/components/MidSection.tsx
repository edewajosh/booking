import { Montserrat, Raleway } from 'next/font/google'
import React from 'react'
import { BiStar } from 'react-icons/bi'
import { BsWallet } from 'react-icons/bs'
import { FaStar, FaStarHalf } from 'react-icons/fa6'
import { ImCancelCircle } from 'react-icons/im'
import { IoStarHalfOutline, IoStarOutline, IoStarSharp } from 'react-icons/io5'
import { SlLocationPin } from 'react-icons/sl'

const raleway = Raleway({
    weight: '600',
    subsets: ['latin'],
    variable: '--font-raleway'
})
const montserrat = Montserrat({
    weight: '800',
    subsets: ['latin'],
    variable: '--font-montserrat'
})

const MidSection = () => {
    const values =  [{
        "icon": <BiStar/>,
        "description": 'Have High Rating',
        'color': 'text-yellow-500'
    },
    {
        'icon': <SlLocationPin/>,
        'description': 'Best Locations',
        'color': 'text-green-500'      
     },
     {
        'icon': <ImCancelCircle/>,
        'description': 'Free Cancellation',
        'color': 'text-red-500'
     },
     {
        'icon': <BsWallet/>,
        'description': 'Payment Options',
        'color': 'text-blue-500'
     }
    ]
  return (
    <div className='p-16 mx-auto max-w-screen-xl'>
        <p className='text-black text-3xl md:text-5xl text-center mt-6 font-bold ${montserrat.className}'>Here is a tribute to good life!</p>
        <p className='text-gray-700 text-xl text-center mt-3 mx-auto ${raleway.className}'>Size-like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters 
            offending her ask own. Praise effects wish change way and any wanted. Lively use looked latter regard had. Do he it part more
             last in. We understand that theory is important to build a solid foundation, we understand that theory alone isn't 
            going to get the job done so that's why this is packed with practical hands-on examples that you can follow step by step.</p>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 md:flex flex-row justify-center items-center sm:gap-4 mt-4'>
           {values.map((value, index) => (
            <div key={index} className='flex items-center gap-2 text-2xl mt-3'>
                <p className={value.color}>{value.icon}</p>
                <p className='text-xl text-gray-700 md:text-2xl ${raleway.className}'>{value.description}</p>
            </div>
           ))}
        </div>
        <div className='flex justify-center items-center space-x-2 mt-4'>
            <p className='font-bold text-2xl text-gray-700 ${raleway.className}'>4.5</p>
            <div className='flex flex-col items-center'>
                <div className='flex items-center gap-2'>
                    <IoStarSharp className='text-yellow-500 size-5'/>
                    <IoStarSharp className='text-yellow-500 size-5'/>
                    <IoStarSharp className='text-yellow-500 size-5'/>
                    <IoStarSharp className='text-yellow-500 size-5'/>
                    <IoStarHalfOutline className='text-yellow-500 size-5'/>
                </div>
                <p>Clients Love us!</p>
            </div>
            <button className='bg-black hover:bg-black text-white font-bold py-2 px-4 rounded ${raleway.className}'>Explore Now</button>
        </div>
    </div>
  )
}

export default MidSection