'use client'

import { useState } from "react";

export default function FAQ() {
  const [activeDrop, setActiveDrop] = useState(null)

    function handleToggle (id) {
      setActiveDrop(activeDrop === id ? null : id);
    };

  const faqs = [
    {id: 0, question: "What is home care?", answer: "It is a skilled care provided by Nurses and Therapists that you receive in the privacy of your own home. It is usually needed following a hospital stay, nursing home, or your medical condition declines needing intermittent care at home"},
    {id: 1, question: "How do I qualify for skilled home health care services?", answer: "To qualify for home health care services, a patient must fall under one of the following conditions: Homebound (Only leaves home for medical treatment and an occasional family outing and requires some assistance and taxing efforts to leave their home), under the care of a Physician, or in need of the skilled services of Nursing and/or Therapy."},
    {id: 2, question: "Who pays for home care?", answer: "The cost of Home Health Care is covered by Medicare and other insurances and in most cases is covered in full. Some insurance companies have copays and deductibles that need to be met. In that case, we would notify you before the start of your care."}
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
                  {activeDrop === faq.id && (<p className="text-primary pl-2">{faq.answer}</p>)}
                </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
