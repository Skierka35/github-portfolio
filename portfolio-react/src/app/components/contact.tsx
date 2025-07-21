import Image from 'next/image';

export default function ContactPage() {
  return (
    <section className="text-center text-gray-200 ">
      <p>Email: <a href="mailto:Julka.Koszczol112@gmail.com" className="text-purple-400 underline">Julia.Koszczol112@gmail.com</a></p>
      <p>Numer telefonu: +48 508 617 676 </p>
      <br></br>
      <Image
      src="/github-logo.png" 
      width={60} 
      height={60} 
      alt="https://github.com/Skierka35"
      className="mx-auto"
      />
    </section>
  );
}