import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

interface ExperienceEntry {
  role: string;
  establishment: string;
  description: string;
  duration: string;
}

export default function About() {
  const cardContent: ExperienceEntry[] = [
    {
      role: "Frontend Developer",
      establishment: "Tejas Technological Co.",
      description:
        "Made a client-side web application to assist the client in performing calculations for advanced banking transactions, by using JavaScript and React.js.  Developed a controller platform for an ERP system in Next.JS. and tailwind CSS to showcase the status of particular services deployed in the ERP system. Performed Integration testing along with Regression testing as new features were developed. Assigned and tracked issues using  JIRA for Agile development.",
      duration: "August, 2023 - October, 2024",
    },
    {
      role: "Student Placement Coordinator",
      establishment: "BMS College of Engineering",
      description:
        "Liasoned between the Placement Cell and the students coordinators to ensure smooth placement activities for students across the college.",
      duration: "January, 2021 - August, 2023",
    },
  ];

  return (
    <div className='flex flex-col bg-black text-white pb-16 '>
      <div className='flex flex-col justify-center items-start gap-y-4 pl-28'>
        <p className='font-corleone text-6xl text-red-700 '>About Don</p>
        <p className='text-xl font-bold text-justify'>
          Driven frontend developer
          <br />
          Transforming Visions into Intuitive User Experiences.
        </p>
      </div>
      <div className='flex flex-col pl-28 gap-y-4'>
        <p className='text-5xl text-red-700 font-corleone pt-2'>Experience</p>
        <div className='flex flex-col gap-x-4 p-6'>
          {cardContent.map((entry, _i) => {
            return (
              <Card
                key={entry.role}
                className='text-white hover:shadow-md  hover:shadow-red-600 m-2'>
                <CardHeader className='flex flex-col items-start '>
                  <p className='text-xl font-bold'>
                    {entry.role} - {entry.establishment}
                  </p>
                  <p>{entry.duration}</p>
                </CardHeader>
                <CardBody>
                  <p className='text-lg text-justify'>{entry.description}</p>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
