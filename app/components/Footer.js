import Image from "next/image";

export default function Footer() {

  return (
    <>
    <footer className="pl-5 flex items-center justify-center bg-primary text-white">
      <div className="pr-4 flex flex-col justify-center">
        <div className="text-[2vw] transition-transform duration-200 ease-out hover:-translate-y-1 hover:text-hover-dark-c focus-visible:-translate-y-1 focus-visible:text-hover-dark-c">
          <a href="tel:+12482543582">Work Phone: (248) 254-3582</a>
        </div>
        <div className="text-[2vw] transition-transform duration-200 ease-out hover:-translate-y-1 hover:text-hover-dark-c focus-visible:-translate-y-1 focus-visible:text-hover-dark-c">
          <a href="tel:+18339736953">Toll Free: (833) 973-6953</a>
        </div>
        <div className="text-[2vw] hover:text-hover-dark-c focus-visible:-translate-y-1 focus-visible:text-hover-dark-c">
          <p>Work Fax: (248) 671-0632</p>
        </div>
        <div className="text-[2vw] transition-transform duration-200 ease-out hover:-translate-y-1 hover:text-hover-dark-c focus-visible:-translate-y-1 focus-visible:text-hover-dark-c">
          <a href="mailto:intake.vnhhc@gmail.com">Work Email: intake.vnhhc@gmail.com</a>
        </div>
        <div className="text-[2vw] transition-transform duration-200 ease-out hover:-translate-y-1 hover:text-hover-dark-c focus-visible:-translate-y-1 focus-visible:text-hover-dark-c">
          <a href="https://www.mapquest.com/us/michigan/vidhya-d-jain-vn-home-health-care-inc-284939901"> 
            <p>Address:</p>
            <p>28230 Orchard Lake Rd Suite 215,</p>
            <p>Farmington MI</p>
            <p>48334-3764 United States</p>
          </a>
        </div>
      </div>
      <div className="basis-1/2 sm:basis-1/3 lg:basis-1/3">
        <a href="https://www.mapquest.com/us/michigan/vidhya-d-jain-vn-home-health-care-inc-284939901">
          <Image src={"/images/office_map.png"} alt="VN Home Healthcare office location" width={300} height={300} className="w-full mt-5 object-cover border-4 border-transparent transition-colors duration-200 hover:border-hover-dark-c focus-visible:border-hover-dark-c"/>
          <p className="text-[#D9DDDC] pb-5"><i>Office location is in the Kybya Building on Orchard Lake Rd between 13 Mile and 12 Mile Rd!</i></p>
        </a>
      </div>
    </footer>
    </>
  );
};
