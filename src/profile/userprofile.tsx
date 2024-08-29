import user from '@/assets/images/user.png';
import { FaRegUser } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';

function User() {
    return (
        <div className='w-[288px] h-[450px]  bg-white rounded-2xl shadow-md px-5 py-5'>

            {/* profile div */}
            <div className='flex flex-col w-[248px] h-64 bg-[#323838]  rounded-2xl px-4 py-3'>
                <div className='flex justify-end'>
                    <div className='bg-[#4f5454] w-9 h-9 rounded-full flex items-center justify-center'>
                        <GoPencil className='text-white font-bold text-xl' />
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='w-32 h-32 rounded-full bg-white '>
                        <img
                            className='w-full h-full rounded-full'
                            src={user} alt="" />
                    </div>

                    <h1 className='font-bold text-xl text-white mt-3'>Patricia Peter</h1>
                    <p className='font-normal text-sm text-white'>User</p>
                </div>
            </div>

            <div className='mt-5 flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <h1 className='font-medium text-base text-[#828282]'>Mobile</h1>
                    <p className='font-normal text-sm text-[#161A1A]'>+1-9712435990</p>
                </div>

                <div className='flex justify-between'>
                    <h1 className='font-medium text-base text-[#828282]'>E-Mail</h1>
                    <p className='font-normal text-sm text-[#161A1A]'>patriciapeter@gmail.com</p>
                </div>

                <div className='flex justify-between'>
                    <h1 className='font-medium text-base text-[#828282]'>Location</h1>
                    <p className='font-normal text-sm text-[#161A1A]'>Chicago, IL 60618</p>
                </div>
            </div>

            <div className='bg-[#F8F8F8] p-2 flex gap-3 items-center rounded-xl mt-4'>
                <FaRegUser />
                <h1 className='text-[#323838] font-medium text-base'>Edit Profile</h1>
            </div>
        </div>
    )
}

export default User
