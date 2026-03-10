import Image from "next/image";
import Container from "@/components/ui/container";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      {/* IMAGEM DE FUNDO */}
      <div className="absolute inset-0">
        <Image
          src="/perfil/fotoCapaIa.png"
          alt="Flávio realizando adestramento de cães em Alto de Pinheiros, São Paulo"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* OVERLAY PRINCIPAL */}
      <div className="absolute inset-0 bg-black/50" />

      {/* GRADIENTE SUTIL PARA DAR MAIS LEITURA AO TEXTO */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

      <Container>
        <div className="relative z-10 flex min-h-[78vh] items-center py-16 md:min-h-[85vh] md:py-20">
          <div className="max-w-2xl text-white">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
              Atendimento em {BUSINESS.regionShort}
            </p>

            <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Adestramento de cães em {BUSINESS.region}
              <span className="text-white/80"> com método e resultados.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Obediência, comportamento e socialização para cães de todas as idades.
              Treinos claros, consistentes e orientados ao dia a dia da família.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BUSINESS.whatsappLink}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Chamar no WhatsApp
              </a>

              <a
                href="/servicos"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Ver serviços
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-white/80 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                <p className="font-heading text-base font-semibold text-white">
                  Plano claro
                </p>
                <p className="mt-1">Treino com objetivo e rotina</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                <p className="font-heading text-base font-semibold text-white">
                  Acompanhamento
                </p>
                <p className="mt-1">Evolução passo a passo</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                <p className="font-heading text-base font-semibold text-white">
                  Região
                </p>
                <p className="mt-1">{BUSINESS.regionShort}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}