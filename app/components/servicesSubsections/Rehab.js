import Image from "next/image";
import Link from "next/link";

const whyHomeBased = [
  {
    title: "Therapy built around your real home, not a generic clinic or gym",
    description:
      "A therapist working in your home can address the stairs you climb, the shower you use, and the layout you navigate every day. That means training on the real obstacles you face, not generic clinic equipment.",
  },
  {
    title: "Faster, safer recovery after a hospital stay or surgery",
    description:
      "One-on-one, in-home therapy sessions mean more individualized attention than many outpatient or facility settings allow. That can shorten recovery time and reduce the risk of falls or setbacks during the transition home.",
  },
  {
    title: "Restoring independence in daily activities, not just physical function",
    description:
      "The goal is not just improving strength or range of motion in isolation. It's about regaining the ability to dress, bathe, cook, or move around safely on your own.",
  },
];

const services = [
  {
    id: "pt",
    name: "Physical Therapy",
    facilitator: "Physical Therapist",
    description:
      "Physical therapy helps patients regain strength, balance, and the ability to move safely after an injury, surgery, or illness. Our licensed physical therapists build a personalized treatment plan around each patient's specific condition and goals.",
    image: "/images/rehabilitation_images/pt_image.png",
    alt: "Physical therapist assisting a patient with balance training at home",
    coverage: [
      {
        title: "Fall-risk and stability work",
        description:
          "We work with you on the coordination and stability exercises that lower your everyday risk of a fall at home.",
      },
      {
        title: "Getting in and out safely",
        description:
          "Your therapist practices the specific transfers you do every day, such as bed to chair, chair to standing, or car to curb, until you can do them with confidence on your own.",
      },
      {
        title: "Rebuilding strength for daily life",
        description:
          "Exercises are chosen around the tasks you actually need stamina for, so you can get through your day without exhaustion or strain.",
      },
      {
        title: "Walking with confidence",
        description:
          "Hands-on practice on your own floors and staircases helps you relearn a steady, safe gait in the environment you actually live in.",
      },
    ],
    idealCandidates: [
      "Managing fall risk or recovering from a fall",
      "Living with Parkinson's disease",
      "Managing other conditions affecting mobility",
      "Recovering from a stroke",
      "Recovering from joint replacement or surgery",
    ],
  },
  {
    id: "ot",
    name: "Occupational Therapy",
    facilitator: "Occupational Therapist",
    description:
      "Occupational therapy helps patients regain the skills and confidence needed for everyday self-care and independent living at home. Our licensed occupational therapists focus on the specific daily tasks that matter most to each patient.",
    image: "/images/rehabilitation_images/ot_image.png",
    alt: "Occupational therapist showing a patient how to use adaptive equipment at home",
    coverage: [
      {
        title: "Pacing yourself through the day",
        description:
          "Your therapist teaches simplified movement patterns and pacing strategies so you can get through daily tasks without running out of energy.",
      },
      {
        title: "Tools that make daily tasks easier",
        description:
          "We introduce aids like reachers, dressing hooks, and grab bars, and show you how to use them so daily tasks feel safer and more manageable on your own.",
      },
      {
        title: "Rebuilding flexibility and strength for self-care",
        description:
          "Guided exercises restore the flexibility and strength your joints and muscles need for dressing, bathing, and other everyday self-care.",
      },
    ],
    idealCandidates: [
      "Experiencing age-related decline in daily-living skills",
      "Managing arthritis or joint pain",
      "Needing support to safely live independently at home",
      "Recovering from a stroke",
      "Recovering from surgery",
    ],
  },
  {
    id: "SLP",
    name: "Speech and Language Therapy",
    facilitator: "Speech-Language Pathologist",
    description:
      "Speech and language therapy helps patients regain safe, effective communication and swallowing abilities. Our speech-language pathologists assess and treat each patient's specific cognitive, communication, or swallowing needs.",
    image: "/images/rehabilitation_images/slp_image.png",
    alt: "Speech-language pathologist working through a memory exercise with a patient",
    coverage: [
      {
        title: "Cognitive and memory support",
        description:
          "Structured exercises target memory, focus, and problem-solving for patients navigating dementia, stroke recovery, or other cognitive changes.",
      },
      {
        title: "Eating and swallowing safety",
        description:
          "Your speech-language pathologist evaluates and treats swallowing difficulties to lower the risk of choking or aspiration and keep mealtimes safe.",
      },
    ],
    idealCandidates: [
      "Experiencing communication or swallowing disorders",
      "Managing dementia or cognitive decline",
      "Recovering from a stroke",
    ],
  },
];


export default function RehabilitationServices() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <Image src="/images/rehabilitation_images/rehab_hero.png" alt="A patient progressing with physical therapy" fill priority className="object-cover"/>
        <div className="absolute inset-0 bg-black/70"/>
        <div className="relative z-10 max-w-3xl mx-auto px-4 pt-8 sm:pt-8 md:pt-16 lg:pt-24 pb-8 sm:pb-8 md:pb-16 lg:pb-24 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-bold underline text-secondary">
        Rehabilitation Services
          </h1>
          <div className="flex flex-col">
            <p className="text-lg sm:text-xl text-left mt-6 text-secondary self-center">Personalized Therapy That Helps You Recover and Reclaim Everyday Life</p>
          </div>
            <p className="text-lg sm:text-xl mt-6 text-secondary text-left">Home-based rehabilitation means working one-on-one with a licensed therapist who comes to you and tailors treatment to your home environment, with the goal of rebuilding your ability to safely manage everyday tasks.</p>
        </div>
      </div>

      <section id="why-home-based" className="max-w-5xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-8">
          Why Home-Based Rehabilitation?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyHomeBased.map((reason) => (
            <div
              key={reason.title}
              className="border border-color-primary border-4 rounded-2xl p-6 text-primary"
            >
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="max-w-5xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-8">
            {service.name}
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            <div className="flex-1 text-primary">
              <p className="mb-4 text-sm">{service.description}</p>
              <p className="mb-4">
                <span className="font-bold">Facilitated by:</span> {service.facilitator}
              </p>

              <h3 className="text-xl font-bold mb-2">What it covers</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-sm ">
                {service.coverage.map((item) => (
                  <li key={item.title}>
                    <span className="font-bold">{item.title}:</span> {item.description}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-2">Ideal candidates</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {service.idealCandidates.map((candidate) => (
                  <li key={candidate}>{candidate}</li>
                ))}
              </ul>
            </div>

            <div className="relative w-full h-64 sm:h-80 lg:h-96 lg:w-1/2 lg:flex-none rounded-2xl overflow-hidden self-center">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      ))}

      <section className="max-w-3xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-4">
        Ready to Talk Through Your Recovery Plan?
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
}
