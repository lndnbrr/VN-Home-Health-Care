import Link from "next/link";
import WhyChooseUs from "./WhyChooseUs";
import Image from "next/image";
import ServiceArea from "./ServiceArea";
import ServicePreview from "./servicesSubsections/ServicePreviews";
// import TestimonialSection from "./TestimonialSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-[10px] sm:pb-[30px] md:pb-[60px] lg:pb-[100px]">
      <div className="text-center text-[9vw] w-full logo-title leading-none bg-primary text-secondary pb-2">
        VN Home Health Care
      </div>
      <div className="relative w-full h-[45vw] min-h-[180px] max-h-[550px] overflow-hidden">
        <div className="hero-carousel-pan absolute inset-0 grid grid-cols-2 grid-rows-2 w-[200%] h-[200%]">
          <div className="relative">
            <Image src={'/images/landing_page_images/hero_one.png'} alt="A worker tending to a patient's wound" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="relative">
            <Image src={'/images/landing_page_images/hero_two.png'} alt="A worker helping a patient walk" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="relative">
            <Image src={'/images/landing_page_images/hero_four.png'} alt="A worker playing chess with a patient" fill sizes="100vw" className="object-cover object-bottom" />
          </div>
          <div className="relative">
            <Image src={'/images/landing_page_images/hero_three.png'} alt="A worker practicing physical therapy with a patient" fill sizes="100vw" className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-[3.5vw] font-bold leading-tight text-secondary">
            Medicare-Certified Home Health Care
          </h1>
          <h2 className="text-[2.5vw] font-bold leading-tight text-secondary">Serving Wayne &amp; Oakland Counties For over 20 Years</h2>
          <p className="text-[2.5vw] text-secondary mt-3 max-w-3xl">
            Skilled Nursing, Occupational Therapy, Physical Therapy, Speech Therapy, Home Health Aide &amp; Medical Social Services.
          </p>
          <p className="text-[2.5vw] text-secondary">
            All in the Comfort of Your Own Home.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <a
          href="/documents/VNHHC_Face_to_Face_.pdf"
          download
          className="w-[80%] sm:w-auto text-center border-2 border-primary text-primary font-bold text-[4vw] sm:text-[2vw] px-6 py-3 rounded-md"
        >
          Refer a Patient
        </a>
        <a
          href="tel:+12482543582"
          className="w-[80%] sm:w-auto text-center bg-primary text-secondary font-bold text-[4vw] sm:text-[2vw] px-6 py-3 rounded-md"
        >
          Call (248) 254-3582
        </a>
        <Link
          href="/pages/contact"
          className="w-[80%] sm:w-auto text-center border-2 border-primary text-primary font-bold text-[4vw] sm:text-[2vw] px-6 py-3 rounded-md"
        >
          Request a Consultation
        </Link>
      </div>
      <h2 className="flex justify-center font-bold underline text-primary text-[4vw] mb-2">Skilled Services</h2>
      <ServicePreview />
      <ServiceArea id="serviceArea" />
      <WhyChooseUs />
      {/* <TestimonialSection /> */}
    </div>
  )
}
