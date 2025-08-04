import Image from 'next/image';

export default function ContactPage() {
  return (
    <section className="text-center text-gray-200 ">
      <p>Email:{" "} 
      <a 
        href="mailto:Julia.Koszczol112@gmail.com" 
        className="text-purple-400 hover:underline"
        >
      Julia.Koszczol112@gmail.com</a>
      </p>
      <p>Numer telefonu: +48 508 617 676 </p>
      <br></br>
      <a 
        href="https://github.com/Skierka35" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Image
          src="/github-logo.png"
          width={60}
          height={60}
          alt="GitHub logo"
          className="mx-auto cursor-pointer transition hover:scale-110"
        />
      </a>
    </section>
  );
}