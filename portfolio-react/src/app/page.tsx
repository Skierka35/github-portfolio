import NightSky from './components/nightSky';
import Introduce from './components/introduce';


export default function MainPage() {
  return (
    <main className="relative w-full h-screen flex justify-center">
      <NightSky />
      <h1 className="absolute py-10 text-white text-4xl font-bold">
        Witaj na mojej stronie
      </h1>
      <Introduce/>
    </main>
  );
}