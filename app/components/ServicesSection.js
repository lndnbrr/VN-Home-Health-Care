import HHAides from "./servicesSubsections/HHAides";
import Rehab from "./servicesSubsections/Rehab";
import SkilledNursing from "./servicesSubsections/SkilledNursing";

export default function ServiceSection(){
  return(
    <>
      <section id="services" className="mbl-section-padding sm:sm-section-padding md:md-section-padding lg:lg-section-padding">
        <h1 className="flex justify-center font-bold underline text-primary text-[5vw]">Provided Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">  
          <SkilledNursing/>
          <Rehab/>
          <div className="sm:col-span-2 sm:flex sm:justify-center lg:col-span-1 lg:block">
            <div className="w-full sm:w-1/2 lg:w-full">
              <HHAides/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
