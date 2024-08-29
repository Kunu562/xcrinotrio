import React, { useState } from 'react';

const HearAboutTiro: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [otherText, setOtherText] = useState('');

    const options = ['Internet', 'Friend', 'Social Media', 'Other'];

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedOptions(prevOptions =>
            prevOptions.includes(value)
                ? prevOptions.filter(option => option !== value)
                : [...prevOptions, value]
        );
    };

    return (
        <div className="flex flex-col mt-6">
            <label className="mb-2 text-gray-700">
            How did you hear about Tiro <br /> Please Click all that apply
            </label>
            {options.map(option => (
                <label key={option} className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        value={option}
                        onChange={handleCheckboxChange}
                        className="mr-2 text-[#828282]"
                    />
                    {option}
                </label>
            ))}
            {selectedOptions.includes('Other') && (
                <input
                    type="text"
                    placeholder="Please specify"
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md mt-2"
                />
            )}
        </div>
    );
};

export default HearAboutTiro;
