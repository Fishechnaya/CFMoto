import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  icon: string; // path under public/icons
  alt: string;
};

const FEATURES: Feature[] = [
  {
    title: "Увлекательные экскурсии",
    description: "Маршруты от лесных дорожек до полного бездорожья!",
    icon: "/icons/excursion.svg",
    alt: "Экскурсии",
  },
  {
    title: "Надежная техника",
    description: "18 квадроциклов всех японских брендов",
    icon: "/icons/atv.svg",
    alt: "Квадроцикл",
  },
  {
    title: "Экипировка бесплатно",
    description: "Необходимая экипировка выдается бесплатно",
    icon: "/icons/helmet.svg",
    alt: "Шлем",
  },
  {
    title: "Опытные инструктора",
    description: "Обеспечат полную безопасность Вашего отдыха",
    icon: "/icons/instructor.svg",
    alt: "Инструктор",
  },
];

export default function Features() {
  return (
    <section className="bg-white" aria-label="Преимущества">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="shrink-0">
                <Image src={item.icon} alt={item.alt} width={48} height={48} />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


