import React from 'react'

function Bottomsec() {
    return (
        <div className='mt-3 flex flex-col gap-2'>
            <div className='mt-3 flex flex-col gap-2'>
                <h1 className='text-sm font-normal text-[#232B2B]'>Are you legally authorized to work</h1>
                <select
                    name="userType"
                    id="userType"
                    className='border w-full h-12 outline-none rounded-xl px-2'
                >
                    <option value="Job seekers">Select</option>
                </select>
            </div>

            <div className='mt-3 flex flex-col gap-2'>
                <h1 className='text-sm font-normal text-[#232B2B]'>AWill you now or in the future require sponsorship</h1>
                <select
                    name="userType"
                    id="userType"
                    className='border w-full h-12 outline-none rounded-xl px-2'
                >
                    <option value="Job seekers">Select</option>
                </select>
            </div>

            <div className='mt-3 flex flex-col gap-2'>
                <h1 className='text-sm font-normal text-[#232B2B]'>Race</h1>
                <select
                    name="userType"
                    id="userType"
                    className='border w-full h-12 outline-none rounded-xl px-2'
                >
                    <option value="Job seekers">Select</option>
                </select>
            </div>

            <div className='mt-3 flex flex-col gap-2'>
                <h1 className='text-sm font-normal text-[#232B2B]'>Veteran Status</h1>
                <select
                    name="userType"
                    id="userType"
                    className='border w-full h-12 outline-none rounded-xl px-2'
                >
                    <option value="Job seekers">Select</option>
                </select>
            </div>

            <div className='flex gap-4'>
                <div className="w-full flex flex-col mt-3 gap-2">
                    <div className="flex items-center">
                        <p className="font-normal text-sm text-[#161A1A]">Sexuality</p>
                    </div>
                    <div className="">
                        <select
                            name="userType"
                            id="userType"
                            className='border w-full h-12 outline-none rounded-xl px-2'
                        >
                            <option value="Job seekers">Select</option>
                        </select>
                    </div>
                </div>

                <div className="w-full flex flex-col mt-3 gap-2">
                    <div className="flex items-center">
                        <p className="font-normal text-sm text-[#161A1A]">Disability Status</p>
                    </div>
                    <div className="">
                        <select
                            name="userType"
                            id="userType"
                            className='border w-full h-12 outline-none rounded-xl px-2'
                        >
                            <option value="Job seekers">Select</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottomsec
