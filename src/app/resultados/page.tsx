import type { Metadata } from "next";
import Container from "@/components/ui/container";
import ResultsVideos from "@/components/sections/results-videos";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resultados de adestramento de cães",
  description:
    "Veja vídeos e exemplos de resultados de adestramento de cães em São Paulo. Treinos reais mostrando evolução de comportamento.",
  keywords: [
    "resultados de adestramento",
    "treino de cães são paulo",
    "adestramento comportamento canino",
    "adestrador alto de pinheiros",
  ],
  alternates: {
    canonical: "/resultados",
  },
  openGraph: {
    title: "Resultados de adestramento de cães",
    description:
      "Vídeos e exemplos de treinos e evolução de comportamento em cães.",
    url: "/resultados",
    images: ["/perfil/fotoCapaIa.png"],
  },
};

const highlights = [
  {
    title: "Mais controle no dia a dia",
    description:
      "O objetivo do trabalho é melhorar a convivência real entre tutor e cão, com resposta mais clara a comandos e rotina mais equilibrada.",
  },
  {
    title: "Passeios mais tranquilos",
    description:
      "Muitos casos passam por tensão na rua, puxões na guia e dificuldade de foco. O treino busca tornar o passeio mais seguro e funcional.",
  },
  {
    title: "Melhora de comportamento",
    description:
      "Latidos excessivos, agitação e dificuldade de obedecer podem ser trabalhados com direcionamento claro e constância.",
  },
];

const contentBlocks = [
  {
    title: "Conteúdo prático",
    description:
      "Os conteúdos publicados mostram treinos, rotina, condução e orientações que ajudam a entender melhor o comportamento do cão.",
  },
  {
    title: "Evolução observável",
    description:
      "O foco é gerar melhora perceptível na convivência, não apenas durante o treino, mas também na casa, no passeio e no dia a dia.",
  },
  {
    title: "Trabalho aplicado à realidade",
    description:
      "Cada caso é observado dentro do contexto real do tutor, considerando rotina, ambiente e dificuldades específicas.",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-background">
        <Container>
          <div className="max-w-3xl py-14 md:py-20">
            <p className="inline-flex items-center rounded-full bg-gray-soft px-3 py-1 text-xs font-semibold text-foreground">
              Resultados e conteúdo
            </p>

            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Resultados que buscam funcionar
              <span className="text-primary"> na rotina real.</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              O trabalho é voltado para melhorar a convivência entre tutor e cão
              de forma prática, clara e consistente. Aqui você encontra exemplos
              de treinos, conteúdos e registros do trabalho no dia a dia.
            </p>
          </div>
        </Container>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-gray-soft">
        <Container>
          <div className="py-14 md:py-20">
            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-black/5 bg-background p-7 shadow-sm"
                >
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/75 md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* VIDEOS */}
      <ResultsVideos />

      {/* CONTENT BLOCKS */}
      <section className="bg-gray-soft">
        <Container>
          <div className="py-14 md:py-20">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl font-semibold tracking-tight">
                O que esse trabalho busca entregar
              </h2>
              <p className="mt-3 text-foreground/80">
                Mais do que comandos soltos, a proposta é construir um
                comportamento melhor aplicado à vida real do tutor.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {contentBlocks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-black/5 bg-background p-7"
                >
                  <h3 className="font-heading text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75 md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SOCIAL LINKS */}
      <section className="bg-background">
        <Container>
          <div className="grid gap-6 py-14 md:grid-cols-2 md:py-20">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-black/5 bg-gray-soft p-8 transition hover:border-primary/20"
            >
              <p className="text-sm text-foreground/70">Instagram</p>

              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight">
                Acompanhe treinos e conteúdos
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-foreground/75 md:text-base">
                No Instagram você encontra vídeos curtos mostrando condução,
                comportamento e situações reais do dia a dia com cães.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-primary">
                Ver Instagram
              </span>
            </a>

            <a
              href={BUSINESS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-black/5 bg-gray-soft p-8 transition hover:border-primary/20"
            >
              <p className="text-sm text-foreground/70">YouTube</p>

              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight">
                Conteúdos em vídeo
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-foreground/75 md:text-base">
                O canal reúne vídeos que ajudam a visualizar melhor a condução,
                o treino e a proposta do trabalho com cães em diferentes
                contextos.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-primary">
                Ver YouTube
              </span>
            </a>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <Container>
          <div className="py-14 text-center md:py-16">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">
              Quer aplicar isso no seu caso?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              O atendimento é focado em {BUSINESS.regionShort}. Chame no
              WhatsApp e explique o comportamento do seu cão para receber um
              direcionamento inicial.
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