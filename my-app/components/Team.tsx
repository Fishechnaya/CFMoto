import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
};

const TEAM: TeamMember[] = [
  { name: "Юлиана", role: "руководитель", imageSrc: "/images/Uliana.png", imageAlt: "Юлиана" },
  { name: "Макс", role: "старший инструктор", imageSrc: "/images/Max.png", imageAlt: "Макс" },
  { name: "Юрий", role: "старший механик", imageSrc: "/images/Yuri.png", imageAlt: "Юрий" },
  { name: "Кристина", role: "администратор", imageSrc: "/images/Kris.png", imageAlt: "Кристина" },
];

export default function Team() {
  return (
    <section className="w-full bg-white py-12" aria-label="Наша команда">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 md:text-4xl">Наша команда</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl border border-[#696969] bg-white shadow-sm">
              <div className="relative h-64 w-full">
                <Image
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex items-start gap-2 px-5 py-4">
                <div>
                  <p className="text-lg font-extrabold text-teal-700">{member.name}</p>
                  <p className="text-sm text-slate-600">{member.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


