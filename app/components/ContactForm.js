'use client'

// useActionState handles form action attributes, response management, and submission verification simultaneously
// useState handles state of user input
// useEffect handles change of state for useState
import { useActionState, useState, useEffect } from "react"

// Server action that validates and processes the submitted form
import { submitContactForm } from "../actions"

// Object representation of form input request structure (currrently initial state)
let initReqState = { message: "", success: null, errors: {} };

// Object representation of user input state (currrently initial state)
let initInputState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  // Declaring useActionState. Utilizing the current state, form action trigger, and loading indicators
  const [state, formAction, isPending] = useActionState(submitContactForm, initReqState);

  // Stores state of user input
  const [vals, setVals] = useState(initInputState);

  // Monitors the current state of the success/unsuccess response
  const [prevSuccess, setPrevSuccess] = useState(state.success)

  // Function that preserves previous state of form input upon unsuccessful submission
  function handleChange (e) {
    setVals((prev) => (
      {...prev, [e.target.name]: e.target.value}
    ));
  };

  // If conditions that checks state.success boolean. If null, do nothing. If false, change prevSuccess to false and continue (if applicable). If true, change prevSuccess to true (if applicable), and run next condition, setting values back to empty strings.
  if (state.success !== prevSuccess) {
    setPrevSuccess(state.success);
    if (state.success) {
      setVals(
        {name: "", email: "", phone: "", message: ""}
      )
    }
  };

  return (
    // section container for navbar routing 
    <section id="contact">
       <h2 className="flex justify-center font-bold underline text-primary text-[5vw]">Contact Form</h2>
       <div className="border p-5 m-2">

        {/* form with action that grabs named inputs and updates the state of submitContactForm */}
        <form action={formAction} className="flex flex-col">
          <label>Name</label>
          <input className="text-[12px] sm:text-[20px] md:text-[25px] lg:text-[35px] w-[60%] sm:w-[50%]" name="name" id="name" value={vals.name} onChange={handleChange} type="text"/>

          <label>Email Address</label>
          <input className="text-[12px] sm:text-[20px] md:text-[25px] lg:text-[35px] w-[60%] sm:w-[50%]" name="email" id="email" value={vals.email} onChange={handleChange} type="email"/>

          <label>Phone Number</label>
          <input className="text-[12px] sm:text-[20px] md:text-[25px] lg:text-[35px] w-[50%] sm:w-[40%]" name="phone" id="phone" value={vals.phone} onChange={handleChange} type="tel"/>

          <label>Message</label>
          <textarea className="text-[12px] sm:text[20px] md:text-[25px] lg:text-[35px] lg:leading-[1] h-[200px]" name="message" id="message" value={vals.message} onChange={handleChange} type="text"/>

          {/* Submission button for form. Toggle phrase display during submission process */}
          <button className="pt-4" type="submit" disabled={isPending}>
            {isPending ? "Processing Request..." : "Send"}
          </button>

          {/* If message response exists, provide the current state's message response */}
          <div>
            {state?.message  && (
              <p>{state.message}</p>
            )}
          </div>

          {/* If any errors exist, display the error for that input */}
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
