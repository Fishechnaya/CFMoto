import Image from "next/image";

type Term = {
  text: string;
};

const TERMS: Term[] = [
  { text: "При прокате или аренде строго соблюдать правила техники безопасности и все требования инструктора!" },
  { text: "К управлению НЕ ДОПУСКАЮТСЯ лица младше 16 лет и лица в алкогольном опьянении!" },
  { text: "Распиать спиртные напитки во время проката, аренды ЗАПРЕЩЕНО! (После? На ваше усмотрение)" },
  { text: "Управление осуществляйте в меру своих сил и возможностей. Не переоценивайте себя! Это опасно!!!" },
  { text: "Перед каждым катанием опытный инструктор научит Вас основам управления и будет сопровождать на протяжении всего маршрута." },
  { text: "При прокате или аренде строго соблюдать правила техники безопасности и все требования инструктора!" },
];

export default function Terms() {
  return (
    <section className="relative w-full py-12" aria-label="Условия предоставления услуг">
      <div className="absolute inset-0">
        <Image src="/images/BG3.png" alt="Фон гор" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#F4F4F4]/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 md:text-4xl">Условия предоставления услуг</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {TERMS.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <div className="flex items-start gap-3">
                <Image src="/icons/иконка.svg" alt="галочка" width={28} height={28} />
                <p className="text-sm text-slate-800">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


