import React from "react";
import "./styles.css";
import Why1 from "./../assets/why1.png"
import Why2 from "./../assets/why2.png"
import Why3 from "./../assets/why3.png"
import Why4 from "./../assets/why4.png"

const Why = () => {
    return(
        <div className="text-teal-950 text-center my-[120px] w-2/3 m-auto">
            <p className="text-[10px] font-bold">WHY SNUGGLE ?</p>
            <h1 className="w-1/3 text-[40px] m-auto font-semibold why-head py-[15px] leading-none tracking-tight">We pop in so you can pop out</h1>
            <h3 className=" m-auto">Making the impossible things about childcare possible.</h3>
            <div className="flex flex-row mt-[60px] justify-around pb-[40px] gap-[40px]">
                <div className="flex flex-row w-1/2 justify-between items-center bg-white rounded-3xl">
                    <div className="text-center pl-[10px]">
                        <p className="text-[30px] font-semibold w-1/2 m-auto leading-8 pb-[10px]">Looking Ahead</p>
                        <p className="w-4/6 m-auto">Look at you being so ahead of the game. We can book childcare up to a month out - we look forward to seeing you then.</p>
                    </div>
                    <img src={Why1} alt="imagee" className="w-2/5"/>
                </div>
                <div className="flex flex-row w-1/2 justify-between items-center bg-white rounded-3xl">
                    <div className="text-center pl-[0px]">
                        <p className="text-[30px] font-semibold m-auto leading-8 pb-[10px]">A Night Out</p>
                        <p className="w-4/6 m-auto">Nothing should get in the way of the time you spend together, without your kids. Our sitters make date night easy to pull off</p>
                    </div>
                    <img src={Why2} alt="imagee" className="opacity-75 w-2/5"/>
                </div>
            </div>
            <div className="flex flex-row w-full m-auto justify-around items-center bg-white rounded-3xl">
                <img src={Why3} alt="imagee" className="w-1/5"/>
                <div className="text-center pl-[10px] w-2/5">
                    <p className="text-[30px] font-semibold  m-auto leading-8 pb-[10px]">In a Pinch</p>
                    <p className=" m-auto">Emergency? Sick nanny? No problem, we can help! We can fill requests with as little as two hours' notice.</p>
                </div>
                <img src={Why4} alt="imagee" className="w-1/5"/>
            </div>
        </div>
    )
}

export default Why;