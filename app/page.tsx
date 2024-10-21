import ContactForm from "./contact-form";
import ContactUsText from "./contact-us-text";

export default function Home() {
  return (
    <main className="w-full h-screen bg-black flex justify-center items-center flex-col">
      <ContactUsText />
      <br />
      <ContactForm />      
    </main >
  );
}
