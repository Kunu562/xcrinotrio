import cross from "@/assets/images/Vector.png"
import { useState } from "react"
import { FaRegEdit, FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa"
import { IoBagOutline } from "react-icons/io5"

function Ats() {
    const [eye, setEye] = useState(false)
    return (
        <div className='w-full flex flex-col items-center justify-center min-h-screen p-4'>
            <div className='border rounded-2xl shadow-lg p-6 w-full max-w-3xl'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[32px] font-semibold text-[#232B2B]'>Connect ATS</h1>
                    <img className="h-4 w-4 cursor-pointer" src={cross} alt="close" />
                </div>

                {/* Breezy */}

                <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
                    <div className="w-full sm:w-36 md:w-[178px] h-28 bg-[#161A1A] flex items-center justify-center">
                        <h1 className="text-white font-semibold text-xl">Breezy</h1>
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
                    <div className="w-full sm:w-36 md:w-[178px] h-28 bg-[#161A1A] flex items-center justify-center">
                        <h1 className="text-white font-semibold text-xl">Green House</h1>
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
                            <button className="text-[#828282] text-base w-[40%] sm:w-[30%] md:w-[25%] lg:w-[128px]  font-medium h-12 rounded-3xl mt-3 border-2 border-[#828282]">CONNECT</button>
                            <button className="text-white text-base w-[40%] sm:w-[30%] md:w-[25%] lg:w-[155px]  font-medium h-12 rounded-3xl mt-3 border-2 bg-[#161A1A]">CONNECTED</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ats
