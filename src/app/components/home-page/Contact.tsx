/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
} from "@nextui-org/react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export default function Contact() {
  const handleDownload = () => {
    const filePath = "/resume.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = "Vishnu Prathap JRVP - Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className='bg-black text-white flex flex-col items-center p-4 gap-4 h-screen'>
      <p className='text-4xl font-corleone text-red-700'>What's Next?</p>
      <p className='text-3xl font-bold'> Lets work together.</p>
      <p className='text-justify w-[50%]'>
        If you'd like to talk about a project you want help with or need an
        advice about product design, just drop me a message at{" "}
        <span className='font-extrabold'>vishnuprathap302001@gmail.com.</span>{" "}
        I'm currently Available for any frontend projects, dashboard designs or
        landing pages gigs.
      </p>
      <div className='flex flex-col items-center gap-4'>
        <Image
          src='/godfather.gif'
          alt='handkissing'
          width={400}
          height={400}
        />
        <p className='text-lg font-bold'>
          Download my resume for further references
        </p>
        <Button
          variant='bordered'
          size='lg'
          radius='none'
          onClick={handleDownload}
          target='_blank'
          className='text-white hover:text-red-700 font-bold'>
          Resume
        </Button>
      </div>
      <div className='flex flex-row gap-4'>
        <Button
          isIconOnly
          color='default'
          className='text-white'
          onPress={() =>
            window.open("https://github.com/Vishnu-prathap", "_blank")
          }>
          <IoLogoGithub size='md' />
        </Button>
        <Button
          isIconOnly
          className='text-white'
          onPress={() =>
            window.open(
              "https://www.linkedin.com/in/vishnu-prathap-jrvp-08150b1b9/",
              "_blank"
            )
          }>
          <IoLogoLinkedin size='md' />
        </Button>
      </div>

      <p className='text-center font-corleone text-3xl'>Made with love ❤️</p>
    </div>
  );
}
{
  /* <Card
        className='flex justify-center items-center gap-4 border-2 border-white w-fit px-10'
        radius='lg'>
        <CardHeader>Contact Me</CardHeader>
        <CardBody className='gap-2'>
          <Input placeholder='Name' />
          <Input placeholder='Email' />
          <Input placeholder='Phone' />
          <CardFooter className='flex items-center justify-center'>
            <Button variant='solid' color='danger'>
              Submit
            </Button>
          </CardFooter>
        </CardBody>
      </Card> */
}
