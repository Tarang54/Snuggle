import React from "react";
import "./styles.css";
import first from '../assets/abcd.png';
import second from '../assets/vec1.png';
import third from '../assets/vec2.png';
import fourth from '../assets/vec3.png';
import fifth from '../assets/vec4.png';

const Hero = () =>{
    return(
        <div className="hero-main mx-[70px] my-[30px] mb-[220px] h-[600px] rounded-3xl relative overflow-hidden flex flex-col justify-center items-center gap-[16px]">
            <img src={fourth} className="w-1/4 absolute bottom-[250px] left-[-60px] scale-x-[-1]" alt="left"/>
            <img src={first} className="w-1/5 absolute top-[-20px] left-[-30px] " alt="left"/>
            <img src={second} className="w-3/12 absolute top-[-40px] right-[-60px] scale-x-[-1]" alt="left"/>
            <img src={third} className="w-1/4 absolute bottom-[-120px] left-[150px] scale-x-[-1]" alt="left"/>
            <img src={fifth} className="w-4/12 absolute bottom-[-50px] right-[-40px]" alt="left"/>
            <h1 className="hero-head text-[50px] text-white font-semibold w-1/3 leading-[48px] text-center tracking-wide">Reliable kidcare on demand</h1>
            <p className="text-[20px] text-white tracking-wider w-1/3 text-center font-sans">Snuggle matches parents who need care with trusted sitters in their community, on-demand</p>
            <button className="bg-teal-200 px-[15px] py-[8px] rounded-[30px] font-semibold text-[12px] cursor-pointer hover:bg-teal-900 hover:text-white">Sign up</button>
        </div>
    )
}

export default Hero;