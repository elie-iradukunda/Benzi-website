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
      
      <div className="h-screen w-full bg-cover bg-center md:bg-center sm:bg-top" style={{ backgroundImage: `url(${sevn})` }}>
        <div className="text-white flex flex-col space-y-4 md:space-y-9 items-start md:ml-20 ml-5">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold">Leading the way with <br /> Technology that cares</p>
          <span className="text-sm sm:text-base md:text-lg">Innovation that puts you first</span>
          <button className="bg-slate-100 rounded-xl w-[140px] sm:w-[160px] flex text-center items-center justify-center p-2 text-black mt-4 sm:mt-9">
            Explore more
            <svg className="w-5 h-5 sm:w-7 sm:h-7 ml-2 sm:ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

   
      <div className="mt-10 md:mt-20 px-5 md:px-20">
        <div className="w-full md:w-[500px] mb-10">
          <p className="text-xl sm:text-2xl md:text-2xl font-semibold">Zeitgeist</p>
          <h2 className="text-lg sm:text-xl md:text-2xl">Neighbourly tales</h2>
          <img src={six} alt="Zeitgeist" className="w-full h-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20">
          <div className="cursor-pointer rounded-sm">
            <p className="text-xl sm:text-2xl">Vehicle</p>
            <h2 className="text-lg sm:text-xl md:text-2xl">Grand opening</h2>
            <img src={five} alt="Vehicle" className="w-full h-auto mt-2" />
          </div>

          <div className="cursor-pointer rounded-sm">
            <p className="text-xl sm:text-2xl">Design</p>
            <h2 className="text-lg sm:text-xl md:text-2xl">Performance in every detail</h2>
            <img src={sevn} alt="Design" className="w-full h-auto mt-2" />
          </div>

          <div className="cursor-pointer rounded-sm">
            <p className="text-xl sm:text-2xl">Innovation</p>
            <h2 className="text-lg sm:text-xl md:text-2xl">Digital companion</h2>
            <img src={one} alt="Innovation" className="w-full h-auto mt-2" />
          </div>

          <div className="cursor-pointer rounded-sm">
            <p className="text-xl sm:text-2xl">Innovation</p>
            <h2 className="text-lg sm:text-xl md:text-2xl">Vision V: Dawn of a new Era</h2>
            <img src={two} alt="Vision V" className="w-full h-auto mt-2" />
          </div>
        </div>
      </div>

     
      <div className="bg-black text-white py-10 md:py-20">
        <div className="flex flex-col md:flex-row justify-around items-center px-5 md:px-20 space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-4 md:space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Vehicle</h2>
              <p className="text-4xl sm:text-5xl md:text-6xl">The S-class</p>
            </div>
            <div>
              <span className="text-sm sm:text-base md:text-lg">
                Expressive design, first-class comfort, and innovative safety technology.
              </span>
              <button className="bg-slate-100 rounded-xl w-[140px] sm:w-[160px] flex text-center items-center justify-center p-2 mt-4 sm:mt-9 text-black">
                Configure now
                <svg className="w-5 h-5 sm:w-7 sm:h-7 ml-2 sm:ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <img src={three} alt="S-class" className="w-full max-w-sm md:max-w-md h-auto" />
          </div>
        </div>
      </div>

    
      <div className="flex flex-col gap-4 md:gap-10 justify-center items-center py-10">
        <h2 className="text-2xl sm:text-3xl">Follow Mercedes-Benz</h2>
        <div className="flex justify-center space-x-4 sm:space-x-10 items-center">
          <img src={insta} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-7" />
          <img src={twiter} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-7" />
          <img src={face} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-7" />
          <img src={youtube} alt="YouTube" className="w-6 h-6 sm:w-8 sm:h-7" />
          <img src={tick} alt="TikTok" className="w-6 h-6 sm:w-8 sm:h-7" />
        </div>
      </div>

    
      <main className="bg-black text-white py-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-5 md:px-20 space-y-6 md:space-y-0">
        <div className="flex flex-col text-xl sm:text-2xl md:text-3xl space-y-2">
          <span>Purchase</span>
          <span>Services</span>
        </div>
        <div className="flex flex-col text-xl sm:text-2xl md:text-3xl space-y-2">
          <span>Digital extras</span>
          <span>Service and parts</span>
        </div>
      </main>

      <hr />

  
      <section className="bg-black py-10 md:py-20 px-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-around space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <span className="font-bold text-xl sm:text-2xl md:text-3xl">Company</span>
            <span>Overview</span>
            <span>Careers</span>
            <span>Investors</span>
            <span>Media Site</span>
          </div>
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <span className="font-bold text-xl sm:text-2xl md:text-3xl">Knowledge</span>
            <span>Dedicated to detail</span>
            <span>Our history</span>
            <span>Real Driving Emissions</span>
          </div>
          <div className="flex flex-col space-y-3 text-center md:text-left">
            <span className="font-bold text-xl sm:text-2xl md:text-3xl">Business Services</span>
            <span>Fleet Sales</span>
            <span>International Diplomatic Sales</span>
            <span>Mercedes-Benz GUARD</span>
            <span>Training for Authorized Dealers</span>
          </div>
        </div>
      </section>

      <hr />

   
      <div className="bg-black py-10 md:py-20 px-5 md:px-20 text-white space-y-10">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <p className="font-bold">1</p>
          <p className="text-sm sm:text-base md:text-base">
            The stated values were determined in accordance with the prescribed WLTP (Worldwide harmonised Light vehicles Test Procedure)
            measurement procedure. The ranges given refer to the German market. The fuel consumption, energy consumption and CO2 emissions of a car depend
            not only on the efficient use of the fuel or energy source by the car, but also on driving style and other non-technical factors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6 text-sm sm:text-base">
          <span>Provider</span>
          <span>Legal Notice</span>
          <span>Settings</span>
          <span>Privacy</span>
          <span>Contact</span>
          <span>Third Party License Notices</span>
          <span>Don't Sell My Personal Information (CCPA)</span>
          <span>Accessibility</span>
        </div>

        <div className="text-center">
          <span>Deutsch | </span>
          <span>English</span>
        </div>

        <div className="flex flex-col items-center mt-10 space-y-4">
          <div className="flex flex-col items-center">
            <img src={favicon} alt="Mercedes-Benz Logo" className="w-10" />
            <span>Mercedes-Benz</span>
          </div>
          <span className="flex items-center space-x-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
            Top
          </span>
        </div>
      </div>
    </>
  )
}

export default Landing
