import React from "react";
import "./styles.css";
import doctor from "../assets/working-1.webp";


const Working = () =>{
    return(
        <div className="flex justify-between my-[120px] mx-[70px]">
            <div className="left flex flex-col justify-around text-teal-950 w-3/5 px-[90px]">
                <p className="text-[10px] font-bold">HOW IT WORKS</p>
                <h1 className="text-[43px] font-semibold w-8/12 leading-none work-head">We help families find reliable, flexible kidcare</h1>
                <p className="w-3/5 text-[18px]">We'll match you with sitters based on our family's needs and their availablity.</p>
                <button className="bg-white px-[15px] text-teal-950 w-fit py-[8px] rounded-[30px] font-semibold text-[12px] cursor-pointer hover:bg-teal-900 hover:text-white">Sign up</button>
                <a href="www.google.com"><p className="text-[12px] px-[10px] font-bold">Book a sitter</p></a>
                <a href="www.google.com"><p className="text-[12px] px-[10px] font-bold">Get care & pay</p></a>
            </div>
            <div className="right w-1/3">
                <div className="bg-white rounded-3xl flex flex-col w-4/5 items-center">
                    <img src={doctor} className="rounded-3xl my-[15px] w-11/12" alt="doctor"/>
                    <p className="mx-[30px] text-center text-[11px] pb-[10px]">We like to keep it simple. Tell us your name, contact information, and a little bit about you and your kids. Just like that, you're all set.</p>
                </div>
            </div>
        </div>
    )
}

export default Working;