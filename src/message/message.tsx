import React from "react";
import { IoMicCircleSharp } from "react-icons/io5";
import star from '@/assets/images/stars.png';
import user from '@/assets/images/user.png';
import { BsSend } from "react-icons/bs";
import pin from "@/assets/images/pin.png";

interface MessageProps {
    closeChat: () => void;
}

 const Message: React.FC<MessageProps> = ({ closeChat }) => {
    return (
        <div className="message w-full rounded-xl shadow-xl">
            <div className=" flex justify-center items-center">
                <div className=" w-[740px] rounded-2xl">
                    <Header closeChat={closeChat} />
                    <ChatWindow />
                    <ChatInput />
                </div>
            </div>
        </div>
    );
};

const Header: React.FC<{ closeChat: () => void }> = ({ closeChat }) => (
    <div className="flex items-center bg-white p-4 border-b border-gray-200">
        <div className='w-11 h-11 rounded-full bg-[#323838]'>
            <img src={user} alt="" />
        </div>
        <div className="ml-3">
            <h2 className="text-lg font-semibold">Caleb Antonucci</h2>
            <p className="text-sm text-gray-500">Last seen 29m ago</p>
        </div>
        <button className="ml-auto text-gray-500" onClick={closeChat}>✕</button>
    </div>
);

const ChatWindow: React.FC = () => (
    <div className="p-4 space-y-6 h-[400px] overflow-y-auto bg-[url('./assets/images/chatimage.png')]">
        <h1 className="text-center pb-5 text-[20px] font-medium text-[#161A1A]">
            Thursday, 25 August 2024
        </h1>
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
        <ChatMessage time="11:10 AM" type="user">
            How do I track the jobs the assistant has applied to?
        </ChatMessage>
    </div>
);

interface ChatMessageProps {
    time: string;
    type: "assistant" | "user";
    children: React.ReactNode;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ time, type, children }) => {
    const isAssistant = type === "assistant";
    return (
        <div className={`flex ${isAssistant ? "justify-start" : "justify-end"} items-start`}>
            {isAssistant && (
                <div className='w-9 h-9 rounded-full bg-[#323838] flex items-center gap-3'>
                    <img src={star} alt="" />
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
                    <div className='w-11 h-11 rounded-full bg-[#323838]'>
                        <img src={user} alt="" />
                    </div>
                </div>
            )}
        </div>
    );
};

const ChatInput: React.FC = () => (
    <div className="p-4 border-t flex items-center w-full bg-white">
        <div className="p-3 rounded-2xl border relative w-full flex gap-3">
            <img src={pin} alt="" />
            <input
                type="text"
                placeholder="Type a message..."
                className="w-full focus:outline-none"
            />
            <BsSend />
        </div>
        <button className="ml-3 text-[3rem]">
            <IoMicCircleSharp />
        </button>
    </div>
);

export default Message;
