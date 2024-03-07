import React from "react";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="bg-white py-5 px-10 text-[1.5rem] font-[600] border-b-[2px] border-[#00000023] shadow-md  vsm:px-3  flex items-center justify-between">
      <div>KOIN</div>


<div className="hidden vsm:block">
<IoMenu size={30}/>
</div>
      <div className="flex vsm:hidden   gap-10 text-[1.2rem]  font-[600] items-center">
        <p>Crypto Taxes </p>
        <p>Free Tools</p>
        <p>Resource Center</p>

        <button className="bgblue font-[500] text-[1.1rem] text-white px-5 py-2 rounded-md ml-4">
          Get Started
        </button>
      </div>



    </nav>
  );
};

export default Navbar;
