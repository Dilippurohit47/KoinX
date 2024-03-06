import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white py-5 px-10 text-[1.2vw] font-[600] border-b-[2px] border-[#00000023] shadow-md  flex items-center justify-between'>
{/* first div */}
<div>
    KOIN
</div>

<div className='flex  gap-10 text-[1.2vw] font-[600] items-center'>

<p>Crypto Taxes </p>
<p>Free Tools</p>
<p>Resource Center</p>

<button className='bgblue font-[500] text-[1.1rem] text-white px-5 py-2 rounded-md ml-4'>
    Get Started
</button>

</div>

    </nav>
  )
}

export default Navbar
