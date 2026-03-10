"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BUSINESS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="/logo/logoCachorroFundoTransparente.png"
              alt="Logo Flávio Adestrador"
              fill
              priority
              className="object-contain scale-300"
            />
          </div>

          <span className="font-heading text-lg font-semibold text-primary">
            {BUSINESS.name}
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-6 text-sm text-foreground/80 md:flex">
          <Link href="/servicos" className="transition hover:text-foreground">
            Serviços
          </Link>
          <Link href="/resultados" className="transition hover:text-foreground">
            Resultados
          </Link>
          <Link href="/sobre" className="transition hover:text-foreground">
            Sobre
          </Link>
          <Link href="/contato" className="transition hover:text-foreground">
            Contato
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* Instagram */}
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition hover:text-foreground"
            aria-label="Instagram"
          >
            <svg width="20" height="20" fill="currentColor">
              <path d="M14.98 0H5.02C2.25 0 0 2.25 0 5.02v9.96C0 17.75 2.25 20 5.02 20h9.96C17.75 20 20 17.75 20 14.98V5.02C20 2.25 17.75 0 14.98 0zm3.39 14.98a3.39 3.39 0 0 1-3.39 3.39H5.02a3.39 3.39 0 0 1-3.39-3.39V5.02a3.39 3.39 0 0 1 3.39-3.39h9.96a3.39 3.39 0 0 1 3.39 3.39v9.96z" />
              <path d="M10 5.38A4.62 4.62 0 1 0 10 14.62 4.62 4.62 0 0 0 10 5.38zm0 7.62A3 3 0 1 1 10 7a3 3 0 0 1 0 6z" />
              <circle cx="15.2" cy="4.8" r="1.2" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href={BUSINESS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition hover:text-foreground"
            aria-label="YouTube"
          >
            <svg width="22" height="22" fill="currentColor">
              <path d="M21.6 6.2a2.7 2.7 0 0 0-1.9-1.9C18.1 4 11 4 11 4s-7.1 0-8.7.3A2.7 2.7 0 0 0 .4 6.2 28.8 28.8 0 0 0 0 11a28.8 28.8 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C3.9 18 11 18 11 18s7.1 0 8.7-.3a2.7 2.7 0 0 0 1.9-1.9A28.8 28.8 0 0 0 22 11a28.8 28.8 0 0 0-.4-4.8zM8.8 14.3V7.7l5.8 3.3-5.8 3.3z" />
            </svg>
          </a>

          {/* WHATSAPP DESKTOP */}
          <a
            href={BUSINESS.whatsappLink}
            className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover md:inline-flex"
          >
            WhatsApp
          </a>

          {/* HAMBURGER MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center md:hidden"
            aria-label="Abrir menu"
          >
            <svg width="26" height="26" fill="none" stroke="currentColor">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 7h18M4 13h18M4 19h18"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="border-t border-black/10 bg-background md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6 text-sm">
            <Link href="/servicos" onClick={() => setOpen(false)}>
              Serviços
            </Link>

            <Link href="/resultados" onClick={() => setOpen(false)}>
              Resultados
            </Link>

            <Link href="/sobre" onClick={() => setOpen(false)}>
              Sobre
            </Link>

            <Link href="/contato" onClick={() => setOpen(false)}>
              Contato
            </Link>

            <a
              href={BUSINESS.whatsappLink}
              className="mt-4 rounded-xl bg-primary px-4 py-3 text-center font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}