import React from "react";
import "./styles.css";
import first from '../assets/abcd.png';
import second from '../assets/vec1.png';
import third from '../assets/vec2.png';
import fourth from '../assets/vec3.png';
import fifth from '../assets/vec4.png';

const Hero = () =>{
    return(
        <div className="hero-main mx-[20px] sm:mx-[70px] my-[10px] sm:my-[30px] mb-[220px] h-[600px] rounded-3xl relative overflow-hidden flex flex-col justify-center items-center gap-[16px]">
            <img src={fourth} className="w-2/5 absolute bottom-[250px] left-[-60px] scale-x-[-1] z-0" alt="left"/>
            <img src={first} className="w-1/2 sm:w-1/3 lg:w-1/4 absolute top-[-20px] left-[-30px] z-0" alt="left"/>
            <img src={second} className="w-1/2 sm:w-1/3 lg:w-1/4 absolute top-[-40px] right-[-60px] z-0 scale-x-[-1]" alt="left"/>
            <img src={third} className="w-2/5 lg:w-1/4 absolute bottom-[-60px] md:bottom-[-120px] left-[30px] sm:left-[40px] md:left-[100px] z-0 lg:left-[150px] scale-x-[-1]" alt="left"/>
            <img src={fifth} className="w-2/4 lg:w-1/3 absolute bottom-[-20px] sm:bottom-[-50px] z-0 right-[-20px] md:right-[-40px]" alt="left"/>
            <h1 className="hero-head text-[40px] sm:text-[50px] text-white font-semibold w-2/3 sm:w-1/2 md:w-1/3 z-10 leading-[48px] text-center tracking-wide">Reliable kidcare on demand</h1>
            <p className="text-[20px] text-white tracking-wider w-2/3 sm:w-1/2 md:w-1/3 z-10 text-center font-sans">Snuggle matches parents who need care with trusted sitters in their community, on-demand</p>
            <button className="bg-teal-200 px-[15px] py-[8px] z-10 rounded-[30px] font-semibold text-[12px] cursor-pointer hover:bg-teal-900 hover:text-white">Sign up</button>
        </div>
    )
}

export default Hero;