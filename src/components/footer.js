import React from "react";
import "./styles.css";
import Vec from "./../assets/vec1.png";
import Vec2 from "./../assets/vec3.png";

const Footer = () => {
    return(
        <div className="w-5/6 flex justify-between m-auto mt-[120px] gap-[30px] mb-[60px]">
            <div className="footer-main text-white w-1/4 rounded-xl p-[20px] m-auto relative overflow-hidden h-[300px] z-10 flex flex-col gap-[20px] bg-color-class justify-around">
                <img src={Vec} alt="Vec" className="absolute top-[-30px] left-[-30px] z-0 opacity-50"/> 
                <p className="text-[25px] font-bold z-10">The bright side of the kid care</p>
                <p className="z-10">Get reliable on-demand childcare from vetted sitters in your community</p>
                <button className="bg-teal-200 text-teal-950 px-[15px] py-[8px] rounded-[30px] font-semibold text-[12px] w-fit cursor-pointer hover:bg-teal-900 hover:text-white z-10">Get Started</button>
            </div>
            <div className="p-[30px] w-3/4 bg-white rounded-2xl overflow-hidden h-[300px] relative z-10">
                <img src={Vec2} alt="Vec" className="absolute top-[-240px] right-[-250px] z-0 opacity-90"/>
                <div className="font-semibold text-[12px] flex gap-[60px] foot z-10">
                    <ul className="z-10">
                        <li><a href="#">Parents</a></li>
                        <li><a href="#">Sitters</a></li>
                        <li><a href="#">Trust & Safety</a></li>
                    </ul>
                    <ul className="z-10">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul className="z-10">
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="text-[12px] absolute bottom-[20px] left-[20px] z-10">Terms of Use · Privacy Policy</div>
                <div className="font-bold logo text-[32px] absolute top-[20px] right-[20px] leading-[32px] z-10"><a href="#">Snuggle</a></div>
            </div>
        </div>
    )
}

export default Footer;