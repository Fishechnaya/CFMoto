import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full" style={{minHeight: "min(90vh, 920px)"}}>
      <Image
        src="/images/фон.png"
        alt="Фон"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex h-[min(90vh,920px)] max-w-7xl flex-col justify-center px-4 md:px-6">
        <h1 className="max-w-3xl text-white font-extrabold tracking-tight leading-tight" style={{fontSize: "clamp(32px, 6vw, 72px)"}}>
          Экскурсии на
          <br />
          квадроциклах
          <br />
          в Геленджике
        </h1>
        <p className="mt-4 max-w-xl text-white/90" style={{fontSize: "clamp(14px, 2.6vw, 18px)"}}>
          приезжайте за новыми ощущениями и эмоциями!
        </p>
        <div className="mt-6 md:mt-10">
          <Link
            href="#routes"
            className="inline-flex items-center gap-3 rounded-lg bg-teal-500 px-5 py-3 text-sm md:px-6 md:py-4 md:text-base font-semibold text-white shadow-lg hover:bg-teal-400"
          >
            Подобрать маршрут
            <span className="inline-block">
              <Image src="/icons/стрелка.svg" alt="стрелка" width={20} height={20} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}


