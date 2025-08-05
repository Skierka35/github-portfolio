import NightSky from '../../components/nightSky'

export default function projectsPage() {
  return (
    <div className="text-white">
      <main className="py-12 px-6 text-center">
        <NightSky />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">BudgetingApp</h1>
        <p className="text-lg md:text-xl">
          Projekt aplikacji służącej do monitorowania wydatków między użytkownikami.
        </p>
      </main>   

      <section className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Link do platformy github</h2>
        <a
          href="https://github.com/S0ffen/Budgeting"
          target="_blank"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded hover:bg-purple-800 transition mb-10"
        >
          Kliknij, aby przejść
        </a>

        <h2 className="text-2xl font-semibold mb-4">Demo projektu</h2>
      
      <a
          href="https://budgeting-pi.vercel.app/"
          target="_blank"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded hover:bg-purple-800 transition mb-6"
        >
          Kliknij, aby przejść
        </a>
        </section >
      </div>
  );
}