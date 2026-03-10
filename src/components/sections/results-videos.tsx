import Container from "@/components/ui/container";

const videos = [
  {
    id: "z5nSuOzE_kA",
    title: "Treino e condução no dia a dia",
  },
  {
    id: "J64UfSB34S8",
    title: "Rotina prática de adestramento",
  },
  {
    id: "LaAX7NDKxpU",
    title: "Trabalho aplicado com o cão",
  },
];

export default function ResultsVideos() {
  return (
    <section className="bg-background">
      <Container>
        <div className="py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-gray-soft px-3 py-1 text-xs font-semibold text-foreground">
              Vídeos reais
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Treinos e condução na prática
            </h2>

            <p className="mt-3 text-base leading-relaxed text-foreground/80 md:text-lg">
              Alguns registros do trabalho no dia a dia, mostrando condução,
              rotina e comportamento em contexto real.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {videos.map((video) => (
              <article
                key={video.id}
                className="overflow-hidden rounded-3xl border border-black/5 bg-gray-soft p-3 shadow-sm"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>

                <div className="px-1 pb-2 pt-4">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    Conteúdo publicado no canal do YouTube, integrado ao site
                    como demonstração prática do trabalho.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}