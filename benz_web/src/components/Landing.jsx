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


const Landing = () => {
  return (
   <>
   <div>
    <div className="h-screen max-w-full  bg-cover bg-center"
      style={{ backgroundImage: `url(${sevn})` }}>


        <div className='text-white space-y-9 ml-64'>

            <p className='text-2xl'>Leading the way with <br /> Technology that cares</p>
            <span>Invitation that put you first</span>
            <button className=' bg-blue-300 rounded-xl w-[160px] flex text-center items-center justify-center'>Exprole more <svg  className ="w-7 h-9 flex ml-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
 </button>
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
        <p>The S-class</p>
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


   <div>
    <div>
        <h2>Follow Mercedes-Benz</h2>
    </div>

    <div className='flex justify-center space-x-20'>
        <img src={insta} alt=""  className='w-8 h-7'/>
        <img src={twiter} alt="" className='w-8 h-7' />
        <img src={face} alt="" className='w-8 h-7' />
        <img src={youtube} alt=""  className='w-8 h-7'/>
        <img src={tick} alt="" className='w-8 h-7' />
      
    </div>
   </div>
   </>
  )
}

export default Landing
