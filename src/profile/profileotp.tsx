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
            <div className='flex flex-col justify-center items-center p-6 md:p-16'>
                <div className='flex justify-center'>
                    <h1 className='text-base font-normal text-[#161A1A]'>You must Verify your Phone number</h1>
                </div>

                <div className='flex justify-center items-center mt-4 space-x-4'>
                    <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                        <InputOTPGroup className='flex gap-6'>
                            <InputOTPSlot
                                index={0}
                                className='w-12 h-12 rounded-[2px] text-center text-[#7B8697] font-bold text-2xl bg-[#F8F8F8]'
                            />
                            <InputOTPSlot
                                index={1}
                                className='w-12 h-12 rounded-[2px] text-center text-[#7B8697] font-bold text-2xl bg-[#F8F8F8]'
                            />
                            <InputOTPSlot
                                index={2}
                                className='w-12 h-12 rounded-[2px] text-center text-[#7B8697] font-bold text-2xl bg-[#F8F8F8]'
                            />
                            <InputOTPSlot
                                index={3}
                                className='w-12 h-12 rounded-[2px] text-center text-[#7B8697] font-bold text-2xl bg-[#F8F8F8]'
                            />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                <div className='flex justify-center items-center mt-4'>
                    <p className='text-[#7B8697] font-medium text-sm'>
                        Resend code in <span className='font-medium text-sm text-[#232B2B]'>00:{timeLeft}</span>
                    </p>
                </div>
                <button className=' text-white w-full md:w-[151px] h-12 rounded-xl bg-[#323838] mt-6'>
                    Submit OTP
                </button>

            </div>
        </div>
    );
};

export default ProfileOtp;
