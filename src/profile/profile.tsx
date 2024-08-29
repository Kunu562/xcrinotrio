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
    const [isChatOpen, setIsChatOpen] = useState(false);

    const openChat = () => {
        setIsChatOpen(true);
    };

    const closeChat = () => {
        setIsChatOpen(false);
    };
    return (
        <div className='w-full bg-[#F8F8F8]'>
            <div>

                {/* navbar div start */}
                <Navbar />
                <div className='flex flex-col lg:flex-row justify-between px-6 lg:px-16 py-3'>
                    <h1 className='text-[#161A1A] font-semibold text-lg lg:text-xl'>Profile</h1>
                    <div className='flex items-center gap-2 lg:gap-3 justify-center mt-2 lg:mt-0'>
                        <h1 className='text-[#161A1A] font-semibold text-lg lg:text-xl'>Profile</h1>
                        <IoIosArrowForward className='mt-1' />
                        <h1 className='text-[#161A1A] font-semibold text-lg lg:text-xl'>Edit Profile</h1>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center gap-5 px-6 lg:px-16'>

                    {/* Left div */}
                    <User />

                    {/* Right div */}
                    <div className='w-full max-w-full lg:max-w-[1440px] bg-white rounded-2xl shadow-md'>
                        <div className='px-4 lg:px-5 py-3'>
                            <h1 className='text-[#161A1A] font-semibold text-lg lg:text-xl'>Edit Profile</h1>
                            <hr className='mt-2' />

                            <div className='flex flex-col lg:flex-row gap-4'>
                                <div className="w-full flex flex-col mt-3 gap-2">
                                    <div className="flex items-center">
                                        <p className="font-normal text-sm text-[#161A1A]">First Name</p>
                                    </div>
                                    <div>
                                        <input
                                            name="firstName"
                                            className="px-3 py-2 w-full text-sm text-gray-600 bg-[#F8F8F8] border border-gray-300 rounded-xl outline-none"
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
                                            className="px-3 py-2 w-full text-sm text-gray-600 bg-[#F8F8F8] border border-gray-300 rounded-xl outline-none"
                                            type="text"
                                            placeholder="Your Last name" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-col mt-4 gap-2">
                                <div className="flex items-center">
                                    <p className="font-normal text-sm text-[#161A1A]">Email Address</p>
                                </div>
                                <div className="w-full">
                                    <input
                                        name="email"
                                        className="px-3 py-2 w-full text-sm text-gray-600 bg-[#F8F8F8] border border-gray-300 rounded-xl outline-none"
                                        type="text"
                                        placeholder="Your Email Address" />
                                </div>
                            </div>

                            <div className="w-full flex flex-col mt-4 gap-2">
                                <div className="flex items-center">
                                    <p className="font-normal text-sm text-[#161A1A]">Phone Number</p>
                                </div>
                                <div className='flex flex-col lg:flex-row gap-4'>
                                    <div className="flex w-full">
                                        <input
                                            name="phoneNumber"
                                            className="px-3 py-2 w-full text-sm text-gray-600 bg-[#F8F8F8] border border-gray-300 rounded-xl outline-none"
                                            type="text"
                                            placeholder="Your Phone Number" />
                                    </div>

                                    <div className='flex items-center gap-4 w-full lg:w-[211px] bg-[#F8F8F8]'>
                                        <div className='relative'>
                                            <img src={box} alt="" />
                                            <h1 className='absolute top-2 left-0 right-0 bottom-0 text-white text-center'>Verify</h1>
                                        </div>
                                        <div className='w-9 h-9 rounded-full bg-white flex items-center justify-center'>
                                            <FaCheck />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ProfileOtp />

                            <div className="flex flex-col w-full mt-6">
                                <label htmlFor="resume" className="text-gray-700">
                                    Resume
                                </label>
                                <div className="flex items-center p-2">
                                    <input
                                        type="file"
                                        id="resume"
                                        className="hidden"
                                        accept=".pdf,.doc,.docx"
                                    />
                                    <label
                                        htmlFor="resume"
                                        className="flex-grow justify-between flex px-4 py-2 text-gray-500 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200"
                                    >
                                        Attach

                                        <button
                                            type="button"
                                            className="ml-4 px-4 py-2 text-sm font-medium text-black bg-[#C1C1C1] rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                                        >
                                            Browse
                                        </button>
                                    </label>
                                </div>
                            </div>

                            <div className="w-full flex flex-col mt-4 gap-2">
                                <div className="flex items-center">
                                    <p className="font-normal text-sm text-[#161A1A]">LinkedIn Profile</p>
                                </div>
                                <div className="w-full">
                                    <input
                                        name="linkedin"
                                        className="px-3 py-2 w-full text-sm text-gray-600 bg-[#F8F8F8] border border-gray-300 rounded-xl outline-none"
                                        type="text"
                                        placeholder="Here" />
                                </div>
                            </div>

                            <div className='flex flex-col lg:flex-row justify-between'>
                                <HearAboutTiro />
                                <div className='relative'>
                                    <button className='text-[#161A1A] border border-[#161A1A] w-full lg:w-32 h-12 rounded-2xl bg-[#F8F8F8] mt-6 text-center'
                                        onClick={openChat}>
                                        Chat
                                    </button>
                                    <div className='absolute top-[37px] left-6 mt-1'>
                                        <img src={chat} alt="" />
                                    </div>
                                </div>
                            </div>

                            <Bottomsec />

                            <div className="flex justify-center items-center gap-3 mt-3">
                                <button className="text-[#323838] text-base w-full sm:w-[40%] lg:w-[30%] xl:w-[25%] flex items-center justify-center gap-2 font-semibold h-12 rounded-3xl mt-3 border-2 border-[#323838]">Cancel
                                <MdOutlineCancel className='-order-1'/>
                                </button>
                                <button className="text-white text-base w-full sm:w-[40%] lg:w-[30%] xl:w-[25%] flex items-center justify-center gap-2 font-medium h-12 rounded-3xl mt-3 border-2 bg-[#323838]">Update Profile
                                <TbReload className='-order-1'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isChatOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-[740px]">
                        <Message closeChat={closeChat} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
