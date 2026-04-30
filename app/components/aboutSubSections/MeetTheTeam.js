'use client'

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react";

export default function MeetTheTeam () {
  const members = [
    {id: 0, name: "Name One", title: "Administrator", image: <Image src={"/images/ceo.avif"} alt="Administrator" width={400} height={400} className="max-w-full h-auto"/>, yearsOfExp: 19},
    {id: 1, name: "Name Two", title: "Nurse", image: <Image src={"/images/nurse.png"} alt="Nurse" width={400} height={400} className="max-w-full h-auto"/>, yearsOfExp: 8},
    {id: 2, name: "Name Three", title: "Nurse", image: <Image src={"/images/nurse.png"} alt="Nurse" width={400} height={400} className="max-w-full h-auto"/>, yearsOfExp: 4},
    {id: 3, name: "Name Four", title: "Nurse", image: <Image src={"/images/nurse.png"} alt="Nurse" width={400} height={400} className="max-w-full h-auto"/>, yearsOfExp: 2},
    {id: 4, name: "Name Five", title: "Occupational Therapist", image: <Image src={"/images/otperson.avif"} alt="Occupational Therapist" width={400} height={400} className="max-w-full h-auto"/>, yearsOfExp: 13},
    {id: 5, name: "Name Six", title: "Occupational Therapist", image: <Image src={"/images/otperson.avif"} alt="Occupational Therapist" width={400} height={400} className="max-w-full h-auto"/>, yearsOfExp: 4},
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel()
 
  return (
    <>
      <div className="flex">
        <button onClick={()=> emblaApi?.scrollPrev()} className="pr-1 text-primary-dark">&#x25c0;</button>
        <div ref={emblaRef} className="w-[400px] max-h-[500px] overflow-hidden">
          <div className="flex">
            {
            members.map((member)=> (
              <div key={member.id} className="flex-none w-full flex flex-col items-center">
              {member.image}
                <div className="flex flex-col items-center text-primary-dark">
                  <div className="text-[2.5vw]">
                    {member.name}
                  </div>
                  <div className="text-[2vw]">
                    {member.title}
                  </div>
                  <div className="text-[1.5vw]">
                    <i>{member.yearsOfExp} years of experience</i>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
        <button onClick={()=> emblaApi?.scrollNext()} className="pl-1 text-primary-dark">&#9654;</button>
      </div>
    </>
  );
};
