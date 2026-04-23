import Image from "next/image";

export default function Rehab() {
  return (
   <>
     <div className="bg-[#EAFAF1] border border-color-[#14522e] rounded-2xl p-6 text-[#14522e]">
       <h1 className="text-3xl font-bold">Rehabilitation Services</h1>
       <div className="relative w-full h-65">
          <Image
          src={'/images/sincerely-media-inoZpsBQRqk-unsplash.jpg'}
          alt="rehabilitation stock image"
          fill
          className="self-center rounded-md"
          />
       </div>
       <p className="text-xl">We provide rehabilitation services through our professional staff of Physical Therapist, Speech and Language Therapist, Occupational Therapist, Medical Social.</p>
     </div>
   </>
  ); 
 };
 