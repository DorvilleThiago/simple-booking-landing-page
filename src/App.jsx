import Avatar from './assets/avatar.jpg';
import Photo1 from './assets/dog-image-1.jpg';
import Photo2 from './assets/dog-image-2.jpg';
import Photo3 from './assets/dog-image-3.jpg';
import { useState, useEffect } from 'react';

function App() {

  const [isMobile, setMobile] = useState(window.innerWidth < 1180);

  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth < 1180);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className='overflow-hidden min-h-full'>
        <div style={{borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%'}} className={`${isMobile ? 'w-[370px] h-[480px]' : 'w-[760px] h-[790px]'}  fixed -translate-x-[216px] bg-gradient-to-b from-pinky to-burple top-0 left-0 -z-10`}/>
        <div style={{borderTopLeftRadius: '50%', borderTopRightRadius: '50%', backgroundColor: '#F9F4FA' }} className={`${isMobile ? 'w-[370px] h-[480px]' : 'w-[760px] h-[790px]'}  fixed translate-x-[216px] right-0 bottom-0 -z-10`} />
      </div>

      <div className={`${isMobile ? 'flex-col scale-90' : 'flex-row mb-10'} w-screen flex items-center justify-center font-sans`}>
        
        <div style={{ width: 320, height: 615, borderRadius: 40, backgroundColor: '#F5F3F8', position: 'relative', borderWidth: '13px' }} className={`shadow-2xl border-white flex flex-col ${isMobile ? 'scale-[64%%]' : ''}`}>
          
          <div style={{ borderBottomLeftRadius: 19, borderBottomRightRadius: 19 }} className="bg-white w-44 h-8 self-center absolute -translate-y-2" />
          
          <div style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 30, borderTopRightRadius: 30 }} className="w-full h-[90px] bg-gradient-to-l from-pinky to-burple top-0 left-0 flex flex-row pt-6 pl-5 pr-5 items-center shadow-lg">
              <div className='flex flex-row items-center w-full'>
                  <i className="fa-solid fa-chevron-left text-white opacity-80 text-[13px] mr-2"></i>
                  <img src={Avatar} className="border-2 border-white object-cover w-[37px] h-[37px] rounded-full"></img>
                  <div className='flex flex-col'>
                    <h1 className='text-white text-[16px] font-bold ml-3 opacity-90 leading-5'>Samuel Green</h1>
                    <p className='text-white text-[11px] ml-3 opacity-70'>Available to Walk</p>
                  </div>
                  <i className="fa-solid fa-ellipsis-vertical text-white justify-self-end ml-auto opacity-80"></i>
              </div>
          </div>

          <div className='ml-5 mt-2 rounded-[15px] bg-grayy w-44 pl-3 p-2'>
            <p className='text-[10px] text-burple'>That sounds great. I'd be</p>
            <p className='text-[10px] text-burple'>happy with that</p>
          </div>

          <div className='ml-5 mt-2 rounded-[15px] bg-grayy w-44 pl-3 p-2'>
            <p className='text-[10px] text-burple'>Could you send over some</p>
            <p className='text-[10px] text-burple'>pictures of your dog, please?</p>
          </div>

          <div className='ml-auto mt-2 rounded-[15px] flex flex-row -translate-x-5'>
            <img src={Photo1} className='rounded-[15px] w-[50px] h-[50px] shadow-lg' />
            <img src={Photo2} className='rounded-[15px] mr-2 ml-2 w-[50px] h-[50px] shadow-lg'/>
            <img src={Photo3} className='rounded-[15px] w-[50px] h-[50px] shadow-lg'/>
          </div>

          <div className='ml-auto mt-2 rounded-[15px] bg-white shadow-md w-40 pl-3 p-2 -translate-x-5'>
            <p className='text-[10px] text-black'>Here are a few pictures. She's</p>
            <p className='text-[10px] text-black'>a happy girl!!</p>
          </div>

          <div className=' ml-auto mt-2 rounded-[15px] bg-white shadow-md w-[105px] pl-3 p-2 -translate-x-5'>
            <p className='text-[10px] text-black'>Can you make it?</p>
          </div>

          <div className='ml-5 mt-2 rounded-[15px] bg-grayy w-40 pl-3 p-2'>
            <p className='text-[10px] text-burple'>She looks so happy! The time</p>
            <p className='text-[10px] text-burple'>We discussed works. How</p>
            <p className='text-[10px] text-burple'>long shall i take her out for?</p>     
          </div>

          <div style={{borderBottomLeftRadius: '7px'}} className='ml-5 bg-gradient-to-r from-pinky to-burple h-10 w-48 rounded-[15px] mt-2 flex justify-center'>
            <div className='flex flex-row items-center w-[160px]'>
              <i className="fa-regular fa-circle text-white text-[20px] opacity-70"></i>
              <h2 className='text-white opacity-70 text-[10px] ml-2'>30 minute walk</h2>
              <h1 className='font-bold ml-auto text-white opacity-90'>$29</h1>
            </div>
          </div>

          <div style={{borderBottomLeftRadius: '7px'}} className='ml-5 bg-gradient-to-r from-pinky to-burple h-10 w-48 rounded-[15px] mt-2 flex justify-center'>
            <div className='flex flex-row items-center w-[160px]'>
              <i className="fa-regular fa-circle text-white text-[20px] opacity-70"></i>
              <h2 className='text-white opacity-70 text-[10px] ml-2'>1 hour walk</h2>
              <h1 className='font-bold ml-auto text-white opacity-90'>$49</h1>
            </div>
          </div>

          <div className='mt-5 rounded-full bg-white shadow-sm w-[250px] self-center h-10 flex flex-row items-center pl-3 pr-3'>
            <input type='text' placeholder='Type a message...' className='text-[11px] w-[170px] focus: border-none outline-none' />
            <i className="fa-solid fa-circle-chevron-right ml-auto text-[30px] hover:cursor-pointer"></i>
          </div>


        </div>

        <div className={`flex justify-center flex-col ${isMobile? 'ml-[0px] h-[380px]' : 'ml-[150px] h-[550px]'}`}>
            <h1 className={`font-bold ${isMobile ? 'text-4xl ml-[7px]': 'text-5xl'} mb-7`}>Simple booking</h1>
            <span style={{ color: '#A29FA7' }} className=" leading-7 text-lg">
            {!isMobile ?
              <div className=''>
                <p>Stay in touch with our dog walkers through the chat</p>
                <p>interface. This makes it easy to discuss arrangements and</p>
                <p>make bookings. Once the walk has been completed you can</p>
                <p>rate your walker and book again all through the chat.</p>
              </div>
              :
              <div className='flex flex-col items-center text-[15px] mr-[7px]'>
                <p>Stay in touch with our dog walkers</p>
                <p>through the chat interface. This makes it</p>
                <p>it easy to discuss arrangements and make</p>
                <p>bookings. Once the walk has been</p>
                <p>completed you can rate your walker and</p>
                <p>book again all through the chat.</p>
              </div>
              }
            </span>
        </div>



        </div>
    </>
  )
}

export default App
