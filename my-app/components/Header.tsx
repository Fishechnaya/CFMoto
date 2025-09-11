"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icons/лого.svg" alt="CFMOTO" width={56} height={56} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#routes" className="text-sm font-semibold text-white/90 hover:text-white">Маршруты</Link>
          <Link href="#gallery" className="text-sm font-semibold text-white/90 hover:text-white">Галерея</Link>
          <Link href="#faq" className="text-sm font-semibold text-white/90 hover:text-white">Вопрос-ответ</Link>
          <Link href="#contacts" className="text-sm font-semibold text-white/90 hover:text-white">Контакты</Link>
          <Link href="#booking" className="text-sm font-semibold text-teal-300 hover:text-teal-200">Забронировать</Link>
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-white">
            <Image src="/icons/phone.svg" alt="phone" width={18} height={18} />
            <a href="tel:+79283332645" className="text-sm font-semibold hover:opacity-90">+7 928 333 26 45</a>
          </div>
          <button className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur hover:bg-white/20">Перезвоните мне</button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
        >
          <Image src="/icons/burger.svg" alt="menu" width={28} height={28} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
          <div
            className={`fixed inset-0 z-40 transition-opacity duration-200 ${open ? "bg-black/60 opacity-100" : "opacity-0"}`}
            onClick={() => setOpen(false)}
          />
          <div className={`fixed right-0 top-0 z-50 h-full w-72 bg-[#0f172a] p-6 shadow-2xl transition-transform duration-200 will-change-transform ${open ? "translate-x-0" : "translate-x-full"}`} style={{paddingTop: "env(safe-area-inset-top)"}}>
            <div className="mb-8 flex items-center justify-between">
              <Image src="/icons/лого.svg" alt="CFMOTO" width={48} height={48} />
              <button
                className="rounded-md p-2 text-white/80 hover:text-white"
                aria-label="Закрыть меню"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-5">
              <Link href="#routes" className="text-base font-semibold text-white" onClick={() => setOpen(false)}>Маршруты</Link>
              <Link href="#gallery" className="text-base font-semibold text-white" onClick={() => setOpen(false)}>Галерея</Link>
              <Link href="#faq" className="text-base font-semibold text-white" onClick={() => setOpen(false)}>Вопрос-ответ</Link>
              <Link href="#contacts" className="text-base font-semibold text-white" onClick={() => setOpen(false)}>Контакты</Link>
              <Link href="#booking" className="text-base font-semibold text-teal-300" onClick={() => setOpen(false)}>Забронировать</Link>
            </nav>
            <div className="mt-8 space-y-3">
              <a href="tel:+79283332645" className="block text-sm font-semibold text-white">+7 928 333 26 45</a>
              <button className="w-full rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/20">Перезвоните мне</button>
            </div>
          </div>
      </div>
    </header>
  );
}


