import Navbar from "@/widgets/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="relative z-[-1] flex flex-col gap-4 place-items-center before:absolute before:h-[300px] before:w-full before:translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-primary after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <p className="text-3xl font-bold text-primary text-transparent bg-clip-text bg-gradient-to-t from-darkPrimary to-[#63F0F9]">
          Сервис личностного роста для выпускников и студентов
        </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      </div>
    </main>
  );
}
