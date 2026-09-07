import Image from "next/image";
import Link from "next/link";

export default function ServicePreview() {
 return (
   <div className="flex flex-col md:flex-row gap-5 ml-5 mr-5">
    <Link href="/pages/skilledservices/skilledNursing" className="group flex flex-col flex-1 border border-color-primary border-4 rounded-2xl p-6 text-primary transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-lg hover:bg-hover-c focus-visible:-translate-y-2 focus-visible:shadow-lg focus-visible:bg-hover-c">
        <div className="flex justify-center">
          <Image src={'/images/logo_images/skilled_nursing_logo.png'} alt="Skilled Nursing logo" width={500} height={500} className="rounded-md w-[40vw] sm:w-[30vw] md:w-full max-w-[350px] h-auto"/>
        </div>
        <h2 className="text-[5vw] sm:text-[3vw] md:text-2xl lg:text-3xl font-bold">Skilled Nursing Services</h2>
        <p className="text-[3.5vw] sm:text-[2.2vw] md:text-sm lg:text-xl">Our Registered Nurses estalish and offer skilled care, as well as coordinate all services that are reasonable and necessary for your illness and/or injury. We provide direct care, teach and train you for medical management.</p>
        <p className="hidden group-hover:block italic mt-2">click to find out more</p>
      </Link>
      <Link href="/pages/skilledservices/rehabilitation" className="group flex flex-col flex-1 border border-color-primary border-4 rounded-2xl p-6 text-primary transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-lg hover:bg-hover-c focus-visible:-translate-y-2 focus-visible:shadow-lg focus-visible:bg-hover-c">
        <div className="flex justify-center">
          <Image src={'/images/logo_images/rehabilitation_logo.png'} alt="Physical Rehabilitation logo" width={500} height={500} className="rounded-md w-[40vw] sm:w-[30vw] md:w-full max-w-[350px] h-auto pr-7 pt-4"/>
        </div>
        <h2 className="text-[5vw] sm:text-[3vw] md:text-2xl lg:text-3xl font-bold">Rehabilitation Services</h2>
        <p className="text-[3.5vw] sm:text-[2.2vw] md:text-sm lg:text-xl">Our Physical Therapists, Speech/Language Therapists, and Occupational Therapists provide professional rehabilitation services through their respective fields.</p>
        <p className="hidden group-hover:block italic mt-2">click to find out more</p>
      </Link>
      <Link href="/pages/skilledservices/homeHealthAide" className="group flex flex-col flex-1 border border-color-primary border-4 rounded-2xl p-6 text-primary transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-lg hover:bg-hover-c focus-visible:-translate-y-2 focus-visible:shadow-lg focus-visible:bg-hover-c">
        <div className="flex justify-center">
          <Image src={'/images/logo_images/home_health_aide_logo.png'} alt="Home Health Aide logo" width={500} height={500} className="rounded-md w-[40vw] sm:w-[30vw] md:w-full max-w-[350px] h-auto"/>
        </div>
        <h2 className="text-[5vw] sm:text-[3vw] md:text-2xl lg:text-3xl font-bold">Home Health Aide Services</h2>
        <p className="text-[3.5vw] sm:text-[2.2vw] md:text-sm lg:text-xl">Our Certified Home Health Aides provide personal care and assistance with your activities of daily living. Your nurse will help create a treatment plan specific to your needs, provide oversight on care you receive and supervise your Home Health Aid.</p>
        <p className="hidden group-hover:block italic mt-2">click to find out more</p>
      </Link>
      <Link href="/pages/skilledservices/medicalSocialWorker" className="group flex flex-col flex-1 border border-color-primary border-4 rounded-2xl p-6 text-primary transition-transform duration-200 ease-out hover:-translate-y-2 hover:shadow-lg hover:bg-hover-c focus-visible:-translate-y-2 focus-visible:shadow-lg focus-visible:bg-hover-c">
        <div className="flex justify-center">
          <Image src={'/images/logo_images/medical_social_logo.png'} alt="Medical Social Worker Logo" width={500} height={500} className="rounded-md w-[40vw] sm:w-[30vw] md:w-full max-w-[350px] h-auto"/>
        </div>
        <h2 className="text-[5vw] sm:text-[3vw] md:text-2xl lg:text-3xl font-bold">Medical Social Services</h2>
        <p className="text-[3.5vw] sm:text-[2.2vw] md:text-sm lg:text-xl">Our Medical Social Workers help you and your family navigate the emotional, financial, and social challenges that come with illness or injury. They connect you with community resources, assist with care planning, and provide counseling to support you throughout your recovery.</p>
        <p className="hidden group-hover:block italic mt-2">click to find out more</p>
      </Link>
    </div>
 );
};
