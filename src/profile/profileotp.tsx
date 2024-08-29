import React, { useState, useEffect } from 'react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';

const ProfileOtp: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<number>(60);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className=' p-6 md:p-16'>
                <div className='flex justify-center'>
                    <h1 className='text-lg font-normal text-[#232B2B]'>You must Verify your Phone number</h1>
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
                    <p className='text-[#7B8697] text-sm'>
                        Resend code in {timeLeft} sec.
                    </p>
                </div>
                <button className=' text-white w-full md:w-[350px] h-12 rounded-3xl bg-[#323838] mt-6'>
                    Submit OTP
                </button>

            </div>
        </div>
    );
};

export default ProfileOtp;
