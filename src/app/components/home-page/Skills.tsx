import { Image } from "@nextui-org/react";

export default function Skills() {
  return (
    <div className='bg-black flex flex-col items-center justify-center h-screen gap-4'>
      <div className='flex flex-row text-start p-4'>
        <p className='text-red-700 font-corleone text-5xl'>
          Skillset Sharper than the Knifeset
        </p>
      </div>
      <div className=' '>
        <Image
          src='/skillsetimageai.png'
          alt='skills'
          width={1000}
          height={300}
          className='relative '
        />
        {/* <Image
          src='/html.jpeg'
          alt='HTML logo'
          width={50}
          height={50}
          className='relative '
        /> */}
      </div>
    </div>
  );
}
