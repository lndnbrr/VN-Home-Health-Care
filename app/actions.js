'use server'

export async function submitContactForm (prevstate, formData) {
  // retrieval of form input. input is set to an empty string if not filled
  const name = formData.get('name')?.toString().trim() ?? "";
  const email = formData.get('email')?.toString().trim() ?? "";
  const phone = formData.get('phone')?.toString().trim() ?? "";
  const message = formData.get('message')?.toString().trim() ?? "";

  // caught errors object
  let errors = {}

  // condition for blank name error catching 
  if (!name) {
    errors.name = "Name field is blank. Please insert a name."
  }
  
  // condition for blank email error catching 
  if (!email) {
    errors.email = "Email address field is blank. Insert an email address."
  }
  // condition for invalid email format error catching 
  else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) == false) {
    errors.email = "Invalid email address was submitted. Please enter a valid email address."
  }

  // condition for blank phone number error catching
  if (!phone) {
    errors.phone = "Phone number field is blank. Please insert a phone number."
  }

  // condition for blank message error catching
  if (!message) {
    errors.message = "Message field is blank. Please insert a message."
  }

  // condition for errors object length. returns errors to be fixed and flags success as false
  if (Object.keys(errors).length > 0) {
    // console.log("Failed contact form submission. Following errors shown:", errors)
    return {success: false, message: "Please fix the following errors:", errors}
  }
  // console.log message of form inputs if prior condition is not true
  else {
    console.log("New contact form submission:", {name, email, phone, message})
  }

  // returns confirmation message and flags success as true
  return {
    success: true, 
    message: "Thanks! We've received your message and will get back to you within 24-48 hours.", 
    errors: {}
  };
}
