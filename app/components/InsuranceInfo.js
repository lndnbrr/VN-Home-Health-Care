import Link from "next/link";

export default function InsuranceInfo() {

  const insurances = [
    {id: 1, iName: "Traditional Medicare", imgUrl: "https://ccmhg.com/wp-content/uploads/2013/01/medicare-logo-324x295.jpg"},
    {id: 2, iName: "Blue Medicare Advantage", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpIVH3glN8PcCiKSocWd4JR6x2V47fecHBFPXth562yNdCea1pkCaRMI&s=10"},
    {id: 3, iName: "Medicare Advantage", imgUrl: "https://www.retireguide.com/wp-content/uploads/Medicare-Advantage.png"},
    {id: 4, iName: "Zing Medicare Health Plan", imgUrl: "https://www.myzinghealth.com/assets/zing_images/header/zing_health_logo.png"},
    {id: 5, iName: "Blue Care Network (BCN)", imgUrl: "https://healthforlifegr.com/wp-content/uploads/2020/09/BCN-1.png"},
    {id: 6, iName: "Blue Cross Blue Shield of Michigan - PPO", imgUrl: "https://www.forhealthinsurance.com/wp-content/uploads/2020/08/BCBS_Michigan-800x419-1.png"},
    {id: 7, iName: "Medicare Plus Blue - PPO", imgUrl: "https://www.bcbsm.com/amslibs/content/dam/microsites/medicare/images/logo-medicare-plus-blue-ppo.jpg"},
    {id: 8, iName: "Aetna Advantage - PPO", imgUrl: "https://cofop47.org/wp-content/uploads/2022/08/Aetna.jpg"},
    {id: 9, iName: "Humana Advantage - PPO", imgUrl: "https://static.usaa.com/content/dam/digital/icons/logos/logo-humana-affiliate.png"},
    {id: 10, iName: "Priority Health Advantage - PPO", imgUrl: "https://mms.businesswire.com/media/20240904141181/en/1728803/22/PriorityHealth-Logo-Stacked-Green.jpg"},
    {id: 11, iName: "UnitedHealthcare - PPO", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lo4SR0ieVmw07OlQxZLDeQN9h4RgjXE22U4sKL2Xe_bi8t5opO4N0xs&s=10"},
    {id: 12, iName: "Wellcare Advantage - PPO", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmKoOmVHMocqT4DIJs9oaetZ46LbyTOMzJGHinanWkFN_rqzgPPWyUWw&s=10"},
    {id: 13, iName: "Auto Insurance", imgUrl: "https://img.magnific.com/premium-vector/auto-insurance-icon-line-art-logo-set_1223784-17685.jpg?semt=ais_hybrid&w=740&q=80"},
    {id: 14, iName: "Private Payment", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROh-xj4EMrBQXFBLr-ACY7tbkNyeJmziUmqTGVn6t2Hp8MtyRMBcOOnD4&s=10"}
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
                <img alt={i.iName} className="w-full aspect-square object-contain" src={i.imgUrl}/>
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
