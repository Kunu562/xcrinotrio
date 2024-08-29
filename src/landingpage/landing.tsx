import Navbar from '@/profile/navbar';
import FeatureIntegration from './featureintegration';
import star from '@/assets/images/stars.png';

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
                        className={`p-4 rounded-2xl ${isAssistant
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
                    </div>
                    <span className="text-xs text-gray-500 mt-1 inline-block">{time}</span>
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
        <div className='w-full bg-[#F8F8F8]'>
            <Navbar />

            <div className='flex flex-col items-center justify-center gap-3 mt-8 px-4'>
                <h1 className='text-2xl md:text-3xl font-bold text-center'>Let Your Assistant Handle <br /> your job hunt</h1>
                <p className='text-sm md:text-base text-[#828282] text-center'>
                    Tiro is a chat-based AI assistant that finds jobs most relevant to your profile and 
                    <br className="hidden md:block" />
                    submits applications on your behalf.
                </p>
            </div>

            <div className="flex justify-center items-center gap-3 mt-3">
                <button className="text-white text-sm md:text-base w-[80%] sm:w-[50%] md:w-[30%] lg:w-[20%] font-medium h-10 md:h-12 rounded-3xl mt-3 border-2 bg-[#323838]">
                    Get my assist
                </button>
            </div>

            <div className='flex justify-center mt-8 px-4'>
                <div className='w-full max-w-[1340px] h-auto bg-[#323838] rounded-2xl py-3 px-4 sm:px-8 md:px-14 flex flex-col lg:flex-row justify-center gap-4'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className='w-full max-w-[410px] h-auto bg-white rounded-2xl'>
                            <div className="p-4 space-y-6">
                                <ChatMessage time="11:00 AM" type="assistant">
                                    Welcome! 👋 I'm Tiro, here to assist with all your requirements.
                                </ChatMessage>
                                <ChatMessage time="11:10 AM" type="user">
                                    How do I enable the job hunt assistant feature?
                                </ChatMessage>
                                <ChatMessage time="11:00 AM" type="assistant">
                                    To enable the job hunt assistant, navigate to the "Settings" or "Job Hunt"
                                    section of the app, and toggle on the "Let Your Assistant Handle Your Job
                                    Hunt" option. You may need to grant permissions for the assistant to
                                    access your resume, job preferences, and other relevant details.
                                </ChatMessage>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Middle section profile */}
            <div className='mt-3 px-4 sm:px-8 md:px-12'>
                <FeatureIntegration />
            </div>

            <h1 className='text-2xl md:text-3xl font-bold text-center mt-3'>
                While you focus on preparation, <br />
                Tiro handles the rest
            </h1>

            <div className="flex justify-center items-center gap-3 mt-3">
                <button className="text-white text-sm md:text-base w-[80%] sm:w-[50%] md:w-[30%] lg:w-[20%] font-medium h-10 md:h-12 rounded-3xl mt-3 border-2 bg-[#323838]">
                    Get my assist
                </button>
            </div>

            <div className='w-full bg-[#161A1A] shadow-base mt-4'>
                <div className='flex flex-col sm:flex-row justify-between h-auto sm:h-14 w-full px-4 sm:px-8 md:px-16 py-4'>

                    <div className='flex items-center gap-3'>
                        <div className='w-9 h-9 rounded-full bg-[#323838] flex items-center justify-center'>
                            <img src={star} alt="" />
                        </div>
                        <h1 className='text-white text-xl font-semibold'>TIRO</h1>
                    </div>

                    <div className='flex gap-8 items-center mt-2 sm:mt-0'>
                        <h1 className='text-sm text-[#FFFFFF]'>Privacy / Terms of uses</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
