import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      {/* Content for larger screens */}
      <div className='hidden md:flex md:flex-col bg-black min-h-screen items-center gap-40'>
        <p className='text-white text-center font-semibold pt-2'>
          A GodFather Inspired Web Developer Portfolio
        </p>
        <div className='flex flex-row justify-center items-center'>
          <p className='font-corleone text-white text-9xl items-center justify-center text-start p-2 absolute'>
            Web <br />
            Developer
          </p>
          <Image
            src='/puppet-image.png'
            alt='puppet'
            width={200}
            height={200}
            className='relative left-24 bottom-16 -z-1'
          />
        </div>

        <p className='text-red-700 md:pl-96 font-bold p-4 hover:underline text-xl sm:pl-48'>
          How did things ever get so far?
        </p>
      </div>

      {/* Content for mobile screens */}
      <div className='flex flex-col bg-black min-h-screen items-center justify-center gap-8 md:hidden'>
        <p className='text-white text-center mt-8 text-xl font-bold'>
          A GodFather Inspired 
        Web Developer Portfolio
        </p>
        <div className='flex flex-col items-center'>
          <Image
            src='/puppet-image.png'
            alt='puppet'
            width={200}
            height={200}
            className='mt-4 m-2'
          />
          <p className='font-corleone text-white text-7xl text-center'>
            Web Developer
          </p>
        </div>

        <p className='text-red-700 text-center font-bold hover:underline text-3xl font-corleone'>
          How did things ever get so far?
        </p>
      </div>
    </>
  );
}
