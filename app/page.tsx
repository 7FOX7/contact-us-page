import Image from "next/image";
import ContactForm from "./contact-form";

export default function Home() {
  return (
    <main className="w-full h-screen bg-red-500 flex justify-center items-center">
      <ContactForm />      
    </main >
  );
}
