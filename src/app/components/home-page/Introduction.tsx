import { Image } from "@nextui-org/react";

/* eslint-disable react/no-unescaped-entities */
export default function Introduction() {
  return (<>
    <div className='hidden flex flex-col  bg-black h-screen  gap-y-4 pb-32'>
      <p className='text-white text-4xl font-semibold pl-32 text-start'>
        Meet, <br />{" "}
        <span className='font-corleone text-5xl font-normal text-red-700'>
          Don
        </span>{" "}
        VISHNU PRATHAP JRVP
      </p>
      <div className='flex flex-row items-center justify-center'>
        <p className='text-white text-5xl font-corleone absolute '>
          I'm gonna make you an impression, <br /> you cannot forget.
        </p>
        <Image
          src='/boss.png'
          alt='Vishnu'
          width={300}
          height={300}
          className=' relative left-96 bottom-10 '
        />
      </div>
    </div>
    <div className='flex flex-col bg-black min-h-screen items-center justify-center gap-24 md:hidden'>
    <p className='text-white text-3xl text-justify'>
        Meet, <br />{" "}
        <span className='font-corleone text-4xl font-normal text-red-700'>
          Don
        </span>

        <span>{" "}VISHNU PRATHAP JRVP</span>
      </p>
      <div className='flex flex-col items-center justify-center '>
        <p className='text-white text-3xl text-center'>
          I'm gonna make you an impression, <br /> you cannot forget.
        </p>
        <Image
          src='/boss.png'
          alt='Vishnu'
          width={240}
          height={240}
          className=' relative left-11 top-20 '
        />
      </div>
      
      </div>
  </>);
}
