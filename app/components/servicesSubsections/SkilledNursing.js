import Image from "next/image";
import Link from "next/link";

const whyHomeBased = [
  {
    title: "Avoid unnecessary hospital readmissions",
    description:
      "Skilled nursing services monitor re-hospitalization risk factors, high-risk medication interactions, side effects of all current medications, and signs of infection. These are all issues that are caught before they turn into an ER visit. Nurses educate patients on pain management and train patients and caregivers on disease management through diet, medication, and lifestyle modification. A nurse notices changes a family member might miss.",
  },
  {
    title: "Manage complex medical needs without leaving home",
    description:
      "Our skilled nurses monitor vitals, treat chronic conditions, and train patients in disease management, medication reconciliation, and lifestyle modification. All monitored services are under the care of your ordering physician. This care is customized based on your clinical condition and individual medical needs. Skilled nursing brings that level of licensed medical care to the home, especially when leaving home is a taxing effort and you are homebound.",
  },
  {
    title: "A direct line between the patient and their physician's plan of care",
    description:
      "Because skilled nursing is physician-ordered, the nurse executes and reports back on your care plan, coordinates care, and provides risk management. This keeps the doctor informed of your progress, concerns, and deviations."
  },
];

const services = [
  {
    title: "Care Coordination",
    description:
      <p>We work directly with your physician, hospital, and nursing home discharge planners to keep your care plan patient-centered and everyone involved in your care on the same page.</p>,
    image: "/images/skilled_nursing_images/careplan.png",
    alt: "A nurse going over care plan with a family",
  },
  {
    title: "Chronic Disease Management",
    description:
      <>
        <p>Ongoing, physician-directed care for chronic conditions, with referrals to:</p> 
        <ul className="list-disc list-inside">
          <li>Area Agency on Aging resources</li> 
          <li>community health workers</li> 
          <li>home-visiting physicians</li> 
          <li>in-home labs and diagnostics</li>
          <li>medical equipment providers</li> 
          <li>podiatrists</li> 
          <li>private duty caregivers</li> 
          <li>psychologists</li> 
          <li>wound care specialists</li> 
        </ul>
        <p>all working to minimize risk of re-hospitalization while stabilizing and improving your health right at home.</p>
      </>,
    image: "/images/skilled_nursing_images/chronic_disease.png",
    alt: "A nurse showing heart rate progression via a chart",
  },
  {
    title: "Infection Management & Prevention",
    description:
      <p>Nurses can be an integral part of treatment for active infections, teaching and training patients on infection control at home. They provide early education on identifying infection risk based on your diagnosis and condition, helping prevent the spread of infection before it starts.</p>,
      image:"/images/skilled_nursing_images/infection_prevention.png",
      alt: "A person washing hands",
  },
  {
    title: "Medication Management",
    description:
    <>
      <p className="">Nurses reconcile medications, check for duplications or missing medications, and teach/train patients on all current medications and potential side effects. They coordinate with your physician and pharmacy to ensure you are taking the right medications according to your physician&apos;s recommendations, schedule, and dosage.</p>
      <p>Nurses also provide instructions on which side effects should be reported to your physician and when to call 911 or seek emergency care.</p> 
    </>,
      image: "/images/skilled_nursing_images/medication.png",
      alt: "A nurse handing a patient the right medication",
  },
  {
    title: "Post-Surgical Care",
    description:
      <>
        <p>We provide recovery support after surgery, including monitoring for complications and helping you regain strength safely.</p> 
        <ul className="list-disc list-inside space-y-1">
          <li>skilled nursing – wound care, monitoring vitals, managing pain and medications, watching for signs of infection or other post-op complications</li> <li>physical therapy (PT) – rebuilding strength, mobility, balance, and safe movement (walking, stairs, transfers)</li> 
          <li>occupational therapy (OT) – relearning daily activities (dressing, bathing, cooking) safely, energy conservation, adaptive equipment training if needed</li>
        </ul>
      </>,
      image: "/images/skilled_nursing_images/post_op.png",
      alt: "A nurse taking a patient's temperature",
  },
  {
    title: "Vital Signs Monitoring",
    description:
    <>
      <p>During each skilled visit (whether nursing, physical therapy, or occupational therapy), our clinicians monitor vital signs and report any readings outside safe parameters immediately to your physician, catching problems early before they become emergencies.</p> 
      <ul className="list-disc list-inside space-y-1">
        <li>skilled nursing - tracks vitals alongside medication effectiveness, wound healing, and disease symptoms (like heart failure or COPD flare-ups)</li> <li>physical therapists (PT) -  watches for changes in balance, endurance, or fall risk during mobility sessions</li>
        <li>occupational therapists (OT) -  monitors how well you&apos;re managing daily activities safely at home</li>
      </ul>
      <p className="pt-2">This coordinated oversight helps catch small changes before they turn into an ER visit or hospital readmission.</p>
    </>,
    image: "/images/skilled_nursing_images/vitals.png",
    alt: "A patient getting her blood pressure checked",
  },
  {
    title: "Wound Care",
    description:
      <p>Wound care is provided per physician orders, including dressing changes and monitoring of surgical or chronic wounds to prevent infection and support proper healing. Patients and caregivers are trained in wound care dressing changes. For non-healing wounds, a referral is made to a home-visiting wound care physician if needed.</p>, 
      image: "/images/skilled_nursing_images/wound_care.png",
      alt: "A nurse wrapping a patient's wounded ankle",
  },
];

