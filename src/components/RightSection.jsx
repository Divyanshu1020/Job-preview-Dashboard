import React from 'react'
import icon1 from '../assets/Icon1.svg'
import edit from '../assets/edit-02.svg'
import eye from '../assets/eye.svg'
import message from '../assets/message-square-01 (1).svg'
import trash from '../assets/trash-03.svg'
import user from '../assets/user-check-01.svg'


export default function RightSection() {
    return (
        <div className=' bg-[#FCFCFC] py-[34px] px-[23px] h-full shadow-[#E7E7E7] max-w-[409px] w-full'>
            <div className='flex flex-col gap-[24px]'>
                <div className=' flex flex-row gap-[16px]'>
                    <button className=' w-full bg-[#FEF4F2] rounded-[8px] py-[10px] border border-[#dc4a2d] flex flex-row justify-center items-center gap-[10px]'>

                        <img src={trash} alt="" />
                        <p className=' text-[#dc4a2d] font-medium'>Delete job</p>

                    </button>


                    <button className=' w-full bg-[#DC4A2D] rounded-[8px] py-[10px] border-[#ffe4df] border-2 flex flex-row justify-center items-center gap-[10px]'>

                        <img src={edit} alt="" />
                        <p className='  text-white font-medium'>Edit job</p>

                    </button>
                </div>

                <div className=' p-[12px] flex flex-col gap-[16px]'>
                    <div className=' flex flex-row justify-between '>
                        <div className=' flex flex-row items-center p-[10px] gap-[10px]'>
                            <img src={icon1} alt="" />
                            <p className=' text-[#4F4F4F] font-medium'>Applicants</p>
                        </div>

                        <p className=' px-[10px] py-[6px] flex text-[#3D3D3D] justify-center items-center text-xl font-bold'>
                            400
                        </p>
                    </div>

                    <div className='h-[1px] w-full bg-[#E7E7E7]'></div>

                    <div className=' flex flex-row justify-between '>
                        <div className=' flex flex-row items-center p-[10px] gap-[10px]'>
                            <img src={user} alt="" />
                            <p className=' text-[#4F4F4F] font-medium'>Matches</p>
                        </div>

                        <p className=' px-[10px] py-[6px] flex text-[#3D3D3D] justify-center items-center text-xl font-bold'>
                            100
                        </p>
                    </div>

                    <div className='h-[1px] w-full bg-[#E7E7E7]'></div>

                    <div className=' flex flex-row justify-between '>
                        <div className=' flex flex-row items-center p-[10px] gap-[10px]'>
                            <img src={message} alt="" />
                            <p className=' text-[#4F4F4F] font-medium'>Messages</p>
                        </div>

                        <p className=' px-[10px] py-[6px] flex text-[#3D3D3D] justify-center items-center text-xl font-bold'>
                            147
                        </p>
                    </div>

                    <div className='h-[1px] w-full bg-[#E7E7E7]'></div>

                    <div className=' flex flex-row justify-between '>
                        <div className=' flex flex-row items-center p-[10px] gap-[10px]'>
                            <img src={eye} alt="" />
                            <p className=' text-[#4F4F4F] font-medium'>Views</p>
                        </div>

                        <p className=' px-[10px] py-[6px] flex text-[#3D3D3D] justify-center items-center text-xl font-bold'>
                            800
                        </p>
                    </div>
                    


                </div>
            </div>

        </div>
    )
}
