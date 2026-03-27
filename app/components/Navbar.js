import Image from "next/image";

export default function Navbar () {

  return (
    <>
    <div className="py-6 flex items-center bg-secondary border-b-6 border-primary text-primary text-3xl">
      <a className="pl-6" href="#">
        <Image 
        src={"/images/VNHHCLOGO.png"}
        alt="VN Home Health Care Logo"
        width={100}
        height={100}
        />
      </a>
      <nav className="flex flex-1 justify-around font-bold">
        <a href="#">About Us</a>
        <a href="#">Provided Services</a>
        <a href="#">Insurance Information</a>
        <a href="#">Contact Form</a>
        <a href="#">Frequently Asked Questions</a>
      </nav>
    </div>
    </>
  );
};
