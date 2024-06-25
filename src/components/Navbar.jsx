import React from 'react';
import Rectangle from '../assets/Rectangle.svg';
import bell from '../assets/bell-02.svg';
import briefcase from '../assets/briefcase-02.svg';
import chevronDown from '../assets/chevron-down.svg';
import coinsHand from '../assets/coins-hand.svg';
import logo from '../assets/logo.svg';
import messageSquare from '../assets/message-square-01.svg';

export default function Navbar() {
    return (

        <div className=' max-w-[1728px] mx-auto sticky top-0 bg-white border-bottom ' >
            
        <div className=' w-full py-[17px] pl-[40px] pr-[24px]  '>
            <div className='  w-full  mx-auto flex flex-row justify-between items-center '>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className=' border border-[#D1D1D1] h-[74px] max-w-[538px] w-full rounded-[38px] flex flex-row justify-between items-center pl-[8px] pr-[24px] '>
                    <button className=' flex flex-row justify-center items-center bg-[#DC4A2D] w-[109px] h-[58px] border rounded-[40px] border-[#FCB4A5] px-[23px] py-[24px] '>
                        <img src={briefcase} alt="" className=' text-white mr-2' />
                        <p className=' text-white medium-text font-thin'>Jobs</p>
                    </button>

                    <div className=' flex justify-center items-center'>
                        <img src={messageSquare} alt="" className=' mr-2 ' />
                        <p className=' text-color-gray medium-text '>Messages</p>
                    </div>


                    <div className=' flex justify-center items-center'>
                        <img src={coinsHand} alt="" className=' mr-2' />
                        <p className=' text-color-gray medium-text '>Payments</p>
                    </div>

                </div>

                <div className=' p-[10px]  h-full flex flex-row gap-[16px] justify-end items-center'>
                    <img src={bell} alt=" " className=' ' />
                    <div className='flex flex-row justify-center items-center gap-[6px]'>
                        <img src={Rectangle} alt=" " className='' />
                        <img src={chevronDown} alt=" " />
                    </div>
                </div>
            </div>

        </div>
        <div className='h-[1px] w-full bg-[#E7E7E7]'></div>
        </div>

    )
}
