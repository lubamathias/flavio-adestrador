import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* LOGO + NOME */}
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

        {/* MENU */}
        <nav className="hidden gap-6 text-sm text-foreground/80 md:flex">
          <Link href="/servicos" className="hover:text-foreground transition">
            Serviços
          </Link>
          <Link href="/resultados" className="hover:text-foreground transition">
            Resultados
          </Link>
          <Link href="/sobre" className="hover:text-foreground transition">
            Sobre
          </Link>
          <Link href="/contato" className="hover:text-foreground transition">
            Contato
          </Link>
        </nav>

        {/* CTA */}
        <a
          href={BUSINESS.whatsappLink}
          className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
