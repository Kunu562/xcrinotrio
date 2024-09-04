import Navbar from '@/profile/navbar';
import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { MdOutlinePhone } from 'react-icons/md';
import curve from "@/assets/images/curve2.png"
import curve2 from "@/assets/images/curve1.png"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Login: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Job seekers');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='w-full min-h-screen bg-[#F8F8F8]'>
            <Navbar />
            <div className='flex flex-col h-[760px] items-center justify-center py-20 relative overflow-hidden'>
                <img className='absolute -top-10 -left-10' src={curve} alt="" />
                <div className='rounded-2xl shadow-lg p-6 md:p-16 bg-white'>
                    <div className='flex justify-center'>
                        <h1 className='text-[32px] font-semibold text-[#232B2B]'>Sign in</h1>
                    </div>
                    <p className='text-sm font-normal mt-3 text-[#AAAAAA]'>Iam a</p>
                    <div className='flex flex-col w-full gap-4 mt-3'>
                        {/* <div className='border border-[#AAAAAA] w-full md:w-[350px] h-12 rounded-xl flex justify-center items-center px-3'>
                            <select
                                name="userType"
                                id="userType"
                                className='w-full  outline-none rounded-xl font-normal text-sm font-pop text-[#5A5A5A]'
                                value={selectedOption}
                                onChange={handleChange}
                            >
                                <option value="Job seekers">Job seekers</option>
                                <option value="Recruiters">Recruiters</option>
                            </select>
                        </div> */}
                        <Select>
                            <SelectTrigger className="border border-[#AAAAAA] w-full md:w-[350px] h-12 outline-none rounded-xl px-4 text-[#828282] focus:outline-none placeholder:font-normal placeholder:text-sm placeholder:font-pop placeholder:text-[#d96161]">
                                <SelectValue
                                    className="w-full  outline-none rounded-xl font-normal text-sm font-pop text-[#5A5A5A]"
                                    defaultValue={selectedOption}
                                    onChange={handleChange}
                                    placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl font-normal text-sm font-pop text-[#5A5A5A]">
                                <SelectGroup>
                                    {/* <SelectLabel>Select</SelectLabel> */}
                                    <SelectItem value="Job seekers">Job Seekers</SelectItem>
                                    <SelectItem value="Recruiters">Recruiters</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <div className="relative">
                            {selectedOption === 'Job seekers' && (
                                <>
                                    <input
                                        type="text"
                                        className="border border-[#AAAAAA] pl-11 w-full md:w-[350px] h-12 bg-transparent font-sans font-normal outline-none focus:border focus:border-[#AAAAAA] placeholder:text-sm rounded-xl placeholder:text-[#5A5A5A] placeholder:font-normal placeholder:font-pop"
                                        placeholder="Phone number"
                                    />
                                    <div className="absolute top-[18px] left-4">
                                        <MdOutlinePhone size={14} />
                                    </div>
                                </>
                            )}
                            {selectedOption === 'Recruiters' && (
                                <>
                                    <input
                                        type="email"
                                        className="border border-[#AAAAAA] pl-11 w-full md:w-[350px] h-12 bg-transparent font-sans font-normal outline-none focus:border focus:border-[#AAAAAA] placeholder:text-sm rounded-xl placeholder:text-[#5A5A5A] placeholder:font-normal placeholder:font-pop"
                                        placeholder="Enter Email"
                                    />
                                    <div className="absolute top-[18px] left-4">
                                        <CiMail size={14} />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <button className='text-white w-full md:w-[350px] h-12 font-medium rounded-3xl bg-[#161A1A] mt-6'>GET OTP</button>
                </div>
                <div className=''>
                    <img className='absolute -right-0 -bottom-0' src={curve2} alt="" />
                </div>

            </div>
        </div>
    );
}

export default Login;
