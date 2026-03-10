import type { Metadata } from "next";
import Container from "@/components/ui/container";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Serviços de adestramento de cães em Alto de Pinheiros",
  description:
    "Serviços de adestramento de cães em Alto de Pinheiros, São Paulo e proximidades. Treino de obediência, comportamento, socialização e adestramento para filhotes.",
  keywords: [
    "adestrador alto de pinheiros",
    "adestramento de cães alto de pinheiros",
    "adestrador são paulo",
    "adestramento canino são paulo",
    "adestramento para filhotes",
    "comportamento canino",
    "treino de cães",
  ],
  alternates: {
    canonical: "/servicos",
  },
  openGraph: {
    title: "Serviços de adestramento de cães em Alto de Pinheiros",
    description:
      "Obediência, socialização e comportamento para cães em Alto de Pinheiros e São Paulo.",
    url: "/servicos",
    images: ["/perfil/fotoCapaIa.png"],
  },
};

const services = [
  {
    title: "Obediência no dia a dia",
    description:
      "Treino voltado para comandos e comportamentos essenciais da rotina, com foco em convivência, atenção e equilíbrio.",
    items: [
      "Comandos básicos",
      "Mais foco e resposta",
      "Melhor convivência em casa",
    ],
  },
  {
    title: "Correção de comportamentos",
    description:
      "Atendimento para casos que geram desgaste no dia a dia, sempre com análise do contexto e plano claro de evolução.",
    items: [
      "Puxar na guia",
      "Latidos excessivos",
      "Agitação e reatividade",
    ],
  },
  {
    title: "Adestramento para filhotes",
    description:
      "Orientação desde cedo para construir bons hábitos e evitar erros que costumam virar problemas no futuro.",
    items: [
      "Xixi no lugar certo",
      "Mordidas e limites",
      "Socialização inicial",
    ],
  },
  {
    title: "Passeio e socialização",
    description:
      "Trabalho voltado para melhorar o comportamento em ambientes com estímulos, tornando os passeios mais tranquilos e seguros.",
    items: [
      "Mais controle no passeio",
      "Menos tensão na rua",
      "Mais equilíbrio com estímulos",
    ],
  },
];

const audience = [
  "Cães filhotes que precisam começar da forma certa",
  "Cães adultos com dificuldade de obediência",
  "Tutores que enfrentam problemas no passeio",
  "Famílias que querem melhorar a convivência com o cão",
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-background">
        <Container>
          <div className="max-w-3xl py-14 md:py-20">
            <p className="inline-flex items-center rounded-full bg-gray-soft px-3 py-1 text-xs font-semibold text-foreground">
              Serviços de adestramento em {BUSINESS.regionShort}
            </p>

            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Serviços pensados para o que realmente importa:
              <span className="text-primary"> resultado na rotina.</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              O objetivo do trabalho é melhorar a convivência, a obediência e o
              equilíbrio do cão no dia a dia, com orientação clara e atendimento
              em {BUSINESS.regionShort}.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-gray-soft">
        <Container>
          <div className="py-14 md:py-20">
            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-3xl border border-black/5 bg-background p-7 shadow-sm"
                >
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/75 md:text-base">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-foreground/80"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={BUSINESS.whatsappLink}
                    className="mt-7 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
                  >
                    Solicitar atendimento
                  </a>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container>
          <div className="grid gap-10 py-14 md:grid-cols-2 md:py-20">
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight">
                Para quem é esse atendimento
              </h2>
              <p className="mt-3 text-foreground/80">
                O trabalho é indicado para tutores que querem melhorar a rotina
                e construir uma convivência mais equilibrada com o cão.
              </p>

              <ul className="mt-8 space-y-3">
                {audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-gray-soft px-4 py-4 text-sm text-foreground/80"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gray-soft p-8">
              <h2 className="font-heading text-3xl font-semibold tracking-tight">
                Como o trabalho acontece
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-semibold">1. Entendimento do caso</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    Primeiro, o foco é entender o comportamento, a rotina e os
                    contextos em que o problema aparece.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold">2. Direcionamento claro</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    A partir disso, é definido um caminho objetivo para atacar o
                    que mais impacta a convivência.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold">3. Evolução prática</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    O foco não é um treino bonito só na sessão, mas resultado que
                    funcione na vida real.
                  </p>
                </div>
              </div>

              <a
                href={BUSINESS.whatsappLink}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary">
        <Container>
          <div className="py-14 text-center md:py-16">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">
              Quer entender qual serviço faz mais sentido para o seu caso?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Chame no WhatsApp, explique o comportamento do seu cão e informe
              sua região. O atendimento é focado em {BUSINESS.regionShort}.
            </p>

            <a
              href={BUSINESS.whatsappLink}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
            >
              Solicitar atendimento
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}