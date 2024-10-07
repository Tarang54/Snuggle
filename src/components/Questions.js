import React, { useState } from "react";
import "./styles.css";


const Questions = () => {
    const [question1, setQuestion1] = useState(false);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);
    const [question4, setQuestion4] = useState(false);
    const [question5, setQuestion5] = useState(false);
    return(
        <div className="mt-[120px] text-teal-950 w-1/2 m-auto">
            <p className="text-[36px] font-semibold questions-head text-left">Common questions</p>
            <div>
                <div className="bg-white rounded-3xl py-[18px] px-[25px] my-[15px]">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-[14px]">What is Snuggle?</p>
                        <p className="bg-gray-100 rounded-full py-[5px] px-[8px] cursor-pointer" onClick={() => setQuestion1(!question1)}>
                            {!question1 ? "➕" : "➖"}
                        </p>
                    </div>
                    <p className={`overflow-hidden transition-all duration-300 ease-in-out ${question1 ? 'opacity-100 max-h-[500px] pt-[10px]' : 'opacity-0 max-h-0'} text-[14px] pr-[30px]`}>
                        Snuggle is a flexible childcare service that offers parents reliable solutions for every situation, whether you're planning ahead with bookings up to a month in advance or need last-minute help in emergencies. From date nights to unexpected nanny cancellations, Snuggle is here to make childcare easier, so you can focus on what matters most.
                    </p>
                </div>

                <div className="bg-white rounded-3xl py-[18px] px-[25px] my-[15px]">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-[14px]">How is Snuggle different from other childcare options?</p>
                        <p className="bg-gray-100 rounded-full py-[5px] px-[8px] cursor-pointer" onClick={() => setQuestion2(!question2)}>
                            {!question2 ? "➕" : "➖"}
                        </p>
                    </div>
                    <p className={`overflow-hidden transition-all duration-300 ease-in-out ${question2 ? 'opacity-100 max-h-[500px] pt-[10px]' : 'opacity-0 max-h-0'} text-[14px] pr-[30px]`}>
                    Snuggle stands out from other childcare options by offering unparalleled flexibility and convenience. Unlike traditional childcare services, Snuggle allows parents to book sitters up to a month in advance or secure help in emergencies with as little as two hours' notice.</p>
                </div>

                <div className="bg-white rounded-3xl py-[18px] px-[25px] my-[15px]">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-[14px]">Does Snuggle offer last-minute backup care?</p>
                        <p className="bg-gray-100 rounded-full py-[5px] px-[8px] cursor-pointer" onClick={() => setQuestion3(!question3)}>
                            {!question3 ? "➕" : "➖"}
                        </p>
                    </div>
                    <p className={`overflow-hidden transition-all duration-300 ease-in-out ${question3 ? 'opacity-100 max-h-[500px] pt-[10px]' : 'opacity-0 max-h-0'} text-[14px] pr-[30px]`}>
                    Yes, Snuggle offers last-minute backup care. We can fill emergency childcare requests with as little as two hours' notice, ensuring you have reliable support when unexpected situations arise, such as a sick nanny or last-minute plans.
                    </p>
                </div>

                <div className="bg-white rounded-3xl py-[18px] px-[25px] my-[15px]">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-[14px]">How are Sunggle's sitters vetted?</p>
                        <p className="bg-gray-100 rounded-full py-[5px] px-[8px] cursor-pointer" onClick={() => setQuestion4(!question4)}>
                            {!question4 ? "➕" : "➖"}
                        </p>
                    </div>
                    <p className={`overflow-hidden transition-all duration-300 ease-in-out ${question4 ? 'opacity-100 max-h-[500px] pt-[10px]' : 'opacity-0 max-h-0'} text-[14px] pr-[30px]`}>
                    Snuggle's sitters undergo a thorough vetting process to ensure the highest level of care and safety for your children. This includes background checks, interviews, and verifying their experience with children. We prioritize trust and reliability, so every sitter is carefully evaluated to meet our high standards before joining the platform.
                    </p>
                </div>

                <div className="bg-white rounded-3xl py-[18px] px-[25px] my-[15px]">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-[14px]">Where is Snuggle available?</p>
                        <p className="bg-gray-100 rounded-full py-[5px] px-[8px] cursor-pointer" onClick={() => setQuestion5(!question5)}>
                            {!question5 ? "➕" : "➖"}
                        </p>
                    </div>
                    <p className={`overflow-hidden transition-all duration-300 ease-in-out ${question5 ? 'opacity-100 max-h-[500px] pt-[10px]' : 'opacity-0 max-h-0'} text-[14px] pr-[30px]`}>
                    Snuggle is currently available in select regions, providing childcare solutions in areas where we have a trusted network of vetted sitters. As we grow, we're continuously expanding to bring our services to more locations. You can check availability in your area by visiting our website or contacting our support team.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Questions;