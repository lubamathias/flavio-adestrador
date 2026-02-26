import Container from "@/components/ui/container";

const services = [
  {
    title: "Obediência no dia a dia",
    desc: "Comandos essenciais e rotina prática para um cão mais equilibrado.",
  },
  {
    title: "Problemas comportamentais",
    desc: "Ansiedade, reatividade, puxar na guia, latidos e outros desafios.",
  },
  {
    title: "Filhotes",
    desc: "Socialização, mordidas, xixi no lugar certo e construção de hábitos.",
  },
  {
    title: "Socialização e passeio",
    desc: "Caminhadas guiadas e melhora do foco em ambientes com estímulos.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-soft">
      <Container>
        <div className="py-14 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Serviços
            </h2>
            <p className="mt-3 text-foreground/80">
              Treinos orientados para resolver o que mais incomoda no dia a dia —
              com clareza, consistência e acompanhamento.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-black/5 bg-background p-6 shadow-sm"
              >
                <h3 className="font-heading text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/75">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/servicos"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Ver todos os serviços
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}