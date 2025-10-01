import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Контакты</h2>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: contact details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500">Город</p>
              <p className="text-base font-semibold text-slate-900">Геленджик</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Телефон</p>
              <a href="tel:+79284280062" className="text-base font-semibold text-teal-600 hover:text-teal-500">
                +7 928 428-00-62
              </a>
            </div>

            <div>
              <p className="text-sm text-slate-500">E-mail</p>
              <a href="mailto:experience@groupgrand.ru" className="text-base font-semibold text-teal-600 hover:text-teal-500">
                experience@groupgrand.ru
              </a>
            </div>

            <div>
              <p className="text-sm text-slate-500">График работы</p>
              <div className="text-base font-semibold text-slate-900">
                <p>Пн - Пт: 9:00 - 18:00</p>
                <p>Сб: 9:00 - 17:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-500">Написать нам</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="#" className="font-semibold text-slate-900 underline underline-offset-4 hover:text-teal-600">
                  WhatsApp
                </Link>
                <Link href="#" className="font-semibold text-slate-900 underline underline-offset-4 hover:text-teal-600">
                  Telegram
                </Link>
                <Link href="#" className="font-semibold text-slate-900 underline underline-offset-4 hover:text-teal-600">
                  VK
                </Link>
              </div>
            </div>
          </div>

          {/* Right: interactive map (iframe) */}
          <div>
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm" style={{height: "420px"}}>
              <iframe
                title="Карта — Геленджик"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6413.427650234269!2d38.076574!3d44.563537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f19d9f2c9a3c5f%3A0x7f3a2d0b8a1b7252!2z0JPRg9C70YzQvdCw0Y8sINCQ0YDQvtGB0LrQstCw0Y8!5e0!3m2!1sru!2sru!4v1713878400000!5m2!1sru!2sru"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{border: 0}}
              />
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            <Link href="#routes" className="hover:text-slate-900">Маршруты</Link>
            <Link href="#gallery" className="hover:text-slate-900">Галерея</Link>
            <Link href="#faq" className="hover:text-slate-900">Вопрос-ответ</Link>
            <Link href="#contacts" className="hover:text-slate-900">Контакты</Link>
            <Link href="#services" className="hover:text-slate-900">Услуги</Link>
            <Link href="#offers" className="hover:text-slate-900">Спецпредложения</Link>
          </nav>
          <p className="text-xs text-slate-500">© CFMOTO Experience Kuban</p>
        </div>
      </div>
    </footer>
  );
}



