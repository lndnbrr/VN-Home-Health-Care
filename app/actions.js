'use server'

import { Resend } from 'resend';

 const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm (prevstate, formData) {

  const name = formData.get('name')?.toString().trim() ?? "";
  const email = formData.get('email')?.toString().trim() ?? "";
  const phone = formData.get('phone')?.toString().trim() ?? "";
  const message = formData.get('message')?.toString().trim() ?? "";

  let errors = {}

  if (!name) {
    errors.name = "Name field is blank. Please insert a name."
  }
  
  if (!email) {
    errors.email = "Email address field is blank. Insert an email address."
  }
  else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) == false) {
    errors.email = "Invalid email address was submitted. Please enter a valid email address."
  }

  if (!phone) {
    errors.phone = "Phone number field is blank. Please insert a phone number."
  }

  if (!message) {
    errors.message = "Message field is blank. Please insert a message."
  }

  if (Object.keys(errors).length > 0) {
    return {success: false, message: "Please fix the following errors:", errors}
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `VNHHC New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    if (error) {
      console.error("Resend API returned an error:", error);
      return {
        success: false,
        message: "Sorry, something went wrong sending your message. Please try again or call us directly.",
        errors: {}
      };
    }
  } catch (err) {
    console.error("Unexpected error sending contact form email:", err);
    return {
      success: false,
      message: "Sorry, something went wrong sending your message. Please try again or call us directly.",
      errors: {}
    };
  }

  return {
    success: true, 
    message: "Thanks! We've received your message and will get back to you within 24-48 hours.", 
    errors: {}
  };
}
