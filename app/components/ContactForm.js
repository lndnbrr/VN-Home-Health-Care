'use client'

import { useActionState, useState } from "react"
import { submitContactForm } from "../actions"

let initReqState = { message: "", success: null, errors: {} };
let initInputState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {

  const [state, formAction, isPending] = useActionState(submitContactForm, initReqState);
  const [vals, setVals] = useState(initInputState);
  const [prevSuccess, setPrevSuccess] = useState(state.success)

  function handleChange (e) {
    setVals((prev) => (
      {...prev, [e.target.name]: e.target.value}
    ));
  };

  if (state.success !== prevSuccess) {
    setPrevSuccess(state.success);
    if (state.success) {
      setVals(
        {name: "", email: "", phone: "", message: ""}
      )
    }
  };

  return (
    <section id="contact" className="mbl-section-padding sm:sm-section-padding md:md-section-padding lg:lg-section-padding pr-2 pl-2">
       <h2 className="flex justify-center font-bold underline text-primary text-[5vw]">Contact Form</h2>
       <div className="w-[75%] mx-auto border-2 border-primary rounded-2xl p-5">
        <form action={formAction} className="flex flex-col">
          <label className="font-bold text-primary mt-2">Name</label>
          <input className="w-[40%] text-sm sm:text-base md:text-lg border border-primary-dark rounded-md px-3 py-2" name="name" id="name" value={vals.name} onChange={handleChange} type="text"/>

          <label className="font-bold text-primary mt-2">Email Address</label>
          <input className="w-[40%] text-sm sm:text-base md:text-lg border border-primary-dark rounded-md px-3 py-2" name="email" id="email" value={vals.email} onChange={handleChange} type="email"/>

          <label className="font-bold text-primary mt-2">Phone Number</label>
          <input className="w-[30%] text-sm sm:text-base md:text-lg border border-primary-dark rounded-md px-3 py-2" name="phone" id="phone" value={vals.phone} onChange={handleChange} type="tel"/>

          <label className="font-bold text-primary mt-2">Message</label>
          <textarea className="w-full text-sm sm:text-base md:text-lg border border-primary-dark rounded-md px-3 py-2 h-[200px]" name="message" id="message" value={vals.message} onChange={handleChange} type="text"/>

          <p className="text-sm text-primary pt-4 pl-1">
            We speak English, Spanish, Arabic, Filipino, Russian, Hindi, Gujarati, Marwadi, and Tamil.
          </p>

          <button className="w-[80%] sm:w-auto self-center mt-4 px-6 py-2 bg-primary text-white rounded-md disabled:opacity-50" type="submit" disabled={isPending}>
            {isPending ? "Processing Request..." : "Send"}
          </button>

          <div>
            {state?.message  && (
              <p>{state.message}</p>
            )}
          </div>

          <div>
            {state?.errors?.name && <p style={{color:"red"}}>&#10008; {state.errors.name}</p>}
            {state?.errors?.email && <p style={{color:"red"}}>&#10008; {state.errors.email}</p>}
            {state?.errors?.phone && <p style={{color:"red"}}>&#10008; {state.errors.phone}</p>}
            {state?.errors?.message && <p style={{color:"red"}}>&#10008; {state.errors.message}</p>}
          </div>
        </form>
       </div>
    </section>
  );
};
