import { z } from "zod"
import { isValidEmail } from "./utils"

export type State = {
   errors?: {
      name?: string[], 
      email?: string[], 
      message?: string[]
   }
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

   console.log('here is the data: ' + contactForm.get('email'))
   if(!validatedEntries.success) {
      console.log('you are about to mess up')
      return {
         errors: validatedEntries.error.flatten().fieldErrors
      }
   }

   return {

   } as any
}