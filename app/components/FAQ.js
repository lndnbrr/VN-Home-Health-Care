'use client'

import Link from "next/link";
import { useState } from "react";

export default function FAQ() {
  const [activeDrop, setActiveDrop] = useState(null)

    function handleToggle (id) {
      setActiveDrop(activeDrop === id ? null : id);
    };

  const faqs = [
    {id: 0, question: "What is home health care?", answer: <p className="text-primary pl-2">Home health care is a wide range of health care services that you can receive in your home for an illness or injury. The goal of home health care is to treat an illness or injury, help you get better, regain your independence, and become as self-sufficient as possible.</p>},
    {id: 2, question: "What's the difference between home health care and home care?", answer: <div>
      <p className="text-primary pl-2">These terms are often used interchangeably, but they&apos;re different services. Home health care is skilled, physician-ordered medical care, like nursing, physical therapy, or wound care, provided by licensed clinicians and typically covered by Medicare and insurance.</p> 
      <p className="text-primary pl-2">Home care, sometimes called private duty care, is non-medical help with daily activities. Activities such as bathing, meal prep, and companionship fall under home care, which is usually private pay. We provide home health care, and we&apos;re happy to point you toward trusted partners if non-medical support is what you need.</p>
    </div>},
    {id: 3, question: "How do I qualify for skilled home health care services?", answer: 
    <div>
      <p className="text-primary pl-2">To qualify for home health care services, a patient must fall under one of the following conditions:</p> 
      <ul className="text-primary text-sm list-disc list-inside pl-2">
        <li>Homebound (leaves home only for medical treatment or occasional outings, and requires assistance or significant effort to do so).</li>
        <li>In need of the skilled services of nursing and/or therapy.</li>
        <li>Under the care of a physician.</li>
      </ul>
    </div>},
    {id: 4, question: "Who pays for home care?", answer: <p className="text-primary pl-2">The cost of home health care is covered by Medicare and most insurance providers (in most cases, in full). Some plans have copays or deductibles, and if yours does, we&apos;ll notify you before your care begins.</p>},
    {id: 5, question: "How do I start care?", answer: <p className="text-primary pl-2">Getting started is easy. Call us at <a href="tel:+12482543582" className="font-bold">(248) 254-3582</a> or fill out our <a href="/pages/contact" className="font-bold">contact form</a>. If you&apos;re already working with a physician, we&apos;ll coordinate directly with them to secure a referral and a physician&apos;s order. From there, one of our registered nurses will schedule an in-home assessment, build a personalized plan of care, and get your services underway.</p>},
    {id: 6, question: "What should I expect at my first visit?", answer: <p className="text-primary pl-2">Your first visit is an in-home assessment with one of our registered nurses. They&apos;ll review your medical history and physician&apos;s orders, discuss your needs and goals, and begin building your personalized plan of care. This visit typically takes longer than routine visits because we&apos;re getting to know you. Afterward, your physician reviews and approves the plan, and your regular care schedule begins.</p>},
    {id: 7, question: "Can I request a provider who speaks my native language?", answer: 
      <div>
      <p className="text-primary pl-2">Of course, VN Home Health Care has professionals that speak and understand the following languages and dialects fluently:</p> 
      <ul className="text-primary text-sm list-disc list-inside pl-2">
        <li>English</li>
        <li>Spanish</li>
        <li>Arabic</li>
        <li>Filipino</li>
        <li>Russian</li>
        <li>Hindi</li>
        <li>Gujarati</li>
        <li>Marwadi</li>
        <li>Tamil</li>
      </ul>
      <p className="text-primary pl-2">If needed, an interpreter can be arranged with prior notice for patient&apos;s preferred language.</p>
    </div>},
    {id: 8, question: "What areas do you serve?", answer: 
      <div>
      <p className="text-primary pl-2">We provide care throughout Wayne County and Oakland County, Michigan, including:</p> 
      <ul className="text-primary text-sm list-disc list-inside pl-2">
        <li>Birmingham</li>
        <li>Dearborn</li>
        <li>Detroit</li>
        <li>Farmington</li>
        <li>Farmington Hills</li>
        <li>Livonia</li>
        <li>Novi</li>
        <li>Plymouth</li>
        <li>Southfield</li>
        <li>Troy</li>
      </ul>
      <p className="text-primary pl-2">And many more cities. Not sure if we cover your area? See an extended list <Link href="/#serviceArea" className="font-bold">here</Link> or call us at <a href="tel:+12482543582" className="font-bold">(248) 254-3582</a> and we&apos;ll confirm whether we serve your area.</p>
    </div>},
    {id: 9, question: "Do you accept my insurance?", answer: <p className="text-primary pl-2">We accept Medicare, Medicare Advantage, and most major insurance plans, along with auto insurance and private pay. See our <a href="/pages/insurance" className="font-bold">Insurance Page</a> for the full list of accepted plans, or call <a href="tel:+12482543582" className="font-bold">(248) 254-3582</a> and our intake team can verify your specific coverage.</p>},
  ]
  
  return(
    <>
      <section id="faq" className="mb-3 mbl-section-padding sm:sm-section-padding md:md-section-padding lg:lg-section-padding pr-2 pl-2">
        <h2 className="flex justify-center font-bold underline text-primary text-[5vw]">Frequently Asked Questions</h2>
        <div className="max-w-5xl mx-auto border-2 border-primary">
          {faqs.map((faq)=>(
            <div key={faq.id} role="button" tabIndex="0" onClick={() => handleToggle(faq.id)} className="border-1 border-primary py-1">
                {activeDrop === faq.id ? 
                <h3 className="text-primary-dark flex justify-between font-bold pl-2">
                  {faq.question}
                  <span className="text-primary-dark pr-2">&#9650;</span>
                </h3>
                : 
                <h3 className="text-primary-dark flex justify-between pl-2">
                  {faq.question}
                  <span className="text-primary-dark pr-2">&#x25BC;</span>
                </h3>}
                <div className="text-left">
                  {activeDrop === faq.id && (faq.answer)}
                </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
