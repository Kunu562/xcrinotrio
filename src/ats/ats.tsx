import cross from "@/assets/images/Vector.png";
import Navbar from "@/profile/navbar";
import user from '@/assets/images/user.png';
import { GoPencil } from 'react-icons/go';
import { useState } from "react";
import { FaRegEdit, FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

function Ats() {
    const [eye, setEye] = useState(false);
    
    return (
        <div className='w-full bg-[#F8F8F8] min-h-screen'>
            <Navbar />
            <div className='px-4 md:px-6 lg:px-16 py-3'>
                <h1 className='text-[#161A1A] font-semibold text-lg md:text-xl lg:text-2xl'>Connect ATS</h1>
            </div>

            <div className='flex flex-col lg:flex-row justify-center gap-5 px-4 md:px-6 lg:px-16'>
                {/* Left div */}
                <div className='w-full lg:w-[288px] h-auto lg:h-[386px] bg-white rounded-2xl shadow-md px-5 py-5'>
                    {/* Profile div */}
                    <div className='flex flex-col w-full h-auto lg:h-64 bg-[#323838] rounded-2xl px-4 py-3'>
                        <div className='flex justify-end'>
                            <div className='bg-[#4f5454] w-9 h-9 rounded-full flex items-center justify-center'>
                                <GoPencil className='text-white font-bold text-xl' />
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center mt-4'>
                            <div className='w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white'>
                                <img
                                    className='w-full h-full rounded-full'
                                    src={user} alt="User" />
                            </div>

                            <h1 className='font-bold text-lg md:text-xl text-white mt-3'>Patricia Peter</h1>
                            <p className='font-normal text-xs md:text-sm text-white'>User</p>
                        </div>
                    </div>

                    <div className='mt-5 flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <h1 className='font-medium text-sm md:text-base text-[#828282]'>Mobile</h1>
                            <p className='font-normal text-xs md:text-sm text-[#161A1A]'>+1-9712435990</p>
                        </div>

                        <div className='flex justify-between'>
                            <h1 className='font-medium text-sm md:text-base text-[#828282]'>E-Mail</h1>
                            <p className='font-normal text-xs md:text-sm text-[#161A1A]'>patriciapeter@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Right div */}
                <div className='w-full lg:w-[1032px] bg-white rounded-2xl shadow-lg p-4 md:p-6'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-xl md:text-2xl lg:text-[32px] font-semibold text-[#232B2B]'>Connect ATS</h1>
                        <img className="h-4 w-4 cursor-pointer" src={cross} alt="close" />
                    </div>

                    {/* Breezy */}
                    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
                        <div className="w-full sm:w-36 md:w-[178px] h-20 md:h-24 lg:h-28 bg-[#161A1A] flex items-center justify-center rounded-lg">
                            <h1 className="text-white font-semibold text-lg md:text-xl">Breezy</h1>
                        </div>

                        <div className="flex flex-col gap-5 w-full">
                            <div className="relative w-full h-10 flex items-center">
                                <input
                                    type="text"
                                    className="pl-8 w-full h-full bg-transparent outline-none border text-sm rounded-[7px] border-[#7B8697] placeholder:text-[#5A5A5A] placeholder:font-normal placeholder:text-sm"
                                    placeholder="user name"
                                />
                                <div className="absolute top-[13px] left-2">
                                    <FaRegUser size={18} />
                                </div>
                            </div>

                            <div className="relative w-full h-10">
                                <input
                                    type={eye ? "text" : "password"}
                                    className="pl-8 w-full h-full bg-transparent outline-none border text-sm rounded-[7px] border-[#7B8697] placeholder:text-[#5A5A5A] placeholder:font-normal placeholder:text-sm"
                                    placeholder="password"
                                />
                                <div className="absolute top-[10px] left-2">
                                    <IoBagOutline size={20} />
                                </div>
                                <div className="absolute top-[10px] right-2 cursor-pointer">
                                    {eye ? (
                                        <FaRegEye size={18} onClick={() => setEye(!eye)} />
                                    ) : (
                                        <FaRegEyeSlash size={18} onClick={() => setEye(!eye)} />
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end items-center gap-3">
                                <button className="text-[#161A1A] w-[40%] sm:w-[30%] md:w-[25%] lg:w-[114px] xl:w-[114px] font-medium h-12 rounded-3xl mt-3 border-2 border-[#161A1A]">DELETE</button>
                                <div className="relative h-10 flex items-center w-[40%] sm:w-[30%] md:w-[25%] lg:w-[110px]">
                                    <button className="text-white w-full font-semibold h-12 rounded-3xl mt-3 bg-[#161A1A]">EDIT</button>
                                    <div className="absolute top-[13px] text-white left-3 mt-1">
                                        <FaRegEdit size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Green House */}
                    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
                        <div className="w-full sm:w-36 md:w-[178px] h-20 md:h-24 lg:h-28 bg-[#161A1A] flex items-center justify-center rounded-lg">
                            <h1 className="text-white font-semibold text-lg md:text-xl">Green House</h1>
                        </div>

                        <div className="flex flex-col gap-5 w-full">
                            <div className="relative w-full h-10 flex items-center">
                                <input
                                    type="text"
                                    className="pl-8 w-full h-full bg-transparent outline-none border text-sm rounded-[7px] border-[#7B8697] placeholder:text-[#5A5A5A] placeholder:font-normal placeholder:text-sm"
                                    placeholder="user name"
                                />
                                <div className="absolute top-[13px] left-2">
                                    <FaRegUser size={18} />
                                </div>
                            </div>

                            <div className="relative w-full h-10">
                                <input
                                    type={eye ? "text" : "password"}
                                    className="pl-8 w-full h-full bg-transparent outline-none border text-sm rounded-[7px] border-[#7B8697] placeholder:text-[#5A5A5A] placeholder:font-normal placeholder:text-sm"
                                    placeholder="password"
                                />
                                <div className="absolute top-[10px] left-2">
                                    <IoBagOutline size={20} />
                                </div>
                                <div className="absolute top-[10px] right-2 cursor-pointer">
                                    {eye ? (
                                        <FaRegEye size={18} onClick={() => setEye(!eye)} />
                                    ) : (
                                        <FaRegEyeSlash size={18} onClick={() => setEye(!eye)} />
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end items-center gap-3">
                                <button className="text-[#828282] text-sm md:text-base w-[40%] sm:w-[30%] md:w-[25%] lg:w-[128px] font-medium h-12 rounded-3xl mt-3 border-2 border-[#828282]">CONNECT</button>
                                <button className="text-white text-sm md:text-base w-[40%] sm:w-[30%] md:w-[25%] lg:w-[155px] font-medium h-12 rounded-3xl mt-3 border-2 bg-[#161A1A]">CONNECTED</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ats;
