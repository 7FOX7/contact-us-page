'use client'

import { useFormState } from "react-dom"
import { handleSubmit } from "./lib/actions"
import { State } from "./lib/actions"

const initialState: State = {
   errors: {}
}

export default function ContactForm() {
   
   const [state, formSubmit] = useFormState(handleSubmit, initialState) 
   return (
      <form action={formSubmit}>
            <div className="mb-8">
               <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
               <input type="text" id="name" name="name" aria-labelledby="name-error" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
               <div id="name-error" aria-atomic="true" aria-live="polite" className="fixed">
                  {state?.errors?.name?.map((error: string) => (
                     <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                  ))}
               </div>
            </div>  
            <div className="mb-8">
               <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
               <input type="text" id="email" name="email" aria-labelledby="email-error" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="sample@email.com" />
               <div id="email-error" aria-atomic="true" aria-live="polite" className="fixed">
                  {state?.errors?.email?.map((error: string) => (
                     <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                  ))}
               </div>
            </div>
            <div className="mb-12">
               <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
               <input type="text" id="message" name="message" aria-labelledby="message-error" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
               <div id="message-error" aria-atomic="true" aria-live="polite" className="fixed">
                  {state?.errors?.message?.map((error: string) => (
                     <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
                  ))}
               </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
   )
}