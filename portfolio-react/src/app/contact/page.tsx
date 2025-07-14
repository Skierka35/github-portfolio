import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <section className="w-full high-screen bg-gray-300p-6">
      <h1 className="text-2xl font-bold mb-4">Kontakt</h1>
      <p>Skontaktuj się ze mną: <a href="mailto:Julka.Koszczol112@gmail.com" className="text-blue-600 underline">Julia.Koszczol112@gmail.com</a></p>
      <p>Numer telefonu: +48 508 617 676</p>
      <Image 
      src="/github-logo.png" 
      width={60} 
      height={60} 
      alt="https://github.com/Skierka35"
      />
    </section>
  );
}