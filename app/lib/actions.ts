"use server"

import { z } from "zod"
import { isValidEmail } from "./utils"
import { sendEmail } from "./utils"

export type State = {
   errors?: {
      name?: string[], 
      email?: string[], 
      message?: string[]
   }, 
   message?: string, 
   disabled?: boolean
}

const ContactFormSchema = z.object({
   name: z.string().min(1, "Please Enter your name"), 
   email: z.string().refine((val) => isValidEmail(val), "Email format is invalid"),
   message: z.string().min(10, "Message must contain at least 10 characters")
})

export async function handleSubmit(prevState: State, contactForm: FormData) {
   const validatedEntries = ContactFormSchema.safeParse({
      name: contactForm.get('name'), 
      email: contactForm.get('email'), 
      message: contactForm.get('message')
   })

   if(!validatedEntries.success) {
      return {
         errors: validatedEntries.error.flatten().fieldErrors, 
         message: 'Missing Fields. Failed to create a request form.'
      }
   }

   const {name, email} = validatedEntries.data; 

   await sendEmail(name.trim(), email.trim())
   return {
      message: 'You are all good! We sent you a confirmation email.', 
      disabled: true
   }
}