import Image from "next/image";

export default function HHAides() {
  return (
   <>
     <div className="bg-[#FEF9E7] border border-color-[#a66702] rounded-2xl p-6 text-[#a66702]">
       <h1 className="text-3xl font-bold">Home Health Aides</h1>
       <div className="relative w-full h-65">
          <Image
          src={'/images/raj-tuladhar-HscUZd52tQk-unsplash.jpg'}
          alt="home health aide stock image"
          fill
          className="self-center rounded-md"
          />
       </div>
       <p className="text-xl">Our Certified Home Health Aides provide personal care and assistance with your activities of daily living; your nurse will help create a treatment plan specific to your needs and will supervise your Home Health Aid and care you receive.</p>
     </div>
   </>
  ); 
 };
 