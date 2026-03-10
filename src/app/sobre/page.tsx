import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/container";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sobre | ${BUSINESS.name}`,
  description: `Conheça a história de ${BUSINESS.name}, adestrador de cães com atendimento em ${BUSINESS.regionShort}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-background">
        <Container>
          <div className="grid items-center gap-12 py-14 md:grid-cols-2 md:py-20">
            <div>
              <p className="inline-flex items-center rounded-full bg-gray-soft px-3 py-1 text-xs font-semibold text-foreground">
                Sobre {BUSINESS.name}
              </p>

              <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Experiência construída na prática, com respeito ao cão e foco em resultado.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
                O trabalho de adestramento vai muito além de ensinar comandos.
                Ele envolve leitura de comportamento, consistência e uma condução
                clara para melhorar a convivência entre o cão e a família.
              </p>

              <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
                Em {BUSINESS.name}, o atendimento é voltado para casos reais do
                dia a dia, com foco em obediência, comportamento e equilíbrio,
                sempre com orientação prática e aplicável à rotina.
              </p>
            </div>

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

              <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-primary/10 md:block" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-soft">
        <Container>
          <div className="py-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-semibold tracking-tight">
                Uma relação antiga com cães
              </h2>

              <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
                A vivência com cães começou cedo. Desde bem jovem, Flávio já tinha
                contato prático com o comportamento animal e colocava cachorro para
                ajudar a pastorar, desenvolvendo sensibilidade para condução,
                comando e resposta do cão em contexto real.
              </p>

              <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
                Essa experiência prática ao longo dos anos contribuiu para uma
                visão mais concreta do adestramento: menos teoria solta e mais
                entendimento do animal, da rotina e da construção de comportamento
                com clareza e consistência.
              </p>

              <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
                Hoje, esse trabalho se traduz em um atendimento voltado para tutores
                que querem melhorar a convivência com o cão de forma séria,
                equilibrada e funcional.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container>
          <div className="grid gap-5 py-14 md:grid-cols-3 md:py-20">
            <div className="rounded-3xl border border-black/5 bg-gray-soft p-6">
              <h3 className="font-heading text-xl font-semibold">Vivência prática</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                Experiência construída no contato real com cães e na observação do
                comportamento em situações concretas.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-gray-soft p-6">
              <h3 className="font-heading text-xl font-semibold">Método claro</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                Atendimento com direcionamento objetivo, sem complicação desnecessária
                e com foco no que funciona na prática.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-gray-soft p-6">
              <h3 className="font-heading text-xl font-semibold">Rotina real</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                O objetivo é que o comportamento melhore na casa, no passeio e na
                convivência do dia a dia, não só durante o treino.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary">
        <Container>
          <div className="py-14 text-center md:py-16">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">
              Quer entender como esse trabalho pode ajudar no seu caso?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              O atendimento é focado em {BUSINESS.regionShort}. Chame no WhatsApp,
              explique o comportamento do seu cão e receba um direcionamento inicial.
            </p>

            <a
              href={BUSINESS.whatsappLink}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}