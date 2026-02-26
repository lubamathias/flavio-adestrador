import Image from "next/image";
import Container from "@/components/ui/container";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-background">
      <Container>
        <div className="grid items-center gap-12 py-14 md:grid-cols-2 md:py-20">
          {/* TEXTO */}
          <div>
            <p className="inline-flex items-center rounded-full bg-gray-soft px-3 py-1 text-xs font-semibold text-foreground">
              Atendimento em {BUSINESS.regionShort}
            </p>

            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Adestramento de cães em {BUSINESS.region}
              <span className="text-primary"> com método e resultados.</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              Obediência, comportamento e socialização para cães de todas as idades.
              Treinos claros, consistentes e orientados ao dia a dia da família.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BUSINESS.whatsappLink}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Chamar no WhatsApp
              </a>

              <a
                href="/servicos"
                className="inline-flex items-center justify-center rounded-xl border border-primary/20 bg-transparent px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary/30"
              >
                Ver serviços
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-foreground/80 sm:grid-cols-3">
              <div>
                <p className="font-heading text-base font-semibold text-foreground">
                  Plano claro
                </p>
                <p className="mt-1">Treino com objetivo e rotina</p>
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">
                  Acompanhamento
                </p>
                <p className="mt-1">Evolução passo a passo</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-heading text-base font-semibold text-foreground">
                  Região
                </p>
                <p className="mt-1">{BUSINESS.regionShort}</p>
              </div>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gray-soft p-4 shadow-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/perfil/flavioAdestradorPerfilIa.png"
                  alt="Flávio, adestrador de cães em Alto de Pinheiros, São Paulo"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* detalhe visual moderno */}
            <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-primary/10 md:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}