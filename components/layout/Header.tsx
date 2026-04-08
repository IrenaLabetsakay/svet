"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "О нас" },
  { href: "/stats", label: "Статистика" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-slate-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Zap className="text-amber-400 w-7 h-7" fill="currentColor" />
            <span className="text-white font-bold text-xl tracking-tight">
              Электро<span className="text-amber-400">Свет</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone + mobile button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+70000000000"
              className="hidden sm:flex items-center gap-2 text-amber-400 font-semibold text-sm hover:text-amber-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +7 (000) 000-00-00
            </a>
            <button
              className="md:hidden text-slate-300 hover:text-white cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-amber-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+70000000000"
              className="flex items-center gap-2 text-amber-400 font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              +7 (000) 000-00-00
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
