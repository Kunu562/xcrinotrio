import star from '@/assets/images/stars.png';

function Landingnavbar() {
    return (
        <div className='w-full bg-white shadow-lg'>
            <div className='flex flex-col sm:flex-row justify-between items-center w-full px-4 py-3 sm:px-8 md:px-16'>

                {/* Logo Section */}
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 rounded-full bg-[#323838] flex items-center justify-center'>
                        <img src={star} alt="Logo" className="w-5 h-5" />
                    </div>
                    <h1 className='text-[#323838] text-base sm:text-lg md:text-xl font-semibold'>TIRO</h1>
                </div>

                {/* User Profile Section */}
                <div className='flex justify-center gap-2 sm:gap-4 lg:gap-6 items-center mt-3 sm:mt-0'>
                    <h1>Login</h1>
                    <div className=" gap-3">
                        <button className="text-white text-sm w-[66px] h-[36px] font-medium rounded-xl mt-3 border-2 bg-[#323838]">
                            Join
                        </button>
                    </div>
                    {/* <div className='w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-[#323838]'>
                        <img src={user} alt="User" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className='flex flex-col text-center sm:text-left'>
                        <h1 className='text-[#222222] text-sm sm:text-base md:text-base font-medium'>Caleb Antonucci</h1>
                        <p className='text-[#323838] text-xs sm:text-sm font-normal'>User</p>
                    </div>
                    <div className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E8E8E8] flex items-center justify-center'>
                        <IoIosArrowDown />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Landingnavbar;
