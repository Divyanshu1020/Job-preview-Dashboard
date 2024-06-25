import React from 'react'
import ai from '../assets/AI.svg'
import Atlassian from '../assets/Atlassian.svg'
import Dot from '../assets/Dot.svg'
import xd from '../assets/XD.svg'
import coins from '../assets/coins-stacked-03.svg'
import figma from '../assets/figma.svg'
import markerPIn from '../assets/marker-pin-01.svg'

export default function MainSection() {
    return (
        <div className=' flex flex-col w-full'>
            <div className=' border-style w-full pl-[100px] py-[36px]'>
                <div className=' flex flex-col w-[714px]  gap-[24px]' >
                    <div className=' flex flex-row gap-[12px] items-center'>
                        <h1 className='text-4xl font-bold text-[#3D3D3D]'>Senior Product Designer</h1>
                        <div className=' text-[#d1d1d1]'>•</div>
                        <p className=' small-text text-[#888888]'>posted 2 days ago</p>

                        <div className=' flex flex-row justify-center items-center bg-[#ECFDF3]  h-[20px] border rounded-[40px] border-[#ABEFC6] px-[6px] py-[10px] gap-[4px] '>
                            <img src={Dot} alt="" className=' text-white ' />
                            <p className=' small-text text-[#067647]'>Open</p>
                        </div>
                    </div>

                    <div className=' flex flex-row  items-center gap-[16px]'>
                        <div className='flex flex-row  items- gap-[8px]'>
                            <img src={markerPIn} alt="" />
                            <p className=' medium-text font-bold text-[#5d5d5d]'>Delaware, USA</p>
                        </div>
                        <div className=' text-[#d1d1d1]'>•</div>
                        <div className='flex flex-row  items-center gap-[8px]'>
                            <img src={coins} alt="" />
                            <p className=' medium-text font-bold text-[#5d5d5d]'>$300k-$400k</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-[1px] w-full bg-[#E7E7E7]'></div>

            <div className=' border-style w-full pl-[100px] py-[32px]  '>
                <div className=' flex flex-row gap-[64px]'>

                    <div className=' flex flex-col gap-[8px] w-[170px] '>
                        <h5 className=' small-text text-[#6E6D6D]'> Skills Required</h5>

                        <div className=' flex items-center w-fit border py-[2px] px-[6px] rounded-[6px] gap-[4px]'>
                            <img src={figma} alt="" />
                            <p className=' text-[12px] text-[#344054]'>Figma</p>
                        </div>


                        <div className=' flex items-center w-fit border py-[2px] px-[6px] rounded-[6px] gap-[4px]'>
                            <img src={ai} alt="" />
                            <p className=' text-[12px] text-[#344054]'>Adobe Illustrator</p>
                        </div>


                        <div className=' flex items-center w-fit border py-[2px] px-[6px] rounded-[6px] gap-[4px]'>
                            <img src={xd} alt="" />
                            <p className=' text-[12px] text-[#344054]'>Adobe XD</p>
                        </div>

                    </div>

                    <div className=' flex flex-col gap-[8px] w-[170px] '>
                        <h5 className=' small-text text-[#6E6D6D]'> Preferred Languages</h5>


                        <p className=' text-[16px] leading-[22px] font-[700] text-[#3d3d3d]'>English</p>
                    </div>


                    <div className=' flex flex-col gap-[8px] w-[170px] '>
                        <h5 className=' small-text text-[#6E6D6D]'> Type</h5>


                        <p className=' text-[16px] leading-[22px] font-[700] text-[#3d3d3d]'>Full Time</p>
                    </div>


                    <div className=' flex flex-col gap-[8px] w-[170px] '>
                        <h5 className=' small-text text-[#6E6D6D]'> Years of Experience</h5>


                        <p className='  text-nowrap text-[16px] leading-[22px] font-[700] text-[#3d3d3d]'>3+ Years of Experience </p>
                    </div>

                </div>
            </div>

            <div className='h-[1px] w-full bg-[#E7E7E7]'></div>

            <div className=' border-style w-full pl-[100px] py-[32px]'>
                <div className=' mb-[8px] '>
                    <h4 className=' text-[14px] leading-[19px] text-[#6E6D6D]'>About the job</h4>
                </div>
                <div className='w-full leading-[28px] text-[16px] text-[#3D3D3D]'>
                    <ol className=' list-decimal ml-4'>
                        <li>Handle the UI/UX research design</li>
                        <li>Work on researching on latest web applications designs & trends</li>
                        <li>Work on conceptualizing and visualizing</li>
                        <li>Work on creating graphics content and other graphic related works</li>
                    </ol>



                    <div className=' ml-0'>
                        Benefits:
                        <ul className=' list-disc ml-8'>
                            <li>Health Insurance</li>
                            <li>Provident Fund</li>
                        </ul>
                    </div>

                    <div>
                        Scheduale:
                        <ul className=' list-disc ml-8'>
                            <li>Day shift</li>
                        </ul>
                    </div>

                    <div>
                        Supplemental pay type:
                        <ul className=' list-disc ml-8'>
                            <li>Performance bonus</li>
                            <li>Yearly bonus</li>
                        </ul>
                    </div>

                    <div>
                        Work location: In person
                    </div>
                </div>
            </div>

            <div className='h-[1px] w-full bg-[#E7E7E7]'></div>

            <div className=' border-style w-full pl-[100px] py-[32px]'>

                <div >
                    <div className=' mb-[16px] h-[60px] flex flex-row gap-[12px] items-center'>
                        <img src={Atlassian} alt="" />
                        <p className=' text-[#4F4F4F] text-[20px] leading-[27px]'>Atlassian</p>
                    </div>

                    <div className=' flex flex-row gap-[px48]'>
                        <div className=' flex flex-col gap-[24px] w-[344px]'>
                            <div>
                                <p className=' mb-[8px] text-[14px] leading-[19px] text-[#6E6D6D]'>Company size</p>
                                <p className='  text-[16px] font-[500] leading-[22px] text-[#3D3D3D] '>1k - 2k Employees</p>
                            </div>

                            <div>
                                <p className=' mb-[8px] text-[14px] leading-[19px] text-[#6E6D6D]'>Sector</p>
                                <p className=' text-[16px] font-[500] leading-[22px] text-[#3D3D3D] '>Information Technology, Infrastructure</p>
                            </div>

                            <div>
                                <p className=' mb-[8px] text-[14px] leading-[19px] text-[#6E6D6D]'>Founded In</p>
                                <p className=' text-[16px] font-[500] leading-[22px] text-[#3D3D3D] '>2019</p>
                            </div>
                        </div>

                        <div className=' flex flex-col gap-[24px] w-[344px]' >
                            <div>
                                <p className=' mb-[8px] text-[14px] leading-[19px] text-[#6E6D6D]'>Type</p>
                                <p className=' text-[16px] font-[500] leading-[22px] text-[#3D3D3D] '>Private</p>
                            </div>

                            <div>
                                <p className=' mb-[8px] text-[14px] leading-[19px] text-[#6E6D6D]'>Funding</p>
                                <p className=' text-[16px] font-[500] leading-[22px] text-[#3D3D3D] '>Bootstrapped</p>
                            </div>

                            <div>
                                <p className=' mb-[8px] text-[14px] leading-[19px] text-[#6E6D6D]'>Founded By</p>
                                <p className=' text-[16px] font-[500] leading-[22px] text-[#3D3D3D] '>Scott Farquhar, Mike Cannon-Brookes</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
