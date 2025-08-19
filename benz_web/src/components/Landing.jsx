import React from 'react'
import sevn from '../assets/seven.jpeg'
import six from '../assets/six.jpeg'
import three from '../assets/three.jpeg'
import two from '../assets/two.jpeg'
import one from '../assets/one.jpeg'
import five from '../assets/five.jpeg'
import insta from '../assets/insta.jpeg'
import face from '../assets/face.png'
import twiter from '../assets/twiter.png'
import youtube from '../assets/youtube.jpg'
import tick from '../assets/tick.jpeg'
import favicon from '../assets/favicon.ico'


const Landing = () => {
  return (
   <>
   <div>
    <div className="h-screen max-w-full  bg-cover bg-center"
      style={{ backgroundImage: `url(${sevn})` }}>

<div>  
    <div className='text-white flex flex-col space-y-9 items-stretch ml-20 '>

            <p className='text-2xl mt-32'>Leading the way with <br /> Technology that cares</p>
            <span>Invitation that put you first</span>
       <button className=' bg-slate-100 rounded-xl w-[160px] flex text-center items-center justify-center p-1 text-black mt-9'>Explore more <svg  className ="w-7 h-9 flex ml-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> </button>
       </div>
       </div>
      

    </div>
   </div>

   <div>
   
        <div className='w-[500px] items-center ml-20'>
            <p className='text-2xl'>Zaitgest</p>
            <h2>Neighbouly tales</h2>
            <img src={six} alt="" />
        </div>
 <div className=' grid grid-cols-2 justify-around ml-5 p-9 gap-20'>

         <div className='cursor-pointer rounded-sm'>
            <p className='text-2xl'>Vehichle </p>
            <h2>Grand opening</h2>
            <img src={five} alt="" />
        </div>



         <div className='cursor-pointer rounded-sm'>
            <p  className='text-2xl'>Design</p>
            <h2 className='text-xl'>Perfomenace in every details</h2>
            <img src={sevn} alt=""  className='w-[500px]'  />
        </div>



         <div className='cursor-pointer rounded-sm'>
            <p className='text-2xl'>Innovation </p>
            <h2>Digital companion</h2>
            <img src={one} alt="" />
        </div>



         <div className='cursor-pointer rounded-sm'>
            <p className='text-2xl'>Innovation </p>
            <h2>Visoion V:Down of new Era</h2>
            <img src={two} alt="" className='w-[500px]' />
        </div>



        
    </div>
   </div>



   <div className='bg-black text-white h-screen'>
    <div className='flex justify-around items-center max-w-full p-20'>

<div className='flex flex-col space-y-6'>
    <div>
        <h2 className='text-2xl'>Vehicle</h2>
        <p className='text-6xl'>The S-class</p>
    </div>
    <div>
        <span>Expressive design, first-class comfort, and innovative <br />safety technology.</span>
        <button className=' bg-slate-100 rounded-xl w-[160px] flex text-center items-center justify-center p-1 text-black mt-9'>Configure now <svg  className ="w-7 h-9 flex ml-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> </button>
    </div>
    </div>


    <div className='items-center'>
<img src={three} alt="" className='w-96' />
    </div>
    </div>
   </div>


   <div className='flex flex-col gap-10 justify-center h-96'>

  
  <div className='text-center'>
        <h2 className='text-3xl'>Follow Mercedes-Benz</h2>
    </div>

    <div className='flex justify-center space-x-20 items-center'>
        <img src={insta} alt=""  className='w-8 h-7'/>
        <img src={twiter} alt="" className='w-8 h-7' />
        <img src={face} alt="" className='w-8 h-7' />
        <img src={youtube} alt=""  className='w-8 h-7'/>
        <img src={tick} alt="" className='w-8 h-7' />
      
    </div>
    </div>



    <main className='bg-black text-white h-screen flex  items-center'>
        <div className='flex space-x-64 ml-10'  >
            <div className='flex flex-col text-3xl'>
                <span>Purchase</span>
                <span>Services</span>
            </div>
            <div className='flex flex-col text-3xl '>
                <span>Digital extras</span>
                <span>Service and parts</span>
            </div>
        </div>
    </main>
    <hr />
    <section>
        <div>
            <div className='bg-black flex space-x-20 justify-center items-center h-screen text-white' >
                <h2 className='text-3xl text-white'>More Information</h2>
                <div className='flex flex-col space-y-3'>
                    <span className='text-white font-bold text-3xl'>Campany</span>
                    <span>Overview</span>
                    <span>Careers</span>
                    <span>Investors</span>
                    <span>Media Site</span>
                </div>
                <div className='flex flex-col space-y-3'> 
                    <span className='text-white font-bold text-3xl'>Knowledge</span>
                    <span>Dedicated to detail</span>
                    <span>Our history</span>
                    <span>Real Driving Emissions</span>
                </div>
                <div className='flex flex-col space-y-3'>
                    <span className='text-white font-bold text-3xl'>Business Services</span>
                    <span>Fleet Sales</span>
                    <span>International Diplomatic Sales</span>
                    <span>Mercedes-Benz GUARD</span>
                    <span>Training for Authorized Dealers</span>
                </div>
            </div>

        </div>
    </section>
    <hr />
    <div className='bg-black h-screen'>
    <div className=' text-white flex space-x-9 ml-7'>
        <p>1</p>
        <p>The stated values were determined in accordance with  <br />
        the prescribed WLTP (Worldwide harmonised Light vehicles Test Procedure)  <br />
        measurement procedure. The ranges given refer to the German market.  <br />
        The fuel consumption, energy consumption and CO2 emissions of a car depend <br />
         not only on the efficient use of the fuel or energy source by the car, but also on driving style and  <br />
         other non-technical factors.</p>
    </div>

    <hr />

    <div className='flex text-white justify-center space-x-6'>
        <span>Provider</span>
        <span>Legal Notice</span>
        <span>Settings</span>
        <span>Privacy</span>
        <span>Contact</span>
        <span>Third Party License Notices</span>
        <span>Don't Sell My Personal Information (CCPA)</span>
        <span>Accessibility</span>
    </div>
    <div>
        <span>Deutich | </span>
        <span>English</span>
    </div>
    <div className='text-white flex justify-center items-center flex-col space-y-14 '>
        <div className='flex flex-col justify-center items-center mt-14'>
            <img src={favicon} alt=""  className='w-10 text-center'/>
<span>Mercidence-Benz</span>
        </div>

<span> <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"  />
</svg>
 Top</span>
    </div>
    </div>
  
  
   </>
  )
}

export default Landing
