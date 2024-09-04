import React from 'react';
import group from "@/assets/images/messagegroup.png";
import click from "@/assets/images/ads_click.png";
import bell from "@/assets/images/entypo_bell.png";
import flow from "@/assets/images/flows.png";
import flows from "@/assets/images/flow.png";
import sheet from "@/assets/images/flowsheet.png";

// FeatureItem component for individual feature
const FeatureItem: React.FC<{
    imgSrc: string;
    title: string;
    description: string
}> = React.memo(({ imgSrc, title, description }) => (
    <div className="flex items-start space-x-6 shadow-[6px_6px_10px_rgba(0,0,0,0.1)] bg-white p-4 rounded-xl">
        <div className="w-11 h-11 min-w-11 min-h-11 bg-[#E3E9F2] rounded-xl flex justify-center items-center">
            <img src={imgSrc} alt="" className="text-gray-600 w-6 h-6" />
        </div>
        <div>
            <h3 className="font-bold text-lg text-[#161A1A]">{title}</h3>
            <p className="text-[#828282] font-normal text-base">{description}</p>
        </div>
    </div>

));

// Data for features
const features = [
    {
        title: 'Create a profile',
        description: 'Upload resume and submit your details only once; tiro will use these to submit all your applications.',
        imgSrc: click,
    },
    {
        title: 'Get matching Jobs',
        description: 'As soon as a new job opportunity is listed, if tiro thinks it’s a good fit, it will notify you.',
        imgSrc: bell,
    },
    {
        title: 'Search Jobs with text',
        description: 'Don’t restrict yourself to a limited number of filters. Search for jobs using Free Text.',
        imgSrc: flow,
    },
    {
        title: 'Submit Applications',
        description: 'Don’t fill the same details for every job. Listing Tiro will fill the details and submit the application for you for the jobs you like.',
        imgSrc: flows,
    },
    {
        title: 'Schedule Interview',
        description: 'Tiro will find time that works both for you and the recruiter, and schedule the meeting in your calendar.',
        imgSrc: sheet,
    },
];

const FeatureIntegration: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center  bg-white">
            {/* Left Section */}
            <div className="flex flex-col space-y-8 md:w-full lg:w-1/2 p-6 md:p-12">
                {features.map((feature) => (
                    <FeatureItem
                        key={feature.title}
                        imgSrc={feature.imgSrc}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>

            {/* Right Section */}
            <div className="p-20">
                <img src={group} alt="Group illustration" />
                {/* <Design /> */}
            </div>
        </div>
    );
};

export default React.memo(FeatureIntegration);
