import Image from "next/image";
import Link from "next/link";

export default function QuizCTA() {
  return (
    <section className="relative w-full" aria-label="Подбор маршрута">
      <div className="relative w-full h-[352px]">
        <div className="absolute inset-0">
          <Image
            src="/images/TestImage.png"
            alt="Фон квадроцикла"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h3 className="text-3xl font-extrabold text-white md:text-4xl">
            Затрудняетесь выбрать маршрут?
          </h3>
          <p className="mt-3 max-w-2xl text-white/90">
            Пройдите тест и мы поможем вам подобрать оптимальную под вас экскурсию
          </p>
          <div className="mt-6">
            <Link href="#quiz" className="rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-teal-400">
              Начать тест
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


