import { IoIosArrowForward } from 'react-icons/io';
import Navbar from './navbar';
import User from './userprofile';
import box from "@/assets/images/box.png";
import { FaCheck } from 'react-icons/fa';
import ProfileOtp from './profileotp';
import HearAboutTiro from './hearchat';
import Bottomsec from './bottomsec';
import chat from "@/assets/images/Icon.png"
import { useState } from 'react';
import Message from '@/message/message';
import { MdOutlineCancel } from 'react-icons/md';
import { TbReload } from 'react-icons/tb';

function Profile() {
    const [openChat, setOpenChat] = useState(false);

    const handleChatToggle = () => {
        setOpenChat(!openChat);
    };

    return (
        <div className='w-full bg-[#F8F8F8] min-h-screen'>
            <Navbar />

            <div className='flex flex-col lg:flex-row justify-between px-4 lg:px-16 py-3'>
                <h1 className='text-[#161A1A] font-semibold text-lg lg:text-xl'>Profile</h1>
                <div className='flex items-center gap-2 lg:gap-3 mt-2 lg:mt-0'>
                    <h1 className='text-[#161A1A] font-semibold text-lg lg:text-xl'>Profile</h1>
                    <IoIosArrowForward className='mt-1' />
                    <h1 className='text-[#161A1A] font-semibold text-lg lg:text-xl'>Edit Profile</h1>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center gap-5 px-4 lg:px-16'>
                {/* Left div */}
                <User />

                {/* Right div */}
                <div className='w-full max-w-full lg:max-w-[1440px] bg-white rounded-2xl shadow-md'>
                    <div className='px-4 lg:px-5 py-3'>
                        <h1 className='text-[#161A1A] font-semibold text-lg lg:text-xl'>Edit Profile</h1>
                        <hr className='mt-2' />

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                            <div className="flex flex-col gap-1">
                                <label className="font-normal text-sm text-[#161A1A]">First Name</label>
                                <input
                                    name="firstName"
                                    className="px-3 py-2 w-full h-[45px] text-[#828282] font-normal text-xs bg-[#F8F8F8] rounded-xl outline-none"
                                    type="text"
                                    placeholder="Your first name" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="font-normal text-sm text-[#161A1A]">Last Name</label>
                                <input
                                    name="lastName"
                                    className="px-3 py-2 w-full h-[45px] text-[#828282] font-normal text-xs bg-[#F8F8F8] rounded-xl outline-none"
                                    type="text"
                                    placeholder="Your last name" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 mt-4">
                            <label className="font-normal text-sm text-[#161A1A]">Email Address</label>
                            <input
                                name="email"
                                className="px-3 py-2 w-full h-[45px] text-[#828282] font-normal text-xs bg-[#F8F8F8] rounded-xl outline-none"
                                type="text"
                                placeholder="Your Email Address" />
                        </div>

                        <div className="w-full flex flex-col gap-1 mt-4">
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

                        <div className='flex flex-col lg:flex-row justify-between mt-6 gap-4'>
                            <HearAboutTiro />


                            <div className=' fixed bottom-2 right-16 bg-white'>
                                {openChat ? <Message closeChat={handleChatToggle} />
                                    : <div className='flex gap-2 items-center justify-center' onClick={handleChatToggle}>  <button
                                        className='text-[#161A1A] border border-[#161A1A] w-32 md:w-32 lg:w-32  h-12 rounded-2xl bg-[#F8F8F8] text-center'

                                    >
                                        Chat
                                    </button>
                                        <div className='absolute top-[19px] left-6'>
                                            <img src={chat} alt="Chat Icon" />
                                        </div></div>
                                }


                            </div>

                        </div>

                        <Bottomsec />

                        <div className="flex justify-center items-center gap-3 mt-6">
                            <button
                                className="text-[#323838] text-base w-full sm:w-[40%] lg:w-[30%] xl:w-[25%] flex items-center justify-center gap-2 font-semibold h-12 rounded-3xl border-2 border-[#323838]"
                                onClick={handleChatToggle}
                            >
                                <MdOutlineCancel />
                                Cancel
                            </button>
                            <button
                                className="text-white text-base w-full sm:w-[40%] lg:w-[30%] xl:w-[25%] flex items-center justify-center gap-2 font-medium h-12 rounded-3xl border-2 bg-[#323838]"
                            >
                                <TbReload />
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;
