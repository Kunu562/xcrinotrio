import React, { useState, useEffect } from 'react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';

const Otp: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<number>(60);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    return (
        <div className='w-full flex flex-col items-center justify-center h-screen'>
            <div className='border rounded-2xl shadow-lg p-6 md:p-16'>
                <div className='flex justify-center'>
                    <h1 className='text-[32px] font-semibold text-[#232B2B]'>Verify Code</h1>
                </div>
                <div className='flex flex-col items-center justify-center mt-3'>
                    <p className='text-[#7B8697] font-normal text-sm'>Please enter the code we just sent to email</p>
                    <p className='text-[#161A1A] font-normal text-sm'>pra1234xxxx@email.com</p>
                </div>

                <div className='flex justify-center items-center mt-8 space-x-4'>
                    <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                        <InputOTPGroup className='flex gap-6'>
                            <InputOTPSlot
                                index={0}
                                className='w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl'
                            />
                            <InputOTPSlot
                                index={1}
                                className='w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl'
                            />
                            <InputOTPSlot
                                index={2}
                                className='w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl'
                            />
                            <InputOTPSlot
                                index={3}
                                className='w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl'
                            />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                <div className='flex justify-center items-center mt-4'>
                    <p className='text-[#7B8697] font-medium text-sm'>
                        Resend code in <span className='font-medium text-sm text-[#232B2B]'>{timeLeft}</span> sec.
                    </p>
                </div>
                <button className=' text-white w-full md:w-[350px] h-12 rounded-3xl font-medium bg-[#161A1A] mt-6'>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default Otp;
