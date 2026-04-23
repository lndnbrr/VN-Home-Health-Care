import Image from "next/image";

export default function SkilledNursing() {
 return (
  <>
    <div className="flex flex-col bg-[#EBF5FB] border border-color-[#1B4F72] rounded-2xl p-6 text-[#1B4F72]">
      <h1 className="text-3xl font-bold">Skilled Nursing</h1>
      <div className="relative w-full h-65">
        <Image
        src={'/images/medicalert-uk-XjlyFT-ibd0-unsplash.jpg'}
        alt="nurse stock image"
        fill
        className="self-center rounded-md"
        />
      </div>
      <p className="text-xl">Our Registered Nurses establish and provide skilled care, coordinate all services that are reasonable and necessary for your illness and/or injury. Provide direct care, teach and train you for medical management.</p>
    </div>
  </>
 ); 
};
