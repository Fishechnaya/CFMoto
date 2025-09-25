"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/route-1.jpg",
  "/images/route-2.jpg",
  "/images/route-3.jpg",
];

export default function Routes() {
  const trackRef1 = useRef<HTMLDivElement | null>(null);
  const trackRef2 = useRef<HTMLDivElement | null>(null);
  const trackRef3 = useRef<HTMLDivElement | null>(null);
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(0);
  const [active3, setActive3] = useState(0);

  const total = useMemo(() => IMAGES.length, []);

  useEffect(() => {
    const el1 = trackRef1.current;
    const el2 = trackRef2.current;
    const el3 = trackRef3.current;
    
    const onScroll1 = () => {
      if (!el1) return;
      const index = Math.round(el1.scrollLeft / el1.clientWidth);
      setActive1(Math.min(Math.max(index, 0), total - 1));
    };
    
    const onScroll2 = () => {
      if (!el2) return;
      const index = Math.round(el2.scrollLeft / el2.clientWidth);
      setActive2(Math.min(Math.max(index, 0), total - 1));
    };

    const onScroll3 = () => {
      if (!el3) return;
      const index = Math.round(el3.scrollLeft / el3.clientWidth);
      setActive3(Math.min(Math.max(index, 0), total - 1));
    };

    if (el1) {
      el1.addEventListener("scroll", onScroll1, { passive: true });
    }
    if (el2) {
      el2.addEventListener("scroll", onScroll2, { passive: true });
    }
    if (el3) {
      el3.addEventListener("scroll", onScroll3, { passive: true });
    }

    return () => {
      if (el1) el1.removeEventListener("scroll", onScroll1 as EventListener);
      if (el2) el2.removeEventListener("scroll", onScroll2 as EventListener);
      if (el3) el3.removeEventListener("scroll", onScroll3 as EventListener);
    };
  }, [total]);

  const goTo1 = (index: number) => {
    const el = trackRef1.current;
    if (!el) return;
    const clamped = Math.min(Math.max(index, 0), total - 1);
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  const goTo2 = (index: number) => {
    const el = trackRef2.current;
    if (!el) return;
    const clamped = Math.min(Math.max(index, 0), total - 1);
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  const goTo3 = (index: number) => {
    const el = trackRef3.current;
    if (!el) return;
    const clamped = Math.min(Math.max(index, 0), total - 1);
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="routes" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Наши маршруты
        </h2>
        <div className="space-y-12">
          {/* First route - БАЗОВЫЙ */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {/* Left info block */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-teal-600 font-extrabold">БАЗОВЫЙ</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-extrabold text-slate-900">от 4000 ₽</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />Время в пути: 1,5 - 2 часа</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />Расстояние: 20 - 25 км</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />Сложность: 5/10</li>
              </ul>
              <div className="mt-6 text-sm text-slate-600">
                <p className="font-semibold text-slate-800 mb-1">Маршрут</p>
                <p>Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - Шашлыки - Цигельский водопад - Форсаж</p>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50">Подробнее</button>
                <button className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-400">Забронировать</button>
              </div>
            </div>

            {/* Right slider */}
            <div className="w-full">
              <div
                ref={trackRef1}
                className="relative aspect-[16/10] w-full overflow-x-auto overflow-y-hidden rounded-2xl border border-slate-200 shadow-sm snap-x snap-mandatory scroll-smooth scrollbar-none"
              >
                <div className="flex h-full w-full">
                  {IMAGES.map((src, i) => (
                    <div key={i} className="relative h-full w-full shrink-0 snap-start">
                      <Image src={src} alt={`Маршрут ${i + 1}`} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Слайд ${i + 1}`}
                    onClick={() => goTo1(i)}
                    className={`h-2 rounded-full transition-all ${active1 === i ? "w-6 bg-teal-500" : "w-2 bg-slate-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Second route - РАСШИРЕННЫЙ */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {/* Left slider */}
            <div className="w-full">
              <div
                ref={trackRef2}
                className="relative aspect-[16/10] w-full overflow-x-auto overflow-y-hidden rounded-2xl border border-slate-200 shadow-sm snap-x snap-mandatory scroll-smooth scrollbar-none"
              >
                <div className="flex h-full w-full">
                  {IMAGES.map((src, i) => (
                    <div key={i} className="relative h-full w-full shrink-0 snap-start">
                      <Image src={src} alt={`Маршрут ${i + 1}`} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Слайд ${i + 1}`}
                    onClick={() => goTo2(i)}
                    className={`h-2 rounded-full transition-all ${active2 === i ? "w-6 bg-teal-500" : "w-2 bg-slate-300"}`}
                  />
                ))}
              </div>
            </div>

            {/* Right info block */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-teal-600 font-extrabold">РАСШИРЕННЫЙ</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-extrabold text-slate-900">от 16000 ₽</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />Время в пути: 6 - 8 часов</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />Расстояние: 60 - 70 км</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />Сложность: 5***</li>
              </ul>
              <div className="mt-6 text-sm text-slate-600">
                <p className="font-semibold text-slate-800 mb-1">Маршрут</p>
                <p>Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) - Форсаж</p>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="rounded-lg border border-teal-500 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-teal-50">Подробнее</button>
                <button className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-400">Забронировать</button>
              </div>
            </div>
          </div>

          {/* Third route - EXPERIENCE */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {/* Left info block */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-teal-600 font-extrabold">EXPERIENCE</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-extrabold text-slate-900">от 7000 ₽</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />Время в пути: 4 часа</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />Расстояние: 40 - 50 км</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />Сложность: 5***</li>
              </ul>
              <div className="mt-6 text-sm text-slate-600">
                <p className="font-semibold text-slate-800 mb-1">Маршрут</p>
                <p>Форсаж - Голубая бухта - Заброшенная Тур База - Сухогруз Рио - Форсаж</p>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="rounded-lg border border-teal-500 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-teal-50">Подробнее</button>
                <button className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-400">Забронировать</button>
              </div>
            </div>

            {/* Right slider */}
            <div className="w-full">
              <div
                ref={trackRef3}
                className="relative aspect-[16/10] w-full overflow-x-auto overflow-y-hidden rounded-2xl border border-slate-200 shadow-sm snap-x snap-mandatory scroll-smooth scrollbar-none"
              >
                <div className="flex h-full w-full">
                  {IMAGES.map((src, i) => (
                    <div key={i} className="relative h-full w-full shrink-0 snap-start">
                      <Image src={src} alt={`Маршрут ${i + 1}`} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Слайд ${i + 1}`}
                    onClick={() => goTo3(i)}
                    className={`h-2 rounded-full transition-all ${active3 === i ? "w-6 bg-teal-500" : "w-2 bg-slate-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


