import Image from "next/image";

export default function AboutSection() {
  const imageSize = "(max-width: 640px) 70vw, (max-width: 768px) 320px, (max-width: 1024px) 380px, 440px";
  const foundationSteps = [
    {
      id: "philosophy",
      title: "Our Philosophy",
      logo: "/images/logo_images/brain_logo.png",
      alt: "Brain icon representing our philosophy",
      offset: "sm:mt-32",
      topline: (
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/70">— The Mindset</p>
      ),
      content: (
        <p className="mt-3 text-primary-dark text-sm">At VN Home Health Care, we believe every person deserves compassionate, quality care. More specifically, every person we serve deserves care that honors their dignity, independence, and voice in their own health journey. We center each plan of care around the individual and their family, recognizing that healing happens best in familiar surroundings, surrounded by the people who matter most. Above all, we approach every visit with respect and genuine compassion, treating each patient not as a case to manage, but as a person to know.</p>
      ),
    },
    {
      id: "goals",
      title: "Our Goals",
      logo: "/images/logo_images/target_logo.png",
      alt: "Target icon representing our goals",
      offset: "sm:mt-16",
      topline: (
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/70">— The Approach</p>
      ),
      content: (
        <ol className="mt-3 space-y-1 text-primary-dark list-decimal list-inside marker:font-bold marker:text-primary text-sm">
          <li><b>Personalized care planning.</b> Every plan is built around the patient&apos;s diagnosis, home, and goals.</li>
          <li><b>Clear, consistent communication.</b> Patients, families, and physicians stay informed and involved every step of the way.</li>
          <li><b>Coordinated, skilled clinical care.</b> Nurses, Therapists, and Aides work as one team for consistent care, visit to visit.</li>
          <li><b>Patient and family education.</b> Patients and caregivers learn to manage conditions and spot warning signs early.</li>
        </ol>
      ),
    },
    {
      id: "mission",
      title: "Our Mission",
      logo: "/images/logo_images/star_logo.png",
      alt: "Star icon representing our mission",
      offset: "sm:mt-0",
      topline: (
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/70">— The Result</p>
      ),
      content: (
        <p className="mt-3 text-primary-dark text-sm">Guided by evidence-based clinical practice, our mission is to help patients manage chronic conditions, maintain their health as well as their independence. Families trust us for reliable, communicative care focused on real outcomes: fewer hospital readmissions, faster recovery, and a better quality of life. VN Home Health Care will always strive to deliver skilled, Medicare-certified home health care to patients throughout Oakland County, Wayne County, and the communities in between. It&apos;s home health care you can count on, close to home.</p>
      ),
    },
  ];

  return (
    <div className="mbl-section-padding sm:sm-section-padding md:md-section-padding lg:lg-section-padding">

      <div className="flex justify-center pt-8 sm:pt-8 md:pt-16 lg:pt-24">
        <h1 className="text-5xl sm:text-6xl lg:text-[100px] font-bold underline text-primary">About Us</h1>
      </div>

      <section id="our-story" className="py-8 sm:py-8 md:py-16 lg:py-24 px-4 sm:px-2 lg:px-2 max-w-5xl mx-auto">
        <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark">Our Story</h2>
        <div className="mt-6 space-y-4 text-primary-dark ">
          <p>New Horizon Home Health Care Inc. is doing business as <b>VN Home Health Care</b></p> 
          <p>Our agency has been proudly serving patients and families since 2007.</p> 
          <p>Owned and operated by a therapy clinician with hands-on experience in hospitals, nursing homes, and community health settings, a background that shapes everything about how we care for our patients today.</p>
          <p>Every member of our staff is qualified, background-checked, trained, and competent. We offer multilingual staff to better serve our diverse community. Patients and families can count on compassionate, quality care backed by the resources needed to help them regain their independence and improve their quality of life.</p>
          <p>When needed, we also connect patients and families with a broad network of support services, including:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Area of aging and senior community resources</li>
            <li>Chronic care management team and community health workers</li>
            <li>Home-visiting physicians, podiatrists, and wound care physicians</li>
            <li>In-home labs and diagnostics</li>
            <li>In-home psychiatrist, psychologist, and mental health counselors</li>
            <li>Independent living, group home, and assisted living resources</li>
            <li>Medical equipment companies</li>
            <li>Private duty helpers and patient sitters</li>
            <li>Senior and medical transportation resources</li>
            <li>Transition to hospice and/or outpatient</li>
          </ul>
        </div>
      </section>

      <section id="our-team" className="py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark px-4 sm:px-2 lg:px-2 max-w-5xl mx-auto">Our Administrator</h2>
        <div className="mt-4 pt-8 pb-1 flex justify-center bg-primary w-full px-4">
          <div className="flex-none w-full flex flex-col items-center gap-1 py-2">
            <Image src={"/images/vidhya_jain_headshot_2026.png"} alt="Administrator" width={400} height={400} sizes={imageSize} className="max-w-full h-auto"/>
            <div className="flex flex-col items-center text-secondary text-center px-2">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">Vidhya Jain</div>
              <div className="text-sm sm:text-base md:text-lg">Administrator/Therapist</div>
              <div className="text-xs sm:text-sm md:text-base">
                <i>25+ years of experience</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy-mission" className="py-8 sm:py-8 md:py-16 lg:py-24 px-4 sm:px-2 lg:px-2 max-w-5xl mx-auto">
        <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark">The Foundation of Our Practice</h2>
        <p className="mt-4 text-xl sm:text-2xl italic text-primary-dark">Here&apos;s what guides how we care for every patient we serve.</p>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-start gap-10 sm:gap-6">
          {foundationSteps.map((step) => (
            <div key={step.id} className={`relative flex-1 min-h-[280px] sm:min-h-[320px] ${step.offset}`}>
              <div className="absolute inset-0 pointer-events-none">
                <div>
                  {step.topline}
                </div>
                <Image
                  src={step.logo}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 90vw"
                  className="object-contain opacity-30 sm:opacity-30"
                />
              </div>
              <div className="relative z-10 p-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary">{step.title}</h3>
                {step.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
