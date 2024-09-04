

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function Bottomsec() {
    return (
        <div className='mt-3 flex flex-col gap-2'>
            <div className='mt-3 flex flex-col gap-2'>
                <h1 className='text-sm font-normal text-[#232B2B]'>Are you legally authorized to work</h1>
                {/* <select
                    name="userType"
                    id="userType"
                    className='w-full h-12 outline-none rounded-xl px-4 text-[#828282] font-normal text-xs bg-[#F8F8F8]'
                >
                    <option value="Job seekers">Select</option>
                </select> */}

                <Select>
                    <SelectTrigger className="w-full h-12 outline-none rounded-xl px-4 text-[#828282] font-normal text-xs bg-[#F8F8F8] focus:outline-none">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectGroup>
                            <SelectLabel>Select</SelectLabel>
                            <SelectItem value="Job">Job Seekers</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>


            <div className='mt-3 flex flex-col gap-2'>
                <h1 className='text-sm font-normal text-[#232B2B]'>Will you now or in the future require sponsorship</h1>
                <Select>
                    <SelectTrigger className="w-full h-12 outline-none rounded-xl px-4 text-[#828282] font-normal text-xs bg-[#F8F8F8] focus:outline-none">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectGroup>
                            <SelectLabel>Select</SelectLabel>
                            <SelectItem value="Job">Job Seekers</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className='mt-3 flex flex-col gap-2'>
                <h1 className='text-sm font-normal text-[#232B2B]'>Race</h1>
                <Select>
                    <SelectTrigger className="w-full h-12 outline-none rounded-xl px-4 text-[#828282] font-normal text-xs bg-[#F8F8F8] focus:outline-none">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectGroup>
                            <SelectLabel>Select</SelectLabel>
                            <SelectItem value="Job">Job Seekers</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className='mt-3 flex flex-col gap-2'>
                <h1 className='text-sm font-normal text-[#232B2B]'>Veteran Status</h1>
                <Select>
                    <SelectTrigger className="w-full h-12 outline-none rounded-xl px-4 text-[#828282] font-normal text-xs bg-[#F8F8F8] focus:outline-none">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectGroup>
                            <SelectLabel>Select</SelectLabel>
                            <SelectItem value="Job">Job Seekers</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className='flex gap-4'>
                <div className="w-full flex flex-col mt-3 gap-2">
                    <div className="flex items-center">
                        <p className="font-normal text-sm text-[#161A1A]">Sexuality</p>
                    </div>
                    <div className="">
                        <Select>
                            <SelectTrigger className="w-full h-12 outline-none rounded-xl px-4 text-[#828282] font-normal text-xs bg-[#F8F8F8] focus:outline-none">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectGroup>
                                    <SelectLabel>Select</SelectLabel>
                                    <SelectItem value="Job">Job Seekers</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="w-full flex flex-col mt-3 gap-2">
                    <div className="flex items-center">
                        <p className="font-normal text-sm text-[#161A1A]">Disability Status</p>
                    </div>
                    <div className="">
                        <Select>
                            <SelectTrigger className="w-full h-12 outline-none rounded-xl px-4 text-[#828282] font-normal text-xs bg-[#F8F8F8] focus:outline-none">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                                <SelectGroup>
                                    <SelectLabel>Select</SelectLabel>
                                    <SelectItem value="Job">Job Seekers</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottomsec
