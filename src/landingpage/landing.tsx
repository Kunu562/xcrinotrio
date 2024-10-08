
import FeatureIntegration from './featureintegration';
import star from '@/assets/images/stars.png';
import Landingnavbar from './landingnav';
import line from "@/assets/images/landing1.png";
import line2 from "@/assets/images/landing2.png"
import { LuCheckCheck } from 'react-icons/lu';

function Landing() {

    interface ChatMessageProps {
        time: string;
        type: "assistant" | "user";
        children: React.ReactNode;
    }

    const ChatMessage: React.FC<ChatMessageProps> = ({ time, type, children }) => {
        const isAssistant = type === "assistant";
        return (
            <div
                className={`flex ${isAssistant ? "justify-start" : "justify-end"
                    } items-start`}
            >
                {isAssistant && (
                    <div>
                        {/* <img src={star} alt="" /> */}
                    </div>
                )}
                <div className={`ml-3 ${isAssistant ? "" : "text-right"}`}>
                    <div
                        className={`flex flex-col p-4 rounded-2xl ${isAssistant
                            ? "bg-white text-[#323838] shadow"
                            : "bg-[#F1F3F4] text-[#323838]"
                            }`}
                        style={{
                            borderRadius: isAssistant
                                ? "18px 18px 18px 3px"
                                : "18px 18px 3px 18px",
                            maxWidth: "320px",
                        }}
                    >
                        {children}
                        <div className='flex justify-end items-center gap-3'>
                            <span className="text-xs text-gray-500 mt-1 inline-block">{time}</span>
                            {!isAssistant && <LuCheckCheck className='text-[#0080FF]' />}
                        </div>

                    </div>

                </div>
                {!isAssistant && (
                    <div className="ml-3 flex-shrink-0">
                        <div>
                            {/* <img src={user} alt="" /> */}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className='w-full bg-white'>
            <Landingnavbar />

            <div className='flex flex-col items-center justify-center gap-3 pt-8 px-4 relative overflow-hidden'>
                <img className='absolute -top-10 -left-10 w-1/2' src={line} alt="" />
                <h1 className='text-[64px] font-semibold font-inter text-center z-20'>Let Your Assistant Handle <br /> your job hunt</h1>
                <div className='flex flex-col'>
                    <p className='text-[18px] font-normal font-inter text-[#161A1A] text-center'>
                        Tiro is a chat-based AI assistant that finds jobs most relevant to your profile and</p>
                    <p className='text-[18px] font-normal font-inter text-[#161A1A] text-center'>submits applications on your behalf.</p>
                </div>

            </div>

            <div className="flex justify-center items-center gap-3 mt-3">
                <button className="text-white text-base font-pop w-[80%] sm:w-[50%] md:w-[170px] lg:w-[170px] font-medium h-10 md:h-12 rounded-xl mt-3 border-2 bg-[#323838]">
                    Get my assist
                </button>
            </div>

            <div className='flex justify-center mt-8 px-4'>
                <div className="w-full max-w-[1440px] h-auto bg-[#323838] rounded-2xl grid md:grid-cols-2 xl:grid-cols-3 gap-5 p-5 xl:gap-10 xl:p-10">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="h-auto bg-white bg-center bg-contain rounded-2xl bg-[url('./assets/images/chatimage1.png')]">
                            <div className="p-4 space-y-6">
                                <ChatMessage time="11:00 AM" type="assistant">
                                    Welcome! 👋 I'm Tiro, here to assist with all your requirements.
                                </ChatMessage>
                                <ChatMessage time="11:10 AM" type="user">
                                    How do I enable the job hunt assistant feature?
                                </ChatMessage>
                                <ChatMessage time="11:00 AM" type="assistant">
                                    You can track all job applications in the "Job Applications" or "My Jobs" section. Here, you’ll see a list of jobs the assistant has applied for on your behalf, along with the application status (e.g., Submitted, In Progress, Interview Scheduled).
                                </ChatMessage>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Middle section profile */}
            <div className=' mt-8 flex justify-center'>
                <FeatureIntegration />
            </div>
            <div className='flex flex-col py-14 mt-8'>
                <h1 className='text-[40px] font-semibold text-center mt-3'>
                    While you focus on preparation, <br />
                    Tiro handles the rest
                </h1>

                <div className="flex justify-center items-center gap-3 mt-3">
                    <button className="text-white text-base font-pop w-[80%] sm:w-[50%] md:w-[170px] lg:w-[170px] font-medium h-10 md:h-12 rounded-xl mt-3 border-2 bg-[#323838]">
                        Get my assist
                    </button>
                </div>
            </div>
            <div className='relative '>
                <img className='absolute -right-0 -bottom-3 w-[35rem]' src={line2} alt="" />
            </div>
            <div className='w-full bg-[#161A1A] shadow-base mt-4'>
                <div className='flex flex-col sm:flex-row justify-between items-center h-auto md:h-[109px] w-full px-4 sm:px-8 md:px-16 py-6'>

                    <div className='flex items-center gap-3'>
                        <div className='w-9 h-9 rounded-full bg-[#323838] flex items-center justify-center'>
                            <img src={star} alt="" />
                        </div>
                        <h1 className='text-white text-xl font-lexend font-semibold'>TIRO</h1>
                    </div>

                    <div className='flex gap-8 items-center'>
                        <h1 className='text-sm text-[#FFFFFF]'>Privacy / Terms of uses</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
