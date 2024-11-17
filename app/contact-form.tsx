'use client'

import { useFormState } from "react-dom"
import { handleSubmit } from "./lib/actions"
import { State } from "./lib/actions"

const initialState: State = {
   errors: {}, 
   message: '', 
   disabled: false
}

export default function ContactForm() {
   
   const [state, formSubmit] = useFormState(handleSubmit, initialState) 
   return (
      <form action={formSubmit}>
         <div className="mb-8">
            <label htmlFor="name" className="block mb-2 font-medium text-emerald-400">Name</label>
            <input type="text" id="name" name="name" aria-labelledby="name-error" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" disabled={state?.disabled && true} aria-disabled={state?.disabled ? true : false} />
            <div id="name-error" aria-atomic="true" aria-live="polite" className="h-2">
               {state?.errors?.name?.map((error: string) => (
                  <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
               ))}
            </div>
         </div>  
         <div className="mb-8">
            <label htmlFor="email" className="block mb-2 font-medium text-emerald-400">Email</label>
            <input type="text" id="email" name="email" aria-labelledby="email-error" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" placeholder="sample@email.com" disabled={state?.disabled && true} aria-disabled={state?.disabled ? true : false} />
            <div id="email-error" aria-atomic="true" aria-live="polite" className="h-2">
               {state?.errors?.email?.map((error: string) => (
                  <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
               ))}
            </div>
         </div>
         <div className="mb-12">
            <label htmlFor="message" className="block mb-2 font-medium text-emerald-400">Message</label>
            <input type="text" id="message" name="message" aria-labelledby="message-error" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" disabled={state?.disabled && true} aria-disabled={state?.disabled ? true : false} />
            <div id="message-error" aria-atomic="true" aria-live="polite" className="h-2">
               {state?.errors?.message?.map((error: string) => (
                  <p key={error} className="mt-2 text-sm text-red-500">{error}</p>
               ))}
            </div>
         </div>
         <div className="mb-4">
            <p className={`mt-2 text-sm ${state.errors ? 'text-red-500' : 'text-green-500'}`}>{state?.message}</p>
         </div>
         <button type="submit" className={`w-full sm:w-auto px-5 py-2.5 text-center font-medium rounded-lg ${state?.disabled ? "bg-gray-300 cursor-default outline-none text-gray-500" : "bg-emerald-400 hover:bg-emerald-600 focus:ring-2 focus:outline-none focus:ring-emerald-300 cursor-pointer text-black"}`} disabled={state?.disabled && true} aria-disabled={state?.disabled ? true : false}>Submit</button>
      </form>
   )
}