const whoItsFor = [
  {
    description:"medically homebound",
    image: "/images/logo_images/male_logo.png"
  },
  {
    description:"recently discharged from the hospital or a nursing rehab facility and in need of continued medical support at home",
    image: "/images/logo_images/female_logo.png"
  },
  {
    description:"finding it difficult to leave home, with community access limited due to functional decline",
    image: "/images/logo_images/male_logo.png"
  },
  {
    description:"following a recent face-to-face consultation with your doctor, where you or your caregiver need intermittent support managing chronic conditions that put you at risk of hospitalization or medical decline",
    image: "/images/logo_images/female_logo.png"
  },
];


export default function SkilledNursing() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <Image src="/images/skilled_nursing_images/skilled_nursing_hero.png" alt="A row of nurses" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 pt-8 sm:pt-8 md:pt-16 lg:pt-24 pb-8 sm:pb-8 md:pb-9 lg:pb-9 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold underline text-secondary">Skilled Nursing</h1>
          <p className="text-lg sm:text-xl text-left mt-6 text-secondary">
            Navigating care options for you or a loved one can feel overwhelming, especially when you hear terms like &quot;<i>skilled nursing </i>&quot; and aren&apos;t sure what they mean. </p>
            <p className="text-lg sm:text-xl mt-4 text-secondary">In simple
            terms, <b>skilled nursing is licensed medical care</b>.</p>
            <p className="text-secondary text-left mt-2">It is licensed medical care provided by Registered Nurses (RNs) or Licensed Practical Nurses (LPNs), ordered by a Physician to be delivered right to a patient in their own home.</p>
        </div>
      </div>

      <section className="max-w-5xl mx-auto py-8 px-4 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-8">
          Why Home-Based Skilled Nursing?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {whyHomeBased.map((reason) => (
            <div key={reason.title} className="border border-color-primary border-4 rounded-2xl p-6 text-primary">
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-8">
          Skilled Nursing Services We Provide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col border border-color-primary border-4 rounded-2xl p-6 text-primary">
              {service.image && (
                <div className="relative w-full h-50 mb-4">
                  <Image src={service.image} alt={service.alt} fill className="rounded-md object-cover"/>
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <div>{service.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-6">
          Who This Is For
        </h2>
        <p className="text-lg sm:text-xl pl-2 mb-4">Skilled nursing may be right for you or a loved one if you are:</p>
        <ul className="list-inside space-y-1 text-lg">
          {whoItsFor.map((item) => (
            <div key={item.description} className="flex flex-row border rounded-xl px-2 py-2 bg-primary text-hover-c">
              <Image src={item.image} alt="Person default icon" width={150} height={150}/>
              <li className="self-center">{item.description}</li>
            </div>
          ))}

        </ul>
      </section>


      <section className="max-w-3xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
          Ready to Talk Through Your Care Options?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/pages/contact" className="w-[80%] sm:w-auto text-center bg-primary text-secondary font-bold px-6 py-3 rounded-md">
            Contact Us
          </Link>
          <a href="tel:+12482543582" className="w-[80%] sm:w-auto text-center border-2 border-primary text-primary font-bold px-6 py-3 rounded-md">
            Call (248) 254-3582
          </a>
        </div>
      </section>
    </>
  );
}
