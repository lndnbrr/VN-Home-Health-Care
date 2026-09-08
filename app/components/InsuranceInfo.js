import Link from "next/link";
import Image from "next/image";

export default function InsuranceInfo() {

  const insurances = [
    {id: 1, iName: "Traditional Medicare", imgUrl: "/images/insurances_images/medicare-text.png"},
    {id: 2, iName: "Blue Medicare Advantage", imgUrl: "/images/insurances_images/blue-medicare-advantage-text.png"},
    {id: 3, iName: "Medicare Advantage", imgUrl: "/images/insurances_images/medicare-advantage-text.png"},
    {id: 4, iName: "Zing Medicare Health Plan", imgUrl: "/images/insurances_images/zing-health-text.png"},
    {id: 5, iName: "Blue Care Network (BCN)", imgUrl: "/images/insurances_images/blue-care-network-of-michigan-text.png"},
    {id: 6, iName: "Blue Cross Blue Shield of Michigan - PPO", imgUrl: "/images/insurances_images/blue-cross-blue-shield-of-michigan-text.png"},
    {id: 7, iName: "Medicare Plus Blue - PPO", imgUrl: "/images/insurances_images/medicare-plus-blue-blue-cross-blue-shield-of-michigan-text.png"},
    {id: 8, iName: "Aetna Advantage - PPO", imgUrl: "/images/insurances_images/aetna-text.png"},
    {id: 9, iName: "Humana Advantage - PPO", imgUrl: "/images/insurances_images/humana-text.png"},
    {id: 10, iName: "Priority Health Advantage - PPO", imgUrl: "/images/insurances_images/priority-health-text.png"},
    {id: 11, iName: "UnitedHealthcare - PPO", imgUrl: "/images/insurances_images/united-healthcare-text.png"},
    {id: 12, iName: "Wellcare Advantage - PPO", imgUrl: "/images/insurances_images/wellcare-text.png"},
    {id: 13, iName: "Auto Insurance", imgUrl: "/images/insurances_images/auto-insurance.jpeg"},
    {id: 14, iName: "Private Payment", imgUrl: "/images/insurances_images/private-pay.jpeg"}
  ];

  return (
    <>
    <section id="insuranceInfo" className="mbl-section-padding sm:sm-section-padding md:md-section-padding lg:lg-section-padding pr-2 pl-2 flex flex-col">
      <h1 className="flex flex-wrap justify-center font-bold underline text-primary text-[5vw]">Insurance Information</h1>
      <p className="text-center text-[21px] text-primary">We accept a wide variety of PPO health care plans, as well as out-of-pocket coverage or car insurance providers.</p>
      <div className="self-center w-full p-3">
        <div className="flex flex-wrap justify-center gap-4">
          {
            insurances.map((i)=>(
              <div key={i.id} className="basis-1/2 sm:basis-1/3 lg:basis-1/4 border border-primary-dark border-4 rounded-2xl p-4 flex flex-col items-center overflow-hidden">
                <Image alt={i.iName} width={500} height={500} className="w-full aspect-square object-contain" src={i.imgUrl}/>
                <p className="text-center text-sm text-primary-dark font-bold">{i.iName}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
    <section className="max-w-3xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
          Have any questions regarding insurance?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/pages/contact"
            className="w-[80%] sm:w-auto text-center bg-primary text-secondary font-bold px-6 py-3 rounded-md"
          >
            Contact Us
          </Link>
          <a
            href="tel:+12482543582"
            className="w-[80%] sm:w-auto text-center border-2 border-primary text-primary font-bold px-6 py-3 rounded-md"
          >
            Call (248) 254-3582
          </a>
        </div>
      </section>
    </>
  );
};
