import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { MdOutlinePhone } from 'react-icons/md';

const Login: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Job seekers');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='w-full flex flex-col items-center justify-center h-screen'>
            <div className='border rounded-2xl shadow-lg p-6 md:p-16'>
                <div className='flex justify-center'>
                    <h1 className='text-[32px] font-semibold text-[#232B2B]'>Sign in</h1>
                </div>
                <p className='text-sm font-normal mt-3 text-[#AAAAAA]'>Iam a</p>
                <div className='flex flex-col w-full gap-4 mt-3'>
                    <div>
                        <select
                            name="userType"
                            id="userType"
                            className='border border-[#AAAAAA] w-full md:w-[350px] h-12 outline-none rounded-xl px-2 font-normal text-sm text-[#5A5A5A]'
                            value={selectedOption}
                            onChange={handleChange}
                        >
                            <option value="Job seekers">Job seekers</option>
                            <option value="Recruiters">Recruiters</option>
                        </select>
                    </div>

                    <div className="relative">
                        {selectedOption === 'Job seekers' && (
                            <>
                                <input
                                    type="text"
                                    className="border border-[#AAAAAA] pl-9 w-full md:w-[350px] h-12 bg-transparent font-sans font-normal outline-none focus:border focus:border-[#AAAAAA] text-sm rounded-xl"
                                    placeholder="Phone number"
                                />
                                <div className="absolute top-[17px] left-4">
                                    <MdOutlinePhone size={14} />
                                </div>
                            </>
                        )}
                        {selectedOption === 'Recruiters' && (
                            <>
                                <input
                                    type="email"
                                    className="border border-[#AAAAAA] pl-9 w-full md:w-[350px] h-12 bg-transparent font-sans font-normal outline-none focus:border focus:border-[#AAAAAA] text-sm rounded-xl"
                                    placeholder="Email address"
                                />
                                <div className="absolute top-[17px] left-4">
                                    <CiMail size={14} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <button className='text-white w-full md:w-[350px] h-12 font-medium rounded-3xl bg-[#161A1A] mt-6'>GET OTP</button>
            </div>
        </div>
    );
}

export default Login;
