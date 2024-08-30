import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import box from "@/assets/images/box.png";
import { FaCheck } from 'react-icons/fa';
import star from '@/assets/images/stars.png';
import user from '@/assets/images/user.png';
import ProfileOtp from '@/profile/profileotp';
import HearAboutTiro from '@/profile/hearchat';
import Bottomsec from '@/profile/bottomsec';
import circle from "@/assets/images/Ellipse 87.png"
// import { useState } from 'react';
// import Message from '@/message/message';
// import chat from "@/assets/images/Icon.png"
import { MdOutlineCancel } from 'react-icons/md';


function Submit() {
    // const [isChatOpen, setIsChatOpen] = useState(false);

    // const openChat = () => {
    //     setIsChatOpen(true);
    // };

    // const closeChat = () => {
    //     setIsChatOpen(false);
    // };
    return (
        <div className='w-full bg-[#F8F8F8] overflow-x-hidden'>
            {/* Navbar */}
            <div className='bg-white shadow-base'>
                <div className='flex justify-between items-center h-14 px-6 lg:px-16 py-4'>
                    <div className='flex items-center gap-3'>
                        <div className='w-9 h-9 rounded-full bg-[#323838] flex items-center justify-center'>
                            <img src={star} alt="TIRO" />
                        </div>
                        <h1 className='text-[#323838] text-xl font-semibold'>TIRO</h1>
                    </div>
                    <div className='flex gap-3 lg:gap-8 items-center'>
                        <div className='w-9 h-9 lg:w-11 lg:h-11 rounded-full bg-[#323838]'>
                            <img src={user} alt="User" />
                        </div>
                        <div className='hidden lg:flex flex-col'>
                            <h1 className='text-[#222222] text-base font-medium'>Caleb Antonucci</h1>
                            <p className='text-[#323838] text-sm font-normal'>User</p>
                        </div>
                        <div className='w-8 h-8 rounded-full bg-[#E8E8E8] flex items-center justify-center'>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='flex flex-col lg:flex-row gap-5 px-6 lg:px-16 py-3'>

                {/* Left Sidebar */}

                <div className='w-full lg:w-[288px] lg:col-span-1 h-[450px] bg-white rounded-2xl shadow-md p-5'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='relative w-24 h-24 lg:w-32 lg:h-32'>
                            <img className='absolute inset-0 w-full h-full rounded-full object-cover' src={user} alt="User" />
                            <img className='absolute inset-0 w-full h-full rounded-full' src={circle} alt="Circle" />
                        </div>
                        <p className='text-[#222222] font-medium text-base mt-3'>Caleb Antonucci</p>
                        <div className='flex gap-4 mt-3'>
                            <h1 className='text-[#0EAC3A] font-semibold text-base'>85%</h1>
                            <p className='text-[#B9B9B9] font-semibold text-base'>Profile Complete</p>
                        </div>
                    </div>
                </div>


                {/* Right Content */}
                <div className='w-full bg-white rounded-2xl shadow-md p-5'>
                    <h1 className='text-[#161A1A] font-semibold text-lg lg:text-xl text-center'>Profile Submission Form</h1>
                    <hr className='mt-2' />

                    <div className='flex flex-col lg:flex-row gap-4'>
                        <div className="w-full flex flex-col mt-3 gap-2">
                            <div className="flex items-center">
                                <p className="font-normal text-sm text-[#161A1A]">First Name</p>
                            </div>
                            <div>
                                <input
                                    name="firstName"
                                    className="px-3 py-2 w-full h-[45px] text-[#828282] font-normal text-xs bg-[#F8F8F8] rounded-xl outline-none"
                                    type="text"
                                    placeholder="Your first name" />
                            </div>
                        </div>

                        <div className="w-full flex flex-col mt-3 gap-2">
                            <div className="flex items-center">
                                <p className="font-normal text-sm text-[#161A1A]">Last Name</p>
                            </div>
                            <div>
                                <input
                                    name="lastName"
                                    className="px-3 py-2 w-full h-[45px] text-[#828282] font-normal text-xs bg-[#F8F8F8] rounded-xl outline-none"
                                    type="text"
                                    placeholder="Your Last name" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-4">
                        <label className="font-normal text-sm lg:text-base text-[#161A1A]">Email Address</label>
                        <input
                            className="px-3 py-2 w-full h-[45px] text-[#828282] font-normal text-xs bg-[#F8F8F8] rounded-xl outline-none"
                            type="text"
                            placeholder="Your email address" />
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-4">
                        <label className="font-normal text-sm lg:text-base text-[#161A1A]">Phone Number</label>
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <input
                                className="px-3 py-2 w-full h-[45px] text-[#828282] font-normal text-xs bg-[#F8F8F8] rounded-xl outline-none"
                                type="text"
                                placeholder="Your phone number" />
                            <div className='flex items-center gap-4 lg:w-[211px] bg-[#F8F8F8]'>
                                <div className='relative'>
                                    <img src={box} alt="Verify" />
                                    <h1 className='absolute top-2 left-0 right-0 bottom-0 text-white text-center'>Verify</h1>
                                </div>
                                <div className='w-9 h-9 rounded-full bg-white flex items-center justify-center'>
                                    <FaCheck />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile OTP */}
                    <ProfileOtp />

                    <div className="flex flex-col gap-1 mt-4">
                        <label htmlFor="resume" className="text-gray-700">Resume</label>
                        <div className="flex items-center">
                            <input type="file" id="resume" className="hidden" accept=".pdf,.doc,.docx" />
                            <label
                                htmlFor="resume"
                                className="flex-grow flex justify-between items-center px-4 py-2 text-[#828282] font-normal text-xs bg-[#F8F8F8] rounded-xl cursor-pointer hover:bg-gray-200"
                            >
                                Attach
                                <button
                                    type="button"
                                    className="ml-4 px-4 py-2 text-sm font-medium text-black bg-[#C1C1C1] rounded-xl hover:bg-gray-800"
                                >
                                    Browse
                                </button>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 mt-4">
                        <label className="font-normal text-sm text-[#161A1A]">LinkedIn Profile</label>
                        <input
                            name="linkedin"
                            className="w-full h-12 outline-none rounded-xl px-4 text-[#828282] font-normal text-xs bg-[#F8F8F8]"
                            type="text"
                            placeholder="here" />
                    </div>

                    <div className='flex justify-between'>
                        <HearAboutTiro />
                        {/* <div className='relative'>
                            <button className='text-[#161A1A] border border-[#161A1A] w-full lg:w-32 h-12 rounded-2xl bg-[#F8F8F8] mt-6 text-center'
                                onClick={openChat}>
                                Chat
                            </button>
                            <div className='absolute top-[37px] left-6 mt-1'>
                                <img src={chat} alt="" />
                            </div>
                        </div> */}
                    </div>

                    <Bottomsec />

                    {/* Submit Button */}
                    <div className="flex justify-center flex-col md:flex-row items-center gap-3 mt-3">
                        <button className="text-[#323838] text-base w-full sm:w-[40%] md:w-[205px] lg:w-[205px] xl:w-[205px] flex items-center justify-center gap-2 font-semibold h-12 rounded-3xl mt-3 border-2 border-[#323838]">Cancel
                            <MdOutlineCancel className='-order-1' />
                        </button>
                        <button className="text-white text-base w-full sm:w-[40%] md:w-[205px] lg:w-[205px]  font-medium h-12 rounded-3xl mt-3 border-2 bg-[#161A1A]">Submit</button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {/* {isChatOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-[740px]">
                        <Message closeChat={closeChat} />
                    </div>
                </div>
            )} */}
        </div>
    );
}

export default Submit;
