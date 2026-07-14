import Image from "next/image";

export default function Navbar () {

  return (
    <>
    <nav className="sticky top-0 z-50 py-5 flex items-center bg-secondary border-b-6 border-primary text-primary text-[11px] sm:text-md md:text-xl lg:text-2xl">
      <a className="pl-6" href="#">
        <Image 
        src={"/images/VNHHCLOGO.png"}
        alt="VN Home Health Care Logo"
        width={100}
        height={100}
        className="w-[40px] sm:w-[70px] md:w-[90px] lg:w-[100px]"
        />
      </a>
      <div className="flex flex-1 justify-around font-bold">
        <a href="#aboutUs" className="ml-2 text-center">About Us</a>
        <a href="#services" className="text-center">Provided Services</a>
        <a href="#insuranceInfo" className="text-center">Insurance Information</a>
        <a href="#contact" className="text-center">Contact Form</a>
        <a href="#faq" className="text-center">Frequently Asked Questions</a>
      </div>
    </nav>
    </>
  );
};
