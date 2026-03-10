import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* NEGÓCIO */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-primary">
              {BUSINESS.name}
            </h3>

            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
              Adestramento de cães com foco em comportamento, obediência
              e convivência no dia a dia.
            </p>

            <p className="mt-3 text-sm text-foreground/70">
              Atendimento em {BUSINESS.regionShort}.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Navegação
            </h4>

            <nav className="mt-4 flex flex-col gap-2 text-sm text-foreground/70">
              <Link href="/" className="hover:text-foreground transition">
                Início
              </Link>

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
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground">
              Contato
            </h4>

            <div className="mt-4 flex flex-col gap-2 text-sm text-foreground/70">
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition"
              >
                WhatsApp
              </a>

              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition"
              >
                Instagram
              </a>

              <a
                href={BUSINESS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition"
              >
                YouTube
              </a>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="hover:text-foreground transition"
              >
                {BUSINESS.email}
              </a>
            </div>
          </div>
        </div>

        {/* LINHA INFERIOR */}
        <div className="mt-10 border-t border-black/10 pt-6 text-center text-xs text-foreground/60">

          <p>
            © {new Date().getFullYear()}. Todos os direitos reservados.
          </p>

          <p className="mt-2">
            Desenvolvimento do site por{" "}
            <a
              href="https://lucianomathias.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline text-lg"
            >
              Luciano Mathias
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}