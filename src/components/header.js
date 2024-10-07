import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[50px] py-[40px] relative">
      <div className="flex-grow-0"> 
        <ul className="flex gap-[15px] font-semibold">
          <li> <a href="/#">Parents</a></li>
          <li> <a href="/#">Sitters</a></li>
          <li> <a href="/#">Trust & Safety</a></li>
          <li> <a href="/#">Blog</a></li>
        </ul>
      </div>
      <div className="font-bold text-[25px] logo absolute left-1/2 transform -translate-x-1/2">
        Snuggle
      </div>
      <div className="flex-grow-0">
        <button className="bg-white px-[15px] py-[10px] rounded-[30px] font-semibold text-[12px] cursor-pointer">Login/Signup</button>
      </div>
    </div>
  );
}

export default Header;